// top button
import { ui } from './../core.js';
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

    // icons
    icon: 'arrow-to-top',

    // custom texts
    titleText : 'Back to top!'

};

(() => {

    function togglerFnc() {

        var topBtn = ui.find('.' + ui.topButton.target);

        if (ui.find('body')[0].offsetHeight > (window.innerHeight * 2) && window.innerWidth > ui.globals.sm) {

            setTimeout(function () {

                if (window.pageYOffset > (window.innerHeight / 3)) {

                    if (!ui.hasClass(topBtn, ui.topButton.nameOpen)) {

                        ui.addClass(topBtn, ui.topButton.nameOpen);

                        setTimeout(function () {
                            ui.addClass(topBtn, ui.topButton.nameOpenEase);
                        }, ui.globals.slow);

                    }

                } else {

                    if (ui.hasClass(topBtn, ui.topButton.nameOpen)) {

                        ui.removeClass(topBtn, ui.topButton.nameOpenEase);

                        setTimeout(function () {
                            ui.removeClass(topBtn, ui.topButton.nameOpen);
                        }, ui.globals.slow);

                    }

                }

            }, 0);

        }

    }

    ui.topButton.Start = function () {

        if (ui.userAgents.desktop) {

            var html = '<button class="' + ui.topButton.target + ' ' + ui.topButton.stylesTarget + '" title="' + ui.topButton.titleText + '">' +
                            '<svg class="' + ui.topButton.stylesIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.topButton.icon + '"/></svg>' +
                        '</button>';

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            togglerFnc();

            // Event Listeners
            ui.on('.' + ui.topButton.target,
                'click',

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
