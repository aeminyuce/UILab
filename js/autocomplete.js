/*
 UI Autocomplete JS
 Requires UI JS
*/

ui.autocomplete = {

    classes : 'round shadow-lg',
    customLetters : { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" }

};

(function () {

    'use strict';
    /*globals window, document, ui, clearTimeout, setTimeout */

    ui.autocomplete.Start = function () {

        var
            customLowerCase,
            formEventListeners,
            autocompleteRequests  = [];

        // custom lowercase
        (function () {

            var k, re, chars, keys;
            keys = Object.keys(ui.autocomplete.customLetters); // returns array

            chars = '(([';
            for (k = 0; k < keys.length; k++) { chars += keys[k]; }
            chars += ']))';

            re = new RegExp(chars, 'g');

            customLowerCase = function (string) {

                string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
                    return ui.autocomplete.customLetters[l];
                });

                return string.toLowerCase();

            };

        }());

        // Event Listeners
        formEventListeners = ui.find('.text.autocomplete > [type="text"]');

        ui.on(document, 'keyup', formEventListeners, function (e) {

            var i, j, k, n, p, list, listItems, navSelected, navIndex, v, key, checkData, createDropdown, timerShowLines, offset, tHeight, dHeight, m, txt, getVal, src;

            p = this.parentNode;

            list = ui.find('ul', p);
            if (list[0] === undefined) { return; } // clear forms has triggering keyup event

            if (e.keyCode === 38 || e.keyCode === 40) {

                // navigate the list
                listItems = ui.find('li', list[0]);
                if (listItems.length > 0) {

                    navSelected = ui.find('li.selected', list[0]);
                    if (navSelected.length > 0) {

                        navIndex = Array.prototype.slice.call(listItems).indexOf(navSelected[0]);

                        if (e.keyCode === 40) { // arrow down

                            navIndex += 1;
                            if (navIndex >= listItems.length) { navIndex = 0; }

                        } else if (e.keyCode === 38) { // arrow up

                            navIndex -= 1;
                            if (navIndex < 0) { navIndex = 0; }

                        }

                    } else {

                        if (e.keyCode === 40) { // arrow down
                            navIndex = 0;

                        } else if (e.keyCode === 38) { // arrow up
                            navIndex = listItems.length - 1;
                        }

                    }

                    ui.removeClass(navSelected, 'selected');
                    ui.addClass(listItems[navIndex], 'selected');

                    this.value = listItems[navIndex].textContent;

                }

            } else if (e.keyCode === 13 || e.keyCode === 27) {

                if (list.length >= 1) {

                    ui.removeClass(p, 'open-ease');
                    setTimeout(function () {

                        ui.removeClass(p, 'open');
                        list[0].innerHTML = '';

                    }, ui.globals.ease);

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

                                    ui.addClass(list, ui.autocomplete.classes);

                                    offset = p.getBoundingClientRect();

                                    tHeight = p.offsetHeight;
                                    dHeight = list[0].offsetHeight;

                                    if (offset.top + parseInt(tHeight + dHeight, 10) >= window.innerHeight) {

                                        if (offset.top - parseInt(tHeight + dHeight, 10) + tHeight > 0) {
                                            ui.addClass(p, 'menu-t');

                                        } else {
                                            list[0].style.height = (dHeight - (offset.top + parseInt(tHeight + dHeight, 10) - window.innerHeight) - 15) + 'px';
                                        }

                                    }

                                }, 10);

                            };

                            k = 0;

                            ui.addClass(p, 'open');
                            setTimeout(function () { ui.addClass(p, 'open-ease'); }, 0);

                            ui.removeClass(p, 'menu-t');
                            list[0].innerHTML = '';

                            for (i = 0; i < response.length; i++) {

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

                                            for (j = 0; j < key.toString().length; j++) {

                                                if (j ===  key.toString().indexOf(m)) { txt += '<strong>'; }
                                                if (j === (key.toString().indexOf(m) + v.length)) { txt += '</strong>'; }

                                                txt += key.toString().charAt(j);

                                            }

                                        } else {

                                            for (j = 0; j < key.length; j++) {

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

                    getVal = p.getAttribute('data-ui-val');

                    if (getVal !== null && getVal !== '') {

                        src = p.getAttribute('data-ui-src');
                        if (src !== null && src !== '') {

                            // get json data with ajax
                            ui.ajax({

                                url : src + '?inputValue=' + v,
                                beforesend: function (xhr) {

                                    // abort still processing previous autocomplete requests
                                    for (n = 0; n < autocompleteRequests.length; n++) {

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

                    ui.removeClass(p, 'open-ease');
                    setTimeout(function () {

                        ui.removeClass(list, 'open');
                        list[0].innerHTML = '';

                    }, ui.globals.ease);

                }

            }

        });

        ui.on(document, 'keydown', formEventListeners, function (e) {

            if (e.keyCode === 13) {

                var p = this.parentNode;
                if (ui.find('li.selected', p).length > 0) {

                    ui.removeClass(p, 'open-ease');

                    setTimeout(function () {
                        ui.removeClass(p, 'open');
                    }, ui.globals.ease);

                    if (!ui.hasClass(p, 'auto-submit')) { // auto submit

                        e.preventDefault();
                        e.stopPropagation();

                    }

                }

            }

        });

        ui.on(document, 'focus', formEventListeners, function () {

            var p = this.parentNode;
            this.setAttribute('autocomplete', 'off');

            ui.addClass(p, 'open');
            ui.removeClass(p, 'menu-t');

            p.insertAdjacentHTML('beforeend', '<ul class="ease-autocomplete"></ul>');

        });

        ui.on(document, 'blur', formEventListeners, function () {

            var p, list;

            p = this.parentNode;
            list = ui.find('ul', p);

            ui.removeClass(p, 'open-ease');
            setTimeout(function () {

                ui.removeClass(p, 'open');
                if (list.length > 0) { p.removeChild(list[0]); }

            }, ui.globals.ease);

        });

        ui.on(document, 'mousedown', '.text.autocomplete.open li', function () {

            var p, target;

            p = ui.closest(this, '.autocomplete');
            target = ui.find('[type="text"]', p);

            target.value = this.textContent;
            ui.trigger(target, 'keyup'); // trigger defined event listeners after autocomplete selected

            if (ui.hasClass(p, 'auto-submit')) {
                ui.closest(this, 'form').submit(); // auto submit
            }

        });

    };

    // Loaders
    ui.onload(ui.autocomplete.Start);

}());