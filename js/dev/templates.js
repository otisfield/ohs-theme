(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['articles'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <hr class=\"eventDivider\">\r\n    <div class=\"event vevent\" itemprop=\"event\" itemscope itemtype=\"http://schema.org/Event\">\r\n        <div class=\"eventDate\">\r\n            <a href=\"/events/"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\"><span>OCT</span><br>\r\n                <span>22</span><br>\r\n                <span>2015</span></a>\r\n        </div>\r\n        <div class=\"eventData\">\r\n            <a href=\"/events/"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" itemprop=\"url\"><span class=\"eventTitle summary\" itemprop=\"name\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a><br>\r\n            <span class=\"eventInfo location\" itemprop=\"location\">Old Town House, Otisfield</span><br>\r\n            <span class=\"eventTime\">7:00PM</span>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Articles</h2>\r\n<hr class=\"headerDivider\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n";
},"useData":true});
templates['breadcrumbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ol class=\"breadcrumb\">\r\n    <li><a href=\"#\">Home</a></li>\r\n    <li><a href=\"#\">Events</a></li>\r\n    <li><a class=\"active\">Single Event</a></li>\r\n</ol>";
},"useData":true});
templates['contentBody'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis congue justo. Integer in ipsum erat. Nulla eu rhoncus urna, vitae feugiat orci. Vivamus at laoreet augue. Donec in aliquam arcu. Praesent luctus ullamcorper elit, sed bibendum justo imperdiet sit amet. Nunc luctus lacinia odio vel vestibulum. Etiam faucibus nisl ipsum, id tristique arcu imperdiet eget. Aenean dapibus lacinia purus eget egestas.</p>\r\n\r\n<p>Suspendisse non sapien blandit, posuere urna ut, eleifend dui. Proin eu lobortis ex, sed ornare massa. Praesent lacus metus, efficitur sit amet mollis sit amet, tempor et mauris. Duis aliquet blandit nulla quis mattis. Proin lectus magna, tempus id arcu vitae, eleifend porttitor elit. Vivamus lectus augue, viverra in felis ut, ultrices pulvinar libero. Phasellus sit amet libero ut justo dignissim pulvinar. Nullam tellus massa, blandit et pharetra ac, pulvinar nec enim.</p>\r\n\r\n<p>Duis sit amet rutrum justo. Donec eget felis in velit dictum fermentum sed eget purus. Integer in aliquet nisl, vel porttitor sem. Nam orci leo, posuere id urna et, viverra dignissim turpis. Fusce pulvinar metus quis imperdiet porta. Curabitur at dictum leo. Vestibulum tincidunt nulla mauris, et pharetra diam pellentesque at. Vivamus eu accumsan ipsum. Quisque vulputate finibus varius. Proin porttitor tellus vel lectus dapibus, eu feugiat diam finibus.</p>\r\n\r\n<p>In magna purus, elementum vel mi ut, convallis mollis neque. Duis sodales euismod risus id lacinia. Donec semper mi sem, vel blandit diam sagittis at. Vivamus sit amet lobortis neque, a euismod enim. Nullam vel erat suscipit, iaculis eros non, bibendum metus. Donec fermentum, neque quis venenatis tristique, dui quam tempus justo, a finibus ante lectus quis nisi. Morbi orci dolor, rutrum sed sem nec, pharetra auctor arcu. In blandit nulla ipsum, et tempor lacus mattis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tincidunt hendrerit consequat.</p>\r\n\r\n<p>Praesent rutrum eget mauris nec blandit. Integer turpis dolor, congue nec dui id, cursus sodales justo. Proin molestie tempus eros, non feugiat erat accumsan vitae. Proin quis purus semper, aliquam augue vel, elementum ante. Duis convallis nibh in erat efficitur auctor. Aenean non purus sollicitudin, varius velit vel, luctus massa. Nam nec lorem nisl. Donec vehicula viverra odio sed consequat. Vivamus vel tortor purus. Nulla odio lacus, ornare vitae arcu a, egestas auctor leo. Maecenas dapibus tempor orci, a interdum odio aliquam non. Suspendisse porta at justo non auctor. Nulla facilisi. Morbi ultricies iaculis porta. Sed erat dui, suscipit et ante a, rutrum blandit enim. Etiam at nibh nec felis vestibulum tempor.</p>";
},"useData":true});
templates['contentBottom'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis congue justo. Integer in ipsum erat. Nulla eu rhoncus urna, vitae feugiat orci. Vivamus at laoreet augue. Donec in aliquam arcu. Praesent luctus ullamcorper elit, sed bibendum justo imperdiet sit amet. Nunc luctus lacinia odio vel vestibulum. Etiam faucibus nisl ipsum, id tristique arcu imperdiet eget. Aenean dapibus lacinia purus eget egestas.</p>\r\n\r\n<p>Suspendisse non sapien blandit, posuere urna ut, eleifend dui. Proin eu lobortis ex, sed ornare massa. Praesent lacus metus, efficitur sit amet mollis sit amet, tempor et mauris. Duis aliquet blandit nulla quis mattis. Proin lectus magna, tempus id arcu vitae, eleifend porttitor elit. Vivamus lectus augue, viverra in felis ut, ultrices pulvinar libero. Phasellus sit amet libero ut justo dignissim pulvinar. Nullam tellus massa, blandit et pharetra ac, pulvinar nec enim.</p>\r\n\r\n<p>Duis sit amet rutrum justo. Donec eget felis in velit dictum fermentum sed eget purus. Integer in aliquet nisl, vel porttitor sem. Nam orci leo, posuere id urna et, viverra dignissim turpis. Fusce pulvinar metus quis imperdiet porta. Curabitur at dictum leo. Vestibulum tincidunt nulla mauris, et pharetra diam pellentesque at. Vivamus eu accumsan ipsum. Quisque vulputate finibus varius. Proin porttitor tellus vel lectus dapibus, eu feugiat diam finibus.</p>\r\n\r\n<p>In magna purus, elementum vel mi ut, convallis mollis neque. Duis sodales euismod risus id lacinia. Donec semper mi sem, vel blandit diam sagittis at. Vivamus sit amet lobortis neque, a euismod enim. Nullam vel erat suscipit, iaculis eros non, bibendum metus. Donec fermentum, neque quis venenatis tristique, dui quam tempus justo, a finibus ante lectus quis nisi. Morbi orci dolor, rutrum sed sem nec, pharetra auctor arcu. In blandit nulla ipsum, et tempor lacus mattis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque tincidunt hendrerit consequat.</p>\r\n\r\n<p>Praesent rutrum eget mauris nec blandit. Integer turpis dolor, congue nec dui id, cursus sodales justo. Proin molestie tempus eros, non feugiat erat accumsan vitae. Proin quis purus semper, aliquam augue vel, elementum ante. Duis convallis nibh in erat efficitur auctor. Aenean non purus sollicitudin, varius velit vel, luctus massa. Nam nec lorem nisl. Donec vehicula viverra odio sed consequat. Vivamus vel tortor purus. Nulla odio lacus, ornare vitae arcu a, egestas auctor leo. Maecenas dapibus tempor orci, a interdum odio aliquam non. Suspendisse porta at justo non auctor. Nulla facilisi. Morbi ultricies iaculis porta. Sed erat dui, suscipit et ante a, rutrum blandit enim. Etiam at nibh nec felis vestibulum tempor.</p>";
},"useData":true});
templates['contentTitle'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"pageTitle\">Page Title Here</h1>";
},"useData":true});
templates['contentTop'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"absoluteTop lightShadow\"></div>\r\n<div class=\"contentTopUnder\" id=\"contentTopUnder\">\r\n    <img class=\"featuredImage\" src=\"images/ohs-sign.jpg\" alt=\"\">\r\n</div>\r\n<div class=\"absoluteBottom lightShadow\"></div>";
},"useData":true});
templates['ctaBottom'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Stay informed! Subscribe now.</h2>\r\n<hr>\r\n<form action=\"#\" method=\"post\" id=\"newsletter\" class=\"newsletter\">\r\n    <input type=\"email\" class=\"emailSignup\" name=\"emailAddress\" placeholder=\"Enter your email for OHS updates\">\r\n    <button type=\"submit\" form=\"newsletter\" class=\"btn btn-primary\" value=\"Sign Up\">Subscribe</button>\r\n</form>";
},"useData":true});
templates['ctaMiddle'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Become a Member... Donate Today</h2>\r\n<hr>\r\n<form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\r\n    <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\r\n    <input type=\"hidden\" name=\"hosted_button_id\" value=\"F68R34E5563XU\">\r\n    <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\" >\r\n    <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\r\n</form>\r\n</hr>\r\n<p>Help us continue to preserve our history.</p>";
},"useData":true});
templates['ctaTop'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Have you subscribed to our email list yet?</h2>\r\n<hr>\r\n<form action=\"#\" method=\"post\" id=\"newsletter\" class=\"newsletter\">\r\n    <input type=\"email\" class=\"emailSignup\" name=\"emailAddress\" placeholder=\"Enter your email for OHS updates\">\r\n    <button type=\"submit\" form=\"newsletter\" class=\"btn btn-primary\" value=\"Sign Up\">Sign Up</button>\r\n</form>";
},"useData":true});
templates['events'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<hr class=\"eventDivider\">\r\n<div class=\"event vevent\" itemprop=\"event\" itemscope itemtype=\"http://schema.org/Event\">\r\n    <div class=\"eventDate\">\r\n        <a href=\"/events/"
    + alias4(((helper = (helper = helpers.post_name || (depth0 != null ? depth0.post_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_name","hash":{},"data":data}) : helper)))
    + "\"><span>OCT</span><br>\r\n        <span>22</span><br>\r\n        <span>2015</span></a>\r\n    </div>\r\n    <div class=\"eventData\">\r\n        <a href=\"/events/"
    + alias4(((helper = (helper = helpers.post_name || (depth0 != null ? depth0.post_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_name","hash":{},"data":data}) : helper)))
    + "\" itemprop=\"url\"><span class=\"eventTitle summary\" itemprop=\"name\">"
    + alias4(((helper = (helper = helpers.post_title || (depth0 != null ? depth0.post_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_title","hash":{},"data":data}) : helper)))
    + "</span></a><br>\r\n        <span class=\"eventInfo location\" itemprop=\"location\">Old Town House, Otisfield</span><br>\r\n        <span class=\"eventTime\">7:00PM</span>\r\n    </div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Events</h2>\r\n<hr class=\"headerDivider\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.posts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n";
},"useData":true});
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"navbar navbar-inverse\">\r\n    <div class=\"container\">\r\n        <section class=\"footerAddress\" id=\"footerAddress\">\r\n            <span>Otisfield Historical Society</span><br>\r\n            <span>53 Bell Hill Rd</span><br>\r\n            <span>Otisfield, ME 04270</span><br>\r\n        </section>\r\n        <section class=\"copyright\" id=\"copyright\">\r\n            <span>&copy; 2014-2016, Otisfield Historical Socity.</span><br>\r\n            <span>All Rights Reserved.</span>\r\n        </section>\r\n    </div>\r\n</section>";
},"useData":true});
templates['header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <li><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "\" target=\""
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">OHS</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\r\n        </div>\r\n    </div>\r\n    <section class=\"contentTop\" id=\"contentTop\"></section>\r\n</nav>";
},"useData":true});
templates['updates'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Archives</h2>\r\n<hr>\r\n<p>The Sybil Lamb Archive Room is open to the public for researching or viewing.  It is open Wednesdays, 2PM-4PM, from May to September, weather permitting; or by appointment</p>\r\n<p><a href=\"/archives\">Learn More</a></p>";
},"useData":true});
})();
