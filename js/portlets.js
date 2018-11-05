/*
 Portlets JS
 Portlets JS requires Events JS
*/

(function () {

    'use strict';
    /*globals document, events, setTimeout */

    function portletsFnc() {

        // Events
        events.on(document, 'click', '.portlet-close', function () {

            var parentEl = this.parentElement;
            events.addClass(parentEl, 'portlet-closing ease-close-portlet');

            setTimeout(function () {
                parentEl.parentNode.removeChild(parentEl);
            }, 300);

        });

    }

    // Loaders
    events.onload(portletsFnc);

}());
