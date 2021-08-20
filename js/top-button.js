/*
 UI Top Button JS
 Requires UI JS
*/

ui.topButton = {

    titleText : 'Back to top!',

    classes: 'circle',
    icon: 'arrow-to-top'
};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout ,setInterval, clearInterval */

    var
        topBtn,
        scrollPos,
        btnAnimate;

    function togglerFnc() {

        var showTopBtn, hideTopBtn;

        showTopBtn = function () {

            if (!ui.hasClass(topBtn, 'open')) {

                ui.addClass(topBtn, 'open');

                setTimeout(function () {
                    ui.addClass(topBtn, 'open-ease');
                }, ui.globals.slow);

            }

        };

        hideTopBtn = function () {

            if (ui.hasClass(topBtn, 'open')) {

                ui.removeClass(topBtn, 'open-ease');

                setTimeout(function () {
                    ui.removeClass(topBtn, 'open');
                }, ui.globals.slow);

            }

        };

        if (ui.find('body')[0].offsetHeight > (window.innerHeight * 2)) {

            scrollPos = window.pageYOffset;

            if (scrollPos > + (window.innerHeight / 3) && window.innerWidth > ui.globals.sm) {
                showTopBtn();

            } else {
                hideTopBtn();
            }

        }

    }

    ui.topButton.Start = function () {

        if (ui.userAgents.desktop) {

            var re, rex, html, styles;

            re = new RegExp('\\s+\\s');
            rex = new RegExp('^\\s|\\s+$');

            styles = ui.topButton.classes + ' ease-layout';
            styles = styles.replace(re, ' ').replace(rex, '');

            html = '<button class="top-button ' + styles + ' ease-layout" title="' + ui.topButton.titleText + '">' +
                    '<svg class="icon ease-layout"><use href="#' + ui.topButton.icon + '"/></svg>' +
                '</button>';

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            topBtn = ui.find('.top-button');

            togglerFnc();

            // Event Listeners
            ui.on('.top-button', 'click', function () {

                clearInterval(btnAnimate);
                btnAnimate = setInterval(function () {

                    scrollPos -= (scrollPos / 4);

                    window.scrollTo(0, scrollPos);
                    if (scrollPos <= 0) { clearInterval(btnAnimate); }

                }, 10);

            });

        }

    };

    // Loaders
    ui.onload(ui.topButton.Start);

    ui.on(window, 'resize', togglerFnc);
    ui.on(window, 'scroll', togglerFnc);
    ui.on(document, 'ui:domChange', togglerFnc);

}());
