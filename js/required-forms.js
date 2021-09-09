/*
 UI Required Forms JS
 Requires UI JS
*/

ui.requiredForms = {

    // targets
    target: 'required',

    // main classnames
    targetAccept: 'required-accept', // required holder for checks, forms and custom switches
    nameMsg: 'required-msg',

    // helper classnames
    nameSuccess: 'success',
    nameShow: 'show',

    // outer classnames
    nameHolder: 'form-holder',

    nameText: 'text',
    nameSelect: 'select',
    nameTextarea: 'textarea',
    nameFile: 'file',
    nameIndeterminate: 'indeterminate',

    nameError: 'error',

    // values
    rexMail: '^[a-z0-9][a-z0-9-_\\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\\.[a-z0-9]{2,10}(?:\\.[a-z]{2,10})?$'

};

(function () {

    'use strict';
    /*globals window, document, ui, setInterval, clearInterval */

    ui.requiredForms.Start = function () {

        function required(that, type) {

            var p, parentType, checkHolder, checkForms, holderForms, next, showMsg, hideErr, showErr, min, max, val, reMail, radios, radiosCheck, i;

            hideErr = function () {

                showMsg = false;
                next = p.nextElementSibling;

                if (ui.hasClass(next, ui.requiredForms.nameMsg)) { showMsg = true; }

                if (that.type === 'radio') {

                    radios = ui.find('[type="radio"][name="' + that.name + '"]');
                    ui.addClass(radios, ui.requiredForms.nameSuccess);

                } else {
                    ui.addClass(that, ui.requiredForms.nameSuccess);
                }

                ui.removeClass(p, ui.requiredForms.nameError);

                if (showMsg) { ui.removeClass(next, ui.requiredForms.nameShow); }

            };

            checkForms = function (t) {

                // show error
                showErr = function () {

                    if (t.type === 'radio') {

                        radios = ui.find('[type="radio"][name="' + that.name + '"]');
                        ui.removeClass(radios, ui.requiredForms.nameSuccess);

                    } else {
                        ui.removeClass(t, ui.requiredForms.nameSuccess);
                    }

                    ui.addClass(p, ui.requiredForms.nameError);

                    if (showMsg) {
                        ui.addClass(next, ui.requiredForms.nameShow);
                    }

                };

                // check value
                if (type !== ui.requiredForms.targetAccept) {

                    val = t.value.toLowerCase();
                    val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                    if (val === '') { showErr(); }

                } else {

                    if (t.type === 'radio') {

                        radiosCheck = 0;
                        radios = ui.find('[type="radio"][name="' + t.name + '"]');

                        for (i = 0; i < radios.length; i++) {
                            if (radios[i].checked) { radiosCheck += 1; }
                        }

                        if (radiosCheck === 0) { showErr(); }

                    } else {

                        if (!t.checked) {

                            if (ui.hasClass(t, ui.requiredForms.nameIndeterminate) && t.indeterminate) {
                                return;
                            }
                            showErr();

                        }

                    }

                }

                // check min
                if (type !== 'select') {

                    min = t.getAttribute('minlength');

                    if (min !== null && min !== '' && !isNaN(min)) {
                        if (val.length < min) { showErr(); }
                    }

                }

                // check min and max numbers
                if (type !== 'select') {

                    min = t.getAttribute('minnumber');
                    if (min !== null && min !== '' && !isNaN(min)) {

                        if (!isNaN(val)) {
                            if (Number(val) < Number(min)) { showErr(); }
                        } else { showErr(); }

                    }

                    max = t.getAttribute('maxnumber');
                    if (max !== null && max !== '' && !isNaN(max)) {

                        if (!isNaN(val)) {
                            if (Number(val) > Number(max)) { showErr(); }
                        } else { showErr(); }

                    }

                }

                // check email
                if (type === 'email') {

                    reMail = new RegExp(ui.requiredForms.rexMail);
                    if (val.match(reMail) === null) { showErr(); }

                }

            };

            checkHolder = ui.closest(that, '.' + ui.requiredForms.nameHolder)[0];
            if (checkHolder === undefined) { // single forms

                parentType = type;

                if (type !== 'select' && type !== 'textarea' && type !== ui.requiredForms.targetAccept && type !== 'file') {
                    parentType = 'text';
                }

                p = ui.closest(that, '.' + parentType)[0];

                hideErr();
                checkForms(that);

            } else { // form holders

                p = checkHolder;

                holderForms = ui.find('.' + ui.requiredForms.nameText + ' input.' + ui.requiredForms.target + ',' +  '.' + ui.requiredForms.nameSelect + ' select.' + ui.requiredForms.target, p);
                hideErr();

                ui.each(holderForms,

                    function () {

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

        // Event Listeners
        ui.on(document,
            'submit',

            'form',

            function (e) {

                var i, elems, formElems, success, getIndex, getRect, scrollIndex, scrollPos, scrollAnimate;

                formElems = [];
                elems = e.target.elements; // get submitted element list

                for (i = 0; i < elems.length; i++) { // filter required elements

                    if (ui.hasClass(elems[i], ui.requiredForms.target)) {
                        formElems.push(elems[i]);
                    }

                }

                if (formElems.length === 0) { return; }

                success = 0;
                getIndex = 0;

                if (formElems.length !== success) {

                    ui.each(formElems,

                        function () {
                            ui.trigger(this, 'keyup change');
                        });

                }

                for (i = 0; i < formElems.length; i++) {

                    if (ui.hasClass(formElems[i], ui.requiredForms.nameSuccess)) {
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

                    scrollPos = window.pageYOffset;

                    getRect = formElems[scrollIndex].getBoundingClientRect();
                    scrollIndex = getRect.top - (getRect.height * 2) + scrollPos;

                    clearInterval(scrollAnimate);
                    scrollAnimate = setInterval(function () {

                        scrollPos -= 10;

                        window.scrollTo(scrollIndex, scrollPos);
                        if (scrollPos + 10 <= scrollIndex) { clearInterval(scrollAnimate); }

                    }, 2);

                } else { return; }

            });

        ui.on(document,
            'keyup',

            '.' + ui.requiredForms.nameText + ' input.' + ui.requiredForms.target,

            function () {
                required(this, this.type);
            });

        ui.on(document,
            'change',

            '.' + ui.requiredForms.nameSelect + ' select.' + ui.requiredForms.target,

            function () {
                required(this, 'select');
            });

        ui.on(document,
            'keyup',

            '.' + ui.requiredForms.nameTextarea + ' textarea.' + ui.requiredForms.target,

            function () {
                required(this, 'textarea');
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
                required(this, 'file');
            });

    };

    // Loaders
    ui.onload(ui.requiredForms.Start);

}());
