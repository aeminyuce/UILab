/*
 UI Textarea Counter JS
 Requires UI JS
*/

ui.textareaCounter = {

    // targets
    target: 'textarea',

    // main classnames
    nameToggle: 'toggle-textarea',

    // helper classnames
    nameChange: 'change',

    // data attributes
    dataCounter: 'data-ui-counter',
    dataChange: 'data-ui-change'

};

(function () {

    'use strict';
    /*globals document, ui, setTimeout */

    var loadCounters;

    ui.textareaCounter.Start = function () {

        function counter(t) {

            var p, v, total, length;

            p = t.parentElement;
            v = t.value;

            total = p.getAttribute(ui.textareaCounter.dataCounter);
            length = (total - v.length);

            if (length <= 0) {

                length = 0;

                p.setAttribute(ui.textareaCounter.dataChange, '0');
                t.value = v.substring(0, total);

            }

            ui.addClass(p, ui.textareaCounter.nameChange);
            p.setAttribute(ui.textareaCounter.dataChange, length);

            return false;

        }

        loadCounters = function () {

            ui.each('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + ']:not(.' + ui.textareaCounter.nameToggle + '):not(.' + ui.textareaCounter.nameChange + ')',

                function () {
                    counter(ui.find('textarea', this)[0]);
                });

        };
        loadCounters();

        // Event Listeners
        ui.on(document,
            'keydown keyup keypress change',

            '.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + '] textarea',

            function (e) {

                if (e.type === 'keydown' && e.ctrlKey) {

                    var that = this;
                    setTimeout(function () { counter(that); }, 0);

                } else { counter(this); }

            });

        ui.on(document,
            'reset',

            'form',

            function () {

                var i, that;

                that = ui.find('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + '] textarea');
                if (that.length === 0) { return; }

                setTimeout(function () {

                    for (i = 0; i < that.length; i++) {
                        counter(that[i]);
                    }

                }, 0);

            });

    };

    // Loaders
    ui.onload(ui.textareaCounter.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.text.indexOf(ui.textareaCounter.dataCounter) > 0) {
                loadCounters();
            }

        });

}());
