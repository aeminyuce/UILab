/*
 Required Forms JS
 Required Forms JS requires Events JS
*/

var requiredForms = {
    target: ''
};

(function () {

    'use strict';
    /*globals window, document, selector, events, setInterval, clearInterval */

    requiredForms.Start = function () {

        var eventForms = [

            '.text input.required',
            '.select select.required',
            '.textarea textarea.required',
            '.required-accept input.required'

        ];

        function required(that, type) {

            var p, parentType, checkHolder, checkForms, holderForms, next, showMsg, hideErr, showErr, min, val, reMail, radios, radiosCheck, i;

            hideErr = function () {

                showMsg = false;
                next = p.nextElementSibling;

                if (events.hasClass(next, 'required-msg')) { showMsg = true; }

                if (that.type === 'radio') {

                    radios = selector('[type="radio"][name="' + that.name + '"]');
                    events.addClass(radios, 'success');

                } else {
                    events.addClass(that, 'success');
                }

                events.removeClass(p, 'error');

                if (showMsg) { events.removeClass(next, 'show'); }

            };

            checkForms = function (t) {

                // show error
                showErr = function () {

                    if (t.type === 'radio') {

                        radios = selector('[type="radio"][name="' + that.name + '"]');
                        events.removeClass(radios, 'success');

                    } else {
                        events.removeClass(t, 'success');
                    }

                    events.addClass(p, 'error');

                    if (showMsg) {
                        events.addClass(next, 'show');
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
                        radios = selector('[type="radio"][name="' + t.name + '"]');

                        for (i = 0; i < radios.length; i += 1) {
                            if (radios[i].checked) { radiosCheck += 1; }
                        }

                        if (radiosCheck === 0) { showErr(); }

                    } else {

                        if (!t.checked) {

                            if (events.hasClass(t, 'indeterminate') && t.indeterminate) {
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

                // check email
                if (type === 'email') {

                    reMail = new RegExp('^[a-z0-9][a-z0-9-_\\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\\.[a-z0-9]{2,10}(?:\\.[a-z]{2,10})?$');
                    if (val.match(reMail) === null) { showErr(); }

                }

            };

            checkHolder = events.closest(that, '.form-holder')[0];
            if (checkHolder === undefined) { // single forms

                parentType = type;

                if (type !== 'select' && type !== 'textarea' && type !== 'required-accept') {
                    parentType = 'text';
                }

                p = events.closest(that, '.' + parentType)[0];

                hideErr();
                checkForms(that);

            } else { // form holders

                p = checkHolder;

                holderForms = selector(eventForms[0] + ',' +  eventForms[1], p); // only eventForms[0] and eventForms[1] needed!
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
        events.on(document, 'submit', 'form', function (e) {

            var i, forms, success, getIndex, getRect, scrollIndex, scrollTarget, scrollPos, scrollAnimate;

            forms = selector(eventForms.toString());
            if (forms.length === 0) { return; }

            success = 0;
            getIndex = 0;

            forms = selector(forms, this);

            for (i = 0; i < forms.length; i += 1) {

                if (events.hasClass(forms[i], 'success')) {
                    success += 1;

                } else {

                    if (getIndex === 0) {

                        getIndex = 1;
                        scrollIndex = i;

                    }

                }

            }

            if (forms.length > 0 && (forms.length !== success)) {

                e.preventDefault();

                events.each(forms, function () {
                    events.trigger(this, 'blur');
                });

            }

            if (requiredForms.target === '') {

                scrollTarget = window;
                scrollPos = scrollTarget.pageYOffset;


            } else {

                scrollTarget = selector(requiredForms.target)[0];
                scrollPos = scrollTarget.scrollTop;

            }

            getRect = forms[scrollIndex].getBoundingClientRect();
            scrollIndex = getRect.top - (getRect.height * 2) + scrollPos;

            clearInterval(scrollAnimate);
            scrollAnimate = setInterval(function () {

                scrollPos -= 10;

                scrollTarget.scrollTo(scrollIndex, scrollPos);
                if (scrollPos + 10 <= scrollIndex) { clearInterval(scrollAnimate); }

            }, 2);

        });

        events.on(document, 'keyup blur', eventForms[0], function () {
            required(this, this.type);
        });

        events.on(document, 'change blur', eventForms[1], function () {
            required(this, 'select');
        });

        events.on(document, 'keyup blur', eventForms[2], function () {
            required(this, 'textarea');
        });

        events.on(document, 'change blur', eventForms[3], function () {
            required(this, 'required-accept');
        });

    };

    // Loaders
    events.onload(requiredForms.Start);

}());
