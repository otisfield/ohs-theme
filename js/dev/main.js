/**
 * Main.js file
 */

;

(function(window,$,Handlebars,templates,undefined) {

    "use strict";

    var emptyObject = {},
        emptyString = '',
        pieceClass = 'piece';

    function executeEmptyPromise() {
        return new Promise(function(resolve){
           resolve(emptyObject);
        });
    }

    function determineIfEmptyPromise(url) {
        if (url === false) {
            return executeEmptyPromise();
        } else {
            return $.ajax(url)
        }
    }

    function getSelector(templateName,selector) {
        var theSelector = selector;

        if (selector === false || selector === undefined) {
            theSelector =  '#' + templateName;
        }

        return $(theSelector);
    }

    function renderTemplate(templateName,data,addClass,selector) {
        var template = templates[templateName],
            $selector = getSelector(templateName,selector);

        if (template !== undefined) {
            $selector.append(template(data)).addClass(addClass);
            return true;
        }

        return false;

    }

    function shouldWeRender(templateName,selector) {
        var $selector = getSelector(templateName,selector);

        if ($selector.length !== 0) {
            return true;
        }

        return false;
    }

    function checkForSource (isUrl,templateName,selector) {
        var url = isUrl;

        if (url === true) {
            if (selector !== undefined && selector !== false) {
                url = $(selector).data(templateName);
            } else {
                url = $('#' + templateName).data('source');
            }
        }

        return url;
    }

    function ajaxRender(url,templateName,addClass,selector) {
        var thePromise;

        if (shouldWeRender(templateName,selector)) {
            url = checkForSource(url,templateName,selector);
            thePromise = determineIfEmptyPromise(url);

            return thePromise.then(function (data) {

               renderTemplate(templateName,data,addClass,selector);

            });
        } else {
            return executeEmptyPromise();
        }
    }


    Promise.all([
        ajaxRender(true,'header',emptyString).then(function(){
            return ajaxRender(false,'contentTop',emptyString);
        }),
        ajaxRender(true,'events',pieceClass),
        ajaxRender(true,'articles',pieceClass),
        ajaxRender(false,'ctaTop',pieceClass),
        ajaxRender(false,'breadcrumbs',pieceClass),
        ajaxRender(false,'contentTitle',pieceClass),
        ajaxRender(false,'contentBody',pieceClass),
        ajaxRender(false,'ctaMiddle',pieceClass),
        ajaxRender(false,'ctaBottom',pieceClass),
        ajaxRender(false,'updates',pieceClass),
        ajaxRender(false,'contentBottom',pieceClass),
        ajaxRender(false,'footer',emptyString),
        ajaxRender(true,'media',emptyString,'#content')
    ]).then(function(){
        var $content = $('#content').imagesLoaded(function () {
            $content.masonry({
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        });
    });



})(window,jQuery,Handlebars,Handlebars.templates);