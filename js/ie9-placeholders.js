/*
 IE9 Placeholders JS
 IE9 Placeholders JS requires Events JS
*/

/*globals window, document, selector, events, navigator, setTimeout */
function ie9PlaceholdersFnc() {

    'use strict';

    if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {

        window.checkie9Placeholders = function () {
            events.each('input[placeholder]', function () {

                var p = this.parentElement;

                if (this.value.length !== 0) { events.addClass(p, 'hide-placeholder'); }
                if (!p.getAttribute('data-placeholder')) { p.setAttribute('data-placeholder', this.getAttribute('placeholder')); }

            });
        };

        window.checkie9Placeholders();
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

}

/*!loader */
events.onload(function () {

    'use strict';
    ie9PlaceholdersFnc();

});

/*!ajax callback loader: requires Ajax JS */
events.on(document, 'ajaxCallbacks', function () {

    'use strict';

    if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
        if (window.ajaxRequest.responseText.indexOf('placeholder=') > 0) { window.checkie9Placeholders(); }
    }

});
