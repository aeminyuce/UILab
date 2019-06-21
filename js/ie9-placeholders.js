/*
 IE9 Placeholders JS
 IE9 Placeholders JS requires Events JS
*/

var ie9Placeholders = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax, navigator, setTimeout */

    ie9Placeholders.Start = function () {

        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {

            events.each('[placeholder]', function () {

                var p = this.parentElement;

                if (this.value.length !== 0) {
                    events.addClass(p, 'hide-placeholder');
                }

                if (!p.getAttribute('data-placeholder')) {
                    p.setAttribute('data-placeholder', this.getAttribute('placeholder'));
                }

            });

            // Events
            events.off('[data-placeholder]', 'mousedown');
            events.off(document, 'keydown blur', '[data-placeholder] [placeholder]');

            events.on('[data-placeholder]', 'mousedown', function () {
                selector('[placeholder]', this)[0].focus();
            });

            events.on(document, 'keydown', '[data-placeholder] [placeholder]', function () {

                var t = this, p = t.parentElement;
                setTimeout(function () {

                    if (t.value.length > 0) {
                        events.addClass(p, 'hide-placeholder');

                    } else {
                        events.removeClass(p, 'hide-placeholder');
                    }

                }, 10);

            });

            events.on(document, 'blur', '[data-placeholder] [placeholder]', function () {

                if (this.value.length === 0) {
                    events.removeClass(this.parentElement, 'hide-placeholder');
                }

            });

        }

    };

    // Loaders
    events.onload(ie9Placeholders.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {

        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
            if (ajax.text.indexOf('placeholder=') > 0) { ie9Placeholders.Start(); }
        }

    });

}());
