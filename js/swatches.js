/*
 Swatches JS
 Swatches JS requires Selector Js, Events JS
*/

var swatches = {};

(function () {

    'use strict';
    /*globals window, document, events, navigator */

    var mobile = false;

    swatches.Start = function () {

        if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) { // detecting mobile
            mobile = true;
        }

        if (!mobile) {

            // Events
            events.on(document,

                'mouseenter',
                '.hover,a[class*="ui-"]:not(.btn):not(.opacity):not(.opacity-more),.btn[class*="ui-"]:not(.opacity):not(.opacity-more):not(.btn-ghost)',

                function () {

                    var disabled, r, g, b, a, currentColor, hoverColor, getAlpha;

                    disabled = this.getAttribute('data-swatch');

                    if (disabled !== null) {
                        if (disabled === 'false') { return; } // if data-swatch="false" stop running!
                    }

                    currentColor = window.getComputedStyle(this);
                    currentColor = currentColor.getPropertyValue('background-color');

                    hoverColor = (currentColor.slice(currentColor.indexOf('(') + 1, currentColor.indexOf(')')).split(','));

                    events.addClass(this, 'swatch-active');

                    r = parseInt(hoverColor[0], 10);
                    r += ((255 - r) * 22) / 100;
                    if (r > 255) { r = 255; }

                    g = parseInt(hoverColor[1], 10);
                    g += ((255 - g) * 22) / 100;
                    if (g > 255) { g = 255; }

                    b = parseInt(hoverColor[2], 10);
                    b += ((255 - b) * 22) / 100;
                    if (b > 255) { b = 255; }

                    getAlpha = hoverColor[3];

                    if (getAlpha !== undefined) {
                        a = getAlpha;

                    } else { a = '1'; }

                    if (r === 255 && g === 255 && b === 255 && a === '1') {
                        a = '0.8';

                    } else { a = Math.ceil(a); }

                    this.style.backgroundColor  = 'rgba(' + Math.ceil(r) + ',' + Math.ceil(g) + ',' + Math.ceil(b) + ',' + a + ')';

                });

            events.on(document, 'mouseleave', '.swatch-active', function () {

                if (this.style.length === 1) {
                    this.removeAttribute('style');

                } else {
                    this.style.removeProperty('background-color');
                }

                events.removeClass(this, 'swatch-active');

            });

        }

    };

    // Loaders
    events.onload(swatches.Start);

}());
