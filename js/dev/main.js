/**
 * Main.js file
 */

(function(S,undefined) {

    "use strict";

    var $content = $('#content'),
        $media = $content.data("media"),
        isMasonry = $media !== undefined ? false : true;


    $('[data-template]').renderTemplates({},isMasonry,function(){
        if ($media !== undefined) {
            $content.css('overflow','auto').renderTemplates({
                "source": "media",
                "template": "media",
                "isAppend": true
            },true);
        }
    });

})(jQuery);