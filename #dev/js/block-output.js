jQuery(document).ready(function($) {
   	
   	// Loop through each block on page, and load correct Handlebars block 
	$('.wmg-block').each(function() {
  		var blockData = $(this).data();
  		var handlebarsBlock = WMG.blocks[blockData['block_id']];
  		var handlebarsBlockData = {};

  		// Loop through all data and make data object
  		$.each(blockData, function(key, value) {
		  	// Ignore irrelevant keys
		  	if(key != 'block_id') {
		  		handlebarsBlockData[key] = value;
		  	}
		});

  		$(this).html(handlebarsBlock(handlebarsBlockData));
	});
 
});
