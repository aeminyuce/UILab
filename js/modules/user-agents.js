/* user agents */

import { ui } from './../core/globals.js';
export default () => ui;

ui.userAgents = {

    // targets
    target: document,

    // main classnames
    nameDesktop: 'ui-desktop',

    nameWindows: 'ui-windows',
    nameChromiumEdge: 'ui-edg',
    nameEdge: 'ui-edge',
    nameIE: 'ui-ie',
    nameChrome: 'ui-chrome',
    nameFirefox: 'ui-firefox',
    nameOpera: 'ui-opera',

    nameMac: 'ui-mac',
    nameSafari: 'ui-safari',

    nameMobile: 'ui-mobile',
    nameIos: 'ui-ios',
    nameAndroid: 'ui-android',
    nameAndroidBrowser: 'ui-android-browser',

    // variables
    userLang: '',

    desktop: false,
    ie: false,
    edge: false,
    edg: false,

    mobile: false,
    ios: false,
    android: false,
    androidOld: false,
    nativeBrowser: false // It returns true on Jelly Bean and older versions and old native browser web view apps together.

};

ui.onload(() => {

    var ua = navigator.userAgent.toLowerCase();
    ui.userAgents.userLang = (navigator.language || navigator.userLanguage).split('-')[0];

    if (ua.indexOf('firefox') > -1) {
        ui.addClass(ui.userAgents.target, ui.userAgents.nameFirefox);
    }

    if (ua.indexOf('safari') > -1) {
        ui.addClass(ui.userAgents.target, ui.userAgents.nameSafari);
    }

    if (ua.indexOf('chrome') > -1) {

        ui.addClass(ui.userAgents.target, ui.userAgents.nameChrome);
        ui.removeClass(ui.userAgents.target, ui.userAgents.nameSafari);

    }

    if (ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1) {

        ui.addClass(ui.userAgents.target, ui.userAgents.nameOpera);
        ui.removeClass(ui.userAgents.target, ui.userAgents.nameSafari);
        ui.removeClass(ui.userAgents.target, ui.userAgents.nameChrome);

    }

    if (ua.indexOf("MSIE ") > 0 || !!document.documentMode || ua.indexOf('edge') > -1) {

        ui.userAgents.ie = true;
        ui.globals.iconSrc = ''; // IE not support SVG external reference!

        ui.addClass(ui.userAgents.target, ui.userAgents.nameIE);
        ui.removeClass(ui.userAgents.target, ui.userAgents.nameChrome);

        if (ua.indexOf('edge') > -1 || ua.indexOf('edg') > -1) {

            ui.userAgents.edge = true;

            ui.removeClass(ui.userAgents.target, ui.userAgents.nameIE);
            ui.addClass(ui.userAgents.target, ui.userAgents.nameEdge);

        }

    } else if (ua.indexOf('edg') > -1) { // detect new Chromium Edge

        ui.userAgents.edg = true;
        ui.addClass(ui.userAgents.target, ui.userAgents.nameChromiumEdge);

    }

    if (navigator.appVersion.indexOf('Win') !== -1) {
        ui.addClass(ui.userAgents.target, ui.userAgents.nameWindows);
    }

    if (navigator.appVersion.indexOf('Mac') !== -1) {
        ui.addClass(ui.userAgents.target, ui.userAgents.nameMac);
    }

    if (ua.indexOf('mobile') > -1) {

        ui.addClass(ui.userAgents.target, ui.userAgents.nameMobile);
        ui.userAgents.mobile = true;

        if (ua.indexOf('apple') > -1) {

            ui.addClass(ui.userAgents.target, ui.userAgents.nameIos);
            ui.removeClass(ui.userAgents.target, ui.userAgents.nameMac);

            ui.userAgents.ios = true;

        }

        if (ua.indexOf('android') > -1) {

            if (ua.indexOf('mozilla/5.0') > -1 && ua.indexOf('applewebkit') > -1 && ua.indexOf('version/') > -1) {

                ui.removeClass(ui.userAgents.target, ui.userAgents.nameChrome);
                ui.removeClass(ui.userAgents.target, ui.userAgents.nameSafari);
                ui.addClass(ui.userAgents.target, ui.userAgents.nameAndroidBrowser);

                ui.userAgents.nativeBrowser = true;

            }

            ui.addClass(ui.userAgents.target, ui.userAgents.nameAndroid);
            ui.removeClass(ui.userAgents.target, ui.userAgents.nameIos);

            if (ui.userAgents.nativeBrowser || parseFloat(ua.match(/android\s([0-9\.]*)/)[1]) < parseFloat('4.4')) { // Jelly Bean and before with stock browser is androidOld
                ui.userAgents.androidOld = true;
            }

            ui.userAgents.android = true;
            ui.userAgents.ios = false;

        }

    } else {

        ui.removeClass(ui.userAgents.target, ui.userAgents.nameIos);
        ui.addClass(ui.userAgents.target, ui.userAgents.nameDesktop);

        ui.userAgents.desktop = true;

    }

});