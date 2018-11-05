/*
 Orientation JS
 Orientation JS requires Events JS
*/

(function () {

    'use strict';
    /*globals window, document, events, navigator */

    // Events
    function orientationFnc() {

        if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) {

            events.on(document, 'useragents:portrait useragents:landscape');

            if (window.matchMedia('(orientation: portrait)').matches) {

                events.removeClass(document, 'landscape');
                events.addClass(document, 'portrait');

                events.trigger(document, 'useragents:portrait'); // set custom event

            }

            if (window.matchMedia('(orientation: landscape)').matches) {

                events.removeClass(document, 'portrait');
                events.addClass(document, 'landscape');

                events.trigger(document, 'useragents:landscape'); // set custom event

            }

        }

    }

    // Loaders
    events.onload(orientationFnc);
    events.on(window, 'resize', orientationFnc);

}());
