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

    // values
    loadingBox: '-128 -12 288 288',
    loadingPath: '<path d="M12 12a120 120 0 01120 120"/>'

};

(() => {

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
                            ui.removeClass(maskItems[j], ui.loadingMask.target + ' ' + ui.loadingMask.nameSticky);

                            emptyVars(j, l);

                        }

                    }, ui.globals.ease);

                } else { // show

                    setTimeout(function () {

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
                    ui.removeClass(maskHolders[i], ui.loadingMask.nameOpenEase);

                    maskItems[i] = l[i];

                } else {

                    // show loading
                    status = 'show';

                    html = '<span class="' + ui.loadingMask.nameLoader + ' ' + ui.loadingMask.stylesLoader + '">' +
                                '<span>' +
                                    '<svg viewBox="' + ui.loadingMask.loadingBox + '" style="height: ' + (l[i].offsetHeight / 2) + 'px;">' +
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
