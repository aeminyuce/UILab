/*
 IE9 Placeholders JS
 IE9 Placeholders JS requires Events JS
*/

var ie9Placeholders = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax, navigator, setTimeout */

    var checkPlaceholders;

    ie9Placeholders.Start = function () {

        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {

            checkPlaceholders = function () {
                events.each('input[placeholder]', function () {

                    var p = this.parentElement;

                    if (this.value.length !== 0) { events.addClass(p, 'hide-placeholder'); }
                    if (!p.getAttribute('data-placeholder')) { p.setAttribute('data-placeholder', this.getAttribute('placeholder')); }

                });
            };
            checkPlaceholders();

            // Events
            events.on('[data-placeholder]', 'mousedown', function () { selector('input[placeholder]', this)[0].focus(); });

            events.on(document, 'keydown', '[data-placeholder] input[placeholder]', function () {

                var t = this, p = t.parentElement;

                setTimeout(function () {
                    if (t.value.length > 0) { events.addClass(p, 'hide-placeholder'); } else { events.removeClass(p, 'hide-placeholder'); }
                }, 10);

            });

            events.on(document, 'blur', '[data-placeholder] input[placeholder]', function () {
                if (this.value.length === 0) { events.removeClass(this.parentElement, 'hide-placeholder'); }
            });

        }

    };

    // Loaders
    events.onload(ie9Placeholders.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {

        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
            if (ajax.ajaxRequest.responseText.indexOf('placeholder=') > 0) { checkPlaceholders(); }
        }

    });

}());
