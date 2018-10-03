/*
 Top Button JS
 Top Button JS requires Events JS
*/

/*globals window, events, selector, navigator, setTimeout ,setInterval, clearInterval */
var topButton = {

    classes: 'circle',
    icon: 'icon icon-md icon-angle-up',
    target: ''

};

function topButtonTogglerFnc() {

    'use strict';

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

        window.topButtonScrollTarget = window;
        window.topButtonScrollPos = window.topButtonScrollTarget.pageYOffset;

        if (window.topButtonScrollPos > 50) { showTopBtn(); } else { hideTopBtn(); }

    } else {

        window.topButtonScrollTarget = selector(topButton.target)[0];
        window.topButtonScrollPos = window.topButtonScrollTarget.scrollTop;

        if (window.topButtonScrollPos > 50) { showTopBtn(); } else { hideTopBtn(); }

    }

}

function topButtonFnc() {

    'use strict';

    var titleText, userLang, html;

    userLang = (navigator.language || navigator.userLanguage).split('-')[0];
    if (userLang === 'tr') { titleText = 'Yukarı Dön!'; } else { titleText = 'Back To Top!'; }

    html = events.parser('<button class="top-button ' + topButton.classes + ' ease-opacity" title="' + titleText + '">' +
        '<i class="' + topButton.icon + ' ease-transform"></i>' +
        '</button>'
        );

    selector('body')[0].insertAdjacentHTML('beforeend', html);

    topButtonTogglerFnc();

    events.on('.top-button', 'click', function () {

        clearInterval(window.topButtonAnimate);
        window.topButtonAnimate = setInterval(function () {

            window.topButtonScrollPos -= (window.topButtonScrollPos / 4);

            window.topButtonScrollTarget.scrollTo(0, window.topButtonScrollPos);
            if (window.topButtonScrollPos <= 0) { clearInterval(window.topButtonAnimate); }

        }, 10);

    });

}

/*!loader */
events.onload(function () {

    'use strict';
    topButtonFnc();

});

/*!resize loader */
events.on(window, 'resize', function () {

    'use strict';
    topButtonTogglerFnc();

});

/*!scroll loader */
events.on(window, 'scroll', function () {

    'use strict';
    topButtonTogglerFnc();

});
