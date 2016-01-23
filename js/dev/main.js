/**
 * Main.js file
 */

(function(S,undefined) {
    var $content = $('#content');

    if ($content.data("media") !== undefined) {
        $content.renderTemplates({
            "source": "media",
            "template": "media",
            "isAppend": true
        });
    }

$('[data-template]').renderTemplates();

})(jQuery);