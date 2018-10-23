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
    var customLowerCase, pullValues, formEvents;

    pullValues = [];
    window.autocompetePool = [];

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

    // pull values
    function pullValuesFnc(key, value) {

        var forms, type, getKey, getValue, i, j;

        if (pullValues.length !== 'undefined') {

            for (i = 0; i < pullValues.length; i += 1) {

                if (pullValues[i][key] === value) {

                    getKey = Object.keys(pullValues[i]); // returns array
                    getKey.splice(getKey.indexOf(key), 1);

                    for (j = 0; j < getKey.length; j += 1) {

                        getValue = pullValues[i][getKey[j]];
                        forms = selector('[data-pull="' + getKey[j] + '"]');

                        if (forms.length > 0) {

                            type = forms[0].getAttribute('type');

                            if (type === 'checkbox' || type === 'radio') {
                                forms[0].checked = getValue;

                            } else {
                                forms[0].value = getValue;
                            }

                        }

                    }

                }

            }

        }

    }

    // Events
    formEvents = selector('.text.autocomplete > [type="text"]');

    events.on(document, 'keyup', formEvents, function (e) {

        var i, j, k, n, p, list, listItems, navSelected, navIndex, v, formId, key, createDropdown, timerShowLines, offset, tHeight, dHeight, m, txt, getVal, src, dataId, dataClass, send, input, type;

        p = this.parentNode;
        list = selector('ul', p);

        if (p.getAttribute('data-src') !== null) {

            if (e.keyCode === 38 || e.keyCode === 40) {

                // navigate the list
                listItems = selector('li', list[0]);
                if (listItems.length > 0) {

                    navSelected = selector('li.selected', list[0]);
                    if (navSelected.length > 0) {

                        navIndex = Array.prototype.slice.call(listItems).indexOf(navSelected[0]);

                        if (e.keyCode === 40) { // arrow down

                            navIndex += 1;
                            if (navIndex >= listItems.length) { navIndex = 0; }

                        } else if (e.keyCode === 38) { // arrow up

                            navIndex -= 1;
                            if (navIndex < 0) { navIndex = 0; }

                        }

                    } else if (e.keyCode === 40) { // arrow down
                        navIndex = 0;
                    }

                    events.removeClass(navSelected, 'selected');
                    events.addClass(listItems[navIndex], 'selected');

                    this.value = listItems[navIndex].textContent;

                }

            } else if (e.keyCode === 13 || e.keyCode === 27) {

                if (list.length >= 1) {

                    events.removeClass(p, 'open');
                    list[0].innerHTML = '';
                }

            } else if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {

                v = this.value;

                v = customLowerCase(v);
                v = v.replace(/\s+$/g, ''); // remove the last space

                if (v !== '') {

                    src = p.getAttribute('data-src');
                    getVal = p.getAttribute('data-val');

                    if (src !== null && src !== '' && getVal !== null && getVal !== '') {

                        // sending source id with value
                        formId = this.getAttribute('id');

                        if (formId !== null && formId !== '') {
                            send = 'valueId=' + formId + '&value=' + v;

                        } else {
                            send = 'value=' + v;
                        }

                        // sending target id with value
                        dataId = p.getAttribute('data-id');
                        if (dataId !== null && dataId !== '') {

                            input = selector('#' + dataId)[0];
                            type = input.getAttribute('type');

                            if (type === 'checkbox' || type === 'radio') {
                                send += '&' + dataId + '=' + input.checked;

                            } else {
                                send += '&' + dataId + '=' + input.value;
                            }

                        }

                        // sending target class names with value
                        dataClass = p.getAttribute('data-class');
                        if (dataClass !== null && dataClass !== '') {

                            events.each('.' + dataClass, function () {

                                var formType, name, id;

                                input = selector('input,select,textarea', this)[0];

                                formType = input.getAttribute('type');
                                id = input.getAttribute('id');
                                name = input.getAttribute('name');

                                if (name === null || name === '') {

                                    if (formType === 'checkbox' || formType === 'radio') {
                                        send += '&' + id + '=' + input.checked;

                                    } else {
                                        send += '&' + id + '=' + input.value;
                                    }

                                } else if (id === null || id === '') {

                                    if (formType === 'checkbox' || formType === 'radio') {
                                        send += '&' + name + '=' + input.checked;

                                    } else {
                                        send += '&' + name + '=' + input.value;
                                    }

                                } else {

                                    if (formType === 'checkbox' || formType === 'radio') {
                                        send += '&' + name + '[val]=' + input.checked + '&' + name + '[id]=' + id;

                                    } else {
                                        send += '&' + name + '[val]=' + input.value + '&' + name + '[id]=' + id;
                                    }

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

                                            tHeight = p.offsetHeight;
                                            dHeight = list[0].offsetHeight;

                                            if (offset.top + parseInt(tHeight + dHeight, 10) >= window.innerHeight) {

                                                if (offset.top - parseInt(tHeight + dHeight, 10) + tHeight > 0) {
                                                    events.addClass(p, 'submenu-top');

                                                } else {
                                                    list[0].style.height = (dHeight - (offset.top + parseInt(tHeight + dHeight, 10) - window.innerHeight) - 15) + 'px';
                                                }

                                            }

                                        }, 10);

                                    };

                                    k = 0;

                                    events.addClass(p, 'open');
                                    events.removeClass(p, 'submenu-top');

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

                } else {

                    events.removeClass(list, 'open');
                    list[0].innerHTML = '';

                }

            }

        }

    });

    events.on(document, 'keydown', formEvents, function (e) {

        if (e.keyCode === 13) {

            var p, key;

            p = this.parentNode;
            if (selector('li.selected', p).length > 0) {

                events.removeClass(p, 'open');

                if (!events.hasClass(p, 'auto-submit')) { // auto submit

                    e.preventDefault();
                    e.stopPropagation();

                }

                if (events.hasClass(p, 'autocomplete-pull')) {

                    key = p.getAttribute('data-val');

                    if (key !== null && key !== '') {
                        pullValuesFnc(key, this.value); // pull values
                    }

                }

            }

        }

    });

    events.on(document, 'focus', formEvents, function () {

        var p = this.parentNode;
        this.setAttribute('autocomplete', 'off');

        events.addClass(p, 'open');
        events.removeClass(p, 'submenu-top');

        p.insertAdjacentHTML('beforeend', '<ul class="ease-autocomplete"></ul>');

    });

    events.on(document, 'blur', formEvents, function () {

        var p, list;
        pullValues = [];

        p = this.parentNode;
        list = selector('ul', p);

        events.removeClass(p, 'open');
        if (list.length > 0) { p.removeChild(list[0]); }

    });

    events.on(document, 'mousedown', '.text.autocomplete.open li', function () {

        var p, key;

        p = events.closest(this, '.autocomplete');
        selector('[type="text"]', p).value = this.textContent;

        if (events.hasClass(p, 'auto-submit')) {
            events.closest(this, 'form').submit(); // auto submit
        }

        if (events.hasClass(p, 'autocomplete-pull')) {

            key = p[0].getAttribute('data-val');

            if (key !== null && key !== '') {
                pullValuesFnc(key, this.textContent); // pull values
            }

        }

    });

}

/*!loader */
events.onload(function () {

    'use strict';
    autocompleteFnc();

});
