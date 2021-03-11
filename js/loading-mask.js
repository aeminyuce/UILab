/*
 Loading Mask JS
 Loading Mask JS requires Selector Js, Events JS
*/

var loadingMask = {
    spinner: 'loader-line'
};

(function () {

    'use strict';
    /*globals selector, events, window, document, setTimeout */

    var
        maskItems = [],
        maskHolders = [];

    loadingMask.Start = function () {

        loadingMask.toggle = function (that) {

            var l, i, j, sticky, status, html;

            l = selector(that);

            function effectTimers(type) { // wait for effects

                function emptyVars(j, l) {

                    // empty variables
                    if (j === (l.length - 1)) {

                        maskItems = [];
                        maskHolders = [];

                    }

                }

                if (type === 'hide') {

                    setTimeout(function () {

                        for (j = 0; j < l.length; j++) {

                            maskItems[j].removeChild(maskHolders[j]);
                            events.removeClass(maskItems[j], 'loading-mask loading-mask-sticky');

                            emptyVars(j, l);

                        }

                    }, 150);

                } else { // show

                    setTimeout(function () {

                        for (j = 0; j < l.length; j++) {

                            events.addClass(maskHolders[j], 'open-ease');
                            emptyVars(j, l);

                        }

                    }, 0);

                }

            }

            for (i = 0; i < l.length; i++) {

                if (events.hasClass(l[i], 'loading-mask')) {

                    // hide loading
                    status = 'hide';

                    maskHolders[i] = selector('.loading-spinner', l[i])[0];
                    events.removeClass(maskHolders[i], 'open-ease');

                    maskItems[i] = l[i];

                } else {

                    // show loading
                    status = 'show';

                    html = '<span class="loading-spinner ease-layout">' +
                                '<span>' +
                                    '<svg viewBox="-128 -12 288 288" style="height: ' + (l[i].offsetHeight / 2) + 'px;">' +
                                        '<path d="M12 12a120 120 0 01120 120"/>' +
                                    '</svg>' +
                                '</span>' +
                            '</span>';

                    l[i].insertAdjacentHTML('afterbegin', html);

                    events.addClass(l[i], 'loading-mask');

                    if (l[i].offsetWidth >= (window.innerWidth - 15)) {
                        sticky = true;

                    } else { sticky = false; }

                    if (sticky) {
                        events.addClass(l[i], 'loading-mask-sticky');
                    }

                    maskHolders[i] = selector('.loading-spinner', l[i])[0];
                    events.addClass(maskHolders[i], 'open');

                }

                if (i === (l.length - 1)) {
                    effectTimers(status);
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
