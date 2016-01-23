
;

(function($,templates,undefined) {

    "use strict";

    function initializeMasonry(selector) {
        var $content = $(selector).imagesLoaded(function () {
            $content.masonry({
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        });
    }

    function renderTemplate($element,templateName,data,isAppend) {
        var theTemplate = templates[templateName],
            action = isAppend ? 'append' : 'html';

        if (theTemplate) {
            $element[action](theTemplate(data));
        } else {
            $element.hide();
        }
    }

    function ajaxTemplate($element,template,source,isAppend) {
        var thePromise;

        if (template !== undefined) {
            thePromise = $.ajax(source).done(function(data) {
                renderTemplate($element,template,data,isAppend);
            }).fail(function(){
                $element.hide()
            });
        } else {
            thePromise = new Promise(function(resolve){
                resolve();
            });
        }

        return thePromise;
    }

    function isItReady(a,b) {
        if (a === b) {
            initializeMasonry('#content');
        }

        return;
    }

    $.fn.renderTemplates = function(options){

        var length = this.length,
            count = 0,
            settings = options || {};

        return this.each(function(){
            var $this = $(this),
                isAppend = settings.isAppend,
                theSource = settings.source || 'source',
                elementData = $this.data(),
                elementSource = elementData[theSource],
                elementTemplate = settings.template || elementData.template;

            if (elementSource) {
                ajaxTemplate($this,elementTemplate,elementSource,isAppend).done(function(){
                    count += 1;
                    isItReady(length,count);
                }).fail(function(){
                    count += 1;
                    isItReady(length,count);
                });
            } else if (elementTemplate) {
                renderTemplate($this,elementTemplate,{},isAppend);
                count += 1;
                isItReady(length,count);
            } else {
                $this.hide();
                count += 1;
                isItReady(length,count);
            }
        });
    }


})(jQuery,Handlebars.templates);