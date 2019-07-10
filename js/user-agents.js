/*
 User Agents JS
 User Agents JS requires Selector Js, Events JS
*/

var useragents = {

    ie: false,
    ie9: false,
    edge: false,
    mobile: false,
    ios: false,
    android: false,
    androidOld: false,
    nativeBrowser: false // It returns true on Jelly Bean and older versions and old native browser web view apps together.

};

(function () {

    'use strict';
    /*globals document, navigator, events */

    useragents.Start = function () {

        var ua, isMSIE, userLang;

        userLang = (navigator.language || navigator.userLanguage).split('-')[0];
        events.addClass(document, userLang);

        ua = navigator.userAgent.toLowerCase();

        if (ua.indexOf('firefox') > -1) { events.addClass(document, 'firefox'); }
        if (ua.indexOf('safari') > -1) { events.addClass(document, 'safari'); }

        if (ua.indexOf('chrome') > -1) {

            events.addClass(document, 'chrome');
            events.removeClass(document, 'safari');

        }

        if (ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1) {

            events.addClass(document, 'opera');
            events.removeClass(document, 'safari');
            events.removeClass(document, 'chrome');

        }

        isMSIE = /*@cc_on!@*/false;
        if (isMSIE || !!document.documentMode || ua.indexOf('edge') > -1) {

            useragents.ie = true;

            events.addClass(document, 'ie');
            events.removeClass(document, 'chrome');

            if (ua.indexOf('edge') > -1) {

                useragents.edge = true;
                events.removeClass(document, 'ie');
                events.addClass(document, 'edge');

            }

        }

        if (ua.indexOf('msie 9') > -1) {

            useragents.ie9 = true;
            events.addClass(document, 'ie9');

        }

        if (navigator.appVersion.indexOf('Win') !== -1) { events.addClass(document, 'windows'); }
        if (navigator.appVersion.indexOf('Mac') !== -1) { events.addClass(document, 'mac'); }

        if (ua.indexOf('mobile') > -1) {

            events.addClass(document, 'mobile');
            useragents.mobile = true;

            if (ua.indexOf('apple') > -1) {

                events.addClass(document, 'ios');
                events.removeClass(document, 'mac');
                useragents.ios = true;

            }

            if (ua.indexOf('android') > -1) {

                if (ua.indexOf('mozilla/5.0') > -1 && ua.indexOf('applewebkit') > -1 && ua.indexOf('version/') > -1) {

                    events.removeClass(document, 'chrome');
                    events.removeClass(document, 'safari');

                    events.addClass(document, 'android-browser');
                    useragents.nativeBrowser = true;

                }

                events.addClass(document, 'android');
                events.removeClass(document, 'ios');

                if (useragents.nativeBrowser || parseFloat(ua.match(/android\s([0-9\.]*)/)[1], 10) < parseFloat('4.4')) { // Jelly Bean and before with stock browser is androidOld
                    useragents.androidOld = true;
                }

                useragents.android = true;
                useragents.ios = false;
            }

        } else { events.removeClass(document, 'ios'); }

    };

    // Loaders
    events.onload(useragents.Start);

}());
