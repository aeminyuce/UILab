/*
 Portlets JS
 Portlets JS requires Selector Js, Events JS
*/

var portlets = {};

(function () {

    'use strict';
    /*globals document, events, setTimeout */

    portlets.Start = function () {

        // Events
        events.on(document, 'click', '.close-portlet', function () {

            var parentEl = this.parentElement;
            events.addClass(parentEl, 'closing-portlet ease-portlet-close');

            setTimeout(function () {
                parentEl.parentNode.removeChild(parentEl);
            }, 300);

        });

    };

    // Loaders
    events.onload(portlets.Start);

}());
