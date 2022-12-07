jQuery(function ($) {

	var version = '2';
	// PMC TEST
	// Get all scripts on the page
	var scripts = document.getElementsByTagName('script');

	// Loop through and find this script
	var currentScript = '';
	$.each(scripts, function(key, value) {
		if(value.src.indexOf('load-resources.js') >= 0) {
			currentScript = value.src;
		}
	});

	// Get current script directory
	var currentDirectory = currentScript.substring(0, currentScript.lastIndexOf('/')) + '/';

	// Load all url params
	var urlParams = new URLSearchParams(window.location.search);

	// // Check if cache param is set to 0
	if(urlParams.get('cache') == 0) {
		// If so set version to timestamp
		version = Date.now();
	}

	// Load Additional CSS - can add additional files to this array or push to it within if statements to load page-specific scripts
	var css_files = [
		currentDirectory + 'main.css'
	];

	// Loop through array, create link tag and append to end of head
	css_files.forEach(function (item, index) {
		var link = document.createElement('link');
		link.href = item + '?v=' + version;
		link.rel = 'stylesheet';
		link.type = 'text/css';
		document.getElementsByTagName('head')[0].appendChild(link);
	});

	// Load Additional JS - can add additional files to this array or push to it within if statements to load page-specific scripts
	var js_files = [
		currentDirectory + 'main.js'
	];

	// Loop through array, create script tag and append to end of head
	js_files.forEach(function (item, index) {
		var script = document.createElement('script');
		script.src = item + '?v=' + version;
		script.type = 'text/javascript';
		script.async = 'true';
		document.getElementsByTagName('body')[0].appendChild(script);
	});

});