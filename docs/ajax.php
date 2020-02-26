<main class="container no-gutter">
    <div class="fixed">
        <div class="row">
            <div class="col-12 padding-30">

                <div class="card-warning padding-30 round theme-default2 ui-x-light ui-border">
                    Ajax JS is a simple javascript to making XHR requests.
                </div>

                <div class="padding-30-v theme-default">

                    <b class="margin-5-b block">Example:</b>
                    <pre class="round margin-5-b scroll-v">ajax({

type : 'GET',
url : 'yourfile.php',
data: 'name=value&name=value',

callback: function (status, response) {

    var target = selector('.ajaxTarget');
    if (target.length > 0) {

        if (status === 'success') {
            target[0].innerHTML = response;
        }

    }

}

});</pre>

                    <span class="sp30"></span>

                    <b class="margin-5-b block">JSON Example:</b>
                    <pre class="round margin-5-b scroll-v">var myJSONRequests = [];

ajax({

type : 'GET',
url : 'yourfile.php',
cache: false,
data: 'name=value&name=value',

beforesend: function (xhr) {

    // abort still processing previous json requests (optional)
    for (n = 0; n &lt; myJSONRequests.length; n += 1) {

        myJSONRequests[n].abort();
        myJSONRequests.splice(n, 1);

    }

    myJSONRequests.push(xhr);

},
callback: function (status, response, xhr) {

    var i, n, target;

    target = selector('.ajaxTarget');
    if (target.length > 0) {

        if (status === 'success') {

            response = JSON.parse(response);
            if (response.length !== 'undefined') {

                for (i = 0; i &lt; response.length; i += 1) {
                    if (response[i] !== null) {
                        console.log(response[i].yourJSONvalue);
                    }
                }

            }

        }

    }

}

});</pre>

                    <span class="sp30"></span>

                </div>

            </div>
        </div>
    </div>
</main>