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

		// Get shortcode content
		let shortcode = blockContentHTML.substring(
		    blockContentHTML.lastIndexOf('[!') + 2, 
		    blockContentHTML.lastIndexOf(']')
		);

		// Get shortcode attributes and set as object
		let scAttrArray = shortcode.split(/\s+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/);
		let scAttr = {};
		scAttr.type = scAttrArray[0];

		jQuery.each(scAttrArray, function(key, value) {
			if(key > 0) {
				let attr = value.split('='); // Split by =
				let attrVal = attr[1].substring(1, attr[1].length - 1); // Remove first and last quotes
				scAttr[attr[0]] = attrVal; 
			}
		});

		scOutput = '';

		// If shortcode is button
		switch(scAttr.type) {
			case "button":
				// Add arrow if set
				var arrow = '';
				var arrowClass = '';
				if(scAttr.arrow == 'true') {
					arrow = '<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.72761 8.55602L2.46362 14.5042C2.09979 14.9153 1.51146 14.9153 1.1515 14.5042L0.276745 13.5157C-0.0870884 13.1046 -0.0870884 12.4398 0.276746 12.0331L4.00411 7.8125L0.272876 3.59632C-0.0909585 3.1852 -0.0909585 2.5204 0.272876 2.11366L1.14763 1.12084C1.51146 0.70972 2.09979 0.70972 2.45975 1.12084L7.72374 7.06898C8.09144 7.4801 8.09144 8.1449 7.72761 8.55602Z" fill="#272729"/></svg>';
					arrowClass = ' btn-arrow--' + scAttr.arrow;
				}

				// Add target attribute if set
				var target = '';
				if('target' in scAttr) {
					target = ' target="' + scAttr.target + '"';
				}

				scOutput = '<a href="' + scAttr.link + '" class="btn btn--' + scAttr.style + arrowClass + '"' + target + '>' + scAttr.text + arrow + '</a>';
				break;
			case "triangle":
				// Allow either spelling of colour to set value. Check if either exists and set class
				var color = '';
				if('color' in scAttr) {
					color = ' brand-triangle--' + scAttr.color;
				} else if('colour' in scAttr) {
					color = ' brand-triangle--' + scAttr.colour;
				}

				scOutput = '<span class="brand-triangle'+ color + '"><svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 19L-1.90735e-06 19L-2.46316e-07 6.83429e-07L14 19Z" fill="#EE3124"/></svg></span>';
				break;
			case "fa":
				if('code' in scAttr) {
					scOutput = '<i class="' + scAttr.code + '"></i>';
				}
				break;
			case "heading":
					console.log('hello!');
				if('htype' in scAttr && 'text' in scAttr) {
					console.log(scAttr);
					var subheading = '';
					if('subtext' in scAttr) {
						subheading = '<span class="brand-heading__sub ' + scAttr.substyle + '">' + scAttr.subtext + '</span>';
					}
					scOutput = '<' + scAttr.htype + ' class="brand-heading ' + scAttr.style + '">' + subheading + '<span>' + scAttr.text + '</span><' + scAttr.htype +'/>';
				}

				break;
			case "video":
				// If video set
				if('set' in scAttr && 'id' in scAttr) {
					// Set the embed code depending on which type is set
					var embed = '';
					if(scAttr.set == 'youtube') {
						embed = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + scAttr.id + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
					} else if(scAttr.set == 'vimeo') {
						embed = '<iframe src="https://player.vimeo.com/video/' + scAttr.id + '" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
					} else if(scAttr.set == 'sway') {
						embed = '<iframe width="760px" height="500px" src="https://sway.office.com/s/' + scAttr.id + '/embed" frameborder="0" marginheight="0" marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; max-width: 100%; max-height: 100vh;"></iframe>';
					}

					// Output wrapper
					scOutput = '<div class="video-element video-element--' + scAttr.display + '">';

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
	jQuery('brand-triangle', block).unwrap('p');
}


// Set options classes - this sets a class on the block element for each option set
function blockOptionsClasses(block, blockOptions) {
	for (const [key, value] of Object.entries(blockOptions)) {
		jQuery('.block', block).addClass(key + '--' + value);

		// Add triangle SVG if class is set
		if(key == 'block-triangle') {
			jQuery('.block', block).append('<svg width="70" height="148" viewBox="0 0 70 148" fill="none" xmlns="http://www.w3.org/2000/svg" class="block-triangle theme-fill-path"><path d="M0 0L73 1.27637e-05L73 148L0 0Z" fill="#EE3124"/></svg>');
		}
	}
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

	// Search for src in content
	if(content.indexOf('src="') >= 0) {
		// Get content between src=" and next "
		let image = content.split('src="')[1].split('" ')[0];

		// If image exists
		if(image != '') {
			// If image doesn't have http, set full url
			if(!image.startsWith('http')) {
				imageUrl = contentURL + '/' + image;
			}

			// Remove url parameters
			imageUrl = imageUrl.split('?')[0] 
		}							
	}

	return imageUrl;
}
	
// Function to run an AJAX query for posts/events and return the data
function postsQuery(postsURL, postsCount) {
	var postsData;

	jQuery.ajax({
			async: false,
        url : 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/rss/news.json?page=' + postsURL + '&num=' + postsCount,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
			postsData = data.items;
        }
    });
    return postsData;
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
  		var wmgBlockContentID = 0;
  		var wmgBlockContentURL = $block.data('content_url');
  		var wmgBlockOptions = $block.data('content_url');
  		var handlebarsBlock = WMG.blocks[wmgBlockID];
  		var handlebarsBlockData = {};

  		// Format content url
  		if(!wmgBlockContentURL.startsWith('/')) {
  			if(pagePath)
  			wmgBlockContentURL = pagePath + wmgBlockContentURL;
  			$block.attr('data-content_url', wmgBlockContentURL);
  		}

  		if(!wmgBlockContentURL.endsWith('/')) {
  			wmgBlockContentURL = wmgBlockContentURL + '/';
  		}
  		
  		$(this).data('content_url', wmgBlockContentURL);

  		// If block ID is set, load. Otherwise take first block.
  		if($block.data('content_id')) {
  			var wmgBlockContentID = parseInt($block.data('content_id'));
  		}

  		var blockQueryUrl = 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/dataentry/entries.json';

  		var blockQueryType = 'default';

  		if($block.data('query_type')) {
  			blockQueryType = $block.data('query_type');

  			if(blockQueryType == 'events' || blockQueryType == 'news') {
  				var blockQueryUrl = 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/rss/news.json';
  			}
  		}

  		wmgBlockContentNumber = '';
  		if($block.data('content_number')) {
  			wmgBlockContentNumber = '&num=' + $block.data('content_number');
  		}

  		$.ajax({
  			async: false,
	        url : blockQueryUrl + '?page=' + wmgBlockContentURL + wmgBlockContentNumber,
	        type: 'GET',
	        dataType: 'json',
	        success: function(data) {
				var currentItem = data.items;
				var handlebarsBlockData = {
					title : data.title,
					link : data.link,
					content : data.items,
					categories: data.categories,
					blockCount : wmgCurrentBlockCount,
					options: wmgBlockOptions
				}
				$block.html(handlebarsBlock(handlebarsBlockData));
				console.log('#block-' + wmgCurrentBlockCount + ' built as ' + wmgBlockID);
	        },
	        error: function(data) {
	        	console.log('Could not get data from ' + wmgBlockContentURL);
	        },
        });
        wmgCurrentBlockCount = wmgCurrentBlockCount + 1;
	});
 
});