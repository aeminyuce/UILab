/*
 Autocomplete JS
 Autocomplete JS requires Events JS, Ajax JS
*/

/*globals window, document, selector, events, ajax, clearTimeout, setTimeout */
var autocomplete = {

    classes : 'shadow-lg',
    customLetters : { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" }

};

function autocompleteFnc() {

    'use strict';
    var eventsTarget, pullValues;

    pullValues = [];
    window.autocompetePool = [];

    // pull values
    function pullValuesFnc(selectedVal) {

        var input, type, readValues = [], forend = false, i = 0, j = 0;

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

        var k, re, chars = '(([', keys = Object.keys(autocomplete.customLetters);

        for (k = 0; k < keys.length; k += 1) {
            chars += keys[k];
        }

        chars += ']))';
        re = new RegExp(chars, 'g');

        String.prototype.customLowerCase = function () {

            var string = this;

            string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
                return autocomplete.customLetters[l];
            });

            return string.toLowerCase();

        };

    }());

    // Events
    eventsTarget = selector('.text.autocomplete > [type="text"]');

    events.on(document, 'keyup', eventsTarget, function (e) {

        var p, list, navEl, navElNext, v, vID, showLines, timerShowLines, offset, offsetTop, screenH, tHeight, dHeight, j, m, i, txt, getKeys, k, isGetVal, getVal, timerGetKeys, src, dataId, dataClass, send, input, type, dataName, dataID, n;

        p = this.parentNode;
        list = selector('ul', p);

        if (p.getAttribute('data-src') !== null) {

            if (e.keyCode === 38 || e.keyCode === 40) {

                // navigate the list
                if (selector('li', list).length > 0) {

                    navEl = selector('li.selected', list);
                    if (navEl.length > 0) {

                        if (e.keyCode === 38) {

                            // arrow up
                            navElNext = navEl[0].previousElementSibling;

                            if (navElNext.length > 0) {
                                events.addClass(navElNext, 'selected');

                            } else { return; }

                        } else if (e.keyCode === 40) {

                            // arrow down
                            navElNext = navEl[0].nextElementSibling;

                            if (navElNext.length > 0) {
                                events.addClass(navElNext, 'selected');

                            } else { return; }

                        }

                        events.removeClass(navEl, 'selected');

                    } else {

                        if (e.keyCode === 40) {
                            events.addClass(selector('li', list)[0], 'selected'); // arrow down
                        }

                    }

                    this.value = selector('li.selected', list)[0].textContent;
                }

            } else if (e.keyCode === 13) {
                list.innerHTml = '';

            } else if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {

                v = this.value;

                v = v.customLowerCase();
                v = v.replace(/\s+$/g, ''); // remove the last space

                vID = this.getAttribute('id');

                if (v !== '') {

                    showLines = function (value) {

                        function createDropdown() {

                            // calculate the dropdown position
                            clearTimeout(timerShowLines);
                            timerShowLines = setTimeout(function () {

                                offset = p.getBoundingClientRect();
                                offsetTop = (offset.top - window.scrollTop());

                                events.removeClass(p, 'submenu-top');

                                screenH = selector(document)[0].offsetHeight;

                                tHeight = p.offsetHeight;
                                dHeight = list[0].offsetHeight;

                                if (offsetTop + parseInt(tHeight + dHeight, 10) >= screenH) {

                                    if (offsetTop - parseInt(tHeight + dHeight, 10) + tHeight > 0) {
                                        events.addClass(p, 'submenu-top');

                                    } else {
                                        list.style.height = (dHeight - (offsetTop + parseInt(tHeight + dHeight, 10) - screenH) - 15) + 'px';
                                    }

                                }

                            }, 10);

                            // show max. number of lines: 5
                            j += 1;
                            if (j > 5) { return; }

                        }

                        if (typeof value === 'boolean') { return; } // booleans not supported!
                        m = value;

                        if (typeof value === 'number') {

                            m = m.toString().match(v, 'g');
                            if (m !== null) {

                                createDropdown();

                                // create lines
                                txt = '';
                                for (i = 0; i < value.toString().length; i += 1) {

                                    if (i ===  value.toString().indexOf(m)) { txt += '<strong>'; }
                                    if (i === (value.toString().indexOf(m) + v.length)) { txt += '</strong>'; }

                                    txt += value.toString().charAt(i);
                                }

                                list[0].insertAdjacentHTML('afterbegin', '<li>' + txt + '</li>');

                            }

                        } else {

                            m = m.customLowerCase().match(v, 'g');
                            if (m !== null) {

                                createDropdown();

                                // create lines
                                txt = '';
                                for (i = 0; i < value.length; i += 1) {

                                    if (i ===  value.customLowerCase().indexOf(m)) { txt += '<strong>'; }
                                    if (i === (value.customLowerCase().indexOf(m) + v.length)) { txt += '</strong>'; }

                                    txt += value.charAt(i);
                                }

                                list[0].insertAdjacentHTML('afterbegin', '<li>' + txt + '</li>');

                            }
                        }

                    };

                    getKeys = function (key, value) {

                        if (isGetVal) {

                            // get user defined key value
                            if (key === getVal) {

                                k += 1;
                                showLines(value);

                            }

                            clearTimeout(timerGetKeys);
                            timerGetKeys = setTimeout(function () {

                                // detect the source have the value of "data-val" attribute
                                if (k === 0) {
                                    throw new Error('Autocomplete Alert: Source not have the value of "data-val" attribute!');
                                }

                            }, 10);

                        } else {

                            // get all key values
                            showLines(value);

                        }

                        events.addClass(selector('ul', p), autocomplete.classes);

                    };

                    j = 0;
                    k = 0;

                    src = p.getAttribute('data-src');
                    if (src !== null) {

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

                                list.innerHTML = '';
                                response = JSON.parse(response);

                                if (response.length === 'undefined') {

                                    // is single object
                                    for (i = 0; i < response.length; i += 1) {

                                        for (j = 0; j < response[i].length; j += 1) {
                                            getKeys(response[i], response[i][j]);
                                        }

                                    }

                                } else {

                                    // is object group
                                    for (i = 0; i < response.length; i += 1) {

                                        for (j = 0; j < response[i].length; j += 1) {
                                            getKeys(response[i], response[i][j]);
                                        }

                                    }

                                }

                                if (events.hasClass(p, 'autocomplete-pull')) {
                                    pullValues = response; // pull values
                                }

                            } else { // ajax fail
                                throw new Error('Autocomplete Alert: Source is not in correct JSON format or not loaded!');
                            }

                        });

                    } else { return; }

                    isGetVal = p.getAttribute('data-val');
                    if (isGetVal) {

                        getVal = p.getAttribute('data-val');
                        if (getVal === '') {
                            throw new Error('Autocomplete Alert: Your "data-val" attribute is empty!');
                        }

                    }

                } else { list.innerHTML = ''; }

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

        } else if (e.keyCode === 27) {
            events.trigger(this, 'blur');
        }

    });

    events.on(document, 'focus', eventsTarget, function () {

        var p = this.parentNode;
        this.setAttribute('autocomplete', 'off');

        if (!events.hasClass(p, 'open')) {

            events.addClass(p, 'open');
            p.insertAdjacentHTML('afterbegin', '<ul class="list-custom ease-dropdown"></ul>');

        }

    });

    events.on(document, 'blur', eventsTarget, function () {

        var p = this.parentNode;
        pullValues = [];

        events.removeClass(p, 'open');
        p.removeChild(selector('ul', p));

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
