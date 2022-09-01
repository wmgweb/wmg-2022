jQuery(document).ready(function() {

	// If on a datalist page, add class to body to fix styling
	if(jQuery('#entries .datalist.panel').length) {
		jQuery('body').addClass('page-datalist');
	} else {
		jQuery('body').addClass('page-frontend');
	}

	// Create video popup
	jQuery('.id7-page-footer').after('<div class="video-popup"><div class="video-popup__content"><button class="video-popup__close">Close</button><div class="video-popup__code"></div></div></div>');

	// On video element image click
	jQuery('.video-element__image').click(function() {
		// Get video code
		var code = jQuery('.video-element__code', jQuery(this).parent('.video-element')).html();

		// Set popup content to video code
		jQuery('.video-popup__code').html(code);

		// Show popup
		jQuery('.video-popup').addClass('active');
	});

	// Close popup on click and reset content
	jQuery('.video-popup__close').click(function() {
		jQuery('.video-popup__code').html();
		jQuery('.video-popup').removeClass('active');
	});


});