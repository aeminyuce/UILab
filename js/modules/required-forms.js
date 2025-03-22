/* required forms */

import { ui } from './../core/globals.js';
export default () => ui;

ui.requiredForms = {

    // targets
    target: 'ui-required',

    // main classnames
    targetAccept: 'ui-required-holder',
    nameMsg: 'ui-required-msg',

    // outer classnames
    nameHolder: 'ui-form-holder',

    nameInput: 'ui-input',
    nameSelect: 'ui-select',
    nameTextarea: 'ui-textarea',
    nameFile: 'ui-file',
    nameIndeterminate: 'ui-indeterminate',

    nameError: 'ui-form-error',

    // values
    scrollingTopSpacing: 20,
    rexMail: '([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}(;|$))',

    // custom events
    eventShowErr: 'ui:requiredShowErr'

};

ui.requiredForms.Start = () => {

    function required(that, type) {

        var p, parentType, checkHolder, checkForms, holderForms, next, showMsg, hideErr, showErr, min, max, val, reMail, radios, radiosCheck, i;

        hideErr = function () {

            showMsg = false;
            next = p.nextElementSibling;

            if (ui.hasClass(next, ui.requiredForms.nameMsg)) { showMsg = true; }

            if (that.type === 'radio') {

                radios = ui.find('[type="radio"][name="' + that.name + '"]');
                ui.addClass(radios, ui.globals.nameSuccess);

            } else ui.addClass(that, ui.globals.nameSuccess);

            ui.removeClass(p, ui.requiredForms.nameError);
            if (showMsg) ui.removeClass(next, ui.globals.nameShow);

            setTimeout(() => { // resize modals
                if (ui.modal !== undefined) ui.modal.resizer();
            }, 0);

        };

        checkForms = function (el) {

            let showAlertTimer;

            // show error
            showErr = function () {

                clearTimeout(showAlertTimer);

                showAlertTimer = setTimeout(() => {
                    ui.trigger(document, ui.requiredForms.eventShowErr); // set custom event
                }, ui.globals.ease);

                if (el.type === 'radio') {

                    radios = ui.find('[type="radio"][name="' + that.name + '"]');
                    ui.removeClass(radios, ui.globals.nameSuccess);

                } else ui.removeClass(el, ui.globals.nameSuccess);

                ui.addClass(p, ui.requiredForms.nameError);
                if (showMsg) ui.addClass(next, ui.globals.nameShow);

                setTimeout(() => { // resize modals
                    if (ui.modal !== undefined) ui.modal.resizer();
                }, 0);

            };

            // check value
            if (type !== ui.requiredForms.targetAccept) {

                val = el.value.toLowerCase();
                val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                if (val === '') showErr();

            } else {

                if (el.type === 'radio') {

                    radiosCheck = 0;
                    radios = ui.find('[type="radio"][name="' + el.name + '"]');

                    for (i = 0; i < radios.length; i++) {
                        if (radios[i].checked) radiosCheck += 1;
                    }

                    if (radiosCheck === 0) showErr();

                } else {

                    if (!el.checked) {

                        if (ui.hasClass(el, ui.requiredForms.nameIndeterminate) && el.indeterminate) return;
                        showErr();

                    }

                }

            }

            // check min
            if (type !== ui.requiredForms.nameSelect) {

                min = el.getAttribute('minlength');

                if (min !== null && min !== '' && !isNaN(min)) {
                    if (val.length < min) showErr();
                }

            }

            // check min and max numbers
            if (type !== ui.requiredForms.nameSelect) {

                val = val ? val.replace(/\.|\,/g, '') : val; // remove dots and commas

                min = el.getAttribute('min');

                if (min !== null && min !== '' && !isNaN(min)) {
                    if (Number(val) < Number(min)) showErr();
                }

                max = el.getAttribute('max');

                if (max !== null && max !== '' && !isNaN(max)) {
                    if (Number(val) > Number(max)) showErr();
                }

            }

            // check emails
            if (type === ui.globals.prefix + 'email') {

                reMail = new RegExp(ui.requiredForms.rexMail);
                if (val.match(reMail) === null) showErr();

            }

        };

        checkHolder = ui.closest(that, '.' + ui.requiredForms.nameHolder)[0];
        if (checkHolder === undefined) { // default forms

            parentType = type;

            if (type !== ui.requiredForms.nameSelect && type !== ui.requiredForms.nameTextarea && type !== ui.requiredForms.targetAccept && type !== ui.requiredForms.nameFile) {
                parentType = ui.requiredForms.nameInput;
            }

            p = ui.closest(that, '.' + parentType)[0];

            hideErr();
            checkForms(that);

        } else { // form holders

            p = checkHolder;

            holderForms = ui.find('.' + ui.requiredForms.nameInput + ' input.' + ui.requiredForms.target + ',' + '.' + ui.requiredForms.nameSelect + ' select.' + ui.requiredForms.target, p);
            hideErr();

            Array.prototype.forEach.call(holderForms,

                el => {

                    if (el.tagName === 'SELECT') {
                        type = ui.requiredForms.nameSelect;

                    } else {

                        type = el.getAttribute('type');
                        if (type === null || type === '') return;

                        if (type === 'text') type = ui.requiredForms.nameInput;
                        else type = ui.globals.prefix + type;

                    }

                    checkForms(el);

                });

        }

    }

    // Event Listeners
    ui.on(document,
        'submit',

        'form',

        function (e) {

            var i, elems, formElems, success, getIndex, getRect, scrollIndex, scrollPos;

            formElems = [];
            elems = e.target.elements; // get submitted element list

            for (i = 0; i < elems.length; i++) { // filter required elements

                if (ui.hasClass(elems[i], ui.requiredForms.target) && !elems[i].disabled) { // extract disabled elements
                    formElems.push(elems[i]);
                }

            }

            if (formElems.length === 0) return;

            success = 0;
            getIndex = 0;

            if (formElems.length !== success) {

                Array.prototype.forEach.call(formElems,

                    el => {

                        // trigger defined event listeners after form clear
                        ui.trigger(el, 'keyup change');

                        // reset file info with placeholder
                        if (el.type === 'file') {

                            const info = ui.find(ui.forms.tagFileInfo, el.parentElement)[0];
                            if (info !== undefined) info.innerHTML = el.placeholder;

                        }

                    });

            }

            for (i = 0; i < formElems.length; i++) {

                if (ui.hasClass(formElems[i], ui.globals.nameSuccess)) {
                    success += 1;

                } else {

                    if (getIndex === 0) {

                        getIndex = 1;
                        scrollIndex = i;

                    }

                }

            }

            if (formElems.length !== success) {

                e.preventDefault();
                e.stopPropagation();

                if (ui.modal !== undefined) { // stop scrolling when modal opened

                    if (ui.hasClass(document, ui.modal.nameModalOpened)) {
                        return;
                    }

                }

                scrollPos = window.pageYOffset;

                getRect = formElems[scrollIndex].getBoundingClientRect();
                scrollIndex = getRect.top - (getRect.height * 2) + scrollPos - ui.requiredForms.scrollingTopSpacing;

                window.scrollTo(0, scrollIndex);

            } else return;

        });

    ui.on(document,
        'keyup',

        '.' + ui.requiredForms.nameInput + ' input.' + ui.requiredForms.target,

        function () {
            required(this, ui.globals.prefix + this.type);
        });

    ui.on(document,
        'change',

        '.' + ui.requiredForms.nameInput + ' input.' + ui.requiredForms.target + '[type="date"],' +
        '.' + ui.requiredForms.nameInput + ' input.' + ui.requiredForms.target + '[type="time"]',

        function () {
            required(this, ui.globals.prefix + this.type);
        });

    ui.on(document,
        'change',

        '.' + ui.requiredForms.nameSelect + ' select.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.nameSelect);
        });

    ui.on(document,
        'keyup',

        '.' + ui.requiredForms.nameTextarea + ' textarea.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.nameTextarea);
        });

    ui.on(document,
        'change',

        '.' + ui.requiredForms.targetAccept + ' input.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.targetAccept);
        });

    ui.on(document,
        'change',

        '.' + ui.requiredForms.nameFile + ' input.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.nameFile);
        });

};

// loaders
ui.onload(ui.requiredForms.Start);