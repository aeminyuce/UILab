<script>
    events.onload(function () {

        var results = selector(document)[0].getAttribute('class');
        selector('.results')[0].innerHTML = '&lt;html class="' + results + '"&gt;';

        selector('.variables')[0].innerHTML = 'useragents.userLang: ' + useragents.userLang + '<br>' +
            'useragents.ie: ' + useragents.ie + '<br>' +
            'useragents.edge: ' + useragents.edge + '<br>' +
            'useragents.mobile: ' + useragents.mobile + '<br>' +
            'useragents.ios: ' + useragents.ios + '<br>' +
            'useragents.android: ' + useragents.android + '<br>' +
            'useragents.androidOld: ' + useragents.androidOld + '<br>' +
            'useragents.nativeBrowser: ' + useragents.nativeBrowser;

    });
</script>

<main class="container no-gutter">
    <div class="fixed">
        <div class="row">
            <div class="col-12 padding-30">

                <div class="card-warning padding-30 round theme-default2 ui-x-light ui-border">
                    User Agents JS requires Events JS.<br>
                    User Agents JS is a simple javascript detecting browsers, devices and operating systems.<br><br>
                    <strong>See your browser results listed below.</strong>
                </div>

                <b class="margin-5-b block">User agents:</b>
                <span class="margin-5-b block">Adding classnames to the html element, dynamically.</span>
                <pre class="round results"></pre>

                <span class="sp-15"></span>

                <b class="margin-5-b block">Variables:</b>
                <span class="margin-5-b block">Global variables returns true/false.</span>
                <pre class="round variables"></pre>

            </div>
        </div>
    </div>
</main>