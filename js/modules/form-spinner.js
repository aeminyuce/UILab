/*
 UI Form Spinner JS
 Requires UI Core JS
*/

ui.formSpinner = {

    // targets
    target: 'ui-form-spinner',

    // main classnames
    nameUp: 'ui-spinner-up',
    nameDown: 'ui-spinner-down'

};

(function () {

    var checkSpinnerForms;

    ui.formSpinner.Start = function () {

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.formSpinner.nameUp + ',.' + ui.formSpinner.nameDown,

            function () {

                var p, input, val, max, min;

                p = ui.closest(this, '.' + ui.formSpinner.target),
                input = ui.find('[type="text"]', p);

                val = Number(input.value);
                max = input.getAttribute('max');
                min = input.getAttribute('min');

                if (ui.hasClass(this, ui.formSpinner.nameUp)) {

                    val += 1;
                    if (val >= max) { val = max; }

                } else {

                    val -= 1;
                    if (val <= min) { val = min; }

                }

                input.value = val;

            });

        checkSpinnerForms = function () {

            ui.each('.' + ui.formSpinner.target,

                function () {

                    var t = ui.find('[type="text"]', this)[0];
                    t.value = t.getAttribute('value');

                });

        };
        checkSpinnerForms();

    };

    // Loaders
    ui.onload(ui.formSpinner.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.formSpinner.target) > -1) {
                checkSpinnerForms();
            }

        });

}());
