/*
 Textarea Counter JS
 Textarea Counter JS requires Events JS
*/

var textareaCounter = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax, setTimeout */

    var loadCounters;

    textareaCounter.Start = function () {

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

            events.addClass(p, 'change');
            p.setAttribute('data-change', length);

            return false;

        }

        loadCounters = function () {

            events.each('.textarea[data-counter]:not(.toggle-textarea):not(.change)', function () {

                var textarea = selector('textarea', this)[0];
                counter(textarea);

            });

        };
        loadCounters();

        // Events
        events.on(document, 'keydown keypress change', '.textarea[data-counter] textarea', function (e) {

            if (e.type === 'keydown' && e.ctrlKey) {

                var that = this;
                setTimeout(function () { counter(that); }, 0);

            } else { counter(this); }

        });

        events.on(document, 'reset', 'form', function () {

            var i, that;

            that = selector('.textarea[data-counter] textarea');
            if (that.length === 0) { return; }

            setTimeout(function () {

                for (i = 0; i < that.length; i += 1) {
                    counter(that[i]);
                }

            }, 0);

        });

    };

    // Loaders
    events.onload(textareaCounter.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.text.indexOf('data-counter="') > 0) { loadCounters(); }
    });

}());
