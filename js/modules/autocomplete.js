/*
 UI Autocomplete JS
 Requires UI Core JS
*/

ui.autocomplete = {

    // targets
    target: 'ui-autocomplete',

    // main classnames
    nameMenuTop: 'ui-autocomplete-t',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameLoaded: 'ui-loaded',
    nameSelected: 'ui-selected',

    // outer classnames
    nameRound: 'ui-round',
    nameInput: 'ui-input',

    // styling classnames
    stylesList : 'ui-shadow-lg ui-ease-autocomplete',

    // tags
    tagHighlight: 'b',

    // values
    scrollbarSize: 15,
    queryParameter: 'val',

    customLetters: {
                       "İ": "i",
                       "I": "ı",
                       "Ş": "ş",
                       "Ğ": "ğ",
                       "Ü": "ü",
                       "Ö": "ö",
                       "Ç": "ç"
                   },

    // data attributes
    dataSrc: 'data-ui-src',
    dataVal: 'data-ui-val'

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
        formEventListeners = ui.find('.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + ' > [type="text"]');

        ui.on(document,
            'keyup',

            formEventListeners,

            function (e) {

                var i, j, k, n, p, list, listItems, navSelected, navIndex, v, key, checkData, createDropdown, timerShowLines, offset, tHeight, dHeight, m, txt, getVal, src;

                p = this.parentNode;

                list = ui.find('ul', p);
                if (list[0] === undefined) { return; } // clear forms has triggering keyup event

                if (e.keyCode === 38 || e.keyCode === 40) {

                    // navigate the list
                    listItems = ui.find('li', list[0]);
                    if (listItems.length > 0) {

                        navSelected = ui.find('li.' + ui.autocomplete.nameSelected, list[0]);
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

                        ui.removeClass(navSelected, ui.autocomplete.nameSelected);
                        ui.addClass(listItems[navIndex], ui.autocomplete.nameSelected);

                        this.value = listItems[navIndex].textContent;

                    }

                } else if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === undefined) { // undefined: detect keyup trigger event when clicking!

                    if (list.length >= 1) {

                        ui.removeClass(p, ui.autocomplete.nameOpenEase);
                        setTimeout(function () {

                            ui.removeClass(p, ui.autocomplete.nameOpen);
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

                                        offset = p.getBoundingClientRect();

                                        tHeight = p.offsetHeight;
                                        dHeight = list[0].offsetHeight;

                                        if (offset.top + parseInt(tHeight + dHeight) >= window.innerHeight) {

                                            if (offset.top - parseInt(tHeight + dHeight) + tHeight > 0) {
                                                ui.addClass(p, ui.autocomplete.nameMenuTop);

                                            } else {
                                                list[0].style.height = (dHeight - (offset.top + parseInt(tHeight + dHeight) - window.innerHeight) - ui.autocomplete.scrollbarSize) + 'px';
                                            }

                                        }

                                    }, 10);

                                };

                                k = 0;

                                ui.addClass(p, ui.autocomplete.nameOpen);

                                setTimeout(function () {
                                    ui.addClass(p, ui.autocomplete.nameOpenEase);
                                }, 0);

                                ui.removeClass(p, ui.autocomplete.nameMenuTop);
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

                                                    if (j ===  key.toString().indexOf(m)) { txt += '<' + ui.autocomplete.tagHighlight + '>'; }
                                                    if (j === (key.toString().indexOf(m) + v.length)) { txt += '</' + ui.autocomplete.tagHighlight + '>'; }

                                                    txt += key.toString().charAt(j);

                                                }

                                            } else {

                                                for (j = 0; j < key.length; j++) {

                                                    if (j === customLowerCase(key).indexOf(m)) { txt += '<' + ui.autocomplete.tagHighlight + '>'; }
                                                    if (j === (customLowerCase(key).indexOf(m) + v.length)) { txt += '</' + ui.autocomplete.tagHighlight + '>'; }

                                                    txt += key.charAt(j);

                                                }

                                            }

                                            list[0].insertAdjacentHTML(
                                                'beforeend',
                                                '<li>' + txt + '</li>'
                                            );

                                        }

                                    }
                                }

                            }

                            response = '';

                        };

                        getVal = p.getAttribute(ui.autocomplete.dataVal);

                        if (getVal !== null && getVal !== '') {

                            src = p.getAttribute(ui.autocomplete.dataSrc);
                            if (src !== null && src !== '') {

                                // get json data with ajax
                                ui.ajax({

                                    url : src + '?' + ui.autocomplete.queryParameter + '=' + v,
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

                        ui.removeClass(p, ui.autocomplete.nameOpenEase);

                        setTimeout(function () {

                            ui.removeClass(list, ui.autocomplete.nameOpen);
                            list[0].innerHTML = '';

                        }, ui.globals.ease);

                    }

                }

            });

        ui.on(document,
            'keydown',

            formEventListeners,

            function (e) { // prevent form submitting when selecting from list with enter

                if (e.keyCode === 13) {

                    var p, list;

                    p = this.parentNode;
                    list = ui.find('li.' + ui.autocomplete.nameSelected, p);

                    if (list.length > 0) {

                        e.preventDefault();
                        e.stopPropagation();

                        ui.removeClass(p, ui.autocomplete.nameOpenEase);

                        setTimeout(function () {
                            ui.removeClass(p, ui.autocomplete.nameOpen);

                        }, ui.globals.ease);

                    }

                }

            });

        ui.on(document,
            'focus',

            formEventListeners,

            function () {

                var p, styles;

                p = this.parentNode;

                this.setAttribute('autocomplete', 'off');

                ui.addClass(p, ui.autocomplete.nameOpen);
                ui.removeClass(p, ui.autocomplete.nameMenuTop);

                styles = ui.autocomplete.stylesList;

                if (ui.hasClass(p, ui.autocomplete.nameRound)) {
                    styles += ' ' + ui.autocomplete.nameRound;
                }

                p.insertAdjacentHTML(
                    'beforeend',
                    '<ul class="' + styles + '"></ul>'
                );

            });

        ui.on(document,
            'blur',

            formEventListeners,

            function () {

                var p, list;

                p = this.parentNode;
                list = ui.find('ul', p);

                ui.removeClass(p, ui.autocomplete.nameOpenEase);
                setTimeout(function () {

                    ui.removeClass(p, ui.autocomplete.nameOpen);

                    if (list.length > 0) {
                        p.removeChild(list[0]);
                    }

                }, ui.globals.ease);

            });

        ui.on(document,
            'mousedown',

            '.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + '.' + ui.autocomplete.nameOpen + ' li',

            function () { // trigger defined event listeners after autocomplete selected

                var p, target;

                p = ui.closest(this, '.' + ui.autocomplete.target);
                target = ui.find('[type="text"]', p);

                target.value = this.textContent;
                ui.trigger(target, 'keyup');

            });

    };

    // Loaders
    ui.onload(ui.autocomplete.Start);

}());