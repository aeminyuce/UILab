/*
 Forms JS
 Forms JS requires Events JS
*/

var forms = {};

(function () {

    'use strict';
    /*globals document, selector, events, navigator */

    forms.Start = function () {

        var mobile, required;

        if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) { // detecting mobile
            mobile = true;
        }

        function formFocus(t, type) {

            var i, parent, classes, holder;

            classes = ['text', 'select', 'select-multi', 'textarea'];
            holder = events.closest(t, '.form-holder');

            if (holder.length === 1) {

                events.removeClass('.form-holder-focus', 'form-holder-focus');
                if (type === 'add') {
                    events.addClass(holder, 'form-holder-focus');
                }

            } else { events.removeClass('.form-focus', 'form-focus'); }

            for (i = 0; i < classes.length; i += 1) {

                parent = events.closest(t, '.' + classes[i]);

                if (parent.length === 1) {

                    if (type === 'add') {
                        events.addClass(parent, 'form-focus');
                    } else {
                        events.removeClass(parent, 'form-focus');
                    }

                    break;
                }

            }

            if (mobile) { // detecting mobile

                // mobile keypad event
                events.on(document, 'forms:keypadopen forms:keypadclose');

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

        // Events
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

        // file inputs
        events.on(document, 'change', '.file input', function () {
            selector('span', this.parentElement)[0].innerHTML = this.value;
        });

        // required forms
        required = function (that) {

            var p, next, showMsg, showErr, min, max;

            p = events.closest(that, '.text')[0];
            next = p.nextElementSibling;

            showMsg = false;

            if (events.hasClass(next, 'required-msg')) {
                showMsg = true;
            }

            // show error
            showErr = function () {

                events.addClass(p, 'error');
                if (showMsg) {
                    events.addClass(next, 'show');
                }

            };

            // hide error
            events.removeClass(p, 'error');
            if (showMsg) {
                events.removeClass(next, 'show');
            }

            // check value is empty
            if (that.value === '') { showErr(); }

            // check min
            min = that.getAttribute('minlength');
            if (min !== null && min !== '' && !isNaN(min)) {
                if (that.value.length < min) { showErr(); }
            }

            // check max
            max = that.getAttribute('maxlength');
            if (max !== null && max !== '' && !isNaN(max)) {
                if (that.value.length > max) { showErr(); }
            }

        };

        events.on(document, 'blur', '.text input.required', function () {
            required(this);
        });

        // form icons
        if (mobile) { // fix: buttons not clicked on form focus at mobile devices

            events.on(document,

                'mousedown',
                '.text-icon > button.icon,.text-icon > input.icon',

                function (e) {

                    e.stopPropagation();
                    events.trigger(this, 'click');

                });

        }

    };

    // Loaders
    events.onload(forms.Start);

}());
