/*
 Forms JS
 Forms JS requires Events JS
*/

/*globals document, events, navigator */
var formsFnc = function () {

    'use strict';
    var mobile;

    if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) { // detecting mobile
        mobile = true;
    }

    // mobile keypad event
    events.on(document, 'forms:keypadopen forms:keypadclose');

    // form focus
    function formFocus(t, type) {

        var i, p, c = ['text', 'select', 'select-multi', 'textarea'], h = events.closest(t, '.form-holder');

        if (h.length === 1) {

            events.removeClass('.form-holder-focus', 'form-holder-focus');
            if (type === 'add') { events.addClass(h, 'form-holder-focus'); }

        } else { events.removeClass('.form-focus', 'form-focus'); }

        for (i = 0; i < c.length; i += 1) {

            p = events.closest(t, '.' + c[i]);

            if (p.length === 1) {
                if (type === 'add') { events.addClass(p, 'form-focus'); } else { events.removeClass(p, 'form-focus'); }
                break;
            }

        }

        if (mobile) {
            if (type === 'add') {
                events.addClass(document, 'mobile-keyboard');
                events.trigger(document, 'forms:keypadopen'); // set custom event

            } else {
                events.removeClass(document, 'mobile-keyboard');
                events.trigger(document, 'forms:keypadclose'); // set custom event
            }

        } else {

            if (type === 'add') {
                events.addClass(document, 'form-focused');
            } else { events.removeClass(document, 'form-focused'); }

        }

    }

    events.on(document,

        'focus',
        '.text input,.select select,.select .select-filter,.select-multi select,.textarea textarea',

        function () {
            formFocus(this, 'add');
        });

    events.on(document,

          'blur',
          'input,select,.select .select-filter,textarea,.custom-select .text',

        function () {
            formFocus(this, 'remove');
        });

};

/*!loader */
events.onload(function () {

    'use strict';
    formsFnc();

});
