/*
 Forms JS
 Forms JS requires Selector Js, Events JS, User Agents JS
*/

var forms = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax, setTimeout, useragents */

    var
        clearForms,
        loadClearForms;

    forms.Start = function () {

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

            if (useragents.mobile) {

                if (type === 'add') {
                    events.addClass(document, 'mobile-keyboard');

                } else {
                    events.removeClass(document, 'mobile-keyboard');
                }

            } else {

                if (type === 'add') {
                    events.addClass(document, 'form-focused');
                } else { events.removeClass(document, 'form-focused'); }

            }

        }

        // clear with form icons
        clearForms = function (that) {

            var btn = selector('.clear-form', that.parentElement)[0];

            if (that.value !== '') {

                events.addClass(btn, 'open');

                setTimeout(function () {
                    events.addClass(btn, 'open-ease');
                }, 10);

            } else {

                events.removeClass(btn, 'open-ease');

                setTimeout(function () {
                    events.removeClass(btn, 'open');
                }, 150);

            }

        };

        loadClearForms = function () {

            events.each('.text.has-clear input', function () {

                var that = this;
                setTimeout(function () { clearForms(that); }, 0);

            });

        };
        loadClearForms();

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

            var info = selector('span:not([class])', this.parentElement)[0];

            if (info !== undefined) {
                info.innerHTML = this.value;
            }

        });

        // indeterminate
        events.on(document, 'click', 'input[type="checkbox"].indeterminate', function () {

            if (this.readOnly) {
                this.checked = this.readOnly = false;

            } else if (!this.checked) {
                this.readOnly = this.indeterminate = true;
            }

        });

        // form icons
        if (useragents.mobile) { // fix: buttons not clicked on form focus at mobile devices

            events.on(document,

                'mousedown',
                '[class*="text-icon"] > button.icon,[class*="text-icon"] > input.icon',

                function (e) {

                    e.stopPropagation();
                    events.trigger(this, 'click');

                });

            // submit with form icons (ios fix)
            events.on(document, 'click', '.text > [type="submit"]', function () {

                var form = events.closest(this, '.text')[0];
                events.trigger(form, 'submit');

            });

        }

        // trigger custom events on form reset
        events.on(document, 'reset', 'form', function (e) {

            var forms, errors, reqMessages;
            forms = Array.prototype.slice.call(e.target);

            errors = selector('.error', this);
            reqMessages = selector('.required-msg', this);

            setTimeout(function () { // wait for form reset started on DOM

                events.each(forms, function () {

                    // trigger defined events after form clear
                    events.trigger(this, 'change');

                    if (!events.hasClass(this, 'required')) { // discard required forms
                        events.trigger(this, 'keydown keyup');
                    }

                });

                // remove errors
                events.removeClass(errors, 'error');

                // remove error messages
                events.removeClass(reqMessages, 'show');

            }, 0);

        });

        // clear with form icons
        events.on(document, 'change keyup', '.text.has-clear input', function () {
            clearForms(this);
        });

        events.on(document, 'click', '.text.has-clear .clear-form', function () {

            var form = selector('input', this.parentElement)[0];

            form.value = '';

            // trigger defined events after form clear
            events.trigger(form, 'change');

            if (!events.hasClass(form, 'required')) { // discard required forms
                events.trigger(form, 'keydown keyup');
            }

        });

    };

    // Loaders
    events.onload(forms.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('clear-form') > 0) { loadClearForms(); }
    });

}());
