/*
 Form Icons JS
 Form Icons JS requires Events JS
*/

/*globals document, events, navigator */
function formIconsFnc() {

    'use strict';
    var mobile;

    if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) { // detecting mobile
        mobile = true;
    }

    // fix: buttons not clicked on form focus at mobile devices
    if (mobile) {

        events.on(document,

            'mousedown',
            '.text-icon > button.icon,.text-icon > input.icon',

            function (e) {
                e.stopPropagation();
                events.trigger(this, 'click');
            });

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    formIconsFnc();

});
