/*
 Form Icons JS
 Form Icons JS requires Events JS
*/

(function () {

    'use strict';
    /*globals document, events, navigator */

    function formIconsFnc() {

        var mobile;

        if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) { // detecting mobile
            mobile = true;
        }

        // Events
        if (mobile) { // fix: buttons not clicked on form focus at mobile devices

            events.on(document,

                'mousedown',
                '.text-icon > button.icon,.text-icon > input.icon',

                function (e) {

                    e.stopPropagation();
                    events.trigger(this, 'click');

                });

        }

    }

    // Loaders
    events.onload(formIconsFnc);

}());
