/*
 Top Button JS
 Top Button JS requires Selector Js, Events JS, User Agents JS, User Agents JS
*/

var topButton = {

    titleText : 'Back to top!',

    classes: 'circle',
    icon: 'arrow-up'
};

(function () {

    'use strict';
    /*globals window, document, events, selector, setTimeout ,setInterval, clearInterval, useragents */

    var
        topBtn,
        scrollPos,
        btnAnimate;

    function togglerFnc() {

        var showTopBtn, hideTopBtn;

        showTopBtn = function () {

            if (!events.hasClass(topBtn, 'open')) {

                events.addClass(topBtn, 'open');
                setTimeout(function () { events.addClass(topBtn, 'open-ease'); }, 400);

            }

        };

        hideTopBtn = function () {

            if (events.hasClass(topBtn, 'open')) {

                events.removeClass(topBtn, 'open-ease');
                setTimeout(function () { events.removeClass(topBtn, 'open'); }, 400);

            }

        };

        if (selector('body')[0].offsetHeight > (window.innerHeight * 2)) {

            scrollPos = window.pageYOffset;

            if (scrollPos > + (window.innerHeight / 3) && window.innerWidth > 767) {
                showTopBtn();

            } else {
                hideTopBtn();
            }

        }

    }

    topButton.Start = function () {

        if (useragents.mobile) { return; } // stop on mobile devices

        var re, rex, html, styles;

        re = new RegExp('\\s+\\s');
        rex = new RegExp('^\\s|\\s+$');

        styles = topButton.classes + ' ease-layout';
        styles = styles.replace(re, ' ').replace(rex, '');

        html = '<button class="top-button ' + styles + ' ease-layout" title="' + topButton.titleText + '">' +
                '<svg class="icon ease-layout"><use xlink:href="#' + topButton.icon + '"/></svg>' +
            '</button>';

        selector('body')[0].insertAdjacentHTML('beforeend', html);
        topBtn = selector('.top-button');

        togglerFnc();

        // Events
        events.on('.top-button', 'click', function () {

            clearInterval(btnAnimate);
            btnAnimate = setInterval(function () {

                scrollPos -= (scrollPos / 4);

                window.scrollTo(0, scrollPos);
                if (scrollPos <= 0) { clearInterval(btnAnimate); }

            }, 10);

        });

    };

    // Loaders
    events.onload(topButton.Start);

    events.on(window, 'resize', togglerFnc);
    events.on(window, 'scroll', togglerFnc);
    events.on(document, 'domChange', togglerFnc);

}());
