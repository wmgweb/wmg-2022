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
	let shortcodeLimit = 10; // Only allow 10 shortcodes per block
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
			case "youtube":
				scOutput = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + scAttr.id + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
				break;
			case "vimeo":
				scOutput = '<iframe src="https://player.vimeo.com/video/' + scAttr.id + '" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
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
		jQuery.get('https://sitebuilder.warwick.ac.uk/sitebuilder2/api/permissions.htm?page=' + contentURL + '&user=' + userID, function(data) {
		  	// If user has permissions, add edit button
		  	if(data === 'true') {
		  		jQuery('.block ', block).prepend('<a href="' + contentURL + '" class="block__edit" target="_blank">Edit</a>');
		  	}
		});
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
		if(!src.startsWith('/')) {
  			src = block.data('content_url') + src;
  			jQuery(this).attr('src', src);
  		}
	});
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

  		$.ajax({
  			async: false,
	        url : blockQueryUrl + '?page=' + wmgBlockContentURL,
	        type: 'GET',
	        dataType: 'json',
	        success: function(data) {
				var currentItem = data.items;
				var handlebarsBlockData = {
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