/*
 Form Spinner JS
 Form Spinner JS requires Selector Js, Events JS
*/

var spinnerForm = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax */

    var checkSpinnerForms;

    spinnerForm.Start = function () {

        // Events
        events.on(document, 'click', '.spinner-t,.spinner-b', function () {

            var p = events.closest(this, '.form-spinner'), input = selector('[type="text"]', p),

                val = Number(input.value),
                max = input.getAttribute('max'),
                min = input.getAttribute('min');

            if (events.hasClass(this, 'spinner-up')) {
                val += 1;
                if (val >= max) { val = max; }

            } else {
                val -= 1;
                if (val <= min) { val = min; }

            }

            input.value = val;

        });

        checkSpinnerForms = function () {

            events.each('.form-spinner', function () {

                var t = selector('[type="text"]', this)[0];
                t.value = t.getAttribute('value');

            });

        };
        checkSpinnerForms();

    };

    // Loaders
    events.onload(spinnerForm.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('form-spinner') > -1) { checkSpinnerForms(); }
    });

}());
