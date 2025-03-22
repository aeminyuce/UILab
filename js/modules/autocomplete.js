/* autocomplete */

import { ui } from './../core/globals.js';
export default () => ui;

ui.autocomplete = {

    // targets
    target: 'ui-autocomplete',

    // main classnames
    nameMenuTop: 'ui-autocomplete-t',

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
    customLetters: {"İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç"},

    // data attributes
    dataSrc: 'data-ui-src',
    dataVal: 'data-ui-val'

};

ui.autocomplete.Start = () => {

    const customLowerCase = function (string) { // custom lowercase

        const keys = Object.keys(ui.autocomplete.customLetters); // returns array

        let chars = '(([';
        for (let i = 0; i < keys.length; i++) chars += keys[i];
        chars += ']))';

        const re = new RegExp(chars, 'g');

        string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, (l) => ui.autocomplete.customLetters[l]);
        return string.toLowerCase();

    };

    // create autocomplete lists
    function createFnc(that) {

        ui.addClass(that, ui.globals.nameLoaded);
        let styles = ui.autocomplete.stylesList;

        const input = ui.find('input', that)[0];
        input.setAttribute('autocomplete', 'off');

        if (ui.hasClass(that, ui.autocomplete.nameRound)) {
            styles += ' ' + ui.autocomplete.nameRound;
        }

        that.insertAdjacentHTML(
            'beforeend',
            '<ul class="' + styles + '"></ul>'
        );

    }

    // ckeck not loaded autocomplete forms
    const loadForms = ui.find('.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + ':not(.' + ui.globals.nameLoaded + ')');

    if (loadForms.length > 0) {
        Array.prototype.forEach.call(loadForms, el => { createFnc(el); });
    }

    // Event Listeners
    const formEventListeners = ui.find('.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + ' > [type="text"]');

    ui.on(document,
        'keyup',

        formEventListeners,

        function (e) {

            let timerShowLines;
            const parent = this.parentNode;

            const list = ui.find('ul', parent);
            if (list[0] === undefined) return; // clear forms has triggering keyup event

            if (e.keyCode === 38 || e.keyCode === 40) {

                // navigate the list
                const listItems = ui.find('li', list[0]);
                if (listItems.length > 0) {

                    let navIndex;
                    const navSelected = ui.find('li.' + ui.globals.nameSelected, list[0]);

                    if (navSelected.length > 0) {

                        navIndex = Array.prototype.slice.call(listItems).indexOf(navSelected[0]);

                        if (e.keyCode === 40) { // arrow down

                            navIndex += 1;
                            if (navIndex >= listItems.length) navIndex = 0;

                        } else if (e.keyCode === 38) { // arrow up

                            navIndex -= 1;
                            if (navIndex < 0) navIndex = 0;

                        }

                    } else {

                        if (e.keyCode === 40) navIndex = 0;// arrow down
                        else if (e.keyCode === 38) navIndex = listItems.length - 1; // arrow up

                    }

                    ui.removeClass(navSelected, ui.globals.nameSelected);
                    ui.addClass(listItems[navIndex], ui.globals.nameSelected);

                    this.value = listItems[navIndex].textContent;

                }

            } else if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === undefined) { // undefined: detect keyup trigger event when clicking!

                if (list.length >= 1) {

                    ui.removeClass(parent, ui.globals.nameOpenEase);
                    setTimeout(() => {

                        ui.removeClass(parent, ui.globals.nameOpen);
                        list[0].innerHTML = '';

                    }, ui.globals.ease);

                }

            } else if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {

                let val = this.value;

                val = customLowerCase(val);
                val = val.replace(/\s+$/g, ''); // remove the last space

                if (val !== '') {

                    // create list
                    const createList = (response) => {

                        if (response.length > 0) {

                            ui.addClass(parent, ui.globals.nameOpen);

                            setTimeout(() => {
                                ui.addClass(parent, ui.globals.nameOpenEase);
                            }, 0);

                            ui.removeClass(parent, ui.globals.nameMenuTop);
                            list[0].innerHTML = '';

                            let k = 0;

                            Array.prototype.forEach.call(response,

                                item => {

                                    let txt = '';

                                    if (item !== null) {

                                        if (typeof item === 'boolean') return; // booleans not supported!

                                        let modified = item;

                                        if (typeof item === 'number') {
                                            modified = modified.toString().match(val, 'g');

                                        } else {

                                            modified = customLowerCase(modified);
                                            modified = modified.match(val, 'g');

                                        }

                                        if (modified !== null) {

                                            clearTimeout(timerShowLines);
                                            timerShowLines = setTimeout(() => { // create dropdown

                                            const offset = parent.getBoundingClientRect();

                                            const tHeight = parent.offsetHeight;
                                            const dHeight = list[0].offsetHeight;

                                                if (offset.top + parseInt(tHeight + dHeight) >= window.innerHeight) {

                                                    if (offset.top - parseInt(tHeight + dHeight) + tHeight > 0) {
                                                        ui.addClass(parent, ui.autocomplete.nameMenuTop);

                                                    } else list[0].style.height = (dHeight - (offset.top + parseInt(tHeight + dHeight) - window.innerHeight) - ui.autocomplete.scrollbarSize) + 'px';

                                                }

                                            }, 10);

                                            // show max. number of lines: 5
                                            k += 1;
                                            if (k > 5) return;

                                            // create lines
                                            if (typeof item === 'number') {

                                                for (let i = 0; i < item.toString().length; i++) {

                                                    if (i === item.toString().indexOf(modified)) { txt += '<' + ui.autocomplete.tagHighlight + '>'; }
                                                    if (i === (item.toString().indexOf(modified) + val.length)) { txt += '</' + ui.autocomplete.tagHighlight + '>'; }

                                                    txt += item.toString().charAt(i);

                                                }

                                            } else {

                                                for (let j = 0; j < item.length; j++) {

                                                    if (j === customLowerCase(item).indexOf(modified)) { txt += '<' + ui.autocomplete.tagHighlight + '>'; }
                                                    if (j === (customLowerCase(item).indexOf(modified) + val.length)) { txt += '</' + ui.autocomplete.tagHighlight + '>'; }

                                                    txt += item.charAt(j);

                                                }

                                            }

                                            list[0].insertAdjacentHTML(
                                                'beforeend',
                                                '<li>' + txt + '</li>'
                                            );

                                        }

                                    }

                                });

                        }

                        response = '';

                    }

                    // load html datalist options
                    const datalist = ui.find('datalist', parent)[0];
                    if (datalist) {

                        const options = [];

                        Array.prototype.forEach.call(ui.find('option', datalist),

                            item => {
                                options.push(item.textContent);
                            });

                        createList(options);

                    } else return;

                } else {

                    ui.removeClass(parent, ui.globals.nameOpenEase);

                    setTimeout(() => {

                        ui.removeClass(list, ui.globals.nameOpen);
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

                const parent = this.parentNode;
                const list = ui.find('li.' + ui.globals.nameSelected, parent);

                if (list.length > 0) {

                    e.preventDefault();
                    e.stopPropagation();

                    ui.removeClass(parent, ui.globals.nameOpenEase);

                    setTimeout(() => {
                        ui.removeClass(parent, ui.globals.nameOpen);
                    }, ui.globals.ease);

                }

            }

        });

    ui.on(document,
        'focus',

        formEventListeners,

        function () {

            const parent = this.parentNode;
            const list = ui.find('ul', parent);

            if (list.length >= 1) {

                ui.addClass(parent, ui.globals.nameOpen);

                setTimeout(() => {
                    ui.addClass(parent, ui.globals.nameOpenEase);
                }, ui.globals.ease);

            }

        });

    ui.on(document,
        'blur',

        formEventListeners,

        function () {

            const parent = this.parentNode;
            ui.removeClass(parent, ui.globals.nameOpenEase);

            setTimeout(() => {
                ui.removeClass(parent, ui.globals.nameOpen);
            }, ui.globals.ease);

        });

    ui.on(document,
        'mousedown',

        '.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + '.' + ui.globals.nameOpen + ' li',

        function () { // trigger defined event listeners after autocomplete selected

            const parent = ui.closest(this, '.' + ui.autocomplete.target);
            const target = ui.find('[type="text"]', parent);

            target.value = this.textContent;
            ui.trigger(target, 'keyup');

        });

};

// loaders
ui.onload(ui.autocomplete.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {
        if (ui.ajax.classNames.indexOf(ui.autocomplete.target) > -1) ui.autocomplete.Start();
    });