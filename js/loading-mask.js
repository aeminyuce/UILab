/*
 UI Loading Mask JS
 Requires UI JS
*/

ui.loadingMask = {
    spinner: 'loader-line'
};

(function () {

    'use strict';
    /*globals ui, window, document, setTimeout */

    var
        maskItems = [],
        maskHolders = [];

    ui.loadingMask.Start = function () {

        ui.loadingMask.toggle = function (that) {

            var l, i, j, sticky, status, html;

            l = ui.find(that);

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
                            ui.removeClass(maskItems[j], 'loading-mask loading-mask-sticky');

                            emptyVars(j, l);

                        }

                    }, ui.globals.ease);

                } else { // show

                    setTimeout(function () {

                        for (j = 0; j < l.length; j++) {

                            ui.addClass(maskHolders[j], 'open-ease');
                            emptyVars(j, l);

                        }

                    }, 0);

                }

            }

            for (i = 0; i < l.length; i++) {

                if (ui.hasClass(l[i], 'loading-mask')) {

                    // hide loading
                    status = 'hide';

                    maskHolders[i] = ui.find('.loading-spinner', l[i])[0];
                    ui.removeClass(maskHolders[i], 'open-ease');

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

                    ui.addClass(l[i], 'loading-mask');

                    if (l[i].offsetWidth >= (window.innerWidth - 15)) {
                        sticky = true;

                    } else { sticky = false; }

                    if (sticky) {
                        ui.addClass(l[i], 'loading-mask-sticky');
                    }

                    maskHolders[i] = ui.find('.loading-spinner', l[i])[0];
                    ui.addClass(maskHolders[i], 'open');

                }

                if (i === (l.length - 1)) {
                    effectTimers(status);
                }

            }

        };

        // Event Listeners
        ui.on(document, 'click', '.loading-mask', function (e) {

            e.preventDefault();
            e.stopPropagation();

        });

    };

    // Loaders
    ui.onload(ui.loadingMask.Start);

}());
