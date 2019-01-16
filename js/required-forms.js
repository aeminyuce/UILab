/*
 Required Forms JS
 Required Forms JS requires Events JS
*/

var requiredForms = {};

(function () {

    'use strict';
    /*globals document, selector, events */

    requiredForms.Start = function () {

        function required(that, type) {

            var p, parentType, checkHolder, checkForms, holderForms, next, showMsg, hideErr, showErr, min, val, reMail;

            hideErr = function () {

                showMsg = false;
                next = p.nextElementSibling;

                if (events.hasClass(next, 'required-msg')) { showMsg = true; }

                events.addClass(that, 'success');
                events.removeClass(p, 'error');

                if (showMsg) { events.removeClass(next, 'show'); }

            };

            checkForms = function (t) {

                // show error
                showErr = function () {

                    events.removeClass(t, 'success');
                    events.addClass(p, 'error');

                    if (showMsg) {
                        events.addClass(next, 'show');
                    }

                };

                // get value
                val = t.value.toLowerCase();
                val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                // check value is empty
                if (val === '') { showErr(); }

                if (type !== 'select') {

                    // check min
                    min = t.getAttribute('minlength');

                    if (min !== null && min !== '' && !isNaN(min)) {
                        if (val.length < min) { showErr(); }
                    }

                }

                if (type === 'email') {

                    reMail = new RegExp('^[a-z0-9][a-z0-9-_\\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\\.[a-z0-9]{2,10}(?:\\.[a-z]{2,10})?$');
                    if (val.match(reMail) === null) { showErr(); }

                }

            };

            checkHolder = events.closest(that, '.form-holder')[0];
            if (checkHolder === undefined) { // single forms

                parentType = type;
                if (type !== 'select') { parentType = 'text'; }

                p = events.closest(that, '.' + parentType)[0];
                hideErr();
                checkForms(that);

            } else { // form holders

                p = checkHolder;

                holderForms = selector('.text input.required,.select select.required', p);
                hideErr();

                events.each(holderForms, function () {

                    if (this.tagName === 'SELECT') {
                        type = 'select';

                    } else {

                        type = this.getAttribute('type');
                        if (type === null || type === '') { return; }

                    }

                    checkForms(this);

                });

            }

        }

        // Events
        events.on(document, 'keyup blur', '.text input.required', function () {
            required(this, this.type);
        });

        events.on(document, 'change blur', '.select select.required', function () {
            required(this, 'select');
        });

        events.on(document, 'submit', 'form', function (e) {

            var forms, success;

            forms = selector('.text input.required,.select select.required');
            success = selector('.text input.required.success,.select select.required.success');

            if (forms.length > 0 && (forms.length !== success.length)) {

                e.preventDefault();

                events.each(forms, function () {
                    events.trigger(this, 'blur');
                });

            }

        });

    };

    // Loaders
    events.onload(requiredForms.Start);

}());
