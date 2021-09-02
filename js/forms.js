/*
 UI Forms JS
 Requires UI JS
*/

ui.forms = {};

(function () {

    'use strict';
    /*globals document, ui, setTimeout */

    var
        clearForms,
        loadClearForms;

    ui.forms.Start = function () {

        function formFocus(t, type) {

            var i, parent, classes, holder;

            classes = ['text', 'select', 'select-multi', 'textarea'];
            holder = ui.closest(t, '.form-holder');

            if (holder.length === 1) {

                ui.removeClass('.form-holder-focus', 'form-holder-focus');
                if (type === 'add') {
                    ui.addClass(holder, 'form-holder-focus');
                }

            } else { ui.removeClass('.form-focus', 'form-focus'); }

            for (i = 0; i < classes.length; i++) {

                parent = ui.closest(t, '.' + classes[i]);

                if (parent.length === 1) {

                    if (type === 'add') {
                        ui.addClass(parent, 'form-focus');

                    } else {
                        ui.removeClass(parent, 'form-focus');
                    }

                    break;
                }

            }

        }

        // clear with form icons
        clearForms = function (that) {

            var btn = ui.find('.clear-form', that.parentElement)[0];

            if (that.value !== '') {

                ui.addClass(btn, 'open');

                setTimeout(function () {
                    ui.addClass(btn, 'open-ease');
                }, 10);

            } else {

                ui.removeClass(btn, 'open-ease');

                setTimeout(function () {
                    ui.removeClass(btn, 'open');
                }, ui.globals.ease);

            }

        };

        loadClearForms = function () {

            ui.each('.text.has-clear input', function () {

                var that = this;
                setTimeout(function () { clearForms(that); }, 0);

            });

        };
        loadClearForms();

        // Event Listeners
        ui.on(document,

            'focus',
            '.text input,.select select,.select .select-filter,.select-multi select,.textarea textarea',

            function () {
                formFocus(this, 'add');
            });

        ui.on(document,

              'blur',
              'input,select,.select .select-filter,textarea,.custom-select .text',

            function () {
                formFocus(this, 'remove');
            });

        // file inputs
        ui.on(document, 'change', '.file input', function () {

            var info = ui.find('span:not([class])', this.parentElement)[0];

            if (info !== undefined) {
                info.innerHTML = this.value;
            }

        });

        // indeterminate
        ui.on(document, 'click', 'input[type="checkbox"].indeterminate', function () {

            if (this.readOnly) {
                this.checked = this.readOnly = false;

            } else if (!this.checked) {
                this.readOnly = this.indeterminate = true;
            }

        });

        // toggle password
        ui.on(document, 'click touchend', '.show-pass', function () {

            var that = this.parentElement;
            that = ui.find('input', that)[0];

            if (that.getAttribute('type') === 'password') {
                that.setAttribute('type', 'text');

            } else {
                that.setAttribute('type', 'password');
            }

        });

        // number
        ui.on(document, 'keypress', '.text > .number', function (e) {

            var c, isRefresh = false;

            if (e.which) {
                c = e.which;

            } else {

                c = e.keyCode;
                if (c === 116) { isRefresh = true; }

            }

            if (c !== 8 && c !== 9 && c !== 35 && c !== 36 && c !== 37 && c !== 39 && c !== 46 && !isRefresh && (c < 48 || c > 57)) {
                e.preventDefault();
            }

        });

        ui.on(document, 'paste', '.text > .number', function () {

            var i, re, that, getValues, newValues, maxLength;

            that = this;

            maxLength = that.getAttribute('maxlength');
            that.removeAttribute('maxlength');

            setTimeout(function () {

                newValues = '';
                getValues = that.value.match(new RegExp(/[0-9]/, 'g'));

                if (getValues !== null) {

                    for (i = 0; i < getValues.length; i++) {
                        newValues += getValues[i];
                    }

                } else {

                    that.value = newValues;
                    return false;

                }

                if (maxLength !== null) {

                    re = '[0-9]{1,' + maxLength + '}';
                    re = new RegExp(re, 'g');

                    that.value = newValues.match(re)[0];
                    that.setAttribute('maxlength', maxLength);

                } else {
                    that.value = newValues;
                }

            }, 0);

        });

        // form icons
        if (ui.userAgents.mobile) { // fix: buttons not clicked on form focus at mobile devices

            ui.on(document,

                'mousedown',
                '[class*="text-icon"] > button.icon,[class*="text-icon"] > input.icon',

                function (e) {

                    e.stopPropagation();
                    ui.trigger(this, 'click');

                });

            // submit with form icons (ios fix)
            ui.on(document, 'click', '.text > [type="submit"]', function () {

                var form = ui.closest(this, '.text')[0];
                ui.trigger(form, 'submit');

            });

        }

        // trigger custom event listeners when form resetting
        ui.on(document, 'reset', 'form', function (e) {

            var forms, errors, reqMessages;
            forms = Array.prototype.slice.call(e.target);

            errors = ui.find('.error', this);
            reqMessages = ui.find('.required-msg', this);

            setTimeout(function () { // wait for form reset started on DOM

                ui.each(forms, function () {

                    // trigger defined event listeners after form clear
                    //ui.trigger(this, 'change');

                    if (!ui.hasClass(this, 'required')) { // discard required forms
                        ui.trigger(this, 'keydown keyup');
                    }

                });

                // remove errors
                ui.removeClass(errors, 'error');

                // remove error messages
                ui.removeClass(reqMessages, 'show');

            }, 0);

        });

        // clear with form icons
        ui.on(document, 'change keyup', '.text.has-clear input', function () {
            clearForms(this);
        });

        ui.on(document, 'click', '.text.has-clear .clear-form', function () {

            var form = ui.find('input', this.parentElement)[0];
            form.value = '';

            if (!ui.hasClass(form, 'required')) { // discard required forms

                // trigger defined event listeners after form clear
                ui.trigger(form, 'change keydown keyup');

            }

        });

    };

    // Loaders
    ui.onload(ui.forms.Start);

    // ajax callback loader
    ui.on(document, ui.globals.eventAjaxCallback, function () {
        if (ui.ajax.classNames.indexOf('clear-form') > 0) { loadClearForms(); }
    });

}());
