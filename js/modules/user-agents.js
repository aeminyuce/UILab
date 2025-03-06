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

    const classes = [];
    const ua = navigator.userAgent.toLowerCase();

    ui.userAgents.userLang = (navigator.language || navigator.userLanguage).split('-')[0];

    const out = (name) => {

        const index = classes.indexOf(name);

        if (index !== -1) {
            classes.splice(index, 1);
        }

    }

    if (ua.indexOf('firefox') > -1) {
        classes.push(ui.userAgents.nameFirefox);
    }

    if (ua.indexOf('safari') > -1) {
        classes.push(ui.userAgents.nameSafari);
    }

    if (ua.indexOf('chrome') > -1) {

        classes.push(ui.userAgents.nameChrome);
        out(ui.userAgents.nameSafari);

    }

    if (ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1) {

        classes.push(ui.userAgents.nameOpera);

        out(ui.userAgents.nameSafari);
        out(ui.userAgents.nameChrome);

    }

    if (ua.indexOf("MSIE ") > 0 || !!document.documentMode || ua.indexOf('edge') > -1) {

        ui.userAgents.ie = true;

        classes.push(ui.userAgents.nameIE);
        out(ui.userAgents.nameChrome);

        if (ua.indexOf('edge') > -1 || ua.indexOf('edg') > -1) {

            ui.userAgents.edge = true;

            out(ui.userAgents.nameIE);
            classes.push(ui.userAgents.nameEdge);

        }

    } else if (ua.indexOf('edg') > -1) { // detect new Chromium Edge

        ui.userAgents.edg = true;
        classes.push(ui.userAgents.nameChromiumEdge);

    }

    if (navigator.userAgentData !== undefined) { // new usage

        if (navigator.userAgentData.platform.indexOf("Win") !== -1) {
            classes.push(ui.userAgents.nameWindows);
        }

        if (navigator.userAgentData.platform.indexOf("Mac") !== -1) {
            classes.push(ui.userAgents.nameMac);
        }

    } else { // audit usage

        if (navigator.appVersion.indexOf('Win') !== -1) classes.push(ui.userAgents.nameWindows);
        if (navigator.appVersion.indexOf('Mac') !== -1) classes.push(ui.userAgents.nameMac);

    }

    if (ua.indexOf('mobile') === -1) {

        out(ui.userAgents.nameIos);
        classes.push(ui.userAgents.nameDesktop);

        ui.userAgents.desktop = true;

    } else {

        classes.push(ui.userAgents.nameMobile);
        ui.userAgents.mobile = true;

        if (ua.match("iphone|ipad|ipod") !== null) {

            classes.push(ui.userAgents.nameIos);
            out(ui.userAgents.nameMac);

            ui.userAgents.ios = true;

        }

        if (ua.indexOf('android') > -1) {

            if (ua.indexOf('mozilla/5.0') > -1 && ua.indexOf('applewebkit') > -1 && ua.indexOf('version/') > -1) {

                out(ui.userAgents.nameChrome);
                out(ui.userAgents.nameSafari);

                classes.push(ui.userAgents.nameAndroidBrowser);

                ui.userAgents.nativeBrowser = true;

            }

            classes.push(ui.userAgents.nameAndroid);
            out(ui.userAgents.nameIos);

            if (ui.userAgents.nativeBrowser || parseFloat(ua.match(/android\s([0-9\.]*)/)[1]) < parseFloat('4.4')) { // Jelly Bean and before with stock browser is androidOld
                ui.userAgents.androidOld = true;
            }

            ui.userAgents.android = true;
            ui.userAgents.ios = false;

        }

    }

    let allClasses = '';

    for (let i = 0; i < classes.length; i++) {

        allClasses += classes[i];
        if (i + 1 !== classes.length) allClasses += ' ';
    }

    ui.addClass(ui.userAgents.target, allClasses);

});