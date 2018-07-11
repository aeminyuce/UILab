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
                target[0].innerHTML = response;
            }

        }

    });

*/

/*globals window, document, events, XMLHttpRequest */
function ajax(method, target, callback) {

    'use strict';
    var newMethod, newTarget;

    if (typeof method !== 'string' || typeof method === 'undefined') {
        return;
    } else { newMethod = method; }

    if (typeof target !== 'string' || typeof target === 'undefined') {
        return;
    } else { newTarget = target; }

    window.ajaxRequest = new XMLHttpRequest();
    window.ajaxRequest.open(newMethod, newTarget, true);
    window.ajaxRequest.send();

    window.ajaxRequest.onload = function () {

        function uniqueClassNames(value, index, self) {
            return self.indexOf(value) === index;
        }

        if (window.ajaxRequest.status >= 200 && window.ajaxRequest.status < 400) {

            callback(window.ajaxRequest.responseText, 'success');

            // ajax callbacks
            events.on(document, 'ajaxCallbacks');

            // get list of real classnames
            window.ajaxClassNames = window.ajaxRequest.responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);

            if (window.ajaxClassNames !== null) {

                window.ajaxClassNames = window.ajaxClassNames.toString().match(/"+[\w\s\d\-\_\=]+"/g).toString().replace(/\"/g, '').replace(/\,/g, ' ').split(' ');
                window.ajaxClassNames = window.ajaxClassNames.filter(uniqueClassNames);

                events.trigger(document, 'ajaxCallbacks'); // set custom event

            }

        } else { callback('', 'error'); }

    };

    window.ajaxRequest.onerror = function () { callback(null, 'error'); };

}

/*!loader */
events.onload(function () {

    'use strict';
    ajax();

});
