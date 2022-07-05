// Global vars
const userID = jQuery('#account-link a').data('usercode');
var pagePath = window.location.pathname;

// If last character of page url is not slash, add
if(pagePath.slice(pagePath.length - 1) != '/') {
	pagePath = pagePath + '/';
}

// Functions to run inside a block
function blockFunctions(blockID, optionalFunctions) {
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

	if(jQuery.inArray('blockBG', optionalFunctions) !== -1) {
		blockBG(block);
	}
}

// Shortcodes
function blockShortcodes(block) {
	let shortcodeLimit = 10; // Only allow 10 shortcodes per block
	let shortcodeCount = 1;
	let shortcodeOutput = '';
	let blockContent = jQuery('.block__content', block);
	let blockContentHTML = blockContent.html();

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
				scOutput = '<a href="' + scAttr.link + '" class="btn btn--' + scAttr.style + '">' + scAttr.text + '</a>';
				break;
			case "triangle":
				scOutput = '<span class="brand-triangle brand-triangle--' + scAttr.colour + '"><svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 19L-1.90735e-06 19L-2.46316e-07 6.83429e-07L14 19Z" fill="#EE3124"/></svg></span>';
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


// Set options classes
function blockOptionsClasses(block, blockOptions) {
	for (const [key, value] of Object.entries(blockOptions)) {
		jQuery('.block', block).addClass(key + '--' + value);

		// Add triangle SVG if class is set
		if(key == 'block-triangle') {
			jQuery('.block', block).append('<svg width="70" height="148" viewBox="0 0 70 148" fill="none" xmlns="http://www.w3.org/2000/svg" class="block-triangle theme-fill-path"><path d="M0 0L73 1.27637e-05L73 148L0 0Z" fill="#EE3124"/></svg>');
		}
	}
}

// Image pathing check and fix
function blockImageFix(block) {
	jQuery('img', block).each(function() {
		var src = jQuery(this).attr('src');
		if(!src.startsWith('/')) {
  			src = block.data('content_url') + src;
  			jQuery(this).attr('src', src);
  		}
	});
}

// Grabs the first image in a block, gets its src, creates .block__bg and attaches image to it as bg image.
function blockBG(block) {
	let blockContent = jQuery('.block__content', block);
	let blockBGImageElement = jQuery('img:first-child', blockContent);
	let blockBGImageElementURL = blockBGImageElement.attr('src');
	jQuery('.block ', block).prepend('<div class="block__bg" style="background-image: url(' + blockBGImageElementURL + ');"></div>');
	blockBGImageElement.remove();
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
  		}

  		if(!wmgBlockContentURL.endsWith('/')) {
  			wmgBlockContentURL = wmgBlockContentURL + '/';
  		}
  		$(this).data('content_url', wmgBlockContentURL);

  		// If block ID is set, load. Otherwise take first block.
  		if($block.data('content_id')) {
  			var wmgBlockContentID = parseInt($block.data('content_id'));
  		}
  		$.ajax({
  			async: false,
	        url : 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/dataentry/entries.json?page=' + wmgBlockContentURL,
	        type: 'GET',
	        dataType: 'json',
	        success: function(data) {
				var currentItem = data.items;
				var handlebarsBlockData = {
					content : data.items,
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