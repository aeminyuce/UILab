/* ajax */

import { ui } from './globals.js';
export default () => ui;

ui.ajax = function (props) {

    /*
    props list:
        props.type
        props.url
        props.data
        props.callback
    */

    if (props.url === undefined) return;

    if (props.type === undefined || props.type === '') {
        props.type = 'GET'; // send strings
    }

    if (ui.ajax.requests === undefined) { ui.ajax.requests = []; }

    const i = ui.ajax.requests.length;

    ui.ajax.requests[i] = new XMLHttpRequest();
    ui.ajax.requests[i].open(props.type, props.url, true);

    // beforesend
    if (props.beforesend !== undefined) {
        props.beforesend(ui.ajax.requests[i]);
    }

    // headers
    ui.ajax.requests[i].setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // set ajax request header

    if (!props.cache) { // no cache header
        ui.ajax.requests[i].setRequestHeader('cache-control', 'no-cache');
    }

    // check params in url
    if (props.data !== '' && props.data !== undefined) ui.ajax.requests[i].send(props.data);
    else ui.ajax.requests[i].send();

    // xhr loading
    ui.ajax.requests[i].onload = () => {

        if (ui.ajax.requests[i].readyState === 4 && ui.ajax.requests[i].status === 200) {

            ui.ajax.classNames = '';
            props.callback('success', ui.ajax.requests[i].responseText, ui.ajax.requests[i]);

            // get data attributes
            let re = ui.globals.dataPrefix + '+\\w+=\\"+[\\w\\s\\d\\-\\_\\=]+\\"[ \\s\\>]';
            re = new RegExp(re, 'g');

            ui.ajax.data = ui.ajax.requests[i].responseText.match(re);

            if (ui.ajax.data === null) ui.ajax.data = '';
            else ui.ajax.data = ui.ajax.data.toString();

            // get list of classnames
            ui.ajax.classNames += ui.ajax.requests[i].responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);

            if (ui.ajax.classNames === 'null') { // not match: returns string null!
                 ui.ajax.classNames = '';
            }

            // get list of data classnames
            let rex = ui.globals.dataClasses + '=\\"+[\\w\\s\\d\\-\\_\\=]+\\"[\\s\\>]';
            rex = new RegExp(rex, 'g');

            ui.ajax.classNames += ui.ajax.requests[i].responseText.match(rex);
            if (ui.ajax.classNames !== 'null') { // not match: returns string null!

                ui.ajax.classNames = ui.ajax.classNames.match(/"+[\w\s\d\-\_\=]+"/g);
                ui.ajax.classNames = ui.ajax.classNames.toString().replace(/\"/g, '').replace(/,/g, ' ').split(' ');

                ui.ajax.classNames = ui.ajax.classNames.filter((value, index, self) => self.indexOf(value) === index);

                // ajax callbacks
                ui.trigger(document, ui.globals.eventAjaxCallback); // set custom event

            }

            // empty variables
            ui.ajax.requests[i] = undefined;

            ui.ajax.classNames = '';
            ui.ajax.data = '';

        } else props.callback('error', '', ui.ajax.requests[i]); // error

    };

    // error
    ui.ajax.requests[i].onerror = () => {
        props.callback('error', '', ui.ajax.requests[i]);
    };

}