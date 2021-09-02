/*
 UI Top Button JS
 Requires UI JS
*/

ui.topButton = {

    target: 'top-button',
    classesTarget: 'circle ease-layout',
    scrollableTarget: 'body', // IE 10 not supported html tag!

    titleText : 'Back to top!',

    icon: 'arrow-to-top',
    classesIcon: 'icon ease-layout',

    nameOpen: 'open',
    nameOpenEase: 'open-ease'

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout ,setInterval, clearInterval */

    var
        topBtn,
        scrollPos,
        scrollEl,
        btnAnimate;

    function togglerFnc() {

        var showTopBtn, hideTopBtn;

        showTopBtn = function () {

            if (!ui.hasClass(topBtn, ui.topButton.nameOpen)) {

                ui.addClass(topBtn, ui.topButton.nameOpen);

                setTimeout(function () {
                    ui.addClass(topBtn, ui.topButton.nameOpenEase);
                }, ui.globals.slow);

            }

        };

        hideTopBtn = function () {

            if (ui.hasClass(topBtn, ui.topButton.nameOpen)) {

                ui.removeClass(topBtn, ui.topButton.nameOpenEase);

                setTimeout(function () {
                    ui.removeClass(topBtn, ui.topButton.nameOpen);
                }, ui.globals.slow);

            }

        };

        if (ui.topButton.scrollableTarget === 'body') {

            if (scrollEl.offsetHeight > (window.innerHeight * 2) && window.innerWidth > ui.globals.sm) {

                scrollPos = window.pageYOffset;

                if (scrollPos > (window.innerHeight / 3)) {
                    showTopBtn();

                } else {
                    hideTopBtn();
                }

            }

        } else {

            scrollPos = scrollEl.scrollTop;

            if (scrollPos > (scrollEl.offsetHeight / 3) && window.innerWidth > ui.globals.sm) {
                showTopBtn();

            } else {
                hideTopBtn();
            }
        }

    }

    ui.topButton.Start = function () {

        if (ui.userAgents.desktop) {

            var html = '<button class="' + ui.topButton.target + ' ' + ui.topButton.classesTarget + '" title="' + ui.topButton.titleText + '">' +
                    '<svg class="' + ui.topButton.classesIcon + '"><use href="#' + ui.topButton.icon + '"/></svg>' +
                '</button>';

            if (ui.topButton.scrollableTarget === 'body') {
                scrollEl = ui.find(ui.topButton.scrollableTarget)[0];

            } else {
                scrollEl = ui.find('.' + ui.topButton.scrollableTarget)[0];
            }

            scrollEl.insertAdjacentHTML('beforeend', html);
            topBtn = ui.find('.' + ui.topButton.target);

            togglerFnc();

            // Event Listeners
            ui.on('.' + ui.topButton.target, 'click', function () {

                clearInterval(btnAnimate);
                btnAnimate = setInterval(function () {

                    scrollPos -= (scrollPos / 4);

                    if (ui.topButton.scrollableTarget === 'body') {
                        window.scrollTo(0, scrollPos);

                    } else {
                        scrollEl.scrollTop = scrollPos; // IE, EDGE: scrollTo() not supported for div element
                    }

                    if (scrollPos <= 0) { clearInterval(btnAnimate); }

                }, 10);

            });

        }

    };

    // Loaders
    ui.onload(ui.topButton.Start);

    ui.on(window, 'resize', togglerFnc);
    ui.on(window, 'scroll', togglerFnc);
    ui.on(document, ui.globals.eventDomChange, togglerFnc);

}());
