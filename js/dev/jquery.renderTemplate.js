
;

(function($,templates,undefined) {

    "use strict";

    var dataCache = {};

    function dataAccumulator(dataSource) {

        var dataPromise = dataCache[dataSource];

        if (dataPromise === undefined) {
            dataPromise = $.ajax(dataSource);
            dataCache[dataSource] = dataPromise;
        }

        return dataPromise;
    }

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
            renderChildren($element,isAppend);
        } else {
            $element.hide();
        }
    }

    function renderChildren($element,isAppend) {
        if (!isAppend) {
            $element.find('[data-template]').each(function () {
                var $this = $(this),
                    data = $this.data(),
                    source = data.source,
                    template = data.template;

                if (source !== undefined) {
                    ajaxTemplate($this, template, source, false);
                } else {
                    renderTemplate($this, template, {}, false);
                }
            });
        }
    }

    function ajaxTemplate($element,template,source,isAppend) {
        var thePromise;

        if (template !== undefined) {
            thePromise = dataAccumulator(source).done(function(data) {
                renderTemplate($element,template,data,isAppend);
                renderChildren($element,isAppend);
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

    function isItReady(a,b,callback) {
        if (a === b) {
            initializeMasonry('#content');
        }

        if (typeof callback === 'function') {
            callback.apply();
        }

        return;
    }

    $.fn.renderTemplates = function(options,callback){

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
                    isItReady(length,count,callback);
                }).fail(function(){
                    count += 1;
                    isItReady(length,count,callback);
                });
            } else if (elementTemplate) {
                renderTemplate($this,elementTemplate,{},isAppend);
                count += 1;
                isItReady(length,count,callback);
            } else {
                $this.hide();
                count += 1;
                isItReady(length,count,callback);
            }
        });
    }


})(jQuery,Handlebars.templates);