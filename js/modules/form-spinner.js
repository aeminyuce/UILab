/* form spinner */

import { ui } from './../core/globals.js';
export default () => ui;

ui.formSpinner = {

    // targets
    target: 'ui-form-spinner',

    // main classnames
    nameUp: 'ui-spinner-up',
    nameDown: 'ui-spinner-down'

};

ui.formSpinner.Start = () => {

    // Event Listeners
    ui.on(document,
        'click',

        '.' + ui.formSpinner.nameUp + ',.' + ui.formSpinner.nameDown,

        function () {

            const parent = ui.closest(this, '.' + ui.formSpinner.target);
            const input = ui.find('[type="text"]', parent);

            let val = Number(input.value);
            let max = input.getAttribute('max');
            let min = input.getAttribute('min');

            if (ui.hasClass(this, ui.formSpinner.nameUp)) {

                val += 1;
                if (val >= max) { val = max; }

            } else {

                val -= 1;
                if (val <= min) { val = min; }

            }

            input.value = val;

        });

    ui.formSpinner.Init = () => {

        Array.prototype.forEach.call(ui.find('.' + ui.formSpinner.target),

            el => {

                const that = ui.find('[type="text"]', el)[0];
                that.value = that.getAttribute('value');

            });

    };
    ui.formSpinner.Init();

};

// loaders
ui.onload(ui.formSpinner.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {
        if (ui.ajax.classNames.indexOf(ui.formSpinner.target) > -1) ui.formSpinner.Init();
    });