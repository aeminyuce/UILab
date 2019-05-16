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
        beforesend: function (xhr) {

            // abort still processing previous json requests (optional)
            for (n = 0; n < myJSONRequests.length; n += 1) {

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

                        for (i = 0; i < response.length; i += 1) {
                            if (response[i] !== null) {
                                console.log(response[i].yourJSONvalue);
                            }
                        }

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

    var i = ajax.request.length + 1;

    ajax.request[i] = new XMLHttpRequest();
    ajax.request[i].open(set.type, set.url, true);

    // beforesend
    if (set.beforesend !== undefined) {
        set.beforesend(ajax.request[i]);
    }

    // check params in url
    if (set.data !== '' && set.data !== undefined) {
        ajax.request[i].send(set.data);

    } else { ajax.request[i].send(); }

    // xhr loading
    ajax.request[i].onload = function () {

        if (ajax.request[i].readyState === 4 && ajax.request[i].status === 200) {

            set.callback('success', ajax.request[i].responseText, ajax.request[i]);

            // get list of real classnames
            ajax.classNames = ajax.request[i].responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);
            if (ajax.classNames !== null) {

                ajax.classNames = ajax.classNames.toString().match(/"+[\w\s\d\-\_\=]+"/g);
                ajax.classNames = ajax.classNames.toString().replace(/\"/g, '').replace(/,/g, ' ').split(' ');

                ajax.classNames = ajax.classNames.filter(function (value, index, self) {
                    return self.indexOf(value) === index;
                });

                // ajax callbacks
                events.trigger(document, 'ajaxCallbacks'); // set custom event

            }

        } else { // error
            set.callback('error', '', ajax.request[i]);
        }

    };

    // error
    ajax.request[i].onerror = function () {
        set.callback('error', '', ajax.request[i]);
    };

};
ajax.request = [];
