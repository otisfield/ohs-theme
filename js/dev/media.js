/**
 * Media.js - handling images, modals, etc
 */

;

(function(window,document,$,undefined){

    "use strict";

    var mediaContainer = '.media.piece',
        buttonTag = '<a>',
        divTag = '<div>',
        $content = $('#content'),
        contentData = $content.data(),
        $button;

    $(document).on('mouseenter',mediaContainer, function(e){
        var $this = $(this),
            data = $this.find('a').data(),
            isMoreMedia = contentData.mediamore,
            moreMediaUrl = isMoreMedia === true ? data.more : isMoreMedia === false ? false : isMoreMedia,
            zoomLink = $(buttonTag,{
                "class": "zoomIn glyphicon glyphicon-zoom-in",
                "title": "Zoom In",
                "href" : data.url
            }).data('title',data.title),
            moreMediaLink = moreMediaUrl ? $(buttonTag,{
                "class": "mediaMore glyphicon glyphicon-share-alt",
                "title": "See More",
                "href" : moreMediaUrl
            }) : '',
            $hoverBox = $(divTag,{
                "class" : "hoverBox"
            }).append(zoomLink).append(moreMediaLink).append($('<p>').html(data.title));

        if ($this.children('.hoverBox').length < 1) {
            $this.prepend($hoverBox);
        }

    }).on('mouseleave',mediaContainer, function(e){
       $(this).children('.hoverBox').remove();
    }).on('click','.zoomIn',function(e){
        e.preventDefault();
        var $modal = $('#theModal'),
            $modalBody,
            $this = $(this),
            data = $this.data(),
            $image = $('<img>',{
                "class": "zoomImage",
                "alt": "",
                "src": $this.attr('href')
            });
        if ($modal.length < 1) {
            $button = $('<button>',{
                "type": "button",
                "class": "btn btn-primary btn-lg",
                "data-toggle": "modal",
                "data-target": "#theModal"
            }).data("toggle","modal").data("target","#theModal").css('display','none');
            $modal = $(Handlebars.templates.modal({
                "title": data.title
            }));

            $modal.find('.modal-body').append($image);

            $('body').append($modal).append($button);

        } else {
            $modalBody = $modal.find('.modal-body');
            $modalBody.children().remove();
            $modalBody.append($image)
            $modal.find('.modal-title').text(data.title)
        }

        $button.click();
    });


})(window,document,jQuery);