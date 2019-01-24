/*
 Loading Button JS
 Loading Button JS requires Events JS
*/

var loadingButton = {
    spinner: 'icon icon-sm icon-loader'
};

(function () {

    'use strict';
    /*globals selector, events */

    loadingButton.Start = function () {

        loadingButton.toggle = function (that) {

            var l, i, re, rex, html;

            l = selector(that);

            for (i = 0; i < l.length; i += 1) {

                if (!events.hasClass(l[i], 'btn')) { return; }

                if (events.hasClass(l[i], 'loading')) {
                    events.removeClass(l[i], 'loading');

                } else if (selector('.loading-spinner', l[i])[0] === undefined) {

                    re = new RegExp('\\s+\\s');
                    rex = new RegExp('^\\s|\\s+$');

                    loadingButton.spinner = loadingButton.spinner.replace(re, ' ').replace(rex, '');

                    html = '<span class="loading-spinner ease-opacity">' +
                            '<i class="' + loadingButton.spinner + '"></i>' +
                        '</span>' +
                        '<span class="loading-label ease-opacity">' + l[i].innerHTML + '</div>';

                    l[i].innerHTML = html;
                    events.addClass(l[i], 'loading');

                } else {
                    events.addClass(l[i], 'loading');
                }

            }

        };

    };

    // Loaders
    events.onload(loadingButton.Start);

}());
