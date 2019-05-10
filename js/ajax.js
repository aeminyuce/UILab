/*
 Ajax JS
 Ajax JS requires Events JS

 Example:

    ajax({
        type : 'POST',
        url : 'yourfile.php',
        data: 'name=value&name=value',
        callback: function (status, response) {

            var target = selector('.ajaxTarget');
            if (target.length > 0) {

                if (status === 'success') {
                    target[0].innerHTML = response;

                } else {
                    throw new Error('Ajax Alert: Source not loaded!');
                }

            }

        }
    });

 JSON Example:

    var myJSONRequests = [];

    ajax({
        type : 'GET',
        url : 'yourfile.php',
        data: 'name=value&name=value',
        callback: function (status, response, xhr) {

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
                                console.log(response[i].yourJSONvalue);
                            }
                        }

                    } else {
                        throw new Error('Ajax Alert: Source is not in correct JSON format!');
                    }

                }

            }

        }
    });

*/

/*globals document, events, XMLHttpRequest */
var ajax = function (set) { // type, url, data, callback

    'use strict';

    if (set.url === undefined) { return; }

    if (set.type === undefined || set.type === '') {
        set.type = 'POST';
    }

    ajax.request = new XMLHttpRequest();
    ajax.request.open(set.type, set.url, true);

    if (set.data !== '' && set.data !== undefined) {
        ajax.request.send(set.data);

    } else {
        ajax.request.send();
    }

    ajax.request.onload = function () {

        function uniqueClassNames(value, index, self) {
            return self.indexOf(value) === index;
        }

        if (ajax.request.status >= 200 && ajax.request.status < 400) {

            set.callback('success', ajax.request.responseText, ajax.request);

            // get list of real classnames
            ajax.classNames = ajax.request.responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);

            if (ajax.classNames !== null) {

                ajax.classNames = ajax.classNames.toString().match(/"+[\w\s\d\-\_\=]+"/g).toString().replace(/\"/g, '').replace(/,/g, ' ').split(' ');
                ajax.classNames = ajax.classNames.filter(uniqueClassNames);

                // ajax callbacks
                events.trigger(document, 'ajaxCallbacks'); // set custom event

            }

        } else { set.callback('error', '', ajax.request); }

    };

    ajax.request.onerror = function () {
        set.callback('error', '', ajax.request);
    };

};
