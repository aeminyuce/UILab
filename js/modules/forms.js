/* forms */

import { ui } from './../core/globals.js';
export default () => ui;

ui.forms = {

    // targets
    targetText: 'ui-input',
    targetSelect: 'ui-select',
    targetSelectMulti: 'ui-select-multi',
    targetTextarea: 'ui-textarea',
    targetFile: 'ui-file',
    targetIndeterminate: 'ui-indeterminate',

    // main classnames
    nameFocus: 'ui-form-focus',

    nameHolder: 'ui-form-holder',
    nameHolderFocus: 'ui-form-holder-focus',

    nameHasClear: 'ui-form-has-clear',
    nameClear: 'ui-form-clear',

    nameShowPass: 'ui-pass-toggle',
    nameNumber: 'ui-number',

    nameFormIcon: 'ui-form-icon',

    nameRequired: 'ui-required',
    nameRequiredMsg: 'ui-required-msg',
    nameRequiredMsgShow: 'ui-show',

    nameError: 'ui-form-error',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // outer classnames
    nameIcon: 'ui-icon',

    // tags
    tagFileInfo: 'i'

};

(() => {

    var clearForms;

    ui.forms.Start = () => {

        function formFocus(t, type) {

            var i, parent, classes, holder;

            classes = [
                ui.forms.targetText,
                ui.forms.targetSelect,
                ui.forms.targetSelectMulti,
                ui.forms.targetTextarea
            ];

            holder = ui.closest(t, '.' + ui.forms.nameHolder);

            if (holder.length === 1) {

                ui.removeClass('.' + ui.forms.nameHolderFocus, ui.forms.nameHolderFocus);

                if (type === 'add') {
                    ui.addClass(holder, ui.forms.nameHolderFocus);
                }

            } else { ui.removeClass('.' + ui.forms.nameFocus, ui.forms.nameFocus); }

            for (i = 0; i < classes.length; i++) {

                parent = ui.closest(t, '.' + classes[i]);

                if (parent.length === 1) {

                    if (type === 'add') {
                        ui.addClass(parent, ui.forms.nameFocus);

                    } else {
                        ui.removeClass(parent, ui.forms.nameFocus);
                    }

                    break;
                }

            }

        }

        // clear with form icons
        clearForms = function (that) {

            var btn = ui.find('.' + ui.forms.nameClear, that.parentElement)[0];

            if (that.value !== '') {

                ui.addClass(btn, ui.forms.nameOpen);

                setTimeout(() => {
                    ui.addClass(btn, ui.forms.nameOpenEase);
                }, 10);

            } else {

                ui.removeClass(btn, ui.forms.nameOpenEase);

                setTimeout(() => {
                    ui.removeClass(btn, ui.forms.nameOpen);
                }, ui.globals.ease);

            }

        };

        ui.forms.Init = () => {

            ui.each('.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input', function () {

                var that = this;
                setTimeout(() => { clearForms(that); }, 0);

            });

        };
        ui.forms.Init();

        // Event Listeners
        ui.on(document,
            'focus',

            '.' + ui.forms.targetText + ' input,' +
            '.' + ui.forms.targetSelect + ' select,' +
            '.' + ui.forms.targetSelectMulti + ' select,' +
            '.' + ui.forms.targetTextarea + ' textarea',

            function () {
                formFocus(this, 'add');
            });

        ui.on(document,

              'blur',
              'input,select,textarea',

            function () {
                formFocus(this, 'remove');
            });

        // file inputs
        ui.on(document,
            'change',

            '.' + ui.forms.targetFile + ' input',

            function () {

                var info = ui.find(ui.forms.tagFileInfo, this.parentElement)[0];

                if (info !== undefined) {
                    info.innerHTML = this.value;
                }

            });

        // indeterminate
        ui.on(document,
            'click',

            'input[type="checkbox"].' + ui.forms.targetIndeterminate,

            function () {

                if (this.readOnly) {
                    this.checked = this.readOnly = false;

                } else if (!this.checked) {
                    this.readOnly = this.indeterminate = true;
                }

            });

        // toggle password
        ui.on(document,
            'click touchend',

            '.' + ui.forms.nameShowPass,

            function () {

                var that = this.parentElement;

                that = ui.find('input', that)[0];

                if (that.getAttribute('type') === 'password') {
                    that.setAttribute('type', 'text');

                } else {
                    that.setAttribute('type', 'password');
                }

            });

        // number
        ui.on(document,
            'keypress',

            '.' + ui.forms.targetText + ' > .' + ui.forms.nameNumber,

            function (e) {

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

        ui.on(document,
            'paste',

            '.' + ui.forms.targetText + ' > .' + ui.forms.nameNumber,

            function () {

                var i, re, that, getValues, newValues, maxLength;

                that = this;

                maxLength = that.getAttribute('maxlength');
                that.removeAttribute('maxlength');

                setTimeout(() => {

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

                '[class*="' + ui.forms.nameFormIcon + '"] > button.' + ui.forms.nameIcon + ',' +
                '[class*="' + ui.forms.nameFormIcon + '"] > input.' + ui.forms.nameIcon,

                function (e) {

                    e.stopPropagation();
                    ui.trigger(this, 'click');

                });

            // submit with form icons (ios fix)
            ui.on(document,
                'click',

                '.' + ui.forms.targetText + ' > [type="submit"]',

                function () {

                    var form = ui.closest(this, '.' + ui.forms.targetText)[0];
                    ui.trigger(form, 'submit');

                });

        }

        // trigger custom event listeners when form resetting
        ui.on(document,
            'reset',

            'form',

            function (e) {

                var forms, errors, reqMessages;
                forms = Array.prototype.slice.call(e.target);

                errors = ui.find('.' + ui.forms.nameError, this);
                reqMessages = ui.find('.' + ui.forms.nameRequiredMsg, this);

                setTimeout(() => { // wait for form reset started on DOM

                    ui.each(forms, function () {

                        // trigger defined event listeners after form clear
                        //ui.trigger(this, 'change');

                        if (!ui.hasClass(this, ui.forms.nameRequired)) { // discard required forms
                            ui.trigger(this, 'keydown keyup');
                        }

                    });

                    // remove errors
                    ui.removeClass(errors, ui.forms.nameError);

                    // remove error messages
                    ui.removeClass(reqMessages, ui.forms.nameRequiredMsgShow);

                }, 0);

            });

        // clear with form icons
        ui.on(document,
            'change keyup',

            '.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input',

            function () {
                clearForms(this);
            });

        ui.on(document,
            'click',

            '.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' .' + ui.forms.nameClear,

            function () {

                var form = ui.find('input', this.parentElement)[0];
                form.value = '';

                if (!ui.hasClass(form, ui.forms.nameRequired)) { // discard required forms

                    // trigger defined event listeners after form clear
                    ui.trigger(form, 'change keydown keyup');

                }

            });

    };

    // loaders
    ui.onload(ui.forms.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.forms.nameClear) > 0) {
                ui.forms.Init();
            }

        });

})();
