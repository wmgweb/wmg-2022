var version = '2';

// Get current script directory to load local files
var scripts = document.getElementsByTagName('script');
var currentScript = scripts[scripts.length-1];
var currentScriptSrc = currentScript.src;
var currentDirectory = currentScriptSrc.substring(0, currentScriptSrc.lastIndexOf('/')) + '/';

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
	document.getElementsByTagName('head')[0].appendChild(script);
});
