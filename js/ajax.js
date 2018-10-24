/*
 Ajax JS
 Ajax JS requires Events JS

 Example:

    ajax('GET', 'ajaxtest.php?name=value&name=value', function (response, status) {

        var target = selector('.ajaxTarget');
        if (target.length > 0) {

            if (status === 'success') {
                target[0].innerHTML = response;

            } else {
                throw new Error('Ajax Alert: Source not loaded!');
            }

        }

    });

 JSON Example:

    var myJSONRequests = [];

    ajax('GET', 'ajaxtest.php?name=value&name=value', function (response, status) {

        var i, n, target;

        target = selector('.ajaxTarget');
        if (target.length > 0) {

            // abort still processing previous json requests (optional)
            for (n = 0; n < myJSONRequests.length; n += 1) {

                myJSONRequests[n].abort();
                myJSONRequests.splice(n, 1);

            }

            myJSONRequests.push(xhr);

            if (status === 'success') {

                myJSONRequests = []; // (optional)

                response = JSON.parse(response);
                if (response.length !== 'undefined') {

                    for (i = 0; i < response.length; i += 1) {
                        if (response[i] !== null) {
                            console.log(response[i]["your json key of value"]);
                        }
                    }

                } else {
                    throw new Error('Ajax Alert: Source is not in correct JSON format!');
                }

            }

        }

    });

*/

/*globals window, document, events, XMLHttpRequest */
function ajax(method, target, callback) {

    'use strict';
    var newMethod, newTarget;

    if (typeof method !== 'string' || method === undefined) {
        return;
    }
    newMethod = method;

    if (typeof target !== 'string' || target === undefined) {
        return;
    }
    newTarget = target;

    window.ajaxRequest = new XMLHttpRequest();
    window.ajaxRequest.open(newMethod, newTarget, true);
    window.ajaxRequest.send();

    window.ajaxRequest.onload = function () {

        function uniqueClassNames(value, index, self) {
            return self.indexOf(value) === index;
        }

        if (window.ajaxRequest.status >= 200 && window.ajaxRequest.status < 400) {

            callback(window.ajaxRequest.responseText, 'success', window.ajaxRequest);

            // ajax callbacks
            events.on(document, 'ajaxCallbacks');

            // get list of real classnames
            window.ajaxClassNames = window.ajaxRequest.responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);

            if (window.ajaxClassNames !== null) {

                window.ajaxClassNames = window.ajaxClassNames.toString().match(/"+[\w\s\d\-\_\=]+"/g).toString().replace(/\"/g, '').replace(/,/g, ' ').split(' ');
                window.ajaxClassNames = window.ajaxClassNames.filter(uniqueClassNames);

                events.trigger(document, 'ajaxCallbacks'); // set custom event

            }

        } else { callback('', 'error', window.ajaxRequest); }

    };

    window.ajaxRequest.onerror = function () { callback('', 'error', window.ajaxRequest); };

}

/*!loader */
events.onload(function () {

    'use strict';
    ajax();

});
