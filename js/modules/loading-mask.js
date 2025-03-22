/* loading mask */

import { ui } from './../core/globals.js';
export default () => ui;

ui.loadingMask = {

    // targets
    target: 'ui-loading-mask',

    // main classnames
    nameSticky: 'ui-loading-mask-sticky',
    nameLoader: 'ui-loading-mask-loader',

    // styling classnames
    stylesLoader: 'ui-ease-layout',
    stylesIcon: 'ui-animate-spin',

    // values
    staticIconTop: 220,
    loadingSize: 0.32,

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

                                if (maskItems[j] !== undefined) {

                                    if (ui.closest(maskHolders[j], maskItems[j]).length) {

                                        maskItems[j].removeChild(maskHolders[j]);
                                        ui.removeClass(maskItems[j], ui.loadingMask.target + ' ' + ui.loadingMask.nameSticky);

                                    }

                                    emptyVars(j, l);

                                }

                            }

                        }

                    }, ui.globals.ease * 2);

                } else { // show

                    for (j = 0; j < l.length; j++) {

                        ui.addClass(maskHolders[j], ui.globals.nameOpenEase);
                        emptyVars(j, l);

                    }

                }

            }

            for (i = 0; i < l.length; i++) {

                if (ui.hasClass(l[i], ui.loadingMask.target)) {

                    // hide loading
                    status = 'hide';

                    maskHolders[i] = ui.find('.' + ui.loadingMask.nameLoader, l[i])[0];
                    ui.removeClass(maskHolders[i], ui.globals.nameOpenEase);

                    setTimeout(() => {
                        ui.removeClass(maskHolders[i], ui.globals.nameOpen);
                    }, ui.globals.ease);

                    maskItems[i] = l[i];

                } else {

                    // show loading
                    status = 'show';

                    html = '<span class="' + ui.loadingMask.nameLoader + ' ' + ui.loadingMask.stylesLoader + '">';

                    if (l[i].offsetHeight > window.innerHeight) { // detect static icon
                        html += '<span style="top: ' + ui.loadingMask.staticIconTop + 'px;">';

                    } else html += '<span>';

                    html += '<svg ' +
                            'xmlns="http://www.w3.org/2000/svg"' +
                            'viewBox="' + ui.globals.svgIconViewBox + '"' +
                            'class="' + ui.loadingMask.stylesIcon + '" ' +
                            'style="height: ' + (l[i].offsetHeight * ui.loadingMask.loadingSize) + 'px;">' +
                                '<path d="' + ui.assets('iconLoaderLineDual') + '" />' +
                            '</svg>' +
                        '</span>' +
                    '</span>';

                    l[i].insertAdjacentHTML('afterbegin', html);

                    ui.addClass(l[i], ui.loadingMask.target);

                    if (l[i].offsetWidth >= (window.innerWidth - 15)) sticky = true;
                    else sticky = false;

                    if (sticky) ui.addClass(l[i], ui.loadingMask.nameSticky);

                    maskHolders[i] = ui.find('.' + ui.loadingMask.nameLoader, l[i])[0];
                    ui.addClass(maskHolders[i], ui.globals.nameOpen);

                }

                if (i === (l.length - 1)) effectTimers(status);

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
