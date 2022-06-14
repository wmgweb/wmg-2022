const timestamp = Date.now();

// Load Additional CSS
const css_files = [
	//'https://staging.grid-digital.co.uk/wmg/dist/main.css'
	'https://cdn.jsdelivr.net/gh/wmgweb/wmg-2022@dev/dist/main.css'
];

css_files.forEach(function (item, index) {
  	var link = document.createElement('link');
  	link.href = item + '?v=' + timestamp;
  	link.rel = 'stylesheet';
	link.type = 'text/css';
	document.getElementsByTagName('head')[0].appendChild(link);
});

// Load Additional JS
const js_files = [
	//'https://staging.grid-digital.co.uk/wmg/dist/main.js?v=' + timestamp
	'https://cdn.jsdelivr.net/gh/wmgweb/wmg-2022@dev/dist/main.js?v=' + timestamp 
];

js_files.forEach(function (item, index) {
  	var script = document.createElement('script');
  	script.src = item;
	script.type = 'text/javascript';
	script.async = 'true';
	document.getElementsByTagName('head')[0].appendChild(script);
});
