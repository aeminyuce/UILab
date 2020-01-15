/*
 Autocomplete JS
 Autocomplete JS requires Selector Js, Events JS, Ajax JS
*/
var autocomplete = {

    classes : 'round shadow-lg',
    customLetters : { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" }

};

(function () {

    'use strict';
    /*globals window, document, selector, events, ajax, clearTimeout, setTimeout */

    autocomplete.Start = function () {

        var
            customLowerCase,
            formEvents,
            autocompleteRequests  = [];

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
        formEvents = selector('.text.autocomplete > [type="text"]');

        events.on(document, 'keyup', formEvents, function (e) {

            var i, j, k, n, p, list, listItems, navSelected, navIndex, v, key, checkData, createDropdown, timerShowLines, offset, tHeight, dHeight, m, txt, getVal, src;

            p = this.parentNode;

            list = selector('ul', p);
            if (list[0] === undefined) { return; } // clear forms has triggering keyup event

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

                    } else { return; }

                    events.removeClass(navSelected, 'selected');
                    events.addClass(listItems[navIndex], 'selected');

                    this.value = listItems[navIndex].textContent;

                }

            } else if (e.keyCode === 13 || e.keyCode === 27) {

                if (list.length >= 1) {

                    events.removeClass(p, 'open-ease');
                    setTimeout(function () {

                        events.removeClass(p, 'open');
                        list[0].innerHTML = '';

                    }, 150);

                }

            } else if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {

                v = this.value;

                v = customLowerCase(v);
                v = v.replace(/\s+$/g, ''); // remove the last space

                if (v !== '') {

                    checkData = function (response) {

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
                                            events.addClass(p, 'menu-t');

                                        } else {
                                            list[0].style.height = (dHeight - (offset.top + parseInt(tHeight + dHeight, 10) - window.innerHeight) - 15) + 'px';
                                        }

                                    }

                                }, 10);

                            };

                            k = 0;

                            events.addClass(p, 'open');
                            setTimeout(function () { events.addClass(p, 'open-ease'); }, 0);

                            events.removeClass(p, 'menu-t');
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

                        }

                        response = '';

                    };

                    getVal = p.getAttribute('data-val');

                    if (getVal !== null && getVal !== '') {

                        src = p.getAttribute('data-src');
                        if (src !== null && src !== '') {

                            // get json data with ajax
                            ajax({
                                url : src,
                                beforesend: function (xhr) {

                                    // abort still processing previous autocomplete requests
                                    for (n = 0; n < autocompleteRequests.length; n += 1) {

                                        autocompleteRequests[n].abort();
                                        autocompleteRequests.splice(n, 1);

                                    }

                                    autocompleteRequests.push(xhr);

                                },
                                callback: function (status, response) {

                                    if (status === 'success') {
                                        checkData(response);
                                    }

                                }
                            });

                        }


                    } else { return; }

                } else {

                    events.removeClass(p, 'open-ease');
                    setTimeout(function () {

                        events.removeClass(list, 'open');
                        list[0].innerHTML = '';

                    }, 150);

                }

            }

        });

        events.on(document, 'keydown', formEvents, function (e) {

            if (e.keyCode === 13) {

                var p = this.parentNode;
                if (selector('li.selected', p).length > 0) {

                    events.removeClass(p, 'open-ease');
                    setTimeout(function () { events.removeClass(p, 'open'); }, 150);

                    if (!events.hasClass(p, 'auto-submit')) { // auto submit

                        e.preventDefault();
                        e.stopPropagation();

                    }

                }

            }

        });

        events.on(document, 'focus', formEvents, function () {

            var p = this.parentNode;
            this.setAttribute('autocomplete', 'off');

            events.addClass(p, 'open');
            events.removeClass(p, 'menu-t');

            p.insertAdjacentHTML('beforeend', '<ul class="ease-autocomplete"></ul>');

        });

        events.on(document, 'blur', formEvents, function () {

            var p, list;

            p = this.parentNode;
            list = selector('ul', p);

            events.removeClass(p, 'open-ease');
            setTimeout(function () {

                events.removeClass(p, 'open');
                if (list.length > 0) { p.removeChild(list[0]); }

            }, 150);

        });

        events.on(document, 'mousedown', '.text.autocomplete.open li', function () {

            var p = events.closest(this, '.autocomplete');
            selector('[type="text"]', p).value = this.textContent;

            if (events.hasClass(p, 'auto-submit')) {
                events.closest(this, 'form').submit(); // auto submit
            }

        });

    };

    // Loaders
    events.onload(autocomplete.Start);

}());
