/*
 UI Textarea Counter JS
 Requires UI JS
*/

ui.textareaCounter = {};

(function () {

    'use strict';
    /*globals document, ui, setTimeout */

    var loadCounters;

    ui.textareaCounter.Start = function () {

        function counter(t) {

            var p, v, total, length;

            p = t.parentElement;
            v = t.value;

            total = p.getAttribute('data-counter');
            length = (total - v.length);

            if (length <= 0) {

                length = 0;

                p.setAttribute('data-change', '0');
                t.value = v.substring(0, total);

            }

            ui.addClass(p, 'change');
            p.setAttribute('data-change', length);

            return false;

        }

        loadCounters = function () {

            ui.each('.textarea[data-counter]:not(.toggle-textarea):not(.change)', function () {

                var textarea = ui.find('textarea', this)[0];
                counter(textarea);

            });

        };
        loadCounters();

        // Event Listeners
        ui.on(document, 'keydown keypress change', '.textarea[data-counter] textarea', function (e) {

            if (e.type === 'keydown' && e.ctrlKey) {

                var that = this;
                setTimeout(function () { counter(that); }, 0);

            } else { counter(this); }

        });

        ui.on(document, 'reset', 'form', function () {

            var i, that;

            that = ui.find('.textarea[data-counter] textarea');
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
    ui.on(document, 'ui:ajaxCallbacks', function () {
        if (ui.ajax.text.indexOf('data-counter="') > 0) { loadCounters(); }
    });

}());
