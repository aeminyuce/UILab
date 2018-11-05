/*
 Retina Images JS
 Retina Images JS requires Events JS
*/

(function () {

    'use strict';
    /*globals window, document, events, ajax */

    function retinaImagesFnc() {

        if (window.devicePixelRatio > 1) {

            // Events
            events.each('img.retina:not(.retina-loaded)', function () {

                var highres = this.getAttribute('src').replace(/\.(png|gif|jpeg|jpg)($|\?)/g, '@2x.$1$2');
                this.setAttribute('src', highres);

                events.addClass(this, 'retina-loaded');

            });

        }
    }

    // Loaders
    events.onload(retinaImagesFnc);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.ajaxClassNames.indexOf('retina') > -1) { retinaImagesFnc(); }
    });

}());
