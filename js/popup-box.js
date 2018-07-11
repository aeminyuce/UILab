/*
 Popup Box JS
 Popup Box JS requires Events JS
*/

/*globals window, document, selector, events, setTimeout */
function popupBoxFnc() {

    'use strict';
    var panel, closePanel, setCookie, getCookie, classname = 'open', easeClass = 'open-ease';

    panel = selector('.popup-box');

    if (panel.length > 0) {

        setCookie = function (cname, cvalue, exdays) {

            var d = new Date(), path, expires;

            if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
                path = 'http://127.0.0.1/';

            } else { path = ''; }

            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + '; path=' + path + expires;

        };

        getCookie = function (cname) {

            var i, c, name, ca;
            name = cname + '=';
            ca = document.cookie.split(';');

            for (i = 0; i < ca.length; i += 1) {

                c = ca[i];

                while (c.charAt(0) === ' ') { c = c.substring(1); }
                if (c.indexOf(name) === 0) { return c.substring(name.length, c.length); }

            }

            return '';

        };

        if (getCookie('popupBoxOpenedBefore')) { return; }
        setCookie('popupBoxOpenedBefore', true, 1);

        panel = panel[0];

        events.addClass(panel, classname);
        events.addClass(document, 'popup-box-opened');

        setTimeout(function () {
            events.addClass(panel, easeClass);
        }, 10);

        closePanel = function () {

            events.removeClass(panel, easeClass);
            events.off('body', 'keydown.closePanel');

            setTimeout(function () {

                events.removeClass(panel, classname);
                events.removeClass(document, 'popup-box-opened');

            }, 150);

        };

        events.on('body', 'keydown.closePanel', function (e) {
            if (e.keyCode === 27) { closePanel(); } // esc
        });

        events.on('.close-popup-box', 'click', closePanel);

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    popupBoxFnc();

});
