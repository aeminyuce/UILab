/*
 Themes JS
 Themes JS requires Selector Js, Events JS, User Agents JS
*/

var themes = {};

(function () {

    'use strict';
    /*globals window, document, events, useragents */

    themes.Start = function () {

        if (useragents.mobile) { return; } // stop on mobile devices

        // Events
        events.on(document,

            'mouseenter',
            '.hover,a[class*="ui-"]:not(.btn):not(.opacity):not(.opacity-more),.btn[class*="ui-"]:not(.btn-passive):not(.opacity):not(.opacity-more):not(.btn-ghost)',

            function () {

                var i, r, g, b, a, classes, pass, currentColor, hoverColor, getAlpha;

                pass = false;
                if (events.hasClass(this, 'ui-text')) {

                    classes = ['ui-x-light', 'ui-light', 'ui-x-dark', 'ui-dark'];
                    for (i = 0; i < classes.length; i += 1) {

                        if (events.hasClass(this, classes[i])) {

                            pass = true;
                            break;

                        }

                    }

                } else { pass = true; }

                if (!pass) { return; }

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

    };

    // Loaders
    events.onload(themes.Start);

}());
