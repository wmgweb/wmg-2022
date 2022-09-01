jQuery(document).ready(function() {

	// If on a datalist page, add class to body to fix styling
	if(jQuery('#entries #main.datalist.panel').length) {
		jQuery('body').addClass('page-datalist');
	} else {
		jQuery('body').addClass('page-frontend');
	}

});