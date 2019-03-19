/*
 Loading Button JS
 Loading Button JS requires Events JS
*/

var loadingButton = {
    spinner: 'icon icon-sm icon-loader'
};

(function () {

    'use strict';
    /*globals selector, events, document */

    loadingButton.Start = function () {

        loadingButton.toggle = function (that) {

            var l, i, re, rex, styles, html;

            l = selector(that);

            for (i = 0; i < l.length; i += 1) {

                if (!events.hasClass(l[i], 'btn')) { return; }

                if (events.hasClass(l[i], 'loading')) {
                    events.removeClass(l[i], 'loading');

                } else if (selector('.loading-spinner', l[i])[0] === undefined) {

                    re = new RegExp('\\s+\\s');
                    rex = new RegExp('^\\s|\\s+$');

                    styles = loadingButton.spinner;
                    styles = styles.replace(re, ' ').replace(rex, '');

                    html = '<span class="loading-spinner ease-layout">' +
                            '<i class="' + styles + '"></i>' +
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
