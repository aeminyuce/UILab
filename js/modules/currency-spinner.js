/* currency spinner */

import { ui } from './../core/globals.js';
export default () => ui;

ui.currencySpinner = {

    // targets
    target: 'ui-currency-spinner',

    // main classnames
    nameUp: 'ui-currency-up',
    nameDown: 'ui-currency-down',

    // outer classnames
    nameInput: 'ui-input',

    // values
    decimalLenght: 2,

    // data attributes
    dataDecimal: 'data-ui-decimal'
};

(() => {

    let cacheCurrencySpinner;

    const convert = (s, isDecimal) => {

        const regDecimal = new RegExp(/(\,+\d+)/g);
        const regClear = new RegExp(/(\s)|(\.)|(\,)/g);

        if (isDecimal) {

            let number = s.replace(regDecimal, '');
            let decimal = s.match(regDecimal);

            if (decimal === null) {

                decimal = '';

                for (let i = 0; i < ui.currencySpinner.decimalLenght; i++) { // add zero as decimallength
                    decimal += '0';
                }

            } else decimal = decimal[0];

            number = Number(number.replace(regClear, ''));
            decimal = decimal.replace(regClear, '').substring(0, ui.currencySpinner.decimalLenght);

            s = [];

            s.push(number);
            s.push(decimal);

        } else s = Number(s.replace(/(\s)|(\.)|(\,+\d+)|(\,)/g, ''));

        return s;

    }

    function locales(l) {
        return l.toLocaleString();
    }

    function currencyChange(that) {

        const parent = ui.closest(that, '.' + ui.currencySpinner.target);
        const input = ui.find('[type="text"]', parent);

        let isDecimal = input.getAttribute(ui.currencySpinner.dataDecimal);
        isDecimal = isDecimal !== null ? true : false;

        const nav = [];

        nav.up = ui.hasClass(that, ui.currencySpinner.nameUp);
        nav.down = ui.hasClass(that, ui.currencySpinner.nameDown);

        let val = convert(input.value, isDecimal);

        if (nav.up || nav.down) {

            let step = convert(input.getAttribute('step'), isDecimal);
            let min = convert(input.getAttribute('min'), isDecimal);

            if (nav.up) {

                if (isDecimal) {

                    val[0] += step[0];
                    val[1] += step[1];

                } else val += step;

            } else {

                if (isDecimal) {

                    val[0] -= step[0];
                    val[1] -= step[1];

                    if (val[0] <= min[0]) { val[0] = min[0]; }
                    if (val[1] <= min[1]) { val[1] = min[1]; }

                } else {

                    val -= step;
                    if (val <= min) { val = min; }

                }

            }

            if (isDecimal) {

                step[0] = locales(step[0]);
                min[0] = locales(min[0]);

            } else {

                step = locales(step);
                min = locales(min);

            }

        }

        if (isDecimal) {

            val[0] = locales(val[0]);
            input.value = val[0] + ',' + val[1].substring(0, ui.currencySpinner.decimalLenght);

        } else {

            val = locales(val);
            input.value = val;

        }

    }

    ui.currencySpinner.Init = () => {

        Array.prototype.forEach.call(ui.find('.' + ui.currencySpinner.target),

            el => {

                const that = ui.find('input[type="text"]', el)[0];
                if (that.value) currencyChange(that);

            }

        );

    }

    ui.currencySpinner.Start = () => {

        ui.currencySpinner.Init();

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.currencySpinner.nameUp + ',.' + ui.currencySpinner.nameDown,

            function (e) {

                e.preventDefault();
                currencyChange(this);

            });

        ui.on(document,
            'keypress',

            '.' + ui.currencySpinner.target + ' input[type="text"]',

            function (e) {

                let char, ignoreList;
                let isRefresh = false;

                if (e.which) char = e.which;
                else {

                    char = e.keyCode;
                    if (char === 116) isRefresh = true; // f5

                }

                ignoreList = [8, 9, 35, 36, 37, 39]; // backspace, tab, end, home, arrow left, arrow right

                let isDecimal = this.getAttribute(ui.currencySpinner.dataDecimal);
                if (isDecimal !== null) ignoreList.push(44); // print screen

                if (ignoreList.indexOf(char) === -1 && !isRefresh && (char < 48 || char > 57)) { // 48-57: 0-9
                    e.preventDefault();
                }

            });

        ui.on(document,
            'focus',

            '.' + ui.currencySpinner.target + ' input[type="text"]',

            function () {
                cacheCurrencySpinner = this.value;
            });

        ui.on(document,
            'input blur',

            '.' + ui.currencySpinner.target + ' input[type="text"]',

            function (e) {

                if (this.value.length === 0) return;

                if (e.keyCode === 27) {

                    this.value = cacheCurrencySpinner;
                    ui.trigger(this, 'blur');

                    return;

                }

                // get previous caret position
                let caretPos = Number(e.target.selectionStart);

                const prevDots = this.value.match(/(\.)/g);
                let prevDotslength = 0;

                if (prevDots !== null) prevDotslength = prevDots.length;
                caretPos -= prevDotslength; // remove previous dots

                // convert value
                currencyChange(this);

                // set new caret position
                const newDots = this.value.match(/(\.)/g);
                let newDotsLength = 0;

                if (newDots !== null) newDotsLength = newDots.length;
                caretPos += newDotsLength;

                let valLength = this.value.length;

                if (caretPos <= valLength) {
                    this.setSelectionRange(caretPos, caretPos);
                }

                if (e.type === 'blur') {

                    let isDecimal = this.getAttribute(ui.currencySpinner.dataDecimal);
                    isDecimal = isDecimal !== null ? true : false;

                    const input = ui.find('.' + ui.currencySpinner.target + ' .' + ui.currencySpinner.nameInput + ' input')[0];
                    const min = convert(input.getAttribute('min'), isDecimal);

                    if (convert(input.value, isDecimal) < min) input.value = locales(min);

                }

            });

        ui.on(document,
            'keydown',

            ui.closest('.' + ui.currencySpinner.target, 'form'),

            function (e) {

                if (e.keyCode === 13) {

                    e.preventDefault();
                    ui.trigger('.' + ui.currencySpinner.target + ' .' + ui.currencySpinner.nameInput + ' input', 'blur');

                } else return;

            });

    };

    // loaders
    ui.onload(ui.currencySpinner.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {
            if (ui.ajax.classNames.indexOf(ui.currencySpinner.target) > -1) ui.currencySpinner.Init();
        });

})();
