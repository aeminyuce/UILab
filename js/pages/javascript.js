/* javascript */

// loader
ui.onload(function () {

    setTimeout(() => {

        var results = ui.find(document)[0].getAttribute('class');
        ui.find('.results')[0].innerHTML = '&lt;html class="' + results + '"&gt;';

        ui.find('.variables')[0].innerHTML = 'ui.userAgents.userLang: ' + ui.userAgents.userLang + '<br><br>' +
        'ui.userAgents.desktop: ' + ui.userAgents.desktop + '<br>' +
        'ui.userAgents.ie: ' + ui.userAgents.ie + '<br>' +
        'ui.userAgents.edge: ' + ui.userAgents.edge + '<br>' +
        'ui.userAgents.edg: ' + ui.userAgents.edg + ' (Chromium Edge)<br><br>' +
        'ui.userAgents.mobile: ' + ui.userAgents.mobile + '<br>' +
        'ui.userAgents.ios: ' + ui.userAgents.ios + '<br>' +
        'ui.userAgents.android: ' + ui.userAgents.android + '<br>' +
        'ui.userAgents.androidOld: ' + ui.userAgents.androidOld + '<br>' +
        'ui.userAgents.nativeBrowser: ' + ui.userAgents.nativeBrowser;

    }, ui.globals.ease * 2);

});