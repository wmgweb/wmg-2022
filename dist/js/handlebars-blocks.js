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
    + "');	\r\n\r\n		// Looop through all accordion items\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":28}}}) : helper)))
    + " .AC-accordion').each(function() {\r\n\r\n			// Create wrapper for heading\r\n			$(this).children().first().wrap('<div class=\"AC-accordion__heading\"></div>');\r\n			// Create wrapper for content\r\n			$(this).children().not(':first-child').wrapAll('<div class=\"AC-accordion__content\"></div>');\r\n\r\n			// Append chevron SVG\r\n			$('.AC-accordion__heading', $(this)).append('<svg width=\"15\" height=\"11\" viewBox=\"0 0 15 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.70337 10.1595L0.330365 3.57953C-0.110122 3.12474 -0.110122 2.38933 0.330365 1.93937L1.38941 0.845933C1.8299 0.39114 2.54217 0.39114 2.97798 0.845933L7.5 5.50514L12.0173 0.841094C12.4578 0.386301 13.1701 0.386301 13.6059 0.841094L14.6696 1.93453C15.1101 2.38932 15.1101 3.12473 14.6696 3.57469L8.29663 10.1547C7.85614 10.6143 7.14386 10.6143 6.70337 10.1595Z\" fill=\"#6A6A6A\"/></svg>');\r\n		});\r\n\r\n		// Add on-click function to show/hide content\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":42,"column":28}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":28}}}) : helper)))
    + " .AC02__intro .btn').wrap('<div class=\"AC02__intro-btn\"></div>');\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":28}}}) : helper)))
    + " .AC02__intro').children().not('.AC02__intro-btn').wrapAll('<div class=\"AC02__intro-content\"></div>');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":35,"column":28}}}) : helper)))
    + " .AC02__carousel').slick({\r\n			autoplay: false,\r\n			dots: true,\r\n			arrows: false,\r\n			fade: true,\r\n			customPaging : function(slider, i) {\r\n        		var title = $(slider.$slides[i].innerHTML).find('.AC02__carousel-item-content').children().first().html();\r\n        		return '<span>' + title + '</span>';\r\n    		},\r\n		});\r\n\r\n		// Loop through each slide content\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":47,"column":12},"end":{"line":47,"column":28}}}) : helper)))
    + " .AC02__carousel-item-content').each(function() {\r\n			var $parent = $(this).parents('.AC02__carousel-item');\r\n\r\n			// Remove pagination heading\r\n			$(this).children().first().remove();\r\n\r\n			// Move image\r\n			var $img = $('img', $(this));\r\n			var imgSrc = $img.attr('src');\r\n			var imgAlt = $img.attr('alt');\r\n			$img.unwrap('p').remove();\r\n\r\n			$('.AC02__carousel-item-image', $parent).prepend('<img src=\"' + imgSrc + '\" alt=\"' + imgAlt + '\">');\r\n\r\n		});\r\n\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":63,"column":16},"end":{"line":63,"column":32}}}) : helper)))
    + "DotsPosition() {\r\n			if($(window).width() < 992) {\r\n				var dotsHeight = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":65,"column":31},"end":{"line":65,"column":47}}}) : helper)))
    + " .slick-dots').height() + 40;\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":66,"column":14},"end":{"line":66,"column":30}}}) : helper)))
    + " .AC02__intro').css('padding-bottom', dotsHeight + 'px')\r\n			}\r\n		}\r\n\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":70,"column":7},"end":{"line":70,"column":23}}}) : helper)))
    + "DotsPosition();\r\n\r\n		$(window).resize(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":73,"column":8},"end":{"line":73,"column":24}}}) : helper)))
    + "DotsPosition();\r\n		});\r\n		\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["AC04"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-AC block-AC04\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			AC04\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
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
    + "');	\r\n\r\n		// Looop through all accordion items\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":28}}}) : helper)))
    + " .AC-accordion').each(function() {\r\n\r\n			// Create wrapper for heading\r\n			$(this).children().first().wrap('<div class=\"AC-accordion__heading\"></div>');\r\n			// Create wrapper for content\r\n			$(this).children().not(':first-child').wrapAll('<div class=\"AC-accordion__content\"></div>');\r\n\r\n			// Append chevron SVG\r\n			$('.AC-accordion__heading', $(this)).append('<svg width=\"15\" height=\"11\" viewBox=\"0 0 15 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.70337 10.1595L0.330365 3.57953C-0.110122 3.12474 -0.110122 2.38933 0.330365 1.93937L1.38941 0.845933C1.8299 0.39114 2.54217 0.39114 2.97798 0.845933L7.5 5.50514L12.0173 0.841094C12.4578 0.386301 13.1701 0.386301 13.6059 0.841094L14.6696 1.93453C15.1101 2.38932 15.1101 3.12473 14.6696 3.57469L8.29663 10.1547C7.85614 10.6143 7.14386 10.6143 6.70337 10.1595Z\" fill=\"#6A6A6A\"/></svg>');\r\n		});\r\n\r\n		// Add on-click function to show/hide content\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":28}}}) : helper)))
    + " .AC-accordion__heading').click(function() {\r\n			var $parent = $(this).parent('.AC-accordion');\r\n			$parent.toggleClass('active');\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["CAB01"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-CAB block-CAB01\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12\">\r\n				<div class=\"block__content\">\r\n					<h2>CAB01</h2>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":28}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":28}}}) : helper)))
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
    + "\" class=\"block block-CO block-CO10\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"CO10-main\">\r\n				<div class=\"CO10-social\">\r\n					<h3 class=\"CO10-social__heading\">Connect with us</h3>\r\n					<ul class=\"CO10-social__links color--white\">\r\n						<li><a href=\"https://twitter.com/wmgwarwick\" title=\"Twitter\" target=\"_blank\"><i class=\"fa fa-twitter fa-2x fa-fw\"></i></a></li>\r\n						<li><a href=\"https://www.linkedin.com/company/wmg-university-of-warwick/\" title=\"LinkedIn\" target=\"_blank\"><i class=\"fa fa-linkedin fa-2x fa-fw\"></i></a></li>\r\n					</ul>\r\n				</div>\r\n				<div class=\"CO10-content\">\r\n					"
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
    + "</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"FB01__module FB01__module-right bg--light-grey\">\r\n					<div class=\"FB01__module-top bg--red color--white\">\r\n						<div class=\"row FB01__module-top-split\">\r\n							<div class=\"col-12 col-md-6\">\r\n								<div class=\"FB01__module-top-main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n							</div>\r\n							<div class=\"d-none d-md-block col-md-6\">\r\n								<div class=\"FB01__module-top-image\"></div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<div class=\"FB01__module-bottom\">\r\n						<div class=\"half-container half-container--lg half-container--right\">\r\n							<div class=\"FB01__module-bottom-content\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"3") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":38,"column":18},"end":{"line":38,"column":34}}}) : helper)))
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":40,"column":28}}}) : helper)))
    + " .FB01__module-top-main img:first-child').appendTo('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":40,"column":87},"end":{"line":40,"column":103}}}) : helper)))
    + " .FB01__module-top-image');\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":41,"column":28}}}) : helper)))
    + " .FB01__module-top-main p:first-child').remove();\r\n	});\r\n</script>";
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
    + "</div>\r\n			<div class=\"col-12 col-md-6 FB03__main\">\r\n				<svg width=\"150\" height=\"305\" viewBox=\"0 0 150 305\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"corner-arrow theme-fill-path\">\r\n					<path d=\"M0 0L150 -1.31134e-05L150 305L0 0Z\" fill=\"#EE3124\"/>\r\n				</svg>\r\n				<div class=\"half-container half-container--right\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":16,"column":18},"end":{"line":16,"column":34}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":28}}}) : helper)))
    + " .FB04__article').each(function() {\r\n			$('.FB04__article-content img', $(this)).appendTo($('.FB04__article-img', $(this)));\r\n			$('.FB04__article-content p:first-child', $(this)).remove();\r\n		});\r\n	});\r\n</script>";
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
    + "\" class=\"block block-FB block-FB05\">\r\n	<div class=\"block__content\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"half-container half-container--lg half-container--left\">\r\n					<div class=\"FB05__main\">\r\n						<svg width=\"150\" height=\"305\" viewBox=\"0 0 150 305\" preserveAspectRatio=\"none\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"corner-arrow theme-fill-path\">\r\n							<path d=\"M0 0L150 -1.31134e-05L150 305L0 0Z\" fill=\"#de0905\"/>\r\n						</svg>\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"col-12 col-lg-6\">\r\n				<div class=\"FB05__side\">\r\n					<div class=\"inner-block inner-block--red\">\r\n						<svg width=\"33\" height=\"351\" viewBox=\"0 0 33 351\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n							<g style=\"mix-blend-mode:multiply\">\r\n								<path d=\"M0.632812 36.436L32.018 0V351H0.632812V36.436Z\" fill=\"#de0905\"/>\r\n							</g>\r\n						</svg>\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n					<div class=\"FB05__side-image\">\r\n						"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":34,"column":18},"end":{"line":34,"column":34}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":28}}}) : helper)))
    + " .FB06-carousel__item').each(function() {\r\n			$('img', $(this)).unwrap('p').wrap('<div class=\"FB06-carousel__item-image\"></div>');\r\n			$('.FB06-carousel__item-image', $(this)).prepend('<svg width=\"57\" height=\"69\" viewBox=\"0 0 57 69\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56.7634 68.1979L0 68.1979L6.61655e-06 0.242188L56.7634 68.1979Z\" fill=\"#D9DDE0\"/></svg>');\r\n			$(this).children().not('.FB06-carousel__item-image').wrapAll('<div class=\"FB06-carousel__item-content\"><div class=\"half-container half-container--lg half-container--right\"></div></div>');\r\n		});\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":28}}}) : helper)))
    + " .FB06-main img').unwrap('p').wrap('<div class=\"FB06-main__image\"></div>');\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":34,"column":28}}}) : helper)))
    + " .FB06-main__image').prepend('<svg width=\"57\" height=\"74\" viewBox=\"0 0 57 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"bg-fill-path\"><path d=\"M0 0L56.7634 -9.92483e-06L56.7634 73.5887L0 0Z\" fill=\"#E6E8EA\"/></svg>');\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":35,"column":28}}}) : helper)))
    + " .FB06-main').children().not('.FB06-main__image').wrapAll('<div class=\"FB06-main__content\"><div class=\"half-container half-container--lg half-container--left\"></div></div>');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":37,"column":28}}}) : helper)))
    + " .FB06-carousel').slick({\r\n			arrows: false,\r\n			dots: true,\r\n			draggable: false,\r\n			customPaging : function(slider, i) {\r\n				var thumb = $(slider.$slides[i]).data();\r\n				return '<a>0' + parseInt(i+1) + '</a>';\r\n			}\r\n		});\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["HB01"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"index")),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"block-HB01__carousel-item\">\r\n						"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0)) != null ? stack1 : "")
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
    + "\" class=\"block block-HB01\">\r\n	<div class=\"block__content\">\r\n		<!-- Get first content as background image -->\r\n		"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n		<div id=\"slick-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":33}}}) : helper)))
    + "\" class=\"block-HB01__carousel\">\r\n			<!-- All content except first output as carousel item -->\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":13,"column":12}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":18},"end":{"line":18,"column":34}}}) : helper)))
    + "', ['blockBG']);\r\n\r\n		var blockParent = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":30},"end":{"line":20,"column":46}}}) : helper)))
    + "').parent('.wmg-block');\r\n\r\n		slickSettings = {};\r\n		\r\n		if(blockParent.attr('data-slick')) {\r\n			var slickSettings = blockParent.attr('data-slick');\r\n			slickSettings = JSON.parse(slickSettings.replace(/'/g, '\"'));\r\n		}\r\n\r\n		$('.block-HB01__carousel-item', blockParent).prepend('<span class=\"brand-triangle\"></span>');\r\n\r\n		var slickObject = {\r\n			autoplay: true,\r\n			arrows: false,\r\n			draggable: false,\r\n			customPaging : function(slider, i) {\r\n				var thumb = $(slider.$slides[i]).data();\r\n				return '<a>0' + parseInt(i+1) + '</a>';\r\n			}			\r\n		}\r\n\r\n		if(slickSettings.hasOwnProperty('dots')) {\r\n			slickObject.dots = slickSettings.dots;\r\n		}\r\n\r\n		$(window).on('load', function(){\r\n			$('#slick-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":46,"column":13},"end":{"line":46,"column":29}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":28}}}) : helper)))
    + " img').each(function() {\r\n			$(this).unwrap('p');\r\n		});\r\n	});\r\n</script>";
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":28}}}) : helper)))
    + " img').each(function() {\r\n			$(this).unwrap('p');\r\n		});\r\n	});\r\n</script>";
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

  return "						"
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
    + "\" class=\"block block-IN block-IN01\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12 col-md-6\">\r\n				<div class=\"block__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":5},"end":{"line":8,"column":14}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":16,"column":18},"end":{"line":16,"column":34}}}) : helper)))
    + "', ['blockBG']);\r\n	});\r\n</script>";
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
    + "\r\n					</aside>\r\n					<div class=\"IN__form bg--dark color--white\">\r\n						<p>Register your details for updates</p>\r\n						<form method=\"POST\" action=\"\">\r\n							<input type=\"email\" name=\"email\" placeholder=\"Email address\" required>\r\n							<button type=\"submit\" class=\"btn btn--red\">Submit</button>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":18},"end":{"line":24,"column":34}}}) : helper)))
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
    + "\" class=\"block block-IN block-IN04\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"row\">\r\n				<div class=\"col-12 col-lg-6\"><div class=\"IN__main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div></div>\r\n				<div class=\"col-12 col-lg-6\">\r\n					<div class=\"IN__media\">\r\n						<div class=\"IN__media-main\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"1") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n						<div class=\"IN__media-description\">"
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? lookupProperty(stack1,"2") : stack1)) != null ? lookupProperty(stack1,"content") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":18,"column":18},"end":{"line":18,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>\r\n";
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
    + "');\r\n\r\n		var $img = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":11,"column":23},"end":{"line":11,"column":39}}}) : helper)))
    + " img');\r\n		var imgSrc = $img.attr('src');\r\n		$img.unwrap('p').remove();\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":28}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":28}}}) : helper)))
    + " img').each(function() {\r\n			$(this).unwrap('p');\r\n		});\r\n\r\n		var block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":26,"column":11},"end":{"line":26,"column":27}}}) : helper)))
    + "ImageCount = 0;\r\n		var block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":27,"column":11},"end":{"line":27,"column":27}}}) : helper)))
    + "Images = [];\r\n		var block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":28,"column":11},"end":{"line":28,"column":27}}}) : helper)))
    + "SlideImages = [];\r\n\r\n		// Loop through images and split into array of slides\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":28}}}) : helper)))
    + " .MB02__images img').each(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":32,"column":24}}}) : helper)))
    + "ImageCount = block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":32,"column":42},"end":{"line":32,"column":58}}}) : helper)))
    + "ImageCount + 1;\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":33,"column":24}}}) : helper)))
    + "SlideImages.push($(this).attr('src'));\r\n\r\n			// If slide is finished, set new array\r\n			if(block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":36,"column":11},"end":{"line":36,"column":27}}}) : helper)))
    + "ImageCount % 4 === 0) {\r\n				block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":37,"column":9},"end":{"line":37,"column":25}}}) : helper)))
    + "Images.push(block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":37,"column":42},"end":{"line":37,"column":58}}}) : helper)))
    + "SlideImages);\r\n				block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":38,"column":9},"end":{"line":38,"column":25}}}) : helper)))
    + "SlideImages = [];\r\n			}\r\n\r\n		});\r\n\r\n		$.each(block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":43,"column":14},"end":{"line":43,"column":30}}}) : helper)))
    + "Images, function(index, value) {\r\n		  	var block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":44,"column":14},"end":{"line":44,"column":30}}}) : helper)))
    + "SlideHTML = '<div class=\"MB02-grid\"><div class=\"row\"><div class=\"col-12 col-md-6\"><div class=\"MB02-img\"><img src=\"' + value[0] + '\"></div></div><div class=\"col-12 col-md-6\"><div class=\"row\"><div class=\"col-12 col-md-6\"><div class=\"MB02-img MB02-img--half\"><img src=\"' + value[1] + '\"></div></div><div class=\"col-12 col-md-6\"><div class=\"MB02-img MB02-img--half\"><img src=\"' + value[2] + '\"></div></div><div class=\"col-12\"><div class=\"MB02-img MB02-img--half\"><img src=\"' + value[3] + '\"></div></div></div></div></div></div>';\r\n		  	$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":45,"column":15},"end":{"line":45,"column":31}}}) : helper)))
    + " .MB02-carousel').prepend(block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":45,"column":62},"end":{"line":45,"column":78}}}) : helper)))
    + "SlideHTML);\r\n		});\r\n\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":48,"column":16},"end":{"line":48,"column":32}}}) : helper)))
    + "Carousels() {\r\n			if($(window).width() < 768) {\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":50,"column":14},"end":{"line":50,"column":30}}}) : helper)))
    + " .MB02-mobile-carousel').slick({\r\n					dots: true,\r\n					arrows: true,\r\n					autoplay: false,\r\n					nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L14 13.5L1 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n					prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1L1 13.5L14 26\" stroke=\"#6D6F71\"/></svg></button>'\r\n				});			\r\n			}\r\n\r\n			if($(window).width() >= 768) {\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":60,"column":14},"end":{"line":60,"column":30}}}) : helper)))
    + " .MB02-carousel').slick({\r\n					dots: false,\r\n					arrows: true,\r\n					autoplay: false,\r\n					nextArrow: '<button class=\"slick-next slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L14 13.5L1 26\" stroke=\"#6D6F71\"/></svg></button>',\r\n					prevArrow: '<button class=\"slick-prev slick-arrow\"><svg width=\"15\" height=\"27\" viewBox=\"0 0 15 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1L1 13.5L14 26\" stroke=\"#6D6F71\"/></svg></button>'\r\n				});			\r\n			}			\r\n		}\r\n\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":70,"column":7},"end":{"line":70,"column":23}}}) : helper)))
    + "Carousels();\r\n\r\n		$(window).resize(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":73,"column":8},"end":{"line":73,"column":24}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":28}}}) : helper)))
    + " img').each(function() {\r\n			$(this).unwrap('p');\r\n		});\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":28}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":28}}}) : helper)))
    + " img').each(function() {\r\n			$(this).unwrap('p');\r\n		});\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":28}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":28}}}) : helper)))
    + " img').each(function() {\r\n			$(this).unwrap('p');\r\n		});\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":28}}}) : helper)))
    + " .MB05__intro .btn').appendTo('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":66},"end":{"line":24,"column":82}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":28}}}) : helper)))
    + " img').each(function() {\r\n			$(this).unwrap('p');\r\n		});\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":28}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":28}}}) : helper)))
    + " .MB08-bg img').unwrap('p');\r\n	});\r\n</script>";
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
    + "');\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":28}}}) : helper)))
    + " img').unwrap('p');		 \r\n	});\r\n</script>";
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":28}}}) : helper)))
    + " img').each(function() {\r\n			$(this).unwrap('p');\r\n		});\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":28}}}) : helper)))
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
    + "\" class=\"block block-MB block-MB12\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			<div class=\"MB12-filters\">\r\n				<label class=\"MB12-search\">\r\n					Quick search\r\n					<input type=\"text\" name=\"MB12-search\">\r\n				</label>\r\n			</div>\r\n			<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":18},"end":{"line":22,"column":34}}}) : helper)))
    + "');\r\n\r\n		function block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":32}}}) : helper)))
    + "Search() {\r\n			var searchString = $('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":25,"column":48}}}) : helper)))
    + " .MB12-search input').val();\r\n			var currentActiveCount = 0;\r\n			console.log(searchString);\r\n			// If content in search\r\n			if(searchString.length > 0) {\r\n				// Hide active blocks\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":31,"column":14},"end":{"line":31,"column":30}}}) : helper)))
    + " .row .active').removeClass('active');\r\n\r\n				// Loop through all panels\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":34,"column":14},"end":{"line":34,"column":30}}}) : helper)))
    + " .media-panel').each(function() {\r\n					// Get content as string\r\n					var panelContent = $(this).text();\r\n\r\n					// If search string is contained in panel content, add active class\r\n					if(panelContent.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {\r\n						$(this).parent().addClass('active');\r\n						currentActiveCount = currentActiveCount + 1;\r\n\r\n						// If 6 are already showing, stop\r\n						if(currentActiveCount >= 6) {\r\n							return false;\r\n						}\r\n					}\r\n				});\r\n\r\n			} else {\r\n				// Else if no content show first 6\r\n				$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":52,"column":14},"end":{"line":52,"column":30}}}) : helper)))
    + " .row').children().slice(0,6).addClass('active');\r\n			}\r\n\r\n		}\r\n\r\n		// Run search on load\r\n		block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":58,"column":7},"end":{"line":58,"column":23}}}) : helper)))
    + "Search();\r\n\r\n		// Run search after input change\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":61,"column":28}}}) : helper)))
    + " .MB12-search input').keyup(function() {\r\n			block"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":62,"column":8},"end":{"line":62,"column":24}}}) : helper)))
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
this["WMG"]["blocks"]["PTB01"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB01\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12\">\r\n				<div class=\"block__content\">\r\n					<h2>PTB01</h2>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB03"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB03\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12\">\r\n				<div class=\"block__content\">\r\n					<h2>PTB03</h2>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB04"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB04\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12\">\r\n				<div class=\"block__content\">\r\n					<h2>PTB04</h2>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB06"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB06\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12\">\r\n				<div class=\"block__content\">\r\n					<h2>PTB06</h2>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB07"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB07\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12\">\r\n				<div class=\"block__content\">\r\n					<h2>PTB07</h2>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB08"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB08\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB08\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB09"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB09\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB09\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB10"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB10\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB10\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB12"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB12\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB12\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB13"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB13\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB13\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB14"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB14\">\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div class=\"col-12\">\r\n				<div class=\"block__content\">\r\n					<h2>PTB14</h2>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB15"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["WMG"]["blocks"]["PTB16"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB16\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB16\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB17"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB17\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB17\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB18"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB18\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB18\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["PTB20"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-PTB block-PTB20\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			PTB20\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["SB01"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-SB block-SB01\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			SB01\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["SB02"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-SB block-SB02\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			SB02\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["SB03"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-SB block-SB03\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			SB03\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
},"useData":true});
this["WMG"]["blocks"]["SB04"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":31}}}) : helper)))
    + "\" class=\"block block-SB block-SB04\">\r\n	<div class=\"container\">\r\n		<div class=\"block__content\">\r\n			SB04\r\n		</div>\r\n	</div>\r\n</div>\r\n<script>\r\n	jQuery(document).ready(function($) {\r\n		blockFunctions('"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":34}}}) : helper)))
    + "');\r\n	});\r\n</script>";
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":43,"column":28}}}) : helper)))
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
    + "');\r\n\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":28}}}) : helper)))
    + " .TB20-media img').unwrap('p').wrap('<div class=\"TB20-media__image\"></div>');\r\n		$('#block-"
    + alias4(((helper = (helper = lookupProperty(helpers,"blockCount") || (depth0 != null ? lookupProperty(depth0,"blockCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockCount","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":28}}}) : helper)))
    + " .TB20-media').children().not('.TB20-media__image').wrapAll('<div class=\"TB20-media__content\"></div>');\r\n	});\r\n</script>";
},"useData":true});