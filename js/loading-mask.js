/*
 Loading Mask JS
 Loading Mask JS requires Selector Js, Events JS
*/

var loadingMask = {
    spinner: 'loader-line'
};

(function () {

    'use strict';
    /*globals selector, events, document, setTimeout */

    loadingMask.Start = function () {

        loadingMask.toggle = function (that) {

            var l, i, t, holder, html;

            l = selector(that);
            for (i = 0; i < l.length; i++) {

                if (events.hasClass(l[i], 'loading-mask')) {

                    t = l[i];

                    holder = selector('.loading-spinner', l[i])[0];
                    events.removeClass(holder, 'open-ease');

                    setTimeout(function () {

                        t.removeChild(holder);
                        events.removeClass(t, 'loading-mask');

                    }, 150);

                } else {

                    html = '<span class="loading-spinner ease-layout">' +
                                '<span>' +
                                    '<svg viewBox="-128 -12 288 288" style="height: ' + (l[i].offsetHeight / 2) + 'px;">' +
                                        '<path d="M12 12a120 120 0 01120 120"/>' +
                                    '</svg>' +
                                '</span>' +
                            '</span>' + l[i].innerHTML;
                        l[i].innerHTML = html;

                    events.addClass(l[i], 'loading-mask');

                    holder = selector('.loading-spinner', l[i])[0];

                    events.addClass(holder, 'open');
                    setTimeout(function () { events.addClass(holder, 'open-ease'); }, 0);

                }

            }

        };

        // Events
        events.on(document, 'click', '.loading-mask', function (e) {

            e.preventDefault();
            e.stopPropagation();

        });

    };

    // Loaders
    events.onload(loadingMask.Start);

}());
