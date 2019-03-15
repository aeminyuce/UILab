/*
 Parser JS
*/

/*globals document, navigator, DOMParser */
var parser = function (text) {

    'use strict';
    var html;

    if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {

        html = document.implementation.createHTMLDocument('');
        html.body.innerHTML = text;

        return html.body.innerHTML;

    }

    parser.item = new DOMParser();

    html = parser.item.parseFromString(text, 'text/html');
    html = html.querySelector('body').innerHTML;

    return html;

};
