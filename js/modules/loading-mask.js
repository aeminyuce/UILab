/* loading mask */

import { ui } from './../core/globals.js';
export default () => ui;

ui.loadingMask = {

    // targets
    target: 'ui-loading-mask',

    // main classnames
    nameSticky: 'ui-loading-mask-sticky',
    nameLoader: 'ui-loading-mask-loader',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // styling classnames
    stylesLoader: 'ui-ease-layout',
    stylesIcon: 'ui-animate-spin',

    // values
    sttaicIconTop: 220,

    loadingSize: 0.32,
    loadingBox: '0 0 264 264',
    loadingPath: '<path d="M1 132a11 11 0 0 1 11-11 11 11 0 0 1 11 11 109.123 109.123 0 0 0 109 109 11 11 0 0 1 11 11 11 11 0 0 1-11 11C59.766 263 1 204.233 1 132Zm240 0A109.122 109.122 0 0 0 132 23a11 11 0 0 1-11-11 11 11 0 0 1 11-11c72.233 0 131 58.768 131 131a11 11 0 0 1-11 11 11 11 0 0 1-11-11Z"/>'

};

(() => {

    var
        maskItems = [],
        maskHolders = [];

    ui.loadingMask.Start = () => {

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

                    setTimeout(() => {

                        if (maskHolders.length > 0) {

                            for (j = 0; j < l.length; j++) {

                                maskItems[j].removeChild(maskHolders[j]);
                                ui.removeClass(maskItems[j], ui.loadingMask.target + ' ' + ui.loadingMask.nameSticky);

                                emptyVars(j, l);

                            }

                        }

                    }, ui.globals.ease);

                } else { // show

                    setTimeout(() => {

                        for (j = 0; j < l.length; j++) {

                            ui.addClass(maskHolders[j], ui.loadingMask.nameOpenEase);
                            emptyVars(j, l);

                        }

                    }, 0);

                }

            }

            for (i = 0; i < l.length; i++) {

                if (ui.hasClass(l[i], ui.loadingMask.target)) {

                    // hide loading
                    status = 'hide';

                    maskHolders[i] = ui.find('.' + ui.loadingMask.nameLoader, l[i])[0];

                    ui.removeClass(maskHolders[i], ui.loadingMask.nameOpen);
                    ui.removeClass(maskHolders[i], ui.loadingMask.nameOpenEase);

                    maskItems[i] = l[i];

                } else {

                    // show loading
                    status = 'show';

                    html = '<span class="' + ui.loadingMask.nameLoader + ' ' + ui.loadingMask.stylesLoader + '">';

                    if (l[i].offsetHeight > window.innerHeight) { // detect static icon
                        html += '<span style="top: ' + ui.loadingMask.sttaicIconTop + 'px;">';

                    } else html += '<span>';

                    html += '<svg ' +
                            'xmlns="http://www.w3.org/2000/svg"' +
                            'viewBox="' + ui.loadingMask.loadingBox + '"' +
                            'class="' + ui.loadingMask.stylesIcon + '" ' +
                            'style="height: ' + (l[i].offsetHeight * ui.loadingMask.loadingSize) + 'px;">' +
                                ui.loadingMask.loadingPath +
                            '</svg>' +
                        '</span>' +
                    '</span>';

                    l[i].insertAdjacentHTML('afterbegin', html);

                    ui.addClass(l[i], ui.loadingMask.target);

                    if (l[i].offsetWidth >= (window.innerWidth - 15)) {
                        sticky = true;

                    } else { sticky = false; }

                    if (sticky) {
                        ui.addClass(l[i], ui.loadingMask.nameSticky);
                    }

                    maskHolders[i] = ui.find('.' + ui.loadingMask.nameLoader, l[i])[0];
                    ui.addClass(maskHolders[i], ui.loadingMask.nameOpen);

                }

                if (i === (l.length - 1)) {
                    effectTimers(status);
                }

            }

        };

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.loadingMask.target,

            function (e) {

                e.preventDefault();
                e.stopPropagation();

        });

    };

    // loaders
    ui.onload(ui.loadingMask.Start);

})();
