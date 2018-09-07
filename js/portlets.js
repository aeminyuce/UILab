/*
 Portlets JS
 Portlets JS requires Events JS
*/

/*globals document, events, setTimeout */
var portletsFnc = function () {

    'use strict';

    // portlet close button
    events.on(document, 'click', '.portlet-close', function () {

        var parentEl = this.parentElement;

        events.addClass(parentEl, 'portlet-closing ease-close-portlet');
        setTimeout(function () {
            parentEl.parentNode.removeChild(parentEl);
        }, 300);

    });

};

/*!loader */
events.onload(function () {

    'use strict';
    portletsFnc();

});
