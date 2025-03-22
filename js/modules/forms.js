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
    nameFloatNumber: 'ui-number-float',
    nameWord: 'ui-word',

    nameFormIcon: 'ui-form-icon',

    nameRequired: 'ui-required',
    nameRequiredMsg: 'ui-required-msg',
    nameRequiredMsgShow: 'ui-show',

    nameError: 'ui-form-error',

    // tags
    tagFileInfo: 'i',

    // values
    customLetters : 'ığüşöçİĞÜŞÖÇ',

};

(() => {

    ui.forms.Start = () => {

        function formFocus(that, type) {

            const classes = [
                ui.forms.targetText,
                ui.forms.targetFile,
                ui.forms.targetSelect,
                ui.forms.targetSelectMulti,
                ui.forms.targetTextarea
            ];

            const holder = ui.closest(that, '.' + ui.forms.nameHolder);

            if (holder.length === 1) {

                ui.removeClass('.' + ui.forms.nameHolderFocus, ui.forms.nameHolderFocus);
                if (type === 'add') ui.addClass(holder, ui.forms.nameHolderFocus);

            } else ui.removeClass('.' + ui.forms.nameFocus, ui.forms.nameFocus);

            for (let i = 0; i < classes.length; i++) {

                const parent = ui.closest(that, '.' + classes[i]);
                if (parent.length === 1) {

                    if (type === 'add') ui.addClass(parent, ui.forms.nameFocus);
                    else ui.removeClass(parent, ui.forms.nameFocus);

                    break;
                }

            }

        }

        // clear with form icons
        const clearForms = (that) => {

            if (that.readOnly) return; // check readOnly forms
            const btn = ui.find('.' + ui.forms.nameClear, that.parentElement)[0];

            if (that.value !== '') {

                ui.addClass(btn, ui.globals.nameOpen);

                setTimeout(() => {
                    ui.addClass(btn, ui.globals.nameOpenEase);
                }, 10);

            } else {

                ui.removeClass(btn, ui.globals.nameOpenEase);

                setTimeout(() => {
                    ui.removeClass(btn, ui.globals.nameOpen);
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
            '.' + ui.forms.targetFile + ' input,' +
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
                if (info !== undefined) info.innerHTML = this.value;

            });

        // indeterminate
        ui.on(document,
            'click',

            'input[type="checkbox"].' + ui.forms.targetIndeterminate,

            function () {

                if (this.readOnly) this.checked = this.readOnly = false;
                else if (!this.checked) this.readOnly = this.indeterminate = true;

            });

        // toggle password
        ui.on(document,
            'click touchend',

            '.' + ui.forms.nameShowPass,

            function () {

                const that = ui.find('input', this.parentElement)[0];

                if (that.getAttribute('type') === 'password') that.setAttribute('type', 'text');
                else that.setAttribute('type', 'password');

            });

        // number, float number and text only forms
        ui.on(document,
            'input',

            '.' + ui.forms.targetText + ' > .' + ui.forms.nameNumber + ',' +
            '.' + ui.forms.targetText + ' > .' + ui.forms.nameFloatNumber + ',' +
            '.' + ui.forms.targetText + ' > .' + ui.forms.nameWord,

            function () {

                let newValues = '';
                let re = '';

                if (ui.hasClass(this, ui.forms.nameNumber)) {
                    re = '[0-9]';

                } else if (ui.hasClass(this, ui.forms.nameFloatNumber)) {
                    re = '[0-9\.]';

                } else if (ui.hasClass(this, ui.forms.nameWord)) {
                    re = '[a-zA-Z ' + ui.forms.customLetters + '.-]';
                }

                re = new RegExp(re, 'g');

                const getValues = this.value.match(re);
                if (getValues) Array.prototype.forEach.call(getValues, item => newValues += item);

                newValues = newValues.replace(/\s\s/g, ' '); // remove double spaces
                this.value = newValues;

            });

        // form icons
        if (ui.userAgents.mobile) { // fix: buttons not clicked on form focus at mobile devices

            ui.on(document,
                'mousedown',

                '[class*="' + ui.forms.nameFormIcon + '"] > button.' + ui.globals.nameIcon + ',' +
                '[class*="' + ui.forms.nameFormIcon + '"] > input.' + ui.globals.nameIcon,

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

                            // reset file info with placeholder
                            if (el.type === 'file') {

                                const info = ui.find(ui.forms.tagFileInfo, el.parentElement)[0];
                                if (info !== undefined) info.innerHTML = el.placeholder;

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

                } else clearForms(form);

            });

    };

    // loaders
    ui.onload(ui.forms.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {
            if (ui.ajax.classNames.indexOf(ui.forms.nameClear) > 0) ui.forms.Init();
        });

})();
