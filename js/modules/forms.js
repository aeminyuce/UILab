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

    let clearForms;

    ui.forms.Start = () => {

        function formFocus(that, type) {

            const classes = [
                ui.forms.targetText,
                ui.forms.targetSelect,
                ui.forms.targetSelectMulti,
                ui.forms.targetTextarea
            ];

            const holder = ui.closest(that, '.' + ui.forms.nameHolder);

            if (holder.length === 1) {

                ui.removeClass('.' + ui.forms.nameHolderFocus, ui.forms.nameHolderFocus);

                if (type === 'add') {
                    ui.addClass(holder, ui.forms.nameHolderFocus);
                }

            } else {
                ui.removeClass('.' + ui.forms.nameFocus, ui.forms.nameFocus);
            }

            for (let i = 0; i < classes.length; i++) {

                const parent = ui.closest(that, '.' + classes[i]);
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

            const btn = ui.find('.' + ui.forms.nameClear, that.parentElement)[0];

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

            Array.prototype.forEach.call(ui.find('.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input'),

                el => {
                    setTimeout(() => { clearForms(el); }, 0);
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

                const info = ui.find(ui.forms.tagFileInfo, this.parentElement)[0];

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

                const that = ui.find('input', this.parentElement)[0];

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

                let char;
                let isRefresh = false;

                if (e.which) {
                    char = e.which;

                } else {

                    char = e.keyCode;

                    if (char === 116) { // f5
                        isRefresh = true;
                    }

                }

                const ignoreList = [8, 9, 35, 36, 37, 39, 46]; // backspace, tab, end, home, arrow left, arrow right, delete

                if (ignoreList.indexOf(char) === -1 && !isRefresh && (char < 48 || char > 57)) { // 48-57: 0-9
                    e.preventDefault();
                }

            });

        ui.on(document,
            'paste',

            '.' + ui.forms.targetText + ' > .' + ui.forms.nameNumber,

            function () {

                const maxLength = this.getAttribute('maxlength');
                this.removeAttribute('maxlength');

                setTimeout(() => {

                    let newValues = '';
                    const getValues = this.value.match(new RegExp(/[0-9]/, 'g'));

                    if (getValues !== null) {

                        Array.prototype.forEach.call(getValues,

                            item => {
                                newValues += item;
                            });

                    } else {

                        this.value = newValues;
                        return false;

                    }

                    if (maxLength !== null) {

                        let re = '[0-9]{1,' + maxLength + '}';
                        re = new RegExp(re, 'g');

                        this.value = newValues.match(re)[0];
                        this.setAttribute('maxlength', maxLength);

                    } else {
                        this.value = newValues;
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

                    const form = ui.closest(this, '.' + ui.forms.targetText)[0];
                    ui.trigger(form, 'submit');

                });

        }

        // trigger custom event listeners when form resetting
        ui.on(document,
            'reset',

            'form',

            function (e) {

                const forms = Array.prototype.slice.call(e.target);

                const errors = ui.find('.' + ui.forms.nameError, this);
                const reqMessages = ui.find('.' + ui.forms.nameRequiredMsg, this);

                setTimeout(() => { // wait for form reset started on DOM

                    Array.prototype.forEach.call(forms,

                        el => {

                            // trigger defined event listeners after form clear
                            if (!ui.hasClass(el, ui.forms.nameRequired)) { // discard required forms
                                ui.trigger(el, 'keydown keyup');
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

                const form = ui.find('input', this.parentElement)[0];
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

        () => {

            if (ui.ajax.classNames.indexOf(ui.forms.nameClear) > 0) {
                ui.forms.Init();
            }

        });

})();
