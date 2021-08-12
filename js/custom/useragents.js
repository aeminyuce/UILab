/*globals document, selector, events, useragents, setTimeout */

events.onload(function () {

    setTimeout(function () {

        var results = selector(document)[0].getAttribute('class');
        selector('.results')[0].innerHTML = '&lt;html class="' + results + '"&gt;';

        selector('.variables')[0].innerHTML = 'useragents.userLang: ' + useragents.userLang + '<br><br>' +
        'useragents.desktop: ' + useragents.desktop + '<br>' +
        'useragents.ie: ' + useragents.ie + '<br>' +
        'useragents.edge: ' + useragents.edge + '<br>' +
        'useragents.edg: ' + useragents.edg + ' (Chromium Edge)<br><br>' +
        'useragents.mobile: ' + useragents.mobile + '<br>' +
        'useragents.ios: ' + useragents.ios + '<br>' +
        'useragents.android: ' + useragents.android + '<br>' +
        'useragents.androidOld: ' + useragents.androidOld + '<br>' +
        'useragents.nativeBrowser: ' + useragents.nativeBrowser;

    }, 300);

});