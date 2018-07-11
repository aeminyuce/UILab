/*
 Spinner JS
 Spinner JS requires Events JS
*/

/*globals window, document, selector, events */
function spinnerFnc() {

    'use strict';

    events.on(document, 'click', '.spinner-up,.spinner-down', function () {

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

    window.checkSpinnerForms = function () {

        events.each('.form-spinner', function () {
            var t = selector('[type="text"]', this)[0];
            t.value = t.getAttribute('value');
        });

    };
    window.checkSpinnerForms();

}

/*!loader */
events.onload(function () {

    'use strict';
    spinnerFnc();

});

/*!ajax callback loader: requires Ajax JS */
events.on(document, 'ajaxCallbacks', function () {

    'use strict';
    if (window.ajaxClassNames.indexOf('form-spinner') > -1) { window.checkSpinnerForms(); }

});
