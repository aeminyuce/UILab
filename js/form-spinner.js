/*
 UI Form Spinner JS
 Requires UI JS
*/

ui.spinnerForm = {};

(function () {

    'use strict';
    /*globals document, ui */

    var checkSpinnerForms;

    ui.spinnerForm.Start = function () {

        // Event Listeners
        ui.on(document, 'click', '.spinner-t,.spinner-b', function () {

            var p = ui.closest(this, '.form-spinner'), input = ui.find('[type="text"]', p),

                val = Number(input.value),
                max = input.getAttribute('max'),
                min = input.getAttribute('min');

            if (ui.hasClass(this, 'spinner-t')) {
                val += 1;
                if (val >= max) { val = max; }

            } else {
                val -= 1;
                if (val <= min) { val = min; }

            }

            input.value = val;

        });

        checkSpinnerForms = function () {

            ui.each('.form-spinner', function () {

                var t = ui.find('[type="text"]', this)[0];
                t.value = t.getAttribute('value');

            });

        };
        checkSpinnerForms();

    };

    // Loaders
    ui.onload(ui.spinnerForm.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf('form-spinner') > -1) {
                checkSpinnerForms();
            }

        });

}());
