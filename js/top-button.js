/*
 Top Button JS
 Top Button JS requires Events JS
*/

var topButton = {

    classes: 'circle',
    icon: 'icon icon-md icon-angle-up',
    target: ''

};

(function () {

    'use strict';
    /*globals window, events, selector, navigator, setTimeout ,setInterval, clearInterval */

    var
        scrollTarget,
        scrollPos,
        btnAnimate;

    function togglerFnc() {

        var btn = selector('.top-button');

        function showTopBtn() {

            if (!events.hasClass(btn, 'open')) {

                events.addClass(btn, 'open');
                setTimeout(function () { events.addClass(btn, 'open-ease'); }, 400);

            }

        }

        function hideTopBtn() {

            if (events.hasClass(btn, 'open')) {

                events.removeClass(btn, 'open-ease');
                setTimeout(function () { events.removeClass(btn, 'open'); }, 400);

            }

        }

        if (topButton.target === '') {

            scrollTarget = window;
            scrollPos = scrollTarget.pageYOffset;

            if (scrollPos > 50) { showTopBtn(); } else { hideTopBtn(); }

        } else {

            scrollTarget = selector(topButton.target)[0];
            scrollPos = scrollTarget.scrollTop;

            if (scrollPos > 50) { showTopBtn(); } else { hideTopBtn(); }

        }

    }

    topButton.Start = function () {

        var titleText, userLang, html;

        userLang = (navigator.language || navigator.userLanguage).split('-')[0];
        if (userLang === 'tr') { titleText = 'Yukarı Dön!'; } else { titleText = 'Back To Top!'; }

        html = '<button class="top-button ' + topButton.classes + ' ease-opacity" title="' + titleText + '">' +
            '<i class="' + topButton.icon + ' ease-transform"></i>' +
            '</button>';

        selector('body')[0].insertAdjacentHTML('beforeend', html);
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
