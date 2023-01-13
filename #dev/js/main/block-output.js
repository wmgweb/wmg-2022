// Global vars
const userID = jQuery('#account-link a').data('usercode');
var pagePath = window.location.pathname;

// If last character of page url is not slash, add
if(pagePath.slice(pagePath.length - 1) != '/') {
	pagePath = pagePath + '/';
}

// Functions to run inside a block - this function is run at every block call
function blockFunctions(blockID) {
	let blockChild = jQuery('#block-' + blockID);
	let block = blockChild.parent('.wmg-block');

	if(block.attr('data-options')) {
		let blockOptions = block.attr('data-options');
		blockOptions = JSON.parse(blockOptions.replace(/'/g, '"'));
		blockOptionsClasses(block, blockOptions);
	}

	blockEdit(block);
	blockImageFix(block);
	blockShortcodes(block);
	blockWrappers(block);
}

// Shortcodes
function blockShortcodes(block) {
	let shortcodeLimit = 100; // Only allow 100 shortcodes per block
	let shortcodeCount = 1; // Current shortcode count
	let shortcodeOutput = ''; // Empty output variable
	let blockContent = jQuery('.block__content', block); // Get the '.block_content' element - this is the wrapper where we check for shortcodes
	let blockContentHTML = blockContent.html(); // Get all the block HTML

	// Loop through all instances of shortcode
	while(blockContentHTML.indexOf('[!') >= 0 && shortcodeCount <= shortcodeLimit) {
		var currentShortcodeStart = blockContentHTML.indexOf('[!') + 2;
		var currentShortcodeEnd = blockContentHTML.indexOf(']', currentShortcodeStart);
		// Get shortcode content
		let shortcode = blockContentHTML.substring(currentShortcodeStart, currentShortcodeEnd);

		// Get shortcode attributes and set as object
		let scAttrArray = shortcode.split(/\s+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/);
		let scAttr = {};
		scAttr.type = scAttrArray[0];

		var scOutput = '';

		try {
			jQuery.each(scAttrArray, function(key, value) {
				if(key > 0) {
					let attr = value.split('="'); // Split by =
					let attrVal = attr[1].substring(0, attr[1].length - 1); // Remove last quote
					scAttr[attr[0]] = attrVal; 
				}
			});

			// If shortcode is button
			switch(scAttr.type) {
				case "button":
					// Add arrow if set
					var arrow = '';
					var arrowClass = '';
					if(scAttr.arrow == 'true') {
						arrow = '<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.34 12.86"><polygon points="0 0 0 1.18 6 6.43 0 11.68 0 12.86 7.34 6.43 0 0"/></svg>';
						arrowClass = ' btn-arrow--' + scAttr.arrow;
					}

					// Add target attribute if set
					var target = '';
					if('target' in scAttr) {
						target = ' target="' + scAttr.target + '"';
					}
		
					if('link' in scAttr) {
						scOutput = '<a href="' + scAttr.link + '" class="btn btn--' + scAttr.style + arrowClass + '"' + target + '>' + scAttr.text + arrow + '</a>';
					}
					break;
				case "triangle":
					// Allow either spelling of colour to set value. Check if either exists and set class
					var color = '';
					if('color' in scAttr) {
						color = ' brand-triangle--' + scAttr.color;
					} else if('colour' in scAttr) {
						color = ' brand-triangle--' + scAttr.colour;
					}

					scOutput = '<span class="brand-triangle'+ color + '"><svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 19L-1.90735e-06 19L-2.46316e-07 6.83429e-07L14 19Z" fill="#E32619"/></svg></span>';
					break;
				case "fa":
					if('code' in scAttr) {
						let faCode = '<i class="' + scAttr.code + '"></i>';

						// If link is set, add it
						if('link' in scAttr) {
							faCode = '<a href="' + scAttr.link + '" target="_blank">' + faCode + '</a>';
						}
						
						scOutput = faCode;
					}
					break;
				case "heading":
					if('htype' in scAttr && 'text' in scAttr) {
						var subheading = '';
						if('subtext' in scAttr) {
							subheading = '<span class="brand-heading__sub ' + scAttr.substyle + '">' + scAttr.subtext + '</span>';
						}
						scOutput = '<' + scAttr.htype + ' class="brand-heading ' + scAttr.style + '">' + subheading + '<span>' + scAttr.text + '</span></' + scAttr.htype +'>';
					}

					break;
				case "video":
					// If video set
					if('set' in scAttr && 'id' in scAttr) {
						// Set the embed code depending on which type is set
						var embed = '';
						var embedVars = '';
						if(scAttr.set == 'youtube') {
							if('autoplay' in scAttr) {
								embedVars = '?autoplay=' + scAttr.autoplay + '&controls=0&disablekb=1&loop=1&playsinline=1&mute=1';
							}
							embed = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + scAttr.id + embedVars + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';

						} else if(scAttr.set == 'vimeo') {
							if('autoplay' in scAttr) {
								embedVars = '?autoplay=' + scAttr.autoplay + '&loop=1&autopause=0&background=1&muted=1&controls=0&portrait=0&byline=0';
							}
							embed = '<iframe src="https://player.vimeo.com/video/' + scAttr.id +  embedVars + '" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
						} else if(scAttr.set == 'sway') {
							embed = '<iframe width="760px" height="500px" src="https://sway.office.com/s/' + scAttr.id + '/embed" frameborder="0" marginheight="0" marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; max-width: 100%; max-height: 100vh;"></iframe>';
						} else if(scAttr.set == 'mp4') {
							var videoAttrs = '';
							if('autoplay' in scAttr) {
								if(scAttr.autoplay == '1') {
									videoAttrs = ' autoplay muted';
								}
							}
							embed = '<video' + videoAttrs + '><source src="' + scAttr.id + '" type="video/mp4"></video>';
						}

						// Output wrapper
						scOutput = '<div class="video-element video-element--' + scAttr.display + ' video-element--' + scAttr.set + '">';

						// If popup is set and image exists
						if(scAttr.display == 'popup' && 'image' in scAttr) {
							// Add image element
							scOutput = scOutput + '<div class="video-element__image"><?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class="theme-fill-path"><path d="M256,0C114.511,0,0,114.497,0,256c0,141.49,114.495,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0 z M348.238,284.418l-120.294,69.507c-10.148,5.864-22.661,5.874-32.826,0.009c-10.158-5.862-16.415-16.699-16.415-28.426V186.493 c0-11.728,6.258-22.564,16.415-28.426c5.076-2.93,10.741-4.395,16.406-4.395c5.67,0,11.341,1.468,16.42,4.402l120.295,69.507 c10.149,5.864,16.4,16.696,16.4,28.418C364.639,267.722,358.387,278.553,348.238,284.418z"/></svg><img src="' + scAttr.image + '" alt="' + scAttr.alt + '"></div>';
						}

						// Output embed code and close wrapper
						scOutput = scOutput + '<div class="video-element__code">' + embed + '</div></div>';

					}
					
					break;
			}
		} catch(e) {
			console.log('Error in this shortcode: [!' + shortcode + ']');
		}

		// Remove shortcode and replace
		blockContentHTML = blockContentHTML.replace('<p>[!' + shortcode + ']</p>', scOutput); // Remove surrounding <p> if any
		blockContentHTML = blockContentHTML.replace('[!' + shortcode + ']', scOutput);
		blockContent.html(blockContentHTML);
		shortcodeCount = shortcodeCount + 1;
	}		
}

// Check if edit button can be added
function blockEdit(block) {
	if(userID != '') {
		let contentURL = block.data('content_url');
		jQuery('.block', block).append('<div class="block__user"></div>');

		jQuery.get('https://sitebuilder.warwick.ac.uk/sitebuilder2/api/permissions.htm?page=' + contentURL + '&user=' + userID, function(contentPermissionData) {
		  	// If user has permissions, add edit button
		  	if(contentPermissionData === 'true') {
		  		jQuery('.block__user ', block).prepend('<a href="' + contentURL + '" class="block__edit block__content-edit" target="_blank">Edit Content</a>');
		  	}
		});

		// If posts URL is set
		if(block.data('posts_url')) {
			let postsURL = block.data('posts_url');
			jQuery.get('https://sitebuilder.warwick.ac.uk/sitebuilder2/api/permissions.htm?page=' + postsURL + '&user=' + userID, function(postsPermissionData) {
			  	// If user has permissions, add edit button
			  	if(postsPermissionData === 'true') {
			  		jQuery('.block__user ', block).prepend('<a href="' + postsURL + '" class="block__edit block__posts-edit" target="_blank">Edit Posts</a>');
			  	}
			});
		}
	}
}

// Add/remove wrappers around elements inside of a block
function blockWrappers(block) {
	// Add ".video-wrapper" around every iframe to allow for auto-sizing. Remove <p> tags.
	jQuery('iframe', block).unwrap('p').wrap('<div class="video-wrapper"></div>');

	// Remove <p> tags from all images and videos
	jQuery('img', block).unwrap('p');
	jQuery('video', block).unwrap('p');
	jQuery('.brand-triangle', block).unwrap('p');

	// Remove empty p tags
	jQuery('p', block).each(function() {
	    if(jQuery(this).html().trim().length == 0) {
	        jQuery(this).remove()
	    }
	});
}


// Set options classes - this sets a class on the block element for each option set
function blockOptionsClasses(block, blockOptions) {
	for (const [key, value] of Object.entries(blockOptions)) {
		jQuery('.block', block).addClass(key + '--' + value);

		// Add triangle SVG if class is set
		if(key == 'block-triangle') {
			jQuery('.block', block).append('<svg width="70" height="148" viewBox="0 0 70 148" fill="none" xmlns="http://www.w3.org/2000/svg" class="block-triangle theme-fill-path"><path d="M0 0L73 1.27637e-05L73 148L0 0Z" fill="#E32619"/></svg>');
		}
	}
	return true;
}

// Image pathing check and fix - checks if a relative url is set and if so adds the content url
function blockImageFix(block) {
	jQuery('img', block).each(function() {
		var src = jQuery(this).attr('src');
		// If doesnt start with '/' or 'http'
		if(!src.startsWith('/') && !src.startsWith('http')) {
			// Add content url path to image src
  			src = block.data('content_url') + src;
  			jQuery(this).attr('src', src);
  		}
	});
}

// Convert timestamp to post date
function blockPostDate(timestamp) {
	let postDateTime = new Date(timestamp);
	let formattedDate = postDateTime.toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
	return formattedDate;
}

// Get the image url from block content
function blockPostImage(content, contentURL) {
	let imageUrl = '';

	// If no slash at end of content url, add one
	if(!contentURL.endsWith('/')) {
		contentURL = contentURL + '/';
	}

	// Search for src in content
	if(content.indexOf('img src="') >= 0) {
		// Get content between src=" and next "
		imageUrl = content.split('img src="')[1].split('" ')[0];

		// If image exists
		if(imageUrl != '') {
			// If image doesn't have http, set full url
			if(!imageUrl.startsWith('/') && !imageUrl.startsWith('http')) {
				imageUrl = contentURL + imageUrl;
			}
			// Remove url parameters
			imageUrl = imageUrl.split('?')[0];
		}							
	} else {
		imageUrl = '/fac/sci/wmg-2021/global/wmg-logo.png';
	}

	return imageUrl;
}
	
// Function to run an AJAX query for posts/events and return the data
function postsQuery(postsURL, postsCount, postsTags) {
	var postsData = false;
	var postsTagsString = '';

	if(postsTags) {
		var postTagsArray = postsTags.split(',');
		var postsTagsString = '';

		jQuery.each(postTagsArray, function(key, value) {
		  	postsTagsString = postsTagsString + '&tag=' + value;
		});
	}

	jQuery.ajax({
		async: false,
        url : 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/rss/news.json?page=' + postsURL + '&num=' + postsCount + postsTagsString,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
			postsData = data.items;
        }
    });

    return postsData;
}

// Function to automatically run the postsQuery function based on data on given block. Saves a lot of repeat code in blocks.
function blockPostsQuery($block) {
	var postsData = false;

	// If block has posts url
	if($block.data('posts_url')) {
		postsURL = $block.data('posts_url');
		postsTags = '';
		postsCount = 5;

		// If block has tags
		if($block.data('posts_tags')) {
			postsTags = $block.data('posts_tags');
		}

		// If block has count
		if($block.data('posts_count')) {
			postsCount = $block.data('posts_count');
		}
		
		postsData = postsQuery(postsURL, postsCount, postsTags);
	}

	return postsData;
}

// Function to run an AJAX query for publications and return the data
function pubsQuery(count, authors, id) {
	var pubsData = false;

	jQuery.ajax({
		async: false,
        url : 'https://charlie.wmg.warwick.ac.uk/api/getPublications.php?ufid=' + id + '&authors='+ authors + '&numberofitems=' + count,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
			pubsData = data;
        }
    });

    return pubsData;

}

// Function to automatically run the pubsQuery function based on data on given block. Saves a lot of repeat code in blocks.
function blockPubsQuery($block) {
	let pubsData = false;
	let pubsCount = 5;
	let pubsAuthors = false;
	let pubsID = false;

	// If block has pubs_count
	if($block.data('pubs_count')) {
		pubsCount = $block.data('pubs_count');
	}

	// If block has pubs_authors
	if($block.data('pubs_authors')) {
		pubsAuthors = $block.data('pubs_authors').split('|');
	}

	// If block has pubs_id
	if($block.data('pubs_id')) {
		pubsID = $block.data('pubs_id');
	}

	// If ID and authors set, run query
	if(pubsID != false && pubsAuthors != false) {
		pubsData = pubsQuery(pubsCount, pubsAuthors, pubsID);
	} else { // Else output error message
		console.log('Publications API Error! No data-pubs_authors and/or data-pubs_id set on the block.')
	}

	return pubsData;
}

// Parses publication data and outputs HTML
function blockPubsArticles(pubsData, articleWrapperClass) {
	var pubsOutput = '';

	if(pubsData != false) {
		jQuery.each(pubsData, function(key, data) {
			var authors = '';

			// Loop through each author and create output in var
			if(data.rioxx2_author.length > 0) {
				authors = 'Authors: ';
				jQuery.each(data.rioxx2_author, function(key, data) {
					if(key > 0) {
						authors = authors + ' | ';
					}
					authors = authors + data.author;
				});
			}

			if(articleWrapperClass) {
				pubsOutput = pubsOutput + '<div class="' + articleWrapperClass + '">';
			}

			pubsOutput = pubsOutput + '<div class="article-post border-color--theme"><span class="article-post__date">' + data.date + '</span><h3 class="article-post__heading"><a href="' + data.uri + '">' + data.title + '</a></h3><span class="article-post__authors">' + authors + '</span></div>';
			
			if(articleWrapperClass) {
				pubsOutput = pubsOutput + '</div>';
			}
		});

		
    }

    return pubsOutput;
}

// Function to output event start/end dates
function eventDates(startTimestamp, endTimestamp) {
	// Convert to date/time
	var startDateTime = new Date(startTimestamp);
	var endDateTime = new Date(endTimestamp);

	// Get formatted dates
	var startFormattedDate = startDateTime.toLocaleString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
	var endFormattedDate = endDateTime.toLocaleString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

	var returnedDateTimeString = '';
	var startFormattedTime = '';
	var endFormattedTime = '';

	// If it is set to midnight, assumed to be all day event so don't show time
	if(startDateTime.getHours() != '0') {
		startFormattedTime = startDateTime.getHours().toLocaleString('en-GB', {minimumIntegerDigits: 2})  + ':' + startDateTime.getMinutes().toLocaleString('en-GB', {minimumIntegerDigits: 2});
	}

	if(endDateTime.getHours() != '0') {
		endFormattedTime = endDateTime.getHours().toLocaleString('en-GB', {minimumIntegerDigits: 2})  + ':' + startDateTime.getMinutes().toLocaleString('en-GB', {minimumIntegerDigits: 2});
	}
		
	// If start and end date are the same, only show once
	if(startFormattedDate == endFormattedDate) {
		returnedDateTimeString = 'Date: ' + startFormattedDate;

		// Add start time if it exists
		if(startFormattedTime != '') {
			returnedDateTimeString = returnedDateTimeString + ' <br>Start: ' + startFormattedTime;
		}

		// Add end time if it exists
		if(endFormattedTime != '') {
			returnedDateTimeString = returnedDateTimeString + ' <br>End: ' + endFormattedTime;
		}
	} else { // Else if start and end date are different

		// Add start date
		returnedDateTimeString = 'Start Date: ' + startFormattedDate;

		// Add start time if it exists
		if(startFormattedTime != '') {
			returnedDateTimeString = returnedDateTimeString + ' <br>Start Time: ' + startFormattedTime + '<br>';
		}

		// Add end date
		returnedDateTimeString = returnedDateTimeString + ' <br>End Date: ' + endFormattedDate;

		// Add end time if it exists
		if(endFormattedTime != '') {
			returnedDateTimeString = returnedDateTimeString + ' <br>End Time: ' + endFormattedTime;
		}
	}

	return returnedDateTimeString;
}
	
jQuery(document).ready(function($) {  

   	// Loop through each block on page, and load correct Handlebars block 
	var wmgCurrentBlockCount = 1;
   	
	$('.wmg-block').each(function() {
		var $block = $(this);
  		var wmgBlockID = $block.data('block_id');
  		var wmgBlockContentURL = $block.data('content_url');
  		var handlebarsBlock = WMG.blocks[wmgBlockID];
  		var handlebarsBlockData = {};

  		// If content url is set to false, output block without content
  		if(wmgBlockContentURL == false) {
  			$block.html(handlebarsBlock());
  			return false;
  		}

  		// If content url doesn't contain trailing /, add one
  		if(!wmgBlockContentURL.endsWith('/')) {
  			wmgBlockContentURL = wmgBlockContentURL + '/';
  		}
  		
  		$(this).data('content_url', wmgBlockContentURL);

  		// If block content tags are set, filter by them.
  		var wmgBlockContentTags = '';
  		if($block.data('content_tags')) {
  			blockContentTagsArray = $block.data('content_tags').split(',');

  			// Loop through each tag
  			$.each(blockContentTagsArray, function(key, value) {
  				// Add to tags parameter string
  				wmgBlockContentTags = wmgBlockContentTags + '&tag=' + value;
  			});
  		}

  		var blockQueryUrl = 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/dataentry/entries.json';

  		var blockQueryType = 'default';

  		// Check the type of query set and change the query url accordingly
  		if($block.data('query_type')) {
  			blockQueryType = $block.data('query_type');

  			// If events or news, change to news query url
  			if(blockQueryType == 'events' || blockQueryType == 'news') {
  				var blockQueryUrl = 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/rss/news.json';
  			}
  		}

  		// Set the content count to retrieve
  		var wmgBlockContentNumber = '';
  		if($block.data('content_number')) {
  			wmgBlockContentNumber = '&num=' + $block.data('content_number');
  		}

  		// Make the API call for the block data. On success, output the handlebars block with the data.
  		$.ajax({
  			async: false,
	        url : blockQueryUrl + '?page=' + wmgBlockContentURL + wmgBlockContentNumber + wmgBlockContentTags,
	        type: 'GET',
	        dataType: 'json',
	        success: function(data) {
				var currentItem = data.items;
				var handlebarsBlockData = {
					title : data.title,
					link : data.link,
					content : data.items,
					categories: data.categories,
					blockCount : wmgCurrentBlockCount
				}
				$block.html(handlebarsBlock(handlebarsBlockData));
				console.log('From block-output.js: #block-' + wmgCurrentBlockCount + ' built as ' + wmgBlockID);
	        },
	        error: function(data) {
	        	console.log('From block-output.js: Could not get data from ' + wmgBlockContentURL);
	        },
        });
        wmgCurrentBlockCount = wmgCurrentBlockCount + 1;
	});
 
});