/*
 Textarea Counter JS
 Textarea Counter JS requires Events JS
*/

/*globals window, document, selector, events */
function textareaCounterFnc() {

    'use strict';

    // textarea counter
    window.textareaCounter = function (t) {

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

    };

    window.loadtextareaCounters = function () {
        events.each('.textarea[data-counter]:not(.change)', function () {

            var textarea = selector('textarea', this)[0];
            window.textareaCounter(textarea);

        });
    };
    window.loadtextareaCounters();

    events.on(document, 'keydown keypress paste', '.textarea[data-counter] textarea', function (e) {

        if (e.type === 'keydown' && e.ctrlKey) {

            var that = this;

            setTimeout(function () {
                window.textareaCounter(that);
            }, 0);

        } else {
            window.textareaCounter(this);
        }

    });

}

/*!loader */
events.onload(function () {

    'use strict';
    textareaCounterFnc();

});

/*!ajax callback loader: requires Ajax JS */
events.on(document, 'ajaxCallbacks', function () {

    'use strict';
    if (window.ajaxRequest.responseText.indexOf('data-counter="') > 0) { window.loadtextareaCounters(); }

});
