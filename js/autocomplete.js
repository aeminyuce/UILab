/*
 Autocomplete JS
 Autocomplete JS requires Events JS, Ajax JS
*/

/*globals window, document, selector, events, ajax, clearTimeout, setTimeout */
var autocomplete = {

    classes : 'bordered dual-bordered rounded shadow',
    customLetters : { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" }

};

function autocompleteFnc() {

    'use strict';
    var eventsTarget, pullValues, readValues, customLowerCase;

    pullValues = [];
    readValues = [];

    window.autocompetePool = [];

    // pull values
    function pullValuesFnc(selectedVal) {

        var input, type, forend = false, i = 0, j = 0;

        if (pullValues.length === 'undefined') {
            readValues = pullValues; // is object

        } else {

            // is object group
            for (i = 0; i < pullValues.length; i += 1) {

                for (j = 0; j < pullValues[i].length; j += 1) {
                    if (pullValues[i][j] === selectedVal) { forend = true; }
                }

                if (forend) { return; }

            }

            readValues[pullValues[i]] = pullValues[j];

        }

        for (i = 0; i < readValues.length; i += 1) {

            input = selector('#' + readValues[i][0])[0];
            type = input.getAttribute('type');

            if (type === 'checkbox' || type === 'radio') {
                input.checked = true;

            } else {
                input.value = readValues[i][1];
            }

        }

    }

    // custom lowercase
    (function () {

        var k, re, chars, keys;

        keys = Object.keys(autocomplete.customLetters); // returns array

        chars = '(([';
        for (k = 0; k < keys.length; k += 1) { chars += keys[k]; }
        chars += ']))';

        re = new RegExp(chars, 'g');

        customLowerCase = function (string) {

            string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
                return autocomplete.customLetters[l];
            });

            return string.toLowerCase();

        };

    }());

    // Events
    eventsTarget = selector('.text.autocomplete > [type="text"]');

    events.on(document, 'keyup', eventsTarget, function (e) {

        var i, j, k, n, p, list, listItems, navSelected, navSelectedNext, v, vID, key, createDropdown, timerShowLines, offset, offsetTop, screenH, tHeight, dHeight, m, txt, getVal, src, dataId, dataClass, send, input, type, dataName, dataID;

        p = this.parentNode;
        list = selector('ul', p);

        if (p.getAttribute('data-src') !== null) {

            if (e.keyCode === 38 || e.keyCode === 40) {

                // navigate the list
                listItems = selector('li', list[0]);
                if (listItems !== undefined) {

                    if (listItems.length > 0) {

                        navSelected = selector('li.selected', list[0]);
                        if (navSelected !== undefined) {

                            if (navSelected.length === 0) {

                                if (e.keyCode === 40) { // arrow down
                                    events.addClass(listItems[0], 'selected');
                                }

                            } else {

                                if (e.keyCode === 38) { // arrow up

                                    navSelectedNext = navSelected.previousElementSibling;

                                    if (navSelectedNext !== null) {
                                        events.addClass(navSelectedNext, 'selected');

                                    } else { return; }

                                } else if (e.keyCode === 40) { // arrow down

                                    navSelectedNext = navSelected.nextElementSibling;

                                    if (navSelectedNext !== null) {
                                        events.addClass(navSelectedNext, 'selected');

                                    } else { return; }

                                }

                                events.removeClass(navSelected, 'selected');

                            }

                            this.value = selector('li.selected', list).textContent;

                        }

                    }

                }

            } else if (e.keyCode === 13 || e.keyCode === 27) {

                if (list.length >= 1) {
                    list[0].innerHTML = '';
                }

            } else if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {

                v = this.value;

                v = customLowerCase(v);
                v = v.replace(/\s+$/g, ''); // remove the last space

                vID = this.getAttribute('id');

                if (v !== '') {

                    src = p.getAttribute('data-src');
                    getVal = p.getAttribute('data-val');

                    if (src !== null && getVal !== null) {

                        // send values
                        dataId = p.getAttribute('id');
                        dataClass = p.getAttribute('class');

                        if (vID) {
                            send = 'valueID=' + vID + '&value=' + v;

                        } else {
                            send = 'value=' + v;
                        }

                        if (dataId !== null) {

                            input = selector('#' + dataId)[0];
                            type = input.getAttribute('type');

                            if (type === 'checkbox' || type === 'radio') {
                                send += '&' + dataId + '=' + input.checked;

                            } else {
                                send += '&' + dataId + '=' + input.value;
                            }

                        }

                        if (dataClass !== null) {

                            events.each('.' + dataClass, function () {

                                input = selector('input,select,textarea', this)[0];

                                type = input.getAttribute('type');
                                dataName = input.getAttribute('data-name');
                                dataID = input.getAttribute('id');

                                if (type === 'checkbox' || type === 'radio') {
                                    send += '&' + dataName + '[val]=' + input.checked + '&' + dataName + '[id]=' + dataID;

                                } else {
                                    send += '&' + dataName + '[val]=' + input.value + '&' + dataName + '[id]=' + dataID;
                                }

                            });

                        }

                        ajax('POST', src + '?' + send, function (response, status) {

                            for (n = 0; n < window.autocompetePool; n += 1) {
                                window.autocompetePool[n].abort();
                            }

                            window.autocompetePool.push(response);

                            if (status === 'success') {

                                response = JSON.parse(response);
                                if (response.length !== 'undefined') {

                                    createDropdown = function () {

                                        // create dropdown
                                        clearTimeout(timerShowLines);
                                        timerShowLines = setTimeout(function () {

                                            events.addClass(list, autocomplete.classes);

                                            offset = p.getBoundingClientRect();
                                            offsetTop = (offset.top - window.scrollTop);

                                            events.removeClass(p, 'submenu-top');

                                            screenH = selector(document)[0].offsetHeight;

                                            tHeight = p.offsetHeight;
                                            dHeight = list[0].offsetHeight;

                                            if (offsetTop + parseInt(tHeight + dHeight, 10) >= screenH) {

                                                if (offsetTop - parseInt(tHeight + dHeight, 10) + tHeight > 0) {
                                                    events.addClass(p, 'submenu-top');

                                                } else {
                                                    list[0].style.height = (dHeight - (offsetTop + parseInt(tHeight + dHeight, 10) - screenH) - 15) + 'px';
                                                }

                                            }

                                        }, 10);

                                    };

                                    k = 0;
                                    list[0].innerHTML = '';

                                    for (i = 0; i < response.length; i += 1) {

                                        key = response[i][getVal];
                                        txt = '';

                                        if (key !== null) {

                                            if (typeof key === 'boolean') { return; } // booleans not supported!
                                            m = key;

                                            if (typeof key === 'number') {
                                                m = m.toString().match(v, 'g');

                                            } else {

                                                m = customLowerCase(m);
                                                m = m.match(v, 'g');

                                            }

                                            if (m !== null) {

                                                createDropdown();

                                                // show max. number of lines: 5
                                                k += 1;
                                                if (k > 5) { return; }

                                                // create lines
                                                if (typeof key === 'number') {

                                                    for (j = 0; j < key.toString().length; j += 1) {

                                                        if (j ===  key.toString().indexOf(m)) { txt += '<strong>'; }
                                                        if (j === (key.toString().indexOf(m) + v.length)) { txt += '</strong>'; }

                                                        txt += key.toString().charAt(j);

                                                    }

                                                } else {

                                                    for (j = 0; j < key.length; j += 1) {

                                                        if (j === customLowerCase(key).indexOf(m)) { txt += '<strong>'; }
                                                        if (j === (customLowerCase(key).indexOf(m) + v.length)) { txt += '</strong>'; }

                                                        txt += key.charAt(j);

                                                    }

                                                }

                                                list[0].insertAdjacentHTML('beforeend', '<li>' + txt + '</li>');

                                            }

                                        }
                                    }

                                } else {
                                    throw new Error('Autocomplete Alert: Source is not in correct JSON format!');
                                }

                                if (events.hasClass(p, 'autocomplete-pull')) {
                                    pullValues = response; // pull values
                                }

                                response = '';

                            }

                        });

                    } else { return; }

                } else { list[0].innerHTML = ''; }

            }

        }

    });

    events.on(document, 'keydown', eventsTarget, function (e) {

        if (e.keyCode === 13) {

            var p = this.parentNode;
            if (selector('li.selected', p).length > 0) {

                if (!events.hasClass(p, 'auto-submit')) { // auto submit

                    e.preventDefault();
                    e.stopPropagation();

                }

                if (events.hasClass(p, 'autocomplete-pull')) {
                    pullValuesFnc(this.value); // pull values
                }

            }

        }

    });

    events.on(document, 'focus', eventsTarget, function () {

        var p = this.parentNode;
        this.setAttribute('autocomplete', 'off');

        if (!events.hasClass(p, 'open')) {

            events.addClass(p, 'open');
            p.insertAdjacentHTML('beforeend', '<ul class="list-custom ease-dropdown open"></ul>');

        }

    });

    events.on(document, 'blur', eventsTarget, function () {

        var p, list;

        pullValues = [];
        readValues = [];

        p = this.parentNode;
        list = selector('ul', p);

        events.removeClass(p, 'open');
        if (list.length >= 1) { p.removeChild(list[0]); }

    });

    events.on(document, 'mousedown', '.text.autocomplete.open li', function () {

        var p = events.closest(this, '.autocomplete');
        selector('[type="text"]', p).value = this.textContent;

        if (events.hasClass(p, 'autocomplete-pull')) {
            pullValuesFnc(this.textContent); // pull values
        }

        if (events.hasClass(p, 'auto-submit')) {
            events.closest(this, 'form').submit(); // auto submit
        }

    });

}

/*!loader */
events.onload(function () {

    'use strict';
    autocompleteFnc();

});
