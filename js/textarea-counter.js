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
        events.on(document, 'keydown keypress paste', '.textarea[data-counter] textarea', function (e) {

            if (e.type === 'keydown' && e.ctrlKey) {

                var that = this;
                setTimeout(function () { counter(that); }, 0);

            } else { counter(this); }

        });

    };

    // Loaders
    events.onload(textareaCounter.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.ajaxRequest.responseText.indexOf('data-counter="') > 0) { loadCounters(); }
    });

}());
