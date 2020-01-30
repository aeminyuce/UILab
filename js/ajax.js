/*
 Ajax JS
 Ajax JS requires Selector Js, Events JS
*/

/*globals document, events, XMLHttpRequest */
var ajax = function (set) { // type, url, data, callback

    'use strict';

    if (set.url === undefined) { return; }

    if (set.type === undefined || set.type === '') {
        set.type = 'GET'; // send strings
    }

    var i = ajax.request.length;

    ajax.request[i] = new XMLHttpRequest();
    ajax.request[i].open(set.type, set.url, true);

    // beforesend
    if (set.beforesend !== undefined) {
        set.beforesend(ajax.request[i]);
    }

    // headers
    ajax.request[i].setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // set ajax request header

    if (!set.cache) { // no cache header
        ajax.request[i].setRequestHeader('cache-control', 'no-cache');
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
                ajax.text = ajax.request[i].responseText;
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
