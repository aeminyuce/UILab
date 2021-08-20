/*
 UI Currency Spinner JS
 Requires UI JS
*/

ui.currencySpinner = {
    decimals: false
};

(function () {

    'use strict';
    /*globals document, ui */

    var cacheCurrencySpinner;

    ui.currencySpinner.Start = function () {

        function convert(s) {

            var regDecimal, regClear, number, decimal;

            regDecimal = new RegExp(/(\,+\d+)/g);
            regClear = new RegExp(/(\s)|(\.)|(\,)/g);

            if (ui.currencySpinner.decimals) {

                number = s.replace(regDecimal, '');

                decimal = s.match(regDecimal);
                if (decimal === null) { decimal = '0'; } else { decimal = decimal[0]; }

                number = Number(number.replace(regClear, ''));
                decimal = Number(decimal.replace(regClear, ''));

                s = [];

                s.push(number);
                s.push(decimal);

            } else {
                s = Number(s.replace(/(\s)|(\.)|(\,+\d+)|(\,)/g, ''));
            }

            return s;

        }

        function locales(l) {
            return l.toLocaleString();
        }

        function currencyChange(that) {

            var p, input, val, min, step, nav;

            nav = [];

            p = ui.closest(that, '.currency-spinner');
            input = ui.find('[type="text"]', p);

            val = convert(input.value);

            nav.up = ui.hasClass(that, 'currency-up');
            nav.down = ui.hasClass(that, 'currency-down');

            if (nav.up || nav.down) {

                step = convert(input.getAttribute('step'));
                min = convert(input.getAttribute('min'));

                if (nav.up) {

                    if (ui.currencySpinner.decimals) {

                        val[0] += step[0];
                        val[1] += step[1];

                    } else { val += step; }

                } else {

                    if (ui.currencySpinner.decimals) {

                        val[0] -= step[0];
                        val[1] -= step[1];

                        if (val[0] <= min[0]) { val[0] = min[0]; }
                        if (val[1] <= min[1]) { val[1] = min[1]; }

                    } else {

                        val -= step;
                        if (val <= min) { val = min; }

                    }

                }

                if (ui.currencySpinner.decimals) {

                    step[0] = locales(step[0]);
                    min[0] = locales(min[0]);

                } else {

                    step = locales(step);
                    min = locales(min);

                }

            }

            if (ui.currencySpinner.decimals) {

                val[0] = locales(val[0]);
                input.value = val[0] + ',' + val[1];

            } else {

                val = locales(val);
                input.value = val;

            }

        }

        // Event Listeners
        ui.on(document, 'click', '.currency-up,.currency-down', function (e) {

            e.preventDefault();
            currencyChange(this);

        });

        ui.on(document, 'keypress', '.currency-spinner input[type="text"]', function (e) {

            var c, isRefresh = false;

            if (e.which) {
                c = e.which;

            } else {

                c = e.keyCode;
                if (c === 116) { isRefresh = true; }

            }

            if (ui.currencySpinner.decimals) {

                if (c !== 8 && c !== 9 && c !== 35 && c !== 36 && c !== 37 && c !== 39 && c !== 44 && !isRefresh && (c < 48 || c > 57)) {
                    e.preventDefault();
                }

            } else {

                if (c !== 8 && c !== 9 && c !== 35 && c !== 36 && c !== 37 && c !== 39 && !isRefresh && (c < 48 || c > 57)) {
                    e.preventDefault();
                }

            }

        });

        ui.on(document,

            'focus',
            '.currency-spinner input[type="text"]',

                function () {
                cacheCurrencySpinner = this.value;
            });

        ui.on(document,

            'keyup blur',
            '.currency-spinner input[type="text"]',

            function (e) {

                if (e.keyCode === 27) {

                    this.value = cacheCurrencySpinner;
                    ui.trigger(this, 'blur');

                    return;

                }

                if (ui.currencySpinner.decimals) {

                    if (e.type === 'blur') {
                        currencyChange(this);
                    }

                } else { currencyChange(this); }

                if (e.type === 'blur') {

                    var input, min;

                    input = ui.find('.currency-spinner .text input')[0];
                    min = convert(input.getAttribute('min'));

                    if (convert(input.value) < min) { input.value = locales(min); }

                }

            });

        ui.on(document,

            'keydown',
            ui.closest('.currency-spinner', 'form'),

            function (e) {

                if (e.keyCode === 13) {

                    e.preventDefault();
                    ui.trigger('.currency-spinner .text input', 'blur');

                } else { return; }

            });

    };

    // Loaders
    ui.onload(ui.currencySpinner.Start);

}());
