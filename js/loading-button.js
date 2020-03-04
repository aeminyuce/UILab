/*
 Loading Button JS
 Loading Button JS requires Selector Js, Events JS
*/

var loadingButton = {
    spinner: 'loader-line'
};

(function () {

    'use strict';
    /*globals selector, events, document */

    loadingButton.Start = function () {

        loadingButton.toggle = function (that) {

            var l, i, html;

            l = selector(that);
            for (i = 0; i < l.length; i++) {

                if (!events.hasClass(l[i], 'btn')) { return; }

                if (events.hasClass(l[i], 'loading')) {
                    events.removeClass(l[i], 'loading');

                } else if (selector('.loading-spinner', l[i])[0] === undefined) {

                    html = '<span class="loading-spinner ease-layout">' +
                            '<svg class="icon"><use href="#' + loadingButton.spinner + '"/></svg>' +
                        '</span>' +
                        '<span class="loading-label ease-layout">' + l[i].innerHTML + '</div>';

                    l[i].innerHTML = html;
                    events.addClass(l[i], 'loading');

                } else {
                    events.addClass(l[i], 'loading');
                }

            }

        };

        // Events
        events.on(document, 'click', '.btn.loading', function (e) {

            e.preventDefault();
            e.stopPropagation();

        });

    };

    // Loaders
    events.onload(loadingButton.Start);

}());
