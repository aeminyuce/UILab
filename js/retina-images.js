/*
 Retina Images JS
 Retina Images JS requires Events JS
*/

/*globals window, document, events*/
function retinaImagesFnc() {

    'use strict';

    if (window.devicePixelRatio > 1) {
        events.each('img.retina:not(.retina-loaded)', function () {

            var highres = this.getAttribute('src').replace(/\.(png|gif|jpeg|jpg)($|\?)/g, '@2x.$1$2');
            this.setAttribute('src', highres);

            events.addClass(this, 'retina-loaded');

        });
    }
}

/*!loader */
events.onload(function () {

    'use strict';
    retinaImagesFnc();

});

/*!ajax callback loader: requires Ajax JS */
events.on(document, 'ajaxCallbacks', function () {

    'use strict';
    if (window.ajaxClassNames.indexOf('retina') > -1) { retinaImagesFnc(); }

});
