/*
 Retina Images JS
 Retina Images JS requires Selector Js, Events JS
*/

var retinaImages = {};

(function () {

    'use strict';
    /*globals window, document, events, ajax */

    retinaImages.Start = function () {

        if (window.devicePixelRatio > 1) {

            // Events
            events.each('img.retina:not(.retina-loaded)', function () {

                var highres = this.getAttribute('src').replace(/\.(png|gif|jpeg|jpg)($|\?)/g, '@2x.$1$2');
                this.setAttribute('src', highres);

                events.addClass(this, 'retina-loaded');

            });

        }
    };

    // Loaders
    events.onload(retinaImages.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('retina') > -1) { retinaImages.Start(); }
    });

}());
