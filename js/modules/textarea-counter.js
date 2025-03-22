/* textarea counter */

import { ui } from './../core/globals.js';
export default () => ui;

ui.textareaCounter = {

    // targets
    target: 'ui-textarea',

    // main classnames
    nameToggle: 'ui-textarea-toggle',

    // data attributes
    dataCounter: 'data-ui-counter',
    dataChange: 'data-ui-changed'

};

ui.textareaCounter.Start = () => {

    function counter(el) {

        var p, v, total, length;

        p = el.parentElement;
        v = el.value;

        total = p.getAttribute(ui.textareaCounter.dataCounter);
        length = (total - v.length);

        if (length <= 0) {

            length = 0;

            p.setAttribute(ui.textareaCounter.dataChange, '0');
            el.value = v.substring(0, total);

        }

        ui.addClass(p, ui.globals.nameChange);
        p.setAttribute(ui.textareaCounter.dataChange, length);

        return false;

    }

    ui.textareaCounter.Init = () => {

        Array.prototype.forEach.call(ui.find('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + ']:not(.' + ui.globals.nameToggle + '):not(.' + ui.globals.nameChange + ')'),

            el => {
                counter(ui.find('textarea', el)[0]);
            });

    };
    ui.textareaCounter.Init();

    // Event Listeners
    ui.on(document,
        'keydown keyup keypress change',

        '.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + '] textarea',

        function (e) {

            if (e.type === 'keydown' && e.ctrlKey) {

                var that = this;

                setTimeout(() => {
                    counter(that);
                }, 0);

            } else counter(this);

        });

    ui.on(document,
        'reset',

        'form',

        function () {

            var i, that;

            that = ui.find('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + '] textarea');
            if (that.length === 0) return;

            setTimeout(() => {

                for (i = 0; i < that.length; i++) {
                    counter(that[i]);
                }

            }, 0);

        });

};

// loaders
ui.onload(ui.textareaCounter.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {
        if (ui.ajax.data.indexOf(ui.textareaCounter.dataCounter) > 0) ui.textareaCounter.Init();
    });