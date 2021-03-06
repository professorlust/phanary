(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['track.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <span>Source:\r\n                <span class=\"source\">"
    + container.escapeExpression(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"source","hash":{},"data":data}) : helper)))
    + "</span>\r\n            </span>\r\n            <br>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <span class=\"tags\">Tags:\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    <span class=\"tag\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"section section--track\" data-atmosphere=\""
    + alias4(((helper = (helper = helpers.atmosphereId || (depth0 != null ? depth0.atmosphereId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"atmosphereId","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"section__heading\">\r\n        <h4 class=\"section__heading__title\">\r\n            <span class=\"section__heading__title__text\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </h4>\r\n        <div class=\"btn btn--delete btn--medium btn--inverted btn--header\">\r\n            <div class=\"btn__inner\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn btn--reorder btn--reorder-up btn--medium btn--inverted btn--header\">\r\n            <div class=\"btn__inner\">\r\n            <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn btn--reorder btn--reorder-down btn--medium btn--inverted btn--header\">\r\n            <div class=\"btn__inner\">\r\n            <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn btn--drag btn--medium btn--inverted btn--header\">\r\n            <div class=\"btn__inner\">\r\n            <i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section__body\">\r\n        <div class=\"wrapper\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.source : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"section__flex\">\r\n                <div class=\"volume section__flex__item\">\r\n                    <input type=\"range\" min=\"0\" max=\"1\" value=\"1\" step=\"0.05\">\r\n                    <label class=\"control control--checkbox control--custom volume__mute\">\r\n                        <input type=\"checkbox\" class=\"btn--mute\">\r\n                        <div class=\"control__indicator control__indicator--medium\"></div>\r\n                        <div class=\"control--custom__on\"><i class=\"fa fa-volume-off\" aria-hidden=\"true\"></i></div>\r\n                        <div class=\"control--custom__off\"><i class=\"fa fa-volume-up\" aria-hidden=\"true\"></i></div>\r\n                    </label>\r\n                </div>\r\n                <!-- TODO: disabled/enabled -->\r\n                <div class=\"section__flex__item\">\r\n                    <div class=\"btn--play btn btn--rounded btn--medium\">\r\n                        <div class=\"btn__inner\">\r\n                            <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"btn--stop btn btn--rounded btn--medium\">\r\n                        <div class=\"btn__inner\">\r\n                            <i class=\"fa fa-stop\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();