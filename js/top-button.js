/*
 Top Button JS
 Top Button JS requires Selector Js, Events JS, User Agents JS, User Agents JS
*/

var topButton = {

    titleText : 'Back to top!',

    classes: 'circle',
    icon: 'icon icon-md icon-angle-up',
    target: ''

};

(function () {

    'use strict';
    /*globals window, events, selector, setTimeout ,setInterval, clearInterval, useragents */

    var
        topBtn,
        scrollTarget,
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

        if (topButton.target === '') {

            scrollTarget = window;
            scrollPos = scrollTarget.pageYOffset;

            if (scrollPos > 50 && window.innerWidth > 767) { showTopBtn(); } else { hideTopBtn(); }

        } else {

            scrollTarget = selector(topButton.target)[0];
            scrollPos = scrollTarget.scrollTop;

            if (scrollPos > 50 && window.innerWidth > 767) { showTopBtn(); } else { hideTopBtn(); }

        }

    }

    topButton.Start = function () {

        if (useragents.mobile) { return; } // stop on mobile devices

        var html = '<button class="top-button ' + topButton.classes + ' ease-layout" title="' + topButton.titleText + '">' +
            '<i class="' + topButton.icon + ' ease-layout"></i>' +
            '</button>';

        selector('body')[0].insertAdjacentHTML('beforeend', html);
        topBtn = selector('.top-button');

        togglerFnc();

        // Events
        events.on('.top-button', 'click', function () {

            clearInterval(btnAnimate);
            btnAnimate = setInterval(function () {

                scrollPos -= (scrollPos / 4);

                scrollTarget.scrollTo(0, scrollPos);
                if (scrollPos <= 0) { clearInterval(btnAnimate); }

            }, 10);

        });

    };

    // Loaders
    events.onload(topButton.Start);

    events.on(window, 'resize', togglerFnc);
    events.on(window, 'scroll', togglerFnc);

}());
