/* top button */

import { ui } from './../core/globals.js';
export default () => ui;

ui.topButton = {

    // targets
    target: 'ui-top-button',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // styling classnames
    stylesTarget: 'ui-round ui-ease-layout',
    stylesIcon: 'ui-icon ui-ease-layout',

    // custom texts
    titleText : 'Back to top!'

};

(() => {

    var togglerFnc = () => {

        var html = '<button class="' + ui.topButton.target + ' ' + ui.topButton.stylesTarget + ' ' + ui.topButton.nameOpen + '" title="' + ui.topButton.titleText + '">' +
                        '<svg class="' + ui.topButton.stylesIcon + '" viewBox="' + ui.globals.svgIconViewBox + '">' + ui.assets('iconArrowToTop') + '</svg>' +
                    '</button>';

        var topBtn;

        if (ui.find('body')[0].offsetHeight > (window.innerHeight * 2) && window.innerWidth > ui.globals.sm) {

            setTimeout(() => {

                if (window.pageYOffset > (window.innerHeight / 3)) {

                    topBtn = ui.find('.' + ui.topButton.target)[0];
                    if (topBtn === undefined) {

                        ui.find('body')[0].insertAdjacentHTML('beforeend', html);
                        topBtn = ui.find('.' + ui.topButton.target)[0];

                        setTimeout(() => {
                            ui.addClass(topBtn, ui.topButton.nameOpenEase);
                        }, ui.globals.slow);

                    }

                } else {

                    topBtn = ui.find('.' + ui.topButton.target)[0];

                    if (topBtn !== undefined) {

                        ui.removeClass(topBtn, ui.topButton.nameOpenEase);

                        setTimeout(() => {
                            if (topBtn.parentNode !== null) topBtn.parentNode.removeChild(topBtn);
                        }, ui.globals.slow);

                    }

                }

            }, 0);

        }

    }

    ui.topButton.Start = () => {

        if (ui.userAgents.desktop) {

            togglerFnc();

            // Event Listeners
            ui.on(document,
                'click',

                '.' + ui.topButton.target,

                function () {
                    window.scrollTo(0, 0);
                });

        }

    };

    // loaders
    ui.onload(ui.topButton.Start);

    ui.on(window, 'resize scroll', togglerFnc);
    ui.on(document, ui.globals.eventDomChange, togglerFnc);

})();
