/*
 Portlets JS
 Portlets JS requires Events JS
*/

var portlets = {};

(function () {

    'use strict';
    /*globals document, events, setTimeout */

    portlets.Start = function () {

        // Events
        events.on(document, 'click', '.portlet-close', function () {

            var parentEl = this.parentElement;
            events.addClass(parentEl, 'portlet-closing ease-close-portlet');

            setTimeout(function () {
                parentEl.parentNode.removeChild(parentEl);
            }, 300);

        });

    };

    // Loaders
    events.onload(portlets.Start);

}());
