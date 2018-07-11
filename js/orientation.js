/*
 Orientation JS
 Orientation JS requires Events JS
*/

/*globals window, document, events, navigator */

function orientationFnc() {

    'use strict';

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

/*!loader */
events.onload(function () {

    'use strict';
    orientationFnc();

});

/*!resize loader*/
events.on(window, 'resize', function () {

    'use strict';
    orientationFnc();

});
