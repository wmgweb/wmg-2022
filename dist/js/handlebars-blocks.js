this["WMG"] = this["WMG"] || {};
this["WMG"]["blocks"] = this["WMG"]["blocks"] || {};
this["WMG"]["blocks"]["AC01"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":7},"end":{"line":17,"column":14}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div class=\"AC-accordion\">\r\n									"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n								</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-AC block-AC01\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-md-3\">\r\n					<div class=\"AC01__side bg--theme\">\r\n						"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n				<div class=\"col-12 col-md-9\">\r\n					<div class=\"AC01__main\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":18,"column":15}}})) != null ? stack1 : "")
    + "					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":27,"column":18},"end":{"line":27,"column":34}}}) : helper)))
    + "');	\r\n\r\n		// Loop through all accordion items\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":28}}}) : helper)))
    + " .AC-accordion').each(function() {\r\n\r\n			// Create wrapper for heading\r\n			$(this).children().first().wrap('<div class=\"AC-accordion__heading\"></div>');\r\n			\r\n			// Create wrapper for content\r\n			$(this).children().not(':first-child').wrapAll('<div class=\"AC-accordion__content\"></div>');\r\n\r\n			// Append chevron SVG\r\n			$('.AC-accordion__heading', $(this)).append('<svg width=\"15\" height=\"11\" viewBox=\"0 0 15 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.70337 10.1595L0.330365 3.57953C-0.110122 3.12474 -0.110122 2.38933 0.330365 1.93937L1.38941 0.845933C1.8299 0.39114 2.54217 0.39114 2.97798 0.845933L7.5 5.50514L12.0173 0.841094C12.4578 0.386301 13.1701 0.386301 13.6059 0.841094L14.6696 1.93453C15.1101 2.38932 15.1101 3.12473 14.6696 3.57469L8.29663 10.1547C7.85614 10.6143 7.14386 10.6143 6.70337 10.1595Z\" fill=\"#6A6A6A\"/></svg>');\r\n		});\r\n\r\n		// Add on-click function to show/hide content\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":43,"column":28}}}) : helper)))
    + " .AC-accordion__heading').click(function() {\r\n			var $parent = $(this).parent('.AC-accordion');\r\n			$parent.toggleClass('active');\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["AC02"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<div class=\"AC02__carousel-item\">\r\n								<div class=\"row\">\r\n									<div class=\"col-12 col-md-7\">\r\n										<div class=\"AC02__carousel-item-content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":14,"column":51},"end":{"line":14,"column":64}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n									</div>\r\n									<div class=\"col-12 col-md-5\">\r\n										<div class=\"AC02__carousel-item-image\"></div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-AC block-AC02\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"AC02__intro border-color--theme\">\r\n				"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n			</div>\r\n			<div class=\"AC02__main\">\r\n				<div class=\"AC02__carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":22,"column":14}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":30,"column":18},"end":{"line":30,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Add wrapper to button\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":28}}}) : helper)))
    + " .AC02__intro .btn').wrap('<div class=\"AC02__intro-btn\"></div>');\r\n\r\n		// Add wrapper around everything else\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":36,"column":28}}}) : helper)))
    + " .AC02__intro').children().not('.AC02__intro-btn').wrapAll('<div class=\"AC02__intro-content\"></div>');\r\n\r\n		// Initilise Slick Carousel with custom paging (grabs first element)\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":39,"column":28}}}) : helper)))
    + " .AC02__carousel').slick({\r\n			autoplay: false,\r\n			dots: true,\r\n			arrows: false,\r\n			fade: true,\r\n			customPaging : function(slider, i) {\r\n        		var title = $(slider.$slides[i].innerHTML).find('.AC02__carousel-item-content').children().first().html();\r\n        		return '<span>' + title + '</span>';\r\n    		},\r\n		});\r\n\r\n		// Loop through each slide content\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":51,"column":28}}}) : helper)))
    + " .AC02__carousel-item-content').each(function() {\r\n			var $parent = $(this).parents('.AC02__carousel-item');\r\n\r\n			// Remove pagination heading\r\n			$(this).children().first().remove();\r\n\r\n			// Move image\r\n			var $img = $('img', $(this));\r\n			var imgSrc = $img.attr('src');\r\n			var imgAlt = $img.attr('alt');\r\n			$img.unwrap('p').remove();\r\n\r\n			$('.AC02__carousel-item-image', $parent).prepend('<img src=\"' + imgSrc + '\" alt=\"' + imgAlt + '\">');\r\n\r\n		});\r\n\r\n		// Calculate the position of the dots depending on height\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":68,"column":16},"end":{"line":68,"column":32}}}) : helper)))
    + "DotsPosition() {\r\n			if($(window).width() < 992) {\r\n				var dotsHeight = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":70,"column":31},"end":{"line":70,"column":47}}}) : helper)))
    + " .slick-dots').height() + 40;\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":71,"column":14},"end":{"line":71,"column":30}}}) : helper)))
    + " .AC02__intro').css('padding-bottom', dotsHeight + 'px')\r\n			}\r\n		}\r\n\r\n		// Run dots function on load\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":76,"column":7},"end":{"line":76,"column":23}}}) : helper)))
    + "DotsPosition();\r\n\r\n		// Run dots function on window resize\r\n		$(window).resize(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":80,"column":8},"end":{"line":80,"column":24}}}) : helper)))
    + "DotsPosition();\r\n		});\r\n		\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["AC03"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"AC03__content-item AC03__content-item--"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":18,"column":56},"end":{"line":18,"column":66}}}) : helper)))
    + "\">\r\n						"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\r\n					</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-AC block-AC03\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"AC03__tabs\">\r\n				<div class=\"AC03__tabs-menu\">\r\n					<button class=\"AC03__tabs-dropdown\">\r\n						<span></span>\r\n						<svg width=\"20\" height=\"15\" viewBox=\"0 0 20 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n							<path d=\"M8.93783 14.4893L0.440487 4.6193C-0.146829 3.93711 -0.146829 2.83399 0.440487 2.15906L1.85255 0.518902C2.43986 -0.163286 3.38957 -0.163286 3.97063 0.518902L10 7.50771L16.0231 0.511643C16.6104 -0.170546 17.5601 -0.170547 18.1412 0.511642L19.5595 2.1518C20.1468 2.83399 20.1468 3.9371 19.5595 4.61203L11.0622 14.482C10.4749 15.1714 9.52515 15.1714 8.93783 14.4893Z\" fill=\"#D9DDE0\"/>\r\n						</svg>\r\n					</button>\r\n					<div class=\"AC03__tabs-menu-button\"></div>\r\n				</div>\r\n				<ul class=\"AC03__tabs-list\"></ul>\r\n			</div>\r\n			<div class=\"AC03__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":28,"column":18},"end":{"line":28,"column":34}}}) : helper)))
    + "');		\r\n\r\n		// Loop through each content block\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":28}}}) : helper)))
    + " .AC03__content-item').each(function(index) {\r\n			var buttonClass = '';\r\n\r\n			// Get tab heading\r\n			var tabHeading = $('p:first-child', $(this)).text();\r\n\r\n			// If first content block\r\n			if(index == 0) {\r\n				// Add active class\r\n				$(this).addClass('active');\r\n				buttonClass = ' class=\"active\"';\r\n\r\n				// Set mobile tab dropdown to tab heading\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":44,"column":14},"end":{"line":44,"column":30}}}) : helper)))
    + " .AC03__tabs-dropdown span').text(tabHeading);\r\n\r\n				// Set mobile button\r\n				$('.btn', $(this)).clone().appendTo($('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":47,"column":50},"end":{"line":47,"column":66}}}) : helper)))
    + " .AC03__tabs-menu-button')); \r\n			}\r\n\r\n			// Remove tab heading element\r\n			$('p:first-child', $(this)).remove();\r\n\r\n			// Create tab button\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":54,"column":13},"end":{"line":54,"column":29}}}) : helper)))
    + " .AC03__tabs .AC03__tabs-list').append('<li' + buttonClass + ' data-id=\"' + index + '\"><button>' + tabHeading + '</button></li>');\r\n\r\n			// Wrap triangle\r\n			$('.brand-triangle', $(this)).unwrap('p').wrap('<div class=\"AC03__content-item-header\"></div>');\r\n\r\n			// Move button\r\n			$('.btn', $(this)).unwrap('p').appendTo($('.AC03__content-item-header', $(this)));\r\n		});\r\n\r\n		// On tab button click\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":64,"column":28}}}) : helper)))
    + " .AC03__tabs li').click(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":65,"column":8},"end":{"line":65,"column":24}}}) : helper)))
    + "ListSlideToggle();\r\n\r\n			// Remove active class from old button\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":68,"column":13},"end":{"line":68,"column":29}}}) : helper)))
    + " .AC03__tabs li.active').removeClass('active');\r\n\r\n			// Get tab ID\r\n			var id = $(this).data('id');\r\n			var heading = $(this).text();\r\n\r\n			// Set active class\r\n			$(this).addClass('active');\r\n\r\n			// Set mobile tab dropdown to tab heading\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":78,"column":13},"end":{"line":78,"column":29}}}) : helper)))
    + " .AC03__tabs-dropdown span').text(heading);\r\n\r\n			// Hide old content block\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":81,"column":13},"end":{"line":81,"column":29}}}) : helper)))
    + " .AC03__content-item.active').removeClass('active');\r\n\r\n			// Show new content block\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":84,"column":13},"end":{"line":84,"column":29}}}) : helper)))
    + " .AC03__content-item.AC03__content-item--' + id).addClass('active');\r\n		});\r\n\r\n		// Function to hide list on mobile\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":88,"column":16},"end":{"line":88,"column":32}}}) : helper)))
    + "ListSlideToggle() {\r\n			if($(window).width() < 1200) {\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":90,"column":14},"end":{"line":90,"column":30}}}) : helper)))
    + " .AC03__tabs-dropdown').toggleClass('active');\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":91,"column":14},"end":{"line":91,"column":30}}}) : helper)))
    + " .AC03__tabs-list').slideToggle();\r\n			}\r\n		}\r\n\r\n		// On click of mobile dropdown button\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":96,"column":12},"end":{"line":96,"column":28}}}) : helper)))
    + " .AC03__tabs-dropdown').click(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":97,"column":8},"end":{"line":97,"column":24}}}) : helper)))
    + "ListSlideToggle();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["AC04"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":13,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"AC04-carousel__item\">\r\n							"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":11,"column":7},"end":{"line":11,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-AC block-AC04\">\r\n	<div class=\"block__content\">\r\n		<div class=\"block-intro AC04-intro bg--theme\">\r\n			"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n		</div>\r\n		<div class=\"container\">\r\n			<div class=\"AC04-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":21,"column":18},"end":{"line":21,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Wrap image\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":28}}}) : helper)))
    + " .AC04-intro img').unwrap('p').wrap('<div class=\"AC04-intro__image\"></div>');\r\n\r\n		// Wrap everything else\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":28}}}) : helper)))
    + " .AC04-intro').children().not('.AC04-intro__image').wrapAll('<div class=\"AC04-intro__content\"><div class=\"half-container half-container--lg half-container--left\"></div></div>');\r\n\r\n		// Add SVG icon\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":28}}}) : helper)))
    + " .AC04-intro__content').append('<svg width=\"33\" height=\"351\" viewBox=\"0 0 33 351\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"d-none d-md-block image-box-border theme-fill-path-alt\"><g style=\"mix-blend-mode:multiply\"><path d=\"M0.632812 36.436L32.018 0V351H0.632812V36.436Z\" fill=\"#de0905\"/></g></svg>');\r\n\r\n		// Initilise Slick Carousel with custom paging (takes first child element)\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":28}}}) : helper)))
    + " .AC04-carousel').slick({\r\n			autoplay: false,\r\n			dots: true,\r\n			arrows: false,\r\n			fade: true,\r\n			customPaging : function(slider, i) {\r\n        		var title = $(slider.$slides[i].innerHTML).find('.AC04-carousel__item').children().first().html();\r\n        		return '<span>' + title + '</span>';\r\n    		},\r\n		});\r\n\r\n		// Loop through all carousel items\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":45,"column":12},"end":{"line":45,"column":28}}}) : helper)))
    + " .AC04-carousel__item').each(function() {\r\n			// Remove pagination heading\r\n			$(this).children().first().remove();\r\n\r\n			// Wrap media\r\n			$('.video-wrapper', $(this)).unwrap('p').wrap('<div class=\"AC04-carousel__item-media\"></div>');\r\n			$('img', $(this)).unwrap('p').wrap('<div class=\"AC04-carousel__item-media\"></div>');\r\n\r\n			// Add media description to div (any content after the media)\r\n			var $mediaElement = $('.AC04-carousel__item-media', $(this));\r\n			$mediaElement.nextAll().appendTo($mediaElement);\r\n\r\n			// Add everything else to another wrapper\r\n			$(this).children().not('.AC04-carousel__item-media').wrapAll('<div class=\"AC04-carousel__item-content\"></div>');\r\n		});\r\n\r\n		// Calculate the position of the dots depending on height\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":62,"column":16},"end":{"line":62,"column":32}}}) : helper)))
    + "DotsPosition() {\r\n			if($(window).width() < 992) {\r\n				var dotsHeight = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":64,"column":31},"end":{"line":64,"column":47}}}) : helper)))
    + " .slick-dots').height() + 40;\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":65,"column":14},"end":{"line":65,"column":30}}}) : helper)))
    + " .AC04-carousel').css('padding-top', dotsHeight + 'px')\r\n			}\r\n		}\r\n\r\n		// Run dots function on load\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":70,"column":7},"end":{"line":70,"column":23}}}) : helper)))
    + "DotsPosition();\r\n\r\n		// Run dots function on window resize\r\n		$(window).resize(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":74,"column":8},"end":{"line":74,"column":24}}}) : helper)))
    + "DotsPosition();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["AC05"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"AC-accordion\">\r\n					"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-AC block-AC05\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":8,"column":12}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');	\r\n\r\n		// Loop through all accordion items\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":28}}}) : helper)))
    + " .AC-accordion').each(function() {\r\n\r\n			// Create wrapper for heading\r\n			$(this).children().first().wrap('<div class=\"AC-accordion__heading\"></div>');\r\n			// Create wrapper for content\r\n			$(this).children().not(':first-child').wrapAll('<div class=\"AC-accordion__content\"></div>');\r\n\r\n			// Append chevron SVG\r\n			$('.AC-accordion__heading', $(this)).append('<svg width=\"15\" height=\"11\" viewBox=\"0 0 15 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.70337 10.1595L0.330365 3.57953C-0.110122 3.12474 -0.110122 2.38933 0.330365 1.93937L1.38941 0.845933C1.8299 0.39114 2.54217 0.39114 2.97798 0.845933L7.5 5.50514L12.0173 0.841094C12.4578 0.386301 13.1701 0.386301 13.6059 0.841094L14.6696 1.93453C15.1101 2.38932 15.1101 3.12473 14.6696 3.57469L8.29663 10.1547C7.85614 10.6143 7.14386 10.6143 6.70337 10.1595Z\" fill=\"#6A6A6A\"/></svg>');\r\n		});\r\n\r\n		// Add on-click function to show/hide content\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":28}}}) : helper)))
    + " .AC-accordion__heading').click(function() {\r\n			var $parent = $(this).parent('.AC-accordion');\r\n			$parent.toggleClass('active');\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["CB01"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"CB-col\">\r\n						<div class=\"card-block\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-CB block-CB01\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"CB-row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":16,"column":18},"end":{"line":16,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each card block, check if an image exists and wrap it\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":28}}}) : helper)))
    + " .card-block').each(function() {\r\n			if($('img', $(this)).length) {\r\n				$('img', $(this)).unwrap('p').wrap('<div class=\"card-block__image\"></div>');\r\n			}\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["CB08"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":7},"end":{"line":17,"column":14}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div class=\"CB08__item\">\r\n									"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n								</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-CB block-CB08\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-md-3\">\r\n					<div class=\"CB08__side bg--theme\">\r\n						"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n				<div class=\"col-12 col-md-9\">\r\n					<div class=\"CB08__main\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":18,"column":15}}})) != null ? stack1 : "")
    + "					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":27,"column":18},"end":{"line":27,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["CO02"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":11,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"col-12 col-md-6 col-lg-3\">\r\n							<div class=\"transparent-card\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":9,"column":37},"end":{"line":9,"column":50}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-CO block-CO02\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"block-intro CO02-intro\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":18},"end":{"line":19,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["CO04"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-CO block-CO04\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content text-center\">\r\n			"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["CO05"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"col-12 col-md-6 col-lg-3\">\r\n						<div class=\"co-list\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":7,"column":27},"end":{"line":7,"column":40}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-CO block-CO05\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":16,"column":18},"end":{"line":16,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each list\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":28}}}) : helper)))
    + " .co-list').each(function() {\r\n			\r\n			// Move triangle and heading into own block\r\n			$('.brand-triangle', $(this)).wrap('<div class=\"co-list__heading\"></div>');\r\n			$('.co-list__heading', $(this)).next().appendTo($('.co-list__heading', $(this)));\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["CO06"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":11,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"col-12 col-lg-4\">\r\n							<div class=\"co-features\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":9,"column":32},"end":{"line":9,"column":45}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-CO block-CO06\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"block-intro CO06-intro\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":18},"end":{"line":19,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["CO10"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-CO block-CO10\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"CO10-main\">\r\n				<div class=\"CO10-social\">\r\n					<h4 class=\"CO10-social__heading\">Connect with us</h4>\r\n					<ul class=\"CO10-social__links color--white\">\r\n						<li><a href=\"https://twitter.com/wmgwarwick\" title=\"Twitter\" target=\"_blank\"><i class=\"fa fa-twitter fa-2x fa-fw\"></i></a></li>\r\n						<li><a href=\"https://www.linkedin.com/company/wmg-university-of-warwick/\" title=\"LinkedIn\" target=\"_blank\"><i class=\"fa fa-linkedin fa-2x fa-fw\"></i></a></li>\r\n					</ul>\r\n				</div>\r\n				<div class=\"CO10-content\">\r\n					"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":21,"column":18},"end":{"line":21,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["FB01"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-FB block-FB01\">\r\n	<div class=\"block__content\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"FB01__module FB01__module-left bg--dark color--white\">\r\n					<div class=\"FB01__module-top\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n					<div class=\"FB01__module-bottom\">\r\n						<div class=\"half-container half-container--lg half-container--left\">\r\n							<div class=\"FB01__module-bottom-content\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"FB01__module FB01__module-right bg--light-grey\">\r\n					<div class=\"FB01__module-top bg--theme color--white\">\r\n						<div class=\"row FB01__module-top-split\">\r\n							<div class=\"col-12 col-md-6\">\r\n								<div class=\"FB01__module-top-main\">\r\n									<div class=\"inner-block\">\r\n										"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n										<svg width=\"33\" height=\"351\" viewBox=\"0 0 33 351\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"theme-fill-path-alt\">\r\n											<path d=\"M0.632812 36.436L32.018 0V351H0.632812V36.436Z\" fill=\"#de0905\"></path>\r\n										</svg>\r\n									</div>\r\n								</div>\r\n							</div>\r\n							<div class=\"d-none d-md-block col-md-6\">\r\n								<div class=\"FB01__module-top-image\"></div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<div class=\"FB01__module-bottom\">\r\n						<div class=\"half-container half-container--lg half-container--right\">\r\n							<div class=\"FB01__module-bottom-content\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"3") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":45,"column":18},"end":{"line":45,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Move first image\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":48,"column":12},"end":{"line":48,"column":28}}}) : helper)))
    + " .FB01__module-top-main img:first-child').unwrap('p').appendTo('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":48,"column":99},"end":{"line":48,"column":115}}}) : helper)))
    + " .FB01__module-top-image');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["FB02"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-FB block-FB02\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row align-items-center\">\r\n				<div class=\"col-12 col-lg-6 FB02__img\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n				<div class=\"col-12 col-lg-6 FB02__main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":13,"column":18},"end":{"line":13,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["FB03"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-FB block-FB03\">\r\n	<div class=\"block__content\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12 col-md-6 FB03__img\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"col-12 col-md-6\">\r\n				<div class=\"FB03__main\">\r\n					<svg width=\"150\" height=\"305\" viewBox=\"0 0 150 305\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"corner-arrow theme-fill-path\">\r\n						<path d=\"M0 0L150 -1.31134e-05L150 305L0 0Z\" fill=\"#EE3124\"/>\r\n					</svg>\r\n					<div class=\"half-container half-container--right\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":18},"end":{"line":18,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["FB04"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"col-12 col-lg-6\">\r\n					<div class=\"FB04__article bg--dark color--white\">\r\n						<div class=\"FB04__article-img\"></div>\r\n						<div class=\"FB04__article-content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":8,"column":41},"end":{"line":8,"column":54}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-FB block-FB04\">\r\n	<div class=\"block__content\">\r\n		<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each article\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":28}}}) : helper)))
    + " .FB04__article').each(function() {\r\n			// Move image to image wrapper\r\n			$('.FB04__article-content img', $(this)).unwrap('p').appendTo($('.FB04__article-img', $(this)));\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["FB05"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-FB block-FB05\">\r\n	<div class=\"block__content\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"half-container half-container--lg half-container--left\">\r\n					<div class=\"FB05__main\">\r\n						<svg width=\"150\" height=\"305\" viewBox=\"0 0 150 305\" preserveAspectRatio=\"none\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"corner-arrow theme-fill-path-alt\">\r\n							<path d=\"M0 0L150 -1.31134e-05L150 305L0 0Z\" fill=\"#de0905\"/>\r\n						</svg>\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"FB05__side\">\r\n					<div class=\"inner-block\">\r\n						<svg width=\"33\" height=\"351\" viewBox=\"0 0 33 351\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"theme-fill-path-alt\">\r\n							<path d=\"M0.632812 36.436L32.018 0V351H0.632812V36.436Z\" fill=\"#de0905\"/>\r\n						</svg>\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n					<div class=\"FB05__side-image\">\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":32,"column":18},"end":{"line":32,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["FB06"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":7},"end":{"line":16,"column":14}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div class=\"FB06-carousel__item\">\r\n									"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n								</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-FB block-FB06\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-lg-6\">\r\n					<div class=\"FB06-main\">\r\n						"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n				<div class=\"col-12 col-lg-6\">\r\n					<div class=\"FB06-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":17,"column":15}}})) != null ? stack1 : "")
    + "					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":25,"column":18},"end":{"line":25,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each carousel item\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":28}}}) : helper)))
    + " .FB06-carousel__item').each(function() {\r\n			// Add wrapper around image\r\n			$('img', $(this)).unwrap('p').wrap('<div class=\"FB06-carousel__item-image\"></div>');\r\n\r\n			// Add SVG to image\r\n			$('.FB06-carousel__item-image', $(this)).prepend('<svg width=\"57\" height=\"69\" viewBox=\"0 0 57 69\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56.7634 68.1979L0 68.1979L6.61655e-06 0.242188L56.7634 68.1979Z\" fill=\"#D9DDE0\"/></svg>');\r\n			\r\n			// Wrap everything else\r\n			$(this).children().not('.FB06-carousel__item-image').wrapAll('<div class=\"FB06-carousel__item-content\"><div class=\"half-container half-container--lg half-container--right\"></div></div>');\r\n		});\r\n\r\n		// Wrap main image\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":40,"column":28}}}) : helper)))
    + " .FB06-main img').unwrap('p').wrap('<div class=\"FB06-main__image\"></div>');\r\n\r\n		// Add SVG to main image\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":43,"column":28}}}) : helper)))
    + " .FB06-main__image').prepend('<svg width=\"57\" height=\"74\" viewBox=\"0 0 57 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"bg-fill-path\"><path d=\"M0 0L56.7634 -9.92483e-06L56.7634 73.5887L0 0Z\" fill=\"#E6E8EA\"/></svg>');\r\n\r\n		// Wrap everything else\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":46,"column":12},"end":{"line":46,"column":28}}}) : helper)))
    + " .FB06-main').children().not('.FB06-main__image').wrapAll('<div class=\"FB06-main__content\"><div class=\"half-container half-container--lg half-container--left\"></div></div>');\r\n\r\n		// Initilise slick carousel with custom numbered pagination\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":49,"column":12},"end":{"line":49,"column":28}}}) : helper)))
    + " .FB06-carousel').slick({\r\n			arrows: false,\r\n			dots: true,\r\n			draggable: false,\r\n			customPaging : function(slider, i) {\r\n				var thumb = $(slider.$slides[i]).data();\r\n				return '<a>0' + parseInt(i+1) + '</a>';\r\n			}\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["HB01"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"HB01__carousel-item\">\r\n					<div class=\"HB01__carousel-item-bg\"></div>\r\n					<div class=\"HB01__carousel-item-content\">\r\n						"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-HB01\">\r\n	<div class=\"block__content\">\r\n		<div id=\"slick-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":3,"column":17},"end":{"line":3,"column":33}}}) : helper)))
    + "\" class=\"HB01__carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":16,"column":18},"end":{"line":16,"column":34}}}) : helper)))
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":28}}}) : helper)))
    + " .HB01__carousel-item').each(function() {\r\n			$('img', $(this)).appendTo($('.HB01__carousel-item-bg', $(this)));\r\n		});\r\n\r\n		// Initialise Slick Carousel with custom pagination\r\n		var slickObject = {\r\n			autoplay: true,\r\n			arrows: false,\r\n			draggable: true,\r\n			dots: false,\r\n			fade: true,\r\n			speed: 1500,\r\n			pause: 10000,\r\n			customPaging : function(slider, i) {\r\n				var thumb = $(slider.$slides[i]).data();\r\n				return '<a>0' + parseInt(i+1) + '</a>';\r\n			}			\r\n		}\r\n\r\n		// Add dots if setting is set\r\n		if($('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":38,"column":15},"end":{"line":38,"column":31}}}) : helper)))
    + "').hasClass('carousel-dots--true')) {\r\n			slickObject.dots = true;\r\n		}\r\n\r\n		$(window).on('load', function(){\r\n			$('#slick-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":43,"column":13},"end":{"line":43,"column":29}}}) : helper)))
    + "').slick(slickObject);\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["IG01"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-IG block-IG01\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-md-4\">\r\n					"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n				<div class=\"col-12 col-md-4\">\r\n					"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n				<div class=\"col-12 col-md-4\">\r\n					"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":18},"end":{"line":20,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["IG02"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"col-12 col-sm-6 col-md-3\"><div class=\"IG02__item\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-IG block-IG02\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["IG05"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"IG05-grid__item\"><span class=\"large-stat strong-color--theme\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</span></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-IG block-IG05\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"IG05-grid\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":7,"column":12}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":13,"column":18},"end":{"line":13,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["IN01"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-IN block-IN01\">\r\n	<div class=\"block__content\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12 col-md-6\">\r\n				<div class=\"half-container half-container--md half-container--left\">\r\n					<div class=\"IN01__main\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":9,"column":15}}})) != null ? stack1 : "")
    + "					</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"col-12 col-md-6\">\r\n				<div class=\"IN01__image\"></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":21,"column":18},"end":{"line":21,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Move image\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":28}}}) : helper)))
    + " .IN01__main img').appendTo($('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":66},"end":{"line":24,"column":82}}}) : helper)))
    + " .IN01__image'));\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["IN02"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-IN block-IN02\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-lg-8\"><div class=\"IN__main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div></div>\r\n				<div class=\"col-12 col-lg-4\"><aside class=\"IN__sidebar bg--lightgrey-3\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</aside></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":13,"column":18},"end":{"line":13,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["IN03"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-IN block-IN03\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-lg-8\"><div class=\"IN__main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div></div>\r\n				<div class=\"col-12 col-lg-4\">\r\n					<aside class=\"IN__sidebar bg--lightgrey-3\">\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</aside>\r\n					<div class=\"IN__form bg--dark color--white\">\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":18},"end":{"line":20,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["IN04"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-IN block-IN04\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row align-items-center\">\r\n				<div class=\"col-12 col-lg-6\"><div class=\"IN__main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div></div>\r\n				<div class=\"col-12 col-lg-6\">\r\n					<div class=\"IN__media\">\r\n						<div class=\"IN__media-main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n						<div class=\"IN__media-description\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":18},"end":{"line":18,"column":34}}}) : helper)))
    + "');\r\n\r\n		// If Media Width option is set to small\r\n		if($('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":21,"column":15},"end":{"line":21,"column":31}}}) : helper)))
    + "').hasClass('media-width--small')) {\r\n			// Change row widths\r\n			$('.IN__main', $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":23,"column":28},"end":{"line":23,"column":44}}}) : helper)))
    + "')).parent('.col-12').removeClass('col-lg-6').addClass('col-lg-8');\r\n			$('.IN__media', $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":29},"end":{"line":24,"column":45}}}) : helper)))
    + "')).parent('.col-12').removeClass('col-lg-6').addClass('col-lg-4');\r\n		}\r\n	});\r\n</script>\r\n";
},"useData":true});
this["WMG"]["blocks"]["IN05"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-IN block-IN05\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-lg-6\"><div class=\"IN__main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div></div>\r\n				<div class=\"col-12 col-lg-6\">\r\n					<div class=\"IN__social bg--red color--white\">\r\n						<div class=\"IN__social-link\">\r\n							<a href=\"https://www.google.com/maps/dir//WMG+Warwick+6+Lord+Bhattacharyya+Way+Coventry+CV4+7AL/@52.3843819,-1.5618825,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x48774ac55565518b:0x52952e4c9e69efec\" target=\"_blank\">Find us</a>\r\n						</div>\r\n						<div class=\"IN__social-main\">\r\n							<p>Connect with us</p>\r\n							<ul>\r\n								<li><a href=\"https://twitter.com/wmgwarwick\" class=\"fa fa-twitter\" target=\"_blank\"></a></li>\r\n								<li><a href=\"https://www.linkedin.com/company/wmg-university-of-warwick/\" class=\"fa fa-linkedin\" target=\"_blank\"></a></li>\r\n							</ul>\r\n						</div>\r\n					</div>\r\n					<div class=\"IN__map\">\r\n						<div class=\"IN__map-main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n						<div class=\"IN__map-description\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":30,"column":18},"end":{"line":30,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB01"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB01\">\r\n	<div class=\"block__content\">\r\n		"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n		<div class=\"MB01-img\"></div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":9,"column":18},"end":{"line":9,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Get image url and remove image element\r\n		var $img = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":12,"column":23},"end":{"line":12,"column":39}}}) : helper)))
    + " img');\r\n		var imgSrc = $img.attr('src');\r\n		$img.unwrap('p').remove();\r\n\r\n		// Add background image\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":28}}}) : helper)))
    + " .MB01-img').css('background-image', 'url(' + imgSrc + ')');\r\n		 \r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB02"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"MB02-carousel__item\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB02\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"d-none MB02__images\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n			<div class=\"d-md-none MB02-mobile-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n			<div class=\"d-none d-md-block MB02-carousel\"></div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":18},"end":{"line":20,"column":34}}}) : helper)))
    + "');\r\n\r\n		var block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":11},"end":{"line":22,"column":27}}}) : helper)))
    + "ImageCount = 0;\r\n		var block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":23,"column":11},"end":{"line":23,"column":27}}}) : helper)))
    + "Images = [];\r\n		var block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":11},"end":{"line":24,"column":27}}}) : helper)))
    + "SlideImages = [];\r\n\r\n		// Loop through images and split into array of slides\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":28}}}) : helper)))
    + " .MB02__images img').each(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":28,"column":24}}}) : helper)))
    + "ImageCount = block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":28,"column":42},"end":{"line":28,"column":58}}}) : helper)))
    + "ImageCount + 1;\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":29,"column":24}}}) : helper)))
    + "SlideImages.push($(this).attr('src'));\r\n\r\n			// If slide is finished, set new array\r\n			if(block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":32,"column":11},"end":{"line":32,"column":27}}}) : helper)))
    + "ImageCount % 4 === 0) {\r\n				block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":33,"column":9},"end":{"line":33,"column":25}}}) : helper)))
    + "Images.push(block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":33,"column":42},"end":{"line":33,"column":58}}}) : helper)))
    + "SlideImages);\r\n				block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":34,"column":9},"end":{"line":34,"column":25}}}) : helper)))
    + "SlideImages = [];\r\n			}\r\n\r\n		});\r\n\r\n		// Loop through each image and set the grid elements\r\n		$.each(block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":40,"column":14},"end":{"line":40,"column":30}}}) : helper)))
    + "Images, function(index, value) {\r\n		  	var block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":41,"column":14},"end":{"line":41,"column":30}}}) : helper)))
    + "SlideHTML = '<div class=\"MB02-grid\"><div class=\"row\"><div class=\"col-12 col-md-6\"><div class=\"MB02-img\"><img src=\"' + value[0] + '\"></div></div><div class=\"col-12 col-md-6\"><div class=\"row\"><div class=\"col-12 col-md-6\"><div class=\"MB02-img MB02-img--half\"><img src=\"' + value[1] + '\"></div></div><div class=\"col-12 col-md-6\"><div class=\"MB02-img MB02-img--half\"><img src=\"' + value[2] + '\"></div></div><div class=\"col-12\"><div class=\"MB02-img MB02-img--half\"><img src=\"' + value[3] + '\"></div></div></div></div></div></div>';\r\n		  	$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":42,"column":15},"end":{"line":42,"column":31}}}) : helper)))
    + " .MB02-carousel').prepend(block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":42,"column":62},"end":{"line":42,"column":78}}}) : helper)))
    + "SlideHTML);\r\n		});\r\n\r\n		// Initialise the Slick Carousels - one mobile, one desktop\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":46,"column":16},"end":{"line":46,"column":32}}}) : helper)))
    + "Carousels() {\r\n			if($(window).width() < 768) {\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":48,"column":14},"end":{"line":48,"column":30}}}) : helper)))
    + " .MB02-mobile-carousel').slick({\r\n					dots: true,\r\n					arrows: true,\r\n					autoplay: false,\r\n					nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L14 13.5L1 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n					prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1L1 13.5L14 26\" stroke=\"#6D6F71\"/></svg></button>'\r\n				});			\r\n			}\r\n\r\n			if($(window).width() >= 768) {\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":58,"column":14},"end":{"line":58,"column":30}}}) : helper)))
    + " .MB02-carousel').slick({\r\n					dots: false,\r\n					arrows: true,\r\n					autoplay: false,\r\n					nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L14 13.5L1 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n					prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1L1 13.5L14 26\" stroke=\"#6D6F71\"/></svg></button>'\r\n				});			\r\n			}			\r\n		}\r\n\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":68,"column":7},"end":{"line":68,"column":23}}}) : helper)))
    + "Carousels();\r\n\r\n		$(window).resize(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":71,"column":8},"end":{"line":71,"column":24}}}) : helper)))
    + "Carousels();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB03"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"MB-carousel__item\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB03\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"MB-carousel MB03-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Initialise the Slick Carousel with custom arrows\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":28}}}) : helper)))
    + " .MB03-carousel').slick({\r\n			dots: false,\r\n			arrows: true,\r\n			autoplay: false,\r\n			infinite: true,\r\n			slidesToShow: 3,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L14 13.5L1 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1L1 13.5L14 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 991,\r\n			      settings: {\r\n			        slidesToShow: 2\r\n			      }\r\n			    },\r\n			    {\r\n			      breakpoint: 767,\r\n			      settings: {\r\n			        slidesToShow: 1\r\n			      }\r\n			    }\r\n			]\r\n		});		\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB04"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":9,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"MB-carousel__item\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB04\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"MB04__intro\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"MB-carousel MB04-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Initialise the Slick Carousel with custom arrows\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":28}}}) : helper)))
    + " .MB04-carousel').slick({\r\n			dots: false,\r\n			arrows: true,\r\n			autoplay: false,\r\n			infinite: true,\r\n			slidesToShow: 2,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L14 13.5L1 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1L1 13.5L14 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 767,\r\n			      settings: {\r\n			        slidesToShow: 1\r\n			      }\r\n			    }\r\n			]\r\n		});		\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB05"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":9,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"col-12 col-md-6 col-lg-4\"><div class=\"MB05__item\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB05\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"MB05__intro\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n			<div class=\"MB05__button text-center\"></div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":18},"end":{"line":18,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Move button\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":28}}}) : helper)))
    + " .MB05__intro .btn').appendTo('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":21,"column":66},"end":{"line":21,"column":82}}}) : helper)))
    + " .MB05__button');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB07"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":11,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"MB-carousel__item\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB07\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"MB07__intro\">\r\n				"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n			</div>\r\n			<div class=\"MB-carousel MB07-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":18},"end":{"line":19,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Initialise the Slick Carousel with custom arrows\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":28}}}) : helper)))
    + " .MB07-carousel').slick({\r\n			dots: false,\r\n			arrows: true,\r\n			autoplay: false,\r\n			infinite: true,\r\n			slidesToShow: 5,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L14 13.5L1 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1L1 13.5L14 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 991,\r\n			      settings: {\r\n			        slidesToShow: 3\r\n			      }\r\n			    },\r\n			    {\r\n			      breakpoint: 767,\r\n			      settings: {\r\n			        slidesToShow: 2\r\n			      }\r\n			    },\r\n			    {\r\n			      breakpoint: 500,\r\n			      settings: {\r\n			        slidesToShow: 1\r\n			      }\r\n			    }\r\n			]\r\n		});		\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB08"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB08\">\r\n	<div class=\"block__content\">\r\n		<div class=\"MB08-bg\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n		<div class=\"container\">\r\n			<div class=\"MB08-content\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":11,"column":18},"end":{"line":11,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB09"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB09\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');	 \r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB11"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"MB-carousel__item\">"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB11\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"MB-carousel MB11-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Initialise the Slick Carousel with custom arrows\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":28}}}) : helper)))
    + " .MB11-carousel').slick({\r\n			dots: false,\r\n			arrows: true,\r\n			autoplay: false,\r\n			infinite: true,\r\n			slidesToShow: 3,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L14 13.5L1 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1L1 13.5L14 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 991,\r\n			      settings: {\r\n			        slidesToShow: 2\r\n			      }\r\n			    },\r\n			    {\r\n			      breakpoint: 767,\r\n			      settings: {\r\n			        slidesToShow: 1\r\n			      }\r\n			    }\r\n			]\r\n		});		\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB12"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"col-12 col-md-6 col-lg-4\">\r\n						<div class=\"media-panel\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":13,"column":31},"end":{"line":13,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB12\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"filters-bar\">\r\n				<label class=\"filters-bar__search MB12-search\">\r\n					Quick search\r\n					<input type=\"text\" name=\"MB12-search\">\r\n				</label>\r\n			</div>\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":18},"end":{"line":22,"column":34}}}) : helper)))
    + "');\r\n\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":32}}}) : helper)))
    + "Search() {\r\n			var searchString = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":25,"column":48}}}) : helper)))
    + " .MB12-search input').val();\r\n			var currentActiveCount = 0;\r\n\r\n			// Hide active blocks\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":29,"column":13},"end":{"line":29,"column":29}}}) : helper)))
    + " .row .active').removeClass('active');\r\n			\r\n			// If content in search\r\n			if(searchString.length > 0) {\r\n\r\n				// Loop through all panels\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":35,"column":14},"end":{"line":35,"column":30}}}) : helper)))
    + " .media-panel').each(function() {\r\n					// Get content as string\r\n					var panelContent = $(this).text();\r\n\r\n					// If search string is contained in panel content, add active class\r\n					if(panelContent.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {\r\n						$(this).parent().addClass('active');\r\n						currentActiveCount = currentActiveCount + 1;\r\n\r\n						// If 6 are already showing, stop\r\n						if(currentActiveCount >= 6) {\r\n							return false;\r\n						}\r\n					}\r\n				});\r\n\r\n			} else {\r\n				// Else if no content show first 6\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":53,"column":14},"end":{"line":53,"column":30}}}) : helper)))
    + " .row').children().slice(0,6).addClass('active');\r\n			}\r\n\r\n		}\r\n\r\n		// Run search on load\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":59,"column":7},"end":{"line":59,"column":23}}}) : helper)))
    + "Search();\r\n\r\n		// Run search after input change\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":62,"column":28}}}) : helper)))
    + " .MB12-search input').keyup(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":63,"column":8},"end":{"line":63,"column":24}}}) : helper)))
    + "Search();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["MB13"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-MB block-MB13\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"video-wrapper\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');		 \r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB01"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"PTB01-carousel__item\">\r\n						<div class=\"row\">\r\n							<div class=\"col-12 col-md-6\">\r\n								<div class=\"PTB01-carousel__item-image\"></div>\r\n							</div>\r\n							<div class=\"col-12 col-md-6\">\r\n								<div class=\"PTB01-carousel__item-content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":12,"column":50},"end":{"line":12,"column":63}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB01\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-carousel PTB01-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":23,"column":18},"end":{"line":23,"column":34}}}) : helper)))
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":28}}}) : helper)))
    + " .PTB01-carousel__item').each(function() {\r\n			$('img', $(this)).appendTo($('.PTB01-carousel__item-image', $(this)));\r\n		});\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":28}}}) : helper)))
    + " .PTB01-carousel').slick({\r\n			autoplay: false,\r\n			arrows: true,\r\n			dots: true,\r\n			draggable: false,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 33L18 17L1 0.999998\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 1L1 17L18 33\" stroke=\"#6D6F71\"/></svg></button>',\r\n			customPaging : function(slider, i) {\r\n				var thumb = $(slider.$slides[i]).data();\r\n				return '<a>0' + parseInt(i+1) + '</a>';\r\n			}\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB03"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":11,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"PTB03-carousel__item\">\r\n							<div class=\"card-block\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":9,"column":31},"end":{"line":9,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB03\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-intro\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"PTB-carousel PTB03-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":18},"end":{"line":19,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each card block, check if an image exists and wrap it\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":28}}}) : helper)))
    + " .card-block').each(function() {\r\n			if($('img', $(this)).length) {\r\n				$('img', $(this)).unwrap('p').wrap('<div class=\"card-block__image\"></div>');\r\n			}\r\n		});\r\n\r\n		// Initialise Slick Carousel with custom arrows and dots\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":28}}}) : helper)))
    + " .PTB03-carousel').slick({\r\n			autoplay: false,\r\n			draggable: false,\r\n			dots: true,\r\n			arrows: true,\r\n			slidesToShow: 3,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 33L18 17L1 0.999998\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 1L1 17L18 33\" stroke=\"#6D6F71\"/></svg></button>',\r\n			customPaging : function(slider, i) {\r\n				var thumb = $(slider.$slides[i]).data();\r\n				return '<a>0' + parseInt(i+1) + '</a>';\r\n			},\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 991,\r\n			      settings: {\r\n			        slidesToShow: 2\r\n			      }\r\n			    },\r\n			    {\r\n			      breakpoint: 767,\r\n			      settings: {\r\n			        slidesToShow: 1\r\n			      }\r\n			    }\r\n			]\r\n		});\r\n\r\n		// Function to calculate desktop dots location\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":58,"column":16},"end":{"line":58,"column":32}}}) : helper)))
    + "DotsLocation() {\r\n			// If button exists\r\n			if($('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":60,"column":16},"end":{"line":60,"column":32}}}) : helper)))
    + " .PTB-intro .btn').length) {\r\n				// If window width is desktop\r\n				if($(window).width() > 991) {\r\n					// Set dots right to button width + 30px\r\n					var btnWidth = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":64,"column":30},"end":{"line":64,"column":46}}}) : helper)))
    + " .PTB-intro .btn').outerWidth() + 30;\r\n					$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":65,"column":15},"end":{"line":65,"column":31}}}) : helper)))
    + " .slick-dots').css({'right': btnWidth + 'px'})\r\n				}				\r\n			}\r\n\r\n		}\r\n\r\n		// Run dots calculation on page load\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":72,"column":7},"end":{"line":72,"column":23}}}) : helper)))
    + "DotsLocation();\r\n\r\n		// Run dots calculation on window resize\r\n		$(window).resize(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":76,"column":8},"end":{"line":76,"column":24}}}) : helper)))
    + "DotsLocation();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB04"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"PTB04-carousel__item\">\r\n						<div class=\"row\">\r\n							<div class=\"col-12 col-md-6\">\r\n								<div class=\"PTB04-carousel__item-image\">\r\n									<div class=\"PTB04-carousel__item-image-wrapper\"></div>\r\n								</div>\r\n							</div>\r\n							<div class=\"col-12 col-md-6\">\r\n								<div class=\"PTB04-carousel__item-content\"><div class=\"PTB04-carousel__item-content-wrapper\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":14,"column":100},"end":{"line":14,"column":113}}}) : helper))) != null ? stack1 : "")
    + "</div></div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB04\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-carousel PTB04-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":25,"column":18},"end":{"line":25,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each carousel item\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":28}}}) : helper)))
    + " .PTB04-carousel__item').each(function() {\r\n			// Move image to wrapper\r\n			$('.PTB04-carousel__item-content img', $(this)).appendTo($('.PTB04-carousel__item-image-wrapper', $(this)));\r\n		});\r\n\r\n		// Initialise Slick Carousel\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":34,"column":28}}}) : helper)))
    + " .PTB04-carousel').slick({\r\n			autoplay: false,\r\n			arrows: true,\r\n			dots: true,\r\n			draggable: false,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 33L18 17L1 0.999998\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 1L1 17L18 33\" stroke=\"#6D6F71\"/></svg></button>',\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 991,\r\n			      settings: {\r\n			        arrows: false\r\n			      }\r\n			    }\r\n			]\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB06"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":11,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"col-12 col-md-6\">\r\n							<div class=\"event-card\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":9,"column":31},"end":{"line":9,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB06\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-intro\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":18},"end":{"line":19,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through all blocks\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":28}}}) : helper)))
    + " .event-card').each(function() {\r\n			// Wrap image\r\n			$('img', $(this)).wrap('<div class=\"event-card__image\"></div>');\r\n\r\n			// Wrap all other content\r\n			$(this).children().not('.event-card__image').wrapAll('<div class=\"event-card__content\"></div>');\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB08"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":9,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"bordered-text-block border-color--theme\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":8,"column":59},"end":{"line":8,"column":72}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB08\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-intro\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"PTB-carousel PTB08-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each block - groups 2 together for carousel\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":28}}}) : helper)))
    + " .bordered-text-block').each(function(index, element) {\r\n			// If desktop\r\n			if($(window).width() > 991) {\r\n				// If even add wrapper\r\n				if(index % 2 === 0) {\r\n					$(this).wrap('<div class=\"PTB08-carousel__item\"></div>');\r\n				} else { // If odd move this to last element\r\n					$(this).appendTo($(this).prev('.PTB08-carousel__item'));\r\n				}				\r\n			} else { // Else if mobile\r\n				// Wrap all individually\r\n				$(this).wrap('<div class=\"PTB08-carousel__item\"></div>');\r\n			}\r\n		});\r\n\r\n		// Initialise Slick Carousel\r\n		$('.PTB08-carousel').slick({\r\n			slidesToShow: 2,\r\n			arrows: true,\r\n			dots: true,\r\n			draggable: false,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 33L18 17L1 0.999998\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 1L1 17L18 33\" stroke=\"#6D6F71\"/></svg></button>',\r\n			customPaging : function(slider, i) {\r\n				var thumb = $(slider.$slides[i]).data();\r\n				return '<a>0' + parseInt(i+1) + '</a>';\r\n			},\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 991,\r\n			      settings: {\r\n			        slidesToShow: 1\r\n			      }\r\n			    }\r\n			]\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB09"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<ul class=\"PTB09-cats\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":5},"end":{"line":10,"column":14}}})) != null ? stack1 : "")
    + "				</ul>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "						<li><button>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</button></li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":5},"end":{"line":18,"column":12}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"col-12 col-md-6 inactive\" data-cats=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"categories") || (depth0 != null ? lookupProperty(depth0,"categories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categories","hash":{},"data":data,"loc":{"start":{"line":17,"column":55},"end":{"line":17,"column":69}}}) : helper)))
    + "\"><div class=\"person-block\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":17,"column":97},"end":{"line":17,"column":110}}}) : helper))) != null ? stack1 : "")
    + "</div></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB09\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-headline\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<!-- Create Category Menu from available categories -->\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":12,"column":10}}})) != null ? stack1 : "")
    + "			<!-- End Category Menu -->\r\n			<div class=\"row PTB09-grid\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":19,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n			<div class=\"PTB09-grid__bottom\">\r\n				<button class=\"PTB09-grid__expand\">Load More <svg width=\"39\" height=\"23\" viewBox=\"0 0 39 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4288 22.2169L0.85895 7.08292C-0.286317 6.03689 -0.286318 4.34545 0.858949 3.31055L3.61246 0.795647C4.75773 -0.250376 6.60965 -0.250376 7.74274 0.795646L19.5 11.5118L31.2451 0.784518C32.3903 -0.261507 34.2423 -0.261507 35.3753 0.784518L38.141 3.29942C39.2863 4.34545 39.2863 6.03689 38.141 7.07178L21.5712 22.2057C20.426 23.2629 18.574 23.2629 17.4288 22.2169Z\" fill=\"#818181\"/></svg></button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":29,"column":18},"end":{"line":29,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each person block\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":28}}}) : helper)))
    + " .person-block').each(function() {\r\n			// Wrap image\r\n			$('img', $(this)).wrap('<div class=\"person-block__image\"></div>');\r\n\r\n			// Wrap everything else\r\n			$(this).children().not('.person-block__image').wrapAll('<div class=\"person-block__content\"></div>');\r\n		});\r\n\r\n		// Loop through each button\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":41,"column":28}}}) : helper)))
    + " .PTB09-cats button').each(function() {\r\n			// Grab the cat id from the text, and sanitize\r\n			var cat = $(this).text().replace(/\\s+/g, '-').toLowerCase();\r\n\r\n			// Set the data attribute\r\n			$(this).attr('data-cat', cat);\r\n		});\r\n\r\n		// Loop through each grid item\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":50,"column":12},"end":{"line":50,"column":28}}}) : helper)))
    + " .PTB09-grid > div').each(function() {\r\n			// Get all categories\r\n			var cats = $(this).data('cats');\r\n			// Split them into an array\r\n			var catArray = cats.split(',');\r\n			var $self = $(this);\r\n\r\n			// Loop through category array\r\n			$.each(catArray, function(key, value) {\r\n				// Sanitize category\r\n				var catVal = value.replace(/\\s+/g, '-').toLowerCase();\r\n\r\n				// Add Category class\r\n			  	$self.addClass('cat--' + catVal);\r\n			});\r\n		});\r\n\r\n		// Function to display 4 blocks at a time\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":68,"column":16},"end":{"line":68,"column":32}}}) : helper)))
    + "ShowBlocks() {\r\n			// If category is set, change loop element to this cat class\r\n			if($('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":70,"column":16},"end":{"line":70,"column":32}}}) : helper)))
    + " .PTB09-cats button.active').length) {\r\n				// Get category from currently active button\r\n				var activeCat = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":72,"column":30},"end":{"line":72,"column":46}}}) : helper)))
    + " .PTB09-cats button.active').data('cat');\r\n				// Set element as currently active button class\r\n				var searchElement = '#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":74,"column":32},"end":{"line":74,"column":48}}}) : helper)))
    + " .PTB09-grid > div.inactive.cat--' + activeCat;\r\n			} else { // Else loop all blocks\r\n				var searchElement = '#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":76,"column":32},"end":{"line":76,"column":48}}}) : helper)))
    + " .PTB09-grid > div.inactive';\r\n			}	\r\n\r\n			// Loop through first 4 blocks and remove inactive class and add display class\r\n			$(searchElement).each(function(index, element) {\r\n				$(this).removeClass('inactive').addClass('active');\r\n\r\n				// Return once we show fourth block\r\n				return index < 3;\r\n			});		\r\n\r\n			// Check if any more blocks. Hide button if none.\r\n			if(!$(searchElement).length) {\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":89,"column":14},"end":{"line":89,"column":30}}}) : helper)))
    + " .PTB09-grid__expand').hide();\r\n			}	\r\n		}\r\n\r\n		// Function to reset blocks\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":94,"column":16},"end":{"line":94,"column":32}}}) : helper)))
    + "ResetBlocks() {\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":95,"column":13},"end":{"line":95,"column":29}}}) : helper)))
    + " .PTB09-grid > div.active').removeClass('active').addClass('inactive');\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":96,"column":13},"end":{"line":96,"column":29}}}) : helper)))
    + " .PTB09-grid__expand').show();\r\n		}\r\n\r\n		// Show blocks on load\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":100,"column":7},"end":{"line":100,"column":23}}}) : helper)))
    + "ShowBlocks();\r\n\r\n		// Show blocks on button click\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":103,"column":12},"end":{"line":103,"column":28}}}) : helper)))
    + " .PTB09-grid__expand').click(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":104,"column":8},"end":{"line":104,"column":24}}}) : helper)))
    + "ShowBlocks();\r\n		});\r\n\r\n		// On category button click\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":108,"column":12},"end":{"line":108,"column":28}}}) : helper)))
    + " .PTB09-cats button').click(function() {\r\n			// If currently active, remove active class\r\n			if($(this).hasClass('active')) {\r\n				$(this).removeClass('active');\r\n			} else {\r\n				// Remove existing active button\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":114,"column":14},"end":{"line":114,"column":30}}}) : helper)))
    + " .PTB09-cats button.active').removeClass('active');\r\n				// Add active class to this button\r\n				$(this).addClass('active');\r\n			}\r\n			\r\n\r\n			// Reset all blocks\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":121,"column":8},"end":{"line":121,"column":24}}}) : helper)))
    + "ResetBlocks();\r\n\r\n			// Run show blocks function\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":124,"column":8},"end":{"line":124,"column":24}}}) : helper)))
    + "ShowBlocks();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB12"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":14,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"col-12 col-sm-6 col-md-4\">\r\n							<div class=\"bio-article\">\r\n								"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\r\n								<div class=\"bio-article__links\"></div>\r\n							</div>\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB12\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-headline\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":18},"end":{"line":22,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through all the articles\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":28}}}) : helper)))
    + " .bio-article').each(function() {\r\n			var $self = $(this);\r\n\r\n			// Loop through all the links in the articles\r\n			$('a', $(this)).each(function() {\r\n				// Check if Twitter and if so apply classes\r\n				if($(this).text().toLowerCase() == 'twitter') {\r\n					$(this).addClass('bio-article__links-social fa fa-twitter').text('');\r\n				} else if($(this).text().toLowerCase() == 'linkedin') { // Check if LinkedIn and if so apply classes\r\n					$(this).addClass('bio-article__links-social fa fa-linkedin').text('');\r\n				}\r\n\r\n				// Move to links wrapper\r\n				$(this).appendTo($('.bio-article__links', $self));\r\n			});\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB13"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":9,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"PTB13-item\"><div class=\"position-block\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":8,"column":58},"end":{"line":8,"column":71}}}) : helper))) != null ? stack1 : "")
    + "</div></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB13\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-headline\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"PTB13-grid\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB14"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"PTB14-carousel__item\"><div class=\"PTB14-carousel__item-inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":6,"column":80},"end":{"line":6,"column":93}}}) : helper))) != null ? stack1 : "")
    + "</div></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB14\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-carousel PTB14-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Initialise Slick Carousel\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":28}}}) : helper)))
    + " .PTB14-carousel').slick({\r\n			autoplay: false,\r\n			arrows: true,\r\n			dots: true,\r\n			draggable: false,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 33L18 17L1 0.999998\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 1L1 17L18 33\" stroke=\"#6D6F71\"/></svg></button>',\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 991,\r\n			      settings: {\r\n			        arrows: false\r\n			      }\r\n			    }\r\n			]\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB16"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"header-article__image border-color--theme\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"header-article__content\">\r\n					<div class=\"container\">\r\n						"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB16\">\r\n	<div class=\"block__content\">\r\n		<div class=\"header-article\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":6,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":13,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":18},"end":{"line":19,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB17"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "							<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"col-12 col-md-6 active\" data-cats=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"categories") || (depth0 != null ? lookupProperty(depth0,"categories") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"categories","hash":{},"data":data,"loc":{"start":{"line":37,"column":53},"end":{"line":37,"column":67}}}) : helper)))
    + "\">\r\n							<div class=\"event-card\">\r\n								<div class=\"event-card__image\"></div>\r\n								<div class=\"event-card__content\">\r\n									[!triangle]\r\n									<h4>"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0)) != null ? stack1 : "")
    + "</h4>\r\n									<div class=\"event-card__content-info\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"start") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":10},"end":{"line":46,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"location") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":49,"column":17}}})) != null ? stack1 : "")
    + "									</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"summary") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":9},"end":{"line":53,"column":16}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? lookupProperty(stack1,"href") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":9},"end":{"line":56,"column":16}}})) != null ? stack1 : "")
    + "								</div>\r\n							</div>\r\n						</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "											<p><strong><span class=\"event-card__timestamp\" data-timestamp-start=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"start") : depth0), depth0)) != null ? stack1 : "")
    + "\" data-timestamp-end=\""
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"end") : depth0), depth0)) != null ? stack1 : "")
    + "\"></span></strong></p>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "											<p><br><strong>Hosted: "
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"location") : depth0), depth0)) != null ? stack1 : "")
    + "</strong></p>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "										<div class=\"event-card__summary\"><strong>Overview</strong><br>"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "										[!button style=\"red\" link=\""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? lookupProperty(stack1,"href") : stack1), depth0)) != null ? stack1 : "")
    + "\" text=\"Find out more\"]\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB17\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"filters-bar\">\r\n				<div class=\"filters-bar__selects\">\r\n					<select class=\"PTB17-filter\" data-filter=\"category\">\r\n						<option value=\"\" selected>All Categories</option>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":10,"column":15}}})) != null ? stack1 : "")
    + "					</select>\r\n					<select class=\"PTB17-filter\" data-filter=\"month\">\r\n						<option value=\"\" selected>All Months</option>\r\n						<option value=\"0\">January</option>\r\n						<option value=\"1\">February</option>\r\n						<option value=\"2\">March</option>\r\n						<option value=\"3\">April</option>\r\n						<option value=\"4\">May</option>\r\n						<option value=\"5\">June</option>\r\n						<option value=\"6\">July</option>\r\n						<option value=\"7\">August</option>\r\n						<option value=\"8\">September</option>\r\n						<option value=\"9\">October</option>\r\n						<option value=\"10\">November</option>\r\n						<option value=\"11\">December</option>\r\n					</select>\r\n				</div>\r\n				<label class=\"filters-bar__search PTB17-search\">\r\n					Search events\r\n					<input type=\"text\" name=\"PTB17-search\">\r\n				</label>\r\n			</div>\r\n			<div class=\"PTB17-grid\">\r\n				<div class=\"PTB17-grid-none\"><p>No results match your search.</p></div>\r\n				<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":60,"column":14}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":68,"column":18},"end":{"line":68,"column":34}}}) : helper)))
    + "');\r\n\r\n		/* -- STYLING -- */\r\n		// Loop through each event card timestamp\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":72,"column":28}}}) : helper)))
    + " .event-card__timestamp').each(function() {\r\n			// Get timestamp\r\n			var startTimestamp = $(this).data('timestamp-start');\r\n			var endTimestamp = $(this).data('timestamp-end');\r\n\r\n			// Convert to date/time\r\n			var startDateTime = new Date(startTimestamp);\r\n			var endDateTime = new Date(endTimestamp);\r\n\r\n			// Get formatted dates\r\n			var startFormattedDate = startDateTime.toLocaleString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });\r\n			var endFormattedDate = endDateTime.toLocaleString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });\r\n\r\n			var returnedDateTimeString = '';\r\n			var startFormattedTime = '';\r\n			var endFormattedTime = '';\r\n\r\n			// If it is set to midnight, assumed to be all day event so don't show time\r\n			if(startDateTime.getHours() != '0') {\r\n				startFormattedTime = startDateTime.getHours().toLocaleString('en-GB', {minimumIntegerDigits: 2})  + ':' + startDateTime.getMinutes().toLocaleString('en-GB', {minimumIntegerDigits: 2});\r\n			}\r\n\r\n			if(endDateTime.getHours() != '0') {\r\n				endFormattedTime = endDateTime.getHours().toLocaleString('en-GB', {minimumIntegerDigits: 2})  + ':' + startDateTime.getMinutes().toLocaleString('en-GB', {minimumIntegerDigits: 2});\r\n			}\r\n				\r\n			// If start and end date are the same, only show once\r\n			if(startFormattedDate == endFormattedDate) {\r\n				returnedDateTimeString = 'Date: ' + startFormattedDate;\r\n\r\n				// Add start time if it exists\r\n				if(startFormattedTime != '') {\r\n					returnedDateTimeString = returnedDateTimeString + ' <br>Start: ' + startFormattedTime;\r\n				}\r\n\r\n				// Add end time if it exists\r\n				if(endFormattedTime != '') {\r\n					returnedDateTimeString = returnedDateTimeString + ' <br>End: ' + endFormattedTime;\r\n				}\r\n			} else { // Else if start and end date are different\r\n\r\n				// Add start date\r\n				returnedDateTimeString = 'Start Date: ' + startFormattedDate;\r\n\r\n				// Add start time if it exists\r\n				if(startFormattedTime != '') {\r\n					returnedDateTimeString = returnedDateTimeString + ' <br>Start Time: ' + startFormattedTime + '<br>';\r\n				}\r\n\r\n				// Add end date\r\n				returnedDateTimeString = returnedDateTimeString + ' <br>End Date: ' + endFormattedDate;\r\n\r\n				// Add end time if it exists\r\n				if(endFormattedTime != '') {\r\n					returnedDateTimeString = returnedDateTimeString + ' <br>End Time: ' + endFormattedTime;\r\n				}\r\n			}\r\n\r\n			// Set date/time in content\r\n			$(this).html(returnedDateTimeString);\r\n\r\n			// Add month class\r\n			$(this).parents('.col-12').addClass('filter-month--' + startDateTime.getMonth())\r\n		});\r\n\r\n		// Remove anchors from summary\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":138,"column":12},"end":{"line":138,"column":28}}}) : helper)))
    + " .event-card__summary a').each(function() {\r\n			$(this).replaceWith($(this).text());\r\n		});\r\n\r\n		// Move image\r\n		$('.event-card__summary img').each(function() {\r\n			$(this).appendTo($('.event-card__image', $(this).parents('.event-card')));\r\n		});\r\n\r\n		// Function to reset blocks\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":148,"column":16},"end":{"line":148,"column":32}}}) : helper)))
    + "ResetBlocks() {\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":149,"column":13},"end":{"line":149,"column":29}}}) : helper)))
    + " .PTB17-grid-none').removeClass('active');\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":150,"column":13},"end":{"line":150,"column":29}}}) : helper)))
    + " .row > div').addClass('active');\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":151,"column":13},"end":{"line":151,"column":29}}}) : helper)))
    + " .PTB17-search input').val();\r\n		}\r\n\r\n		/* -- CATEGORY FILTER -- */\r\n		// Loop through each grid item\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":156,"column":12},"end":{"line":156,"column":28}}}) : helper)))
    + " .row > div').each(function() {\r\n			// Get all categories\r\n			var cats = $(this).data('cats');\r\n			// Split them into an array\r\n			var catArray = cats.split(',');\r\n			var $self = $(this);\r\n\r\n			// Loop through category array\r\n			$.each(catArray, function(key, value) {\r\n				// Sanitize category\r\n				var catVal = value.replace(/\\s+/g, '-').toLowerCase();\r\n\r\n				// Add Category class\r\n			  	$self.addClass('filter-category--' + catVal);\r\n			});\r\n		});\r\n\r\n		// On category change\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":174,"column":12},"end":{"line":174,"column":28}}}) : helper)))
    + " select.PTB17-filter').change(function() {\r\n			// Reset all blocks\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":176,"column":8},"end":{"line":176,"column":24}}}) : helper)))
    + "ResetBlocks();\r\n\r\n			// Loop through all filters\r\n			$('.PTB17-filter').each(function() {\r\n\r\n				// Check filter has value\r\n				if($(this).val() != '') {\r\n					// Get sanitised value\r\n					var val = $(this).val().replace(/\\s+/g, '-').toLowerCase();\r\n\r\n					// Get filter name\r\n					var filterName = $(this).data('filter');\r\n\r\n					// Hide cards that don't have category class\r\n					$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":190,"column":15},"end":{"line":190,"column":31}}}) : helper)))
    + " .row .active').not('.filter-' + filterName + '--' + val).removeClass('active');\r\n				}\r\n\r\n			});\r\n\r\n			\r\n		});\r\n\r\n		/* -- SEARCH -- */\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":199,"column":16},"end":{"line":199,"column":32}}}) : helper)))
    + "Search() {\r\n			var searchString = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":200,"column":32},"end":{"line":200,"column":48}}}) : helper)))
    + " .PTB17-search input').val();\r\n\r\n			// Hide active blocks\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":203,"column":13},"end":{"line":203,"column":29}}}) : helper)))
    + " .row .active').removeClass('active');\r\n			\r\n			// If content in search\r\n			if(searchString.length > 0) {\r\n				var activeCount = 0;\r\n\r\n				// Loop through all panels\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":210,"column":14},"end":{"line":210,"column":30}}}) : helper)))
    + " .event-card').each(function() {\r\n					// Get content as string\r\n					var panelContent = $(this).text();\r\n\r\n					// If search string is contained in panel content, add active class\r\n					if(panelContent.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {\r\n						$(this).parent().addClass('active');\r\n						activeCount = activeCount + 1;\r\n					}\r\n				});\r\n\r\n				if(activeCount == 0) {\r\n					$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":222,"column":15},"end":{"line":222,"column":31}}}) : helper)))
    + " .PTB17-grid-none').addClass('active');\r\n				} else {\r\n					$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":224,"column":15},"end":{"line":224,"column":31}}}) : helper)))
    + " .PTB17-grid-none').removeClass('active');\r\n				}\r\n\r\n			} else {\r\n				// Else if no content reset\r\n				block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":229,"column":9},"end":{"line":229,"column":25}}}) : helper)))
    + "ResetBlocks();\r\n			}\r\n\r\n		}\r\n\r\n		// Run search after input change\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":235,"column":12},"end":{"line":235,"column":28}}}) : helper)))
    + " .PTB17-search input').keyup(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":236,"column":8},"end":{"line":236,"column":24}}}) : helper)))
    + "Search();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB18"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB18\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB18-intro\">\r\n				[!triangle]\r\n				<h2>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":19}}}) : helper))) != null ? stack1 : "")
    + "</h2>\r\n			</div>\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-md-3 PTB19-col-1\">\r\n					<div class=\"PTB18-sidebar\">\r\n						<button class=\"PTB18-filter-button\">Filter <svg width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.7254 14.9893L0.528584 5.11929C-0.176195 4.4371 -0.176195 3.33399 0.528584 2.65905L2.22305 1.0189C2.92783 0.336708 4.06748 0.336708 4.76476 1.0189L12 8.00771L19.2277 1.01164C19.9325 0.32945 21.0722 0.32945 21.7694 1.01164L23.4714 2.6518C24.1762 3.33399 24.1762 4.4371 23.4714 5.11203L13.2746 14.982C12.5698 15.6715 11.4302 15.6715 10.7254 14.9893Z\" fill=\"#E6E8EA\"/></svg></button>\r\n						<div class=\"PTB18-filter\"></div>\r\n					</div>\r\n				</div>\r\n				<div class=\"col-12 col-md-9 PTB19-col-2\">\r\n					<div class=\"PTB18-grid\" data-count=\"12\">\r\n						<div class=\"row\"></div>\r\n					</div>\r\n					<div class=\"PTB18-more\"><button class=\"btn btn--theme\">View More</button></div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":27,"column":18},"end":{"line":27,"column":34}}}) : helper)))
    + "');\r\n		var $block = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":28,"column":25},"end":{"line":28,"column":41}}}) : helper)))
    + "').parent('.wmg-block');\r\n\r\n		function ajaxPostQuery() {\r\n			queryURL = 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/rss/news.json';\r\n			contentURL = $block.data('content_url');\r\n			queryString = '&num=' + $('.PTB18-grid').attr('data-count');\r\n			scrollPosition = document.documentElement.scrollTop;\r\n\r\n			// Get all active filters\r\n			$('.PTB18-filter input:checked').each(function() {\r\n				queryString = queryString + '&tag=' + $(this).val();\r\n			});\r\n\r\n			// Ajax query to load posts\r\n			$.ajax({\r\n	  			async: false,\r\n		        url : queryURL + '?page=' + contentURL + queryString,\r\n		        type: 'GET',\r\n		        dataType: 'json',\r\n		        success: function(data) {\r\n					var posts = '';\r\n\r\n					$.each(data.items, function(key, data) {\r\n						// Convert timestamp to post date\r\n						var postDateTime = new Date(data.publicationDate);\r\n						var formattedDate = postDateTime.toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });\r\n\r\n						// Get image from content string\r\n						var formattedImage = '';\r\n						if (data.content.indexOf('src=\"') >= 0) {\r\n							var image = data.content.split('src=\"')[1].split('\" ')[0];\r\n\r\n							if(image != '') {\r\n								// If image doesn't have http, set full url\r\n								if(!image.startsWith('http')) {\r\n									image = contentURL + image;\r\n								}\r\n\r\n								formattedImage = '<div class=\"post-card__image\"><img src=\"' + image + '\"><svg width=\"35\" height=\"35\" viewBox=\"0 0 35 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M34.1855 35L0.867523 35L0.867528 -1.83932e-06L34.1855 35Z\" fill=\"#E6E8EA\"/></svg></div>';\r\n							}							\r\n						}\r\n\r\n						posts = posts + '<div class=\"col-12 col-sm-6 col-md-4\"><a href=\"' + data.url.href + '\" class=\"post-card border-color--theme\">' + formattedImage + '<div class=\"post-card__content\"><span class=\"post-card__date\">' + formattedDate + '</span><span class=\"post-card__cat\">' + data.categories[0] + '</span><h4 class=\"post-card__heading\">' + data.title + '</h4></div></a></div>';\r\n					});\r\n\r\n					$('.PTB18-grid > .row').html(posts);\r\n\r\n					// Keep window in same scroll position\r\n					window.scrollTo(0, scrollPosition);\r\n		        },\r\n		        error: function(data) {\r\n		        	console.log('Could not get data from ' + contentURL);\r\n		        },\r\n	        });\r\n		}\r\n\r\n		// Load posts on launch\r\n		ajaxPostQuery();\r\n\r\n		// On filter change run Ajax query\r\n	    $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":88,"column":15},"end":{"line":88,"column":31}}}) : helper)))
    + " .PTB18-filter').on('change', 'input', function() {\r\n			ajaxPostQuery();\r\n	    });\r\n\r\n	    // Add pagination\r\n	    $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":93,"column":15},"end":{"line":93,"column":31}}}) : helper)))
    + " .PTB18-more .btn').click(function() {\r\n	    	var currentCount = parseInt($('.PTB18-grid').attr('data-count'));\r\n	    	var newCount = currentCount + 12;\r\n	    	$('.PTB18-grid').attr('data-count', newCount);\r\n	    	ajaxPostQuery();\r\n	    });\r\n\r\n	    // Load filters\r\n	    var filtersContentURL = $block.data('filters_url');\r\n\r\n	    $.ajax({\r\n  			async: false,\r\n	        url : 'https://sitebuilder.warwick.ac.uk/sitebuilder2/api/dataentry/entries.json?page=' + filtersContentURL,\r\n	        type: 'GET',\r\n	        dataType: 'json',\r\n	        success: function(data) {				\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":109,"column":14},"end":{"line":109,"column":30}}}) : helper)))
    + " .PTB18-filter').html(data.items[0].content);\r\n\r\n				// Loop through each filter and create checkbox\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":112,"column":14},"end":{"line":112,"column":30}}}) : helper)))
    + " .PTB18-filter li').each(function() {\r\n					var cat = $(this).text();\r\n					$(this).html('<label><input type=\"checkbox\" value=\"' + cat + '\">' + cat + '</label>');\r\n				});\r\n	        },\r\n	        error: function(data) {\r\n	        	console.log('Could not get filters from ' + filtersContentURL);\r\n	        }\r\n	    });			\r\n\r\n	    // Mobile filter button\r\n	    $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":123,"column":15},"end":{"line":123,"column":31}}}) : helper)))
    + " .PTB18-filter-button').click(function() {\r\n	    	$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":124,"column":16},"end":{"line":124,"column":32}}}) : helper)))
    + " .PTB18-filter').toggleClass('active');\r\n	    	$(this).toggleClass('active');\r\n	    });\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB20"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"col-12 col-sm-6 col-md-3 active\">\r\n							<div class=\"PTB20-post-content\">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n							<a href=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? lookupProperty(stack1,"href") : stack1), depth0)) != null ? stack1 : "")
    + "\" class=\"post-card border-color--theme\">\r\n								<div class=\"post-card__content\">\r\n									<h4>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0)) != null ? stack1 : "")
    + "</h4>\r\n								</div>\r\n							</a>\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB20\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"filters-bar\">\r\n				<h2 class=\"filters-bar__heading\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":48}}}) : helper))) != null ? stack1 : "")
    + "</h2>\r\n				<label class=\"filters-bar__search PTB20-search\">\r\n					Search\r\n					<input type=\"text\" name=\"PTB20-search\">\r\n				</label>\r\n			</div>\r\n			<div class=\"PTB20-grid\">\r\n				<div class=\"PTB20-grid-none\"><p>No results match your search.</p></div>\r\n				<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":5},"end":{"line":23,"column":14}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n			\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":32,"column":18},"end":{"line":32,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each item\r\n		$('.PTB20-grid > .row > div').each(function() {\r\n			// Get image and move it\r\n			$('.PTB20-post-content img:first', $(this)).prependTo($('.post-card', $(this))).wrap('<div class=\"post-card__image\"></div>');\r\n		});\r\n\r\n		// Function to reset blocks\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":41,"column":16},"end":{"line":41,"column":32}}}) : helper)))
    + "ResetBlocks() {\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":42,"column":13},"end":{"line":42,"column":29}}}) : helper)))
    + " .PTB20-grid-none').removeClass('active');\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":43,"column":13},"end":{"line":43,"column":29}}}) : helper)))
    + " .row > div').addClass('active');\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":44,"column":13},"end":{"line":44,"column":29}}}) : helper)))
    + " .PTB20-search input').val();\r\n		}\r\n\r\n		/* -- SEARCH -- */\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":48,"column":16},"end":{"line":48,"column":32}}}) : helper)))
    + "Search() {\r\n			var searchString = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":49,"column":32},"end":{"line":49,"column":48}}}) : helper)))
    + " .PTB20-search input').val();\r\n\r\n			// Hide active blocks\r\n			$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":52,"column":13},"end":{"line":52,"column":29}}}) : helper)))
    + " .row .active').removeClass('active');\r\n			\r\n			// If content in search\r\n			if(searchString.length > 0) {\r\n				var activeCount = 0;\r\n\r\n				// Loop through all panels\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":59,"column":14},"end":{"line":59,"column":30}}}) : helper)))
    + " .post-card').each(function() {\r\n					// Get content as string\r\n					var panelContent = $(this).text();\r\n\r\n					// If search string is contained in panel content, add active class\r\n					if(panelContent.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {\r\n						$(this).parent().addClass('active');\r\n						activeCount = activeCount + 1;\r\n					}\r\n				});\r\n\r\n				if(activeCount == 0) {\r\n					$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":71,"column":15},"end":{"line":71,"column":31}}}) : helper)))
    + " .PTB20-grid-none').addClass('active');\r\n				} else {\r\n					$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":73,"column":15},"end":{"line":73,"column":31}}}) : helper)))
    + " .PTB20-grid-none').removeClass('active');\r\n				}\r\n\r\n			} else {\r\n				// Else if no content reset\r\n				block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":78,"column":9},"end":{"line":78,"column":25}}}) : helper)))
    + "ResetBlocks();\r\n			}\r\n\r\n		}\r\n\r\n		// Run search after input change\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":84,"column":12},"end":{"line":84,"column":28}}}) : helper)))
    + " .PTB20-search input').keyup(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":85,"column":8},"end":{"line":85,"column":24}}}) : helper)))
    + "Search();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB22"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":7},"end":{"line":16,"column":14}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div class=\"PTB22-carousel__item\">\r\n									<div class=\"card-block\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":14,"column":33},"end":{"line":14,"column":46}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n								</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB22\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"PTB-intro\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-lg-5\">\r\n					<div class=\"card-block\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n				</div>\r\n				<div class=\"col-12 col-lg-7\">\r\n					<div class=\"PTB-carousel PTB22-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":17,"column":15}}})) != null ? stack1 : "")
    + "					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":26,"column":18},"end":{"line":26,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each card block, check if an image exists and wrap it\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":28}}}) : helper)))
    + " .card-block').each(function() {\r\n			if($('img', $(this)).length) {\r\n				$('img', $(this)).unwrap('p').wrap('<div class=\"card-block__image\"></div>');\r\n			}\r\n		});\r\n\r\n		// Remove duplicate first carousel item\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":36,"column":28}}}) : helper)))
    + " .PTB22-carousel .PTB22-carousel__item').first().remove();\r\n\r\n		// Initialise Slick Carousel with custom arrows and dots\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":39,"column":28}}}) : helper)))
    + " .PTB22-carousel').slick({\r\n			autoplay: false,\r\n			draggable: false,\r\n			dots: true,\r\n			arrows: true,\r\n			slidesToShow: 2,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 33L18 17L1 0.999998\" stroke=\"#6D6F71\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"19\" height=\"34\" viewBox=\"0 0 19 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 1L1 17L18 33\" stroke=\"#6D6F71\"/></svg></button>',\r\n			customPaging : function(slider, i) {\r\n				var thumb = $(slider.$slides[i]).data();\r\n				return '<a>0' + parseInt(i+1) + '</a>';\r\n			},\r\n			responsive: [\r\n			    {\r\n			      breakpoint: 1199,\r\n			      settings: {\r\n			        slidesToShow: 2\r\n			      }\r\n			    },\r\n			    {\r\n			      breakpoint: 767,\r\n			      settings: {\r\n			        slidesToShow: 1\r\n			      }\r\n			    }\r\n			]\r\n		});\r\n\r\n		// Function to calculate desktop dots location\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":68,"column":16},"end":{"line":68,"column":32}}}) : helper)))
    + "DotsLocation() {\r\n			// If button exists\r\n			if($('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":70,"column":16},"end":{"line":70,"column":32}}}) : helper)))
    + " .PTB-intro .btn').length) {\r\n				// If window width is desktop\r\n				if($(window).width() > 991) {\r\n					// Set dots right to button width + 30px\r\n					var btnWidth = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":74,"column":30},"end":{"line":74,"column":46}}}) : helper)))
    + " .PTB-intro .btn').outerWidth() + 30;\r\n					$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":75,"column":15},"end":{"line":75,"column":31}}}) : helper)))
    + " .slick-dots').css({'right': btnWidth + 'px'})\r\n				}				\r\n			}\r\n\r\n		}\r\n\r\n		// Run dots calculation on page load\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":82,"column":7},"end":{"line":82,"column":23}}}) : helper)))
    + "DotsLocation();\r\n\r\n		// Run dots calculation on window resize\r\n		$(window).resize(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":86,"column":8},"end":{"line":86,"column":24}}}) : helper)))
    + "DotsLocation();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["SB01"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-SB block-SB01\">\r\n	<div class=\"block__content\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12 col-md-6\">\r\n				<div class=\"SB01-main\">\r\n					<div class=\"half-container half-container--md half-container--left\">\r\n						<svg width=\"165\" height=\"183\" viewBox=\"0 0 165 183\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"d-none d-md-block SB01-main-icon theme-fill-path\"><g style=\"mix-blend-mode:multiply\"><path d=\"M0 0L165 0L165 183L0 0Z\" fill=\"#EE3124\"/></g></svg>\r\n						<svg width=\"53\" height=\"82\" viewBox=\"0 0 53 82\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"d-md-none SB01-main-icon theme-fill-path\"><g style=\"mix-blend-mode:multiply\"><path d=\"M0 0H53V82L0 0Z\" fill=\"#EE3124\"/></g></svg>\r\n						<a href=\"/courses/\" class=\"btn btn--text SB01-main-topbtn\">< Back to all courses</a>\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"col-12 col-md-6\">\r\n				<div class=\"SB01-side\">\r\n					<div class=\"SB01-image\">\r\n						<div class=\"SB01-image-block bg--theme\"></div>\r\n						<div class=\"SB01-image-block-overlay\"></div>\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n					<div class=\"half-container half-container--md half-container--right\">\r\n						<div class=\"SB01-side__content\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":31,"column":18},"end":{"line":31,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each image\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":34,"column":28}}}) : helper)))
    + " .SB01-side__content img').each(function(index, element) {\r\n\r\n			// Create a wrapper for the content\r\n			$(this).nextUntil('img').wrapAll('<div class=\"icon-short-text\"><div class=\"icon-short-text-main\"></div></div>');\r\n\r\n			// Move the image into wrapper\r\n			$(this).prependTo($(this).next('.icon-short-text'));\r\n\r\n		});\r\n\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":44,"column":16},"end":{"line":44,"column":32}}}) : helper)))
    + "MoveImage() {\r\n			// If mobile/tablet\r\n			if($(window).width() < 992) {\r\n				$('.SB01-image').prependTo('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":47,"column":39},"end":{"line":47,"column":55}}}) : helper)))
    + " .SB01-main');\r\n			} else {\r\n				$('.SB01-image').prependTo('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":49,"column":39},"end":{"line":49,"column":55}}}) : helper)))
    + " .SB01-side');\r\n			}\r\n		}\r\n\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":53,"column":7},"end":{"line":53,"column":23}}}) : helper)))
    + "MoveImage();\r\n\r\n		$(window).resize(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":56,"column":8},"end":{"line":56,"column":24}}}) : helper)))
    + "MoveImage();\r\n		});\r\n\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["SB02"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-SB block-SB02\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-md-8\">\r\n					<form>\r\n						<input type=\"text\" placeholder=\"Find courses\">\r\n						<button type=\"submit\">\r\n							<svg width=\"19\" height=\"18\" viewBox=\"0 0 19 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n								<path d=\"M18.2552 15.5622L14.7499 12.0574C14.5917 11.8992 14.3772 11.8113 14.1522 11.8113H13.5791C14.5495 10.5705 15.1261 9.00967 15.1261 7.31179C15.1261 3.27273 11.8528 0 7.81303 0C3.77329 0 0.5 3.27273 0.5 7.31179C0.5 11.3508 3.77329 14.6236 7.81303 14.6236C9.51121 14.6236 11.0723 14.0471 12.3134 13.0768V13.6498C12.3134 13.8748 12.4013 14.0892 12.5595 14.2474L16.0648 17.7522C16.3953 18.0826 16.9297 18.0826 17.2567 17.7522L18.2517 16.7573C18.5822 16.4269 18.5822 15.8926 18.2552 15.5622ZM7.81303 11.8113C5.32731 11.8113 3.31271 9.80061 3.31271 7.31179C3.31271 4.82648 5.32379 2.81223 7.81303 2.81223C10.2988 2.81223 12.3134 4.82297 12.3134 7.31179C12.3134 9.79709 10.3023 11.8113 7.81303 11.8113Z\" fill=\"#F4F4F4\"/>\r\n							</svg>\r\n						</button>\r\n					</form>\r\n				</div>\r\n				<div class=\"col-12 col-md-4\">\r\n					"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":18},"end":{"line":24,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["SB03"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"SB03-carousel__item\">\r\n					<div class=\"SB03-carousel__item-main\">\r\n						"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-SB block-SB03\">\r\n	<div class=\"block__content\">\r\n		<div class=\"SB03-carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":10,"column":12}}})) != null ? stack1 : "")
    + "			\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":18},"end":{"line":17,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Set height variable - this is used to make all intro heights the same height to align timeline\r\n		var introHeight = 0;\r\n\r\n		// Loop through each carousel item\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":28}}}) : helper)))
    + " .SB03-carousel__item').each(function() {\r\n			// Wrap first image element in bg class\r\n			$('img', $(this)).first().unwrap('p').wrap('<div class=\"SB03-carousel__item-bg\"></div>');\r\n\r\n			// Move bg image element outside contain\r\n			$('.SB03-carousel__item-bg', $(this)).appendTo($(this));\r\n\r\n			// Wrap second image element in bg class\r\n			$('img', $(this)).first().unwrap('p').wrap('<div class=\"SB03-carousel__item-intro-img\"></div>');\r\n\r\n			// Wrap everything but p\r\n			$('.SB03-carousel__item-main', $(this)).children().not('p').wrapAll('<div class=\"SB03-carousel__item-intro\"></div>');\r\n\r\n			// Add timeline graphic\r\n			$('.SB03-carousel__item-intro', $(this)).after('<div class=\"SB03-carousel__item-timeline\"><span></span></div>');\r\n		});\r\n\r\n		// Initialise Slick Carousel with custom SVG arrows\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":41,"column":28}}}) : helper)))
    + " .SB03-carousel').slick({\r\n			autoplay: false,\r\n			arrows: true,\r\n			dots: false,\r\n			nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"20\" height=\"34\" viewBox=\"0 0 20 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 33L18 17L1 0.999998\" stroke=\"#F47920\" stroke-width=\"2\"/></svg></button>',\r\n			prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"20\" height=\"34\" viewBox=\"0 0 20 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 1L2 17L19 33\" stroke=\"#F47920\" stroke-width=\"2\"/></svg></button>'\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["SB04"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"SB04-block\">\r\n					"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-SB block-SB04\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":8,"column":12}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Loop through each block list (parents only) and initialise masonry\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":28}}}) : helper)))
    + " .SB04-block > ul').each(function() {\r\n			$(this).masonry();\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["TB01"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"block-TB01__column\">\r\n							"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n						</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-TB block-TB01\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12\">\r\n				<div class=\"block__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":5},"end":{"line":10,"column":14}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":18},"end":{"line":18,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["TB11"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"3") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"4") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"5") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"6") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"7") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-TB block-TB11\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row align-items-center\">\r\n				<div class=\"col-12 col-lg-6\">\r\n					<div class=\"TB__main\">\r\n						<div class=\"TB11__carousel\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":7},"end":{"line":10,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"3") : stack1)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":7},"end":{"line":13,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"4") : stack1)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":7},"end":{"line":16,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"5") : stack1)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":7},"end":{"line":19,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"6") : stack1)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":7},"end":{"line":22,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"7") : stack1)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":7},"end":{"line":25,"column":14}}})) != null ? stack1 : "")
    + "						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"col-12 col-lg-6\">\r\n					<div class=\"TB__media\">\r\n						<div class=\"TB__media-main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n						<div class=\"TB__media-description\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":41,"column":18},"end":{"line":41,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Initialise the Slick Carousel\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":44,"column":28}}}) : helper)))
    + " .TB11__carousel').slick({\r\n			autoplay: false,\r\n			dots: true,\r\n			arrows: false,\r\n			slidesToShow: 1\r\n		});\r\n\r\n	});\r\n</script>\r\n";
},"useData":true});
this["WMG"]["blocks"]["TB13"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-TB block-TB13\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-lg-8 TB13-main\">\r\n					"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n				<div class=\"col-12 col-lg-4 TB13-side\">\r\n					<div class=\"TB13-side__header\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n					<div class=\"TB13-side__posts\">\r\n						<div class=\"article-post border-color--theme\">\r\n							<span class=\"article-post__date\">2022-07-05</span>\r\n							<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n							<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n						</div>\r\n						<div class=\"article-post border-color--theme\">\r\n							<span class=\"article-post__date\">2022-07-05</span>\r\n							<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n							<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n						</div>\r\n						<div class=\"article-post border-color--theme\">\r\n							<span class=\"article-post__date\">2022-07-05</span>\r\n							<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n							<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":34,"column":18},"end":{"line":34,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["TB16"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-TB block-TB16\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"TB16-intro\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			<div class=\"TB16-row\">\r\n				<div class=\"TB16-col\">\r\n					<div class=\"article-post border-color--theme\">\r\n						<span class=\"article-post__date\">2022-07-05</span>\r\n						<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n						<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n					</div>\r\n				</div>\r\n				<div class=\"TB16-col\">\r\n					<div class=\"article-post border-color--theme\">\r\n						<span class=\"article-post__date\">2022-07-05</span>\r\n						<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n						<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n					</div>\r\n				</div>\r\n				<div class=\"TB16-col\">\r\n					<div class=\"article-post border-color--theme\">\r\n						<span class=\"article-post__date\">2022-07-05</span>\r\n						<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n						<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n					</div>\r\n				</div>\r\n				<div class=\"TB16-col\">\r\n					<div class=\"article-post border-color--theme\">\r\n						<span class=\"article-post__date\">2022-07-05</span>\r\n						<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n						<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n					</div>\r\n				</div>\r\n				<div class=\"TB16-col\">\r\n					<div class=\"article-post border-color--theme\">\r\n						<span class=\"article-post__date\">2022-07-05</span>\r\n						<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n						<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n					</div>\r\n				</div>\r\n				<div class=\"TB16-col\">\r\n					<div class=\"article-post border-color--theme\">\r\n						<span class=\"article-post__date\">2022-07-05</span>\r\n						<h3 class=\"article-post__heading\"><a href=\"#\">A key stages methodology for selecting a hybrid vehicle powertrain architecture illustrated with a RCV concept</a></h3>\r\n						<span class=\"article-post__authors\">Authors: Assad, Fadi | Konstantinov, Sergey | Ahmad, Musab | Rushforth, Emma | Harrison, Robert</span>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":54,"column":18},"end":{"line":54,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["TB20"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-TB block-TB20\">\r\n	<div class=\"block__content\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"half-container half-container--lg half-container--left\">\r\n					"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n			</div>\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"TB20-media bg--theme\">\r\n					"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":18},"end":{"line":19,"column":34}}}) : helper)))
    + "');\r\n\r\n		// Wrap image\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":28}}}) : helper)))
    + " .TB20-media img').unwrap('p').wrap('<div class=\"TB20-media__image\"></div>');\r\n\r\n		// Wrap everything else\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":28}}}) : helper)))
    + " .TB20-media').children().not('.TB20-media__image').wrapAll('<div class=\"TB20-media__content\"></div>');\r\n	});\r\n</script>";
},"useData":true});