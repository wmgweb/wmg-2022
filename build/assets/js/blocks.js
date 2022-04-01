this["WMG"] = this["WMG"] || {};
this["WMG"]["blocks"] = this["WMG"]["blocks"] || {};
this["WMG"]["blocks"]["block_0001"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "My name is "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"content_name") || (depth0 != null ? lookupProperty(depth0,"content_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content_name","hash":{},"data":data,"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":27}}}) : helper)));
},"useData":true});
this["WMG"]["blocks"]["block_0002"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "My age is "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"content_age") || (depth0 != null ? lookupProperty(depth0,"content_age") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content_age","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":25}}}) : helper)));
},"useData":true});