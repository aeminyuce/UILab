/*
 UI Required Forms JS
 Requires UI JS
*/

ui.requiredForms = {
    target: ''
};

(function () {

    'use strict';
    /*globals window, document, ui, setInterval, clearInterval */

    ui.requiredForms.Start = function () {

        var eventForms = [

            '.text input.required',             // 0
            '.select select.required',          // 1
            '.textarea textarea.required',      // 2
            '.required-accept input.required',  // 3
            '.file input.required'              // 4

        ];

        function required(that, type) {

            var p, parentType, checkHolder, checkForms, holderForms, next, showMsg, hideErr, showErr, min, max, val, reMail, radios, radiosCheck, i;

            hideErr = function () {

                showMsg = false;
                next = p.nextElementSibling;

                if (ui.hasClass(next, 'required-msg')) { showMsg = true; }

                if (that.type === 'radio') {

                    radios = ui.find('[type="radio"][name="' + that.name + '"]');
                    ui.addClass(radios, 'success');

                } else {
                    ui.addClass(that, 'success');
                }

                ui.removeClass(p, 'error');

                if (showMsg) { ui.removeClass(next, 'show'); }

            };

            checkForms = function (t) {

                // show error
                showErr = function () {

                    if (t.type === 'radio') {

                        radios = ui.find('[type="radio"][name="' + that.name + '"]');
                        ui.removeClass(radios, 'success');

                    } else {
                        ui.removeClass(t, 'success');
                    }

                    ui.addClass(p, 'error');

                    if (showMsg) {
                        ui.addClass(next, 'show');
                    }

                };

                // check value
                if (type !== 'required-accept') {

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

                            if (ui.hasClass(t, 'indeterminate') && t.indeterminate) {
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

                    reMail = new RegExp('^[a-z0-9][a-z0-9-_\\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\\.[a-z0-9]{2,10}(?:\\.[a-z]{2,10})?$');
                    if (val.match(reMail) === null) { showErr(); }

                }

            };

            checkHolder = ui.closest(that, '.form-holder')[0];
            if (checkHolder === undefined) { // single forms

                parentType = type;

                if (type !== 'select' && type !== 'textarea' && type !== 'required-accept' && type !== 'file') {
                    parentType = 'text';
                }

                p = ui.closest(that, '.' + parentType)[0];

                hideErr();
                checkForms(that);

            } else { // form holders

                p = checkHolder;

                holderForms = ui.find(eventForms[0] + ',' +  eventForms[1], p); // only eventForms[0] and eventForms[1] needed!
                hideErr();

                ui.each(holderForms, function () {

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
        ui.on(document, 'submit', 'form', function (e) {

            var i, elems, formElems, success, getIndex, getRect, scrollIndex, scrollPos, scrollAnimate;

            formElems = [];
            elems = e.target.elements; // get submitted element list

            for (i = 0; i < elems.length; i++) { // filter required elements

                if (ui.hasClass(elems[i], 'required')) {
                    formElems.push(elems[i]);
                }

            }

            if (formElems.length === 0) { return; }

            success = 0;
            getIndex = 0;

            if (formElems.length !== success) {

                ui.each(formElems, function () {
                    ui.trigger(this, 'keyup change');
                });

            }

            for (i = 0; i < formElems.length; i++) {

                if (ui.hasClass(formElems[i], 'success')) {
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

        ui.on(document, 'keyup', eventForms[0], function () {
            required(this, this.type);
        });

        ui.on(document, 'change', eventForms[1], function () {
            required(this, 'select');
        });

        ui.on(document, 'keyup', eventForms[2], function () {
            required(this, 'textarea');
        });

        ui.on(document, 'change', eventForms[3], function () {
            required(this, 'required-accept');
        });

        ui.on(document, 'change', eventForms[4], function () {
            required(this, 'file');
        });

    };

    // Loaders
    ui.onload(ui.requiredForms.Start);

}());
