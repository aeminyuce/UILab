/*
 Top Button JS
 Top Button JS requires Events JS
*/

/*globals window, document, events, selector, navigator, setTimeout ,setInterval, clearInterval */
var topButton = {

    classes: 'circle',
    icon: 'icon icon-md icon-angle-up',
    target: ''

};

function topButtonFnc() {

    'use strict';

    var ua, titleText, userLang, html, btn, scrollTarget;

    ua = navigator.userAgent.toLowerCase();

    userLang = (navigator.language || navigator.userLanguage).split('-')[0];
    if (userLang === 'tr') { titleText = 'Yukarı Dön!'; } else { titleText = 'Back To Top!'; }

    html = events.parser('<button class="top-button ' + topButton.classes + ' ease-opacity" title="' + titleText + '">' +
        '<i class="' + topButton.icon + ' ease-transform"></i>' +
        '</button>'
        );

    selector('body')[0].insertAdjacentHTML('beforeend', html);
    btn = selector('.top-button');

    window.topButtonToggler = function () {

        if (topButton.target === '') {

            if (ua.indexOf('edge') > -1 || (ua.indexOf('mobile') > -1 && ua.indexOf('apple') > -1)) {
                scrollTarget = document.body; // edge and ios devices returns document.documentElement = 0

            } else {
                scrollTarget = document.documentElement;
            }

        } else { scrollTarget = selector(topButton.target)[0]; }

        if (scrollTarget.scrollTop > 50) {

            if (!events.hasClass(btn, 'open')) {

                events.addClass(btn, 'open');
                setTimeout(function () { events.addClass(btn, 'open-ease'); }, 150);

            }

        } else {

            if (events.hasClass(btn, 'open')) {

                events.removeClass(btn, 'open-ease');
                setTimeout(function () { events.removeClass(btn, 'open'); }, 150);

            }
        }

    };

    window.topButtonToggler();

    events.on('.top-button', 'click', function () {

        clearInterval(window.topButtonAnimate);
        window.topButtonAnimate = setInterval(function () {

            scrollTarget.scrollTop -= '65';
            if (scrollTarget.scrollTop === 0) { clearInterval(window.topButtonAnimate); }

        }, 10);

    });

}

/*!loader */
events.onload(function () {

    'use strict';
    topButtonFnc();

});

/*!scroll loader*/
events.on(window, 'scroll', function () {

    'use strict';
    window.topButtonToggler();

});
