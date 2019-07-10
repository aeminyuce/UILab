/*
 Orientations JS
 Orientations JS requires Selector Js, Events JS
*/

var orientations = {};

(function () {

    'use strict';
    /*globals window, document, events, navigator */

    // Events
    orientations.Start = function () {

        if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) {

            events.on(document, 'orientation:portrait orientation:landscape');

            if (window.matchMedia('(orientation: portrait)').matches) {

                events.removeClass(document, 'landscape');
                events.addClass(document, 'portrait');

                events.trigger(document, 'orientation:portrait'); // set custom event

            }

            if (window.matchMedia('(orientation: landscape)').matches) {

                events.removeClass(document, 'portrait');
                events.addClass(document, 'landscape');

                events.trigger(document, 'orientation:landscape'); // set custom event

            }

        }

    };

    // Loaders
    events.onload(orientations.Start);
    events.on(window, 'resize', orientations.Start);

}());
