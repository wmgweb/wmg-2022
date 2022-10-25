jQuery(document).ready(function($) {

	// If on a datalist page, add class to body to fix styling
	if($('#entries .datalist.panel').length) {
		$('body').addClass('page-datalist');
	} else {
		$('body').addClass('page-frontend');
	}

	// Footer Mobile Navigation
	function mobileFooterNav() {
		// Load only on mobile to help with desktop load speed
		if($(window).width() < 1200 && !$('#wmg-footer-nav').length) {
			// AJAX query for page data
			$.ajax({
				async: false,
		        url : 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/dataentry/entries.json?page=/fac/sci/wmg-2021/global/wmg-mobile-nav/',
		        type: 'GET',
		        dataType: 'json',
		        error: function(error) {
		        	console.log('Footer Navigation Data Error');
		        },
		        success: function(footerNavData) {
		        	mobileNavCheck = true;

					// Create new nav wrapper
		        	const footerNavCloseButton = '<button class="wmg-footer-nav__return wmg-footer-nav--close"><svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 23L21 2L41 23" stroke="white" stroke-width="2"/></svg></button>';
					$('.id7-page-footer').prepend('<nav id="wmg-footer-nav"><div class="container">' + footerNavCloseButton + '<ul></ul></div></nav>');

					// Create header hamburger  item
		        	const footerNavHeaderButton = '<button class="wmg-header__menu-button wmg-footer-nav--open"><svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.549805" width="31" height="4.65" fill="#272729"/><rect y="12.9497" width="31" height="4.65" fill="#272729"/><rect y="25.3496" width="31" height="4.65" fill="#272729"/></svg></button>';
					$('.id7-masthead-contents .clearfix').append(footerNavHeaderButton);

					// Declare empty HTML content var
					let footerNavHTML = '';

					// Loop through data
					$.each(footerNavData.items, function(key, value) {
						// Add to HTML var
					  	footerNavHTML = footerNavHTML + '<li class="wmg-footer-nav__item">' + value.content + '</li>';
					});

					// Set HTML in nav wrapper
					$('#wmg-footer-nav ul').html(footerNavHTML);

					// Clone social media buttons
					$('.id7-site-footer-content .fa-social-icons').clone().appendTo($('#wmg-footer-nav .container'));

					// Footer nav open on click
		        	$('.wmg-footer-nav--open').click(function() {
					    $([document.documentElement, document.body]).animate({
					        scrollTop: $('#wmg-footer-nav').offset().top
					    }, 0);
		        	});

					// Footer nav close on click
		        	$('.wmg-footer-nav--close').click(function() {
					    $([document.documentElement, document.body]).animate({
					        scrollTop: $('.id7-page-header').offset().top
					    }, 0);
		        	});
		        }
	    	});
	    }
	}

	// Only add mobile footer nav on mobile
	mobileFooterNav();

	$(window).resize(function() {
		mobileFooterNav();
	});

	// Create video popup
	$('.id7-page-footer').after('<div class="video-popup"><div class="video-popup__content"><button class="video-popup__close">Close</button><div class="video-popup__code"></div></div></div>');

	// On video element image click
	$('body').on('click', '.video-element__image', function() {
		// Get video code
		var code = $('.video-element__code', $(this).parent('.video-element')).html();

		// Set popup content to video code
		$('.video-popup__code').html(code);

		// Show popup
		$('.video-popup').addClass('active');
	});

	// Close popup on click and reset content
	$('.video-popup__close').click(function() {
		$('.video-popup__code').empty();
		$('.video-popup').removeClass('active');
	});


});