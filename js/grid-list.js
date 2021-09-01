/*
 UI Grid List JS
 Requires UI JS
*/

ui.gridList = {

    valueSplit : '|',

    sortIcon : 'sort-fill',
    ascIcon : 'sort-up-fill',
    descIcon : 'sort-down-fill',

    prevIcon : 'angle-left',
    nextIcon : 'angle-right',

    customLetters : { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" }

};

(function () {

    'use strict';
    /*globals window, document, ui, sessionStorage, performance */

    var
        testStorage = true,
        startListID = 0,

        loadedVals = [],
        showCount = [],
        pagingCount = [],

        customLowerCase,
        temp = document.createDocumentFragment();

    // test for storage is supported?
    try {
        sessionStorage.setItem('ui-gridList-test', 0);

    } catch (e) {
        testStorage = false;
    }

    // custom lowercase
    (function () {

        var k, re, chars, keys;
        keys = Object.keys(ui.gridList.customLetters); // returns array

        chars = '(([';
        for (k = 0; k < keys.length; k++) { chars += keys[k]; }
        chars += ']))';

        re = new RegExp(chars, 'g');

        customLowerCase = function (string) {

            string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
                return ui.gridList.customLetters[l];
            });

            return string.toLowerCase();

        };

    }());

    // create paging
    function createPaging(paging, id, listLength) {

        var defaultClass, activeClass, classes, re, rex, html, total, i, min, max;

        re = new RegExp('\\s+\\s');
        rex = new RegExp('\\s+$');

        defaultClass = paging[0].getAttribute('data-ui-default');
        if (defaultClass === null) { defaultClass = ''; }

        activeClass = paging[0].getAttribute('data-ui-active');
        if (activeClass === null) { activeClass = ''; }

        if (showCount[id] === undefined || showCount[id] === 0) {
            total = 1;

        } else {

            total = Math.ceil(listLength / showCount[id]);
            if (total < 1) { total = 1; }

        }

        if (pagingCount[id] < 1) { pagingCount[id] = 1; }
        if (pagingCount[id] > total) { pagingCount[id] = total; }

        if (pagingCount[id] === total) {
            min = pagingCount[id] - 2;

        } else {
            min = pagingCount[id] - 1;
        }

        if (min < 1) { min = 1; }

        if (pagingCount[id] === 1) {
            max = pagingCount[id] + 2;

        } else {
            max = pagingCount[id] + 1;
        }

        if (max > total) { max = total; }

        classes = 'prev ' + defaultClass;
        if (pagingCount[id] === 1) { classes += ' btn-passive'; }

        classes = classes.replace(re, ' ').replace(rex, '');
        html = '<button class="' + classes + '">' +
                '<svg class="icon"><use href="#' + ui.gridList.prevIcon + '"/></svg>' +
            '</button>\n';

        for (i = min; i <= max; i++) {

            if (i === pagingCount[id]) {

                classes = 'btn-active ' + defaultClass + ' ' + activeClass;
                classes = classes.replace(re, ' ').replace(rex, '');

                html += '<button class="' + classes + '">' + pagingCount[id] + '</button>\n';

            } else {
                html += '<button class="' + defaultClass + '">' + i + '</button>\n';
            }

        }

        classes = 'next ' + defaultClass;
        if (pagingCount[id] === total) { classes += ' btn-passive'; }

        classes = classes.replace(re, ' ').replace(rex, '');
        html += '<button class="' + classes + '">' +
                '<svg class="icon"><use href="#' + ui.gridList.nextIcon + '"/></svg>' +
            '</button>\n';

        paging[0].innerHTML = '';
        paging[0].insertAdjacentHTML('beforeend', html);

        // set paging to storage
        if (testStorage && sessionStorage !== undefined) {
            sessionStorage.setItem('ui-gridList-' + id + '-paging', pagingCount[id]);
        }

        // empty variables
        classes = '';
        html = '';

    }

    // grid loader
    function loadGrid(that, id) {

        var i, list, paging, gridTotal, isEven, gridStriped;

        if (ui.hasClass(that, 'grid-filtered')) {
            list = ui.find('.grid-content.filtered', that);

        } else {
            list = ui.find('.grid-content', that);
        }

        // paging
        paging = ui.find('.grid-paging', that);
        if (paging.length > 0) {

            if (pagingCount[id] === undefined || pagingCount[id] === 0) {

                pagingCount[id] = 1; // paging available
                createPaging(paging, id, list.length); // create paging buttons

            } else {
                createPaging(paging, id, list.length); // update paging buttons
            }

        } else {

            pagingCount[id] = 0; // paging not available
            ui.addClass(that, 'grid-show-all');

        }

        // total grids
        gridTotal = ui.find('.grid-total', that);

        if (gridTotal.length > 0) {
            gridTotal[0].textContent = list.length;
        }

        // define even elements and visible grids
        isEven = false;
        gridStriped = ui.hasClass(that, 'grid-striped');

        ui.removeClass(ui.find('.grid-content.show', that), 'show');

        function evenList(t) {

            if (gridStriped) {

                if (isEven) {

                    ui.addClass(t, 'even');
                    isEven = false;

                } else {

                    ui.removeClass(t, 'even');
                    isEven = true;

                }

            }

            ui.addClass(t, 'show');

        }

        if (showCount[id] > 0 && pagingCount[id] > 0) {

            for (i = (pagingCount[id] - 1) * showCount[id]; i < pagingCount[id] * showCount[id]; i++) {
                evenList(list[i]);
            }

        } else {

            for (i = 0; i < list.length; i++) {
                evenList(list[i]);
            }

        }

        // empty variables
        list = '';

    }

    // Event Listeners
    // grid-paging
    ui.on(document, 'click', '.grid-list .grid-paging button', function () {

        var that, id;

        that = ui.closest(this, '.grid-list')[0];
        id = that.getAttribute('data-ui-id');

        if (ui.hasClass(this, 'next')) {
            pagingCount[id] += 1;

        } else if (ui.hasClass(this, 'prev')) {
            pagingCount[id] -= 1;

        } else {
            pagingCount[id] = Number(this.textContent);
        }

        loadGrid(that, id);

    });

    // grid-show
    ui.on(document, 'change', '.grid-list select.grid-show', function () {

        var that, id;

        that = ui.closest(this, '.grid-list')[0];
        id = that.getAttribute('data-ui-id');

        if (isNaN(Number(this.value))) {

            showCount[id] = 0;
            pagingCount[id] = 1;

            ui.addClass(that, 'grid-show-all');

        } else {

            showCount[id] = this.value;
            ui.removeClass(that, 'grid-show-all');

        }

        // set show count to storage
        if (testStorage && sessionStorage !== undefined) {
            sessionStorage.setItem('ui-gridList-' + id + '-show', showCount[id]);
        }

        loadGrid(that, id);

    });

    // grid-sort
    ui.on(document, 'mousedown', '.grid-list [data-ui-sort]', function () {

        var that, id, buttons, isAsc, gridContainer, list, sortIndex, sortType, arr, arrSorted;

        that = ui.closest(this, '.grid-list')[0];
        id = that.getAttribute('data-ui-id');

        // modify buttons
        buttons = ui.find('[data-ui-sort]', that);

        ui.removeClass(buttons, 'active');
        ui.addClass(this, 'active');

        ui.each(buttons, function () {
            if (!ui.hasClass(this, 'active')) {

                ui.removeClass(this, 'asc desc');
                ui.find('.icon use', this)[0].setAttribute('href', '#' + ui.gridList.sortIcon);

            }
        });

        isAsc = ui.hasClass(this, 'asc');

        if (isAsc) {

            ui.removeClass(this, 'asc');
            ui.addClass(this, 'desc');

            ui.find('.icon use', this)[0].setAttribute('href', '#' + ui.gridList.descIcon);

        } else {

            ui.removeClass(this, 'desc');
            ui.addClass(this, 'asc');

            ui.find('.icon use', this)[0].setAttribute('href', '#' + ui.gridList.ascIcon);

        }

        // sort
        gridContainer = ui.find('.grid-container', that)[0];

        list = ui.find('.grid-content', gridContainer);
        ui.each(list, function () {
            temp.appendChild(this);
        });

        arr = [];
        arrSorted = [];

        sortIndex = this.getAttribute('data-ui-sort');

        if (sortIndex === null || sortIndex === '' || sortIndex === '0') {
            sortIndex = 0;

        } else { sortIndex = Number(sortIndex) - 1; }

        sortType = this.getAttribute('data-ui-type');
        if (sortType === null) { sortType = ''; }

        list = ui.find('.grid-content', temp);
        ui.each(list, function () {

            var val = this.getAttribute('data-ui-val');
            if (val !== null && val !== '') {

                val = val.split(ui.gridList.valueSplit)[sortIndex];

                if (sortType !== 'number') {
                    val = customLowerCase(val);
                }

                arr.push(val);
                arrSorted.push(val);

            }

        });

        if (isAsc) {

            if (sortType === 'number') {
                arrSorted.sort(function (a, b) { return b - a; });

            } else {
                arrSorted.sort().reverse();
            }

        } else {

            if (sortType === 'number') {
                arrSorted.sort(function (a, b) { return a - b; });

            } else {
                arrSorted.sort();
            }

        }

        ui.each(list, function (i) {

            temp.appendChild(list[arr.indexOf(arrSorted[i])]);
            arr[arr.indexOf(arrSorted[i])] = '';

        });

        // load sorted grids
        gridContainer.appendChild(temp);
        pagingCount[id] = 1;

        loadGrid(that, id);

        // empty variables
        arr = [];
        arrSorted = [];

        buttons = '';
        list = '';

    });

    // grid-filter
    function gridFilter(that, firstLoading) {

        var id, filters, val, vals, index, sortType, sortIndex, indexes, list, gridContainer, j, contentVal, contentArr, activeFilters, passed, checkAll;

        id = that.getAttribute('data-ui-id');

        vals = [];
        indexes = [];

        // read all filter values
        filters = ui.find('.grid-filter', that);
        ui.each(filters, function (i) {

            if (firstLoading) {

                vals = loadedVals[id].split(',');

                if (this.type === 'checkbox' || this.type === 'radio') {
                    if (vals[i] !== '') { this.checked = true; }

                } else if (this.tagName === 'SELECT') {
                    for (j = 0; j < this.options.length; j++) {

                        if (customLowerCase(this.options[j].innerText) === vals[i]) {

                            index = Array.prototype.slice.call(this.options).indexOf(this.options[j]);
                            this.selectedIndex = index;

                        }

                    }

                } else {
                    this.value = vals[i];
                }

            } else {

                val = '';

                if (this.type === 'checkbox' || this.type === 'radio') {
                    if (this.checked) { val = this.value; }

                } else {
                    val = this.value;
                }

                val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                sortType = this.getAttribute('data-ui-type');
                if (sortType === null) { sortType = ''; }

                if (sortType === 'number') {
                    vals.push(val);

                } else {
                    vals.push(customLowerCase(val));
                }

            }

            sortIndex = this.getAttribute('data-ui-index');
            if (sortIndex !== null) {

                if (sortIndex === '' || sortIndex === '0') {
                    sortIndex = 0;

                } else {
                    sortIndex = Number(sortIndex) - 1;
                }

                indexes.push(sortIndex);

            } else { indexes.push(''); }

        });

        // filter
        if (vals.length > 0) {

            activeFilters = vals.filter(function (filterVal) {
                return filterVal !== '';
            });

            gridContainer = ui.find('.grid-container', that)[0];

            list = ui.find('.grid-content', gridContainer);
            ui.each(list, function () {
                temp.appendChild(this);
            });

            list = ui.find('.grid-content', temp);

            // remove checked
            checkAll = ui.find('.grid-check-all', that);

            if (checkAll.length > 0) {

                ui.each(checkAll, function () {
                    this.checked = false;
                });

            }

            ui.each(list, function () {

                if (ui.hasClass(this, 'checked')) {

                    ui.removeClass(this, 'checked');
                    ui.find('.grid-check', this)[0].checked = false;

                }

            });

            if (activeFilters.length > 0) {

                ui.addClass(that, 'grid-filtered');
                ui.each(list, function () {

                    passed = [];

                    contentVal = this.getAttribute('data-ui-val');
                    if (contentVal !== null && contentVal !== '') {

                        contentVal = customLowerCase(contentVal);
                        contentArr = contentVal.split(ui.gridList.valueSplit);

                        for (j = 0; j < vals.length; j++) {

                            if (vals[j] !== '') {

                                if (indexes[j] === '') {

                                    if (contentVal.replace(/\|/g, ' ').match(vals[j]) !== null) { // contain
                                        passed.push('pass');
                                    }

                                } else {

                                    if (contentArr[indexes[j]] === vals[j]) { // equal
                                        passed.push('pass');
                                    }

                                }

                            }

                        }

                    }

                    if (activeFilters.length === passed.length) {
                        ui.addClass(this, 'filtered');

                    } else {
                        ui.removeClass(this, 'filtered');
                    }

                });

            } else {

                ui.removeClass(that, 'grid-filtered');
                ui.removeClass(list, 'filtered');

            }

            // set filters to storage
            if (testStorage && sessionStorage !== undefined) {
                sessionStorage.setItem('ui-gridList-' + id + '-vals', vals.toString());
            }

            // load filtered grids
            gridContainer.appendChild(temp);

        }

        // load filtered grids
        loadGrid(that, id);

        // empty variables
        vals = [];
        indexes = [];
        contentArr = [];

        filters = '';
        list = '';
        contentVal = '';

    }

    ui.on(document, 'keyup', '.grid-list .grid-filter[type="text"]', function () {

        var that = ui.closest(this, '.grid-list')[0];
        gridFilter(that, false);

    });

    ui.on(document, 'change', '.grid-list .grid-filter:not([type="text"])', function () {

        var that = ui.closest(this, '.grid-list')[0];
        gridFilter(that, false);

    });

    // grid check
    ui.on(document, 'change', '.grid-list .grid-check-all', function () {

        var that, list, form, checked, checkFnc, uncheckFnc;

        that = ui.closest(this, '.grid-list')[0];
        list = ui.find('.grid-content', that);

        checked = this.checked;

        checkFnc = function (t) {

            if (!ui.hasClass(t, 'checked')) {

                form = ui.find('.grid-check', t)[0];
                if (form !== undefined) {

                    ui.addClass(t, 'checked');
                    form.checked = true;

                }

            }

        };

        uncheckFnc = function (t) {

            if (ui.hasClass(t, 'checked')) {

                form = ui.find('.grid-check', t)[0];
                if (form !== undefined) {

                    ui.removeClass(t, 'checked');
                    form.checked = false;

                }

            }

        };

        ui.each(list, function () {

            if (checked) {

                if (ui.hasClass(that, 'grid-filtered')) {

                    if (ui.hasClass(this, 'filtered')) {
                        checkFnc(this);

                    } else { uncheckFnc(this); }

                } else { checkFnc(this); }

            } else { uncheckFnc(this); }

        });

    });

    ui.on(document, 'change', '.grid-list .grid-check', function () {

        var that, list, checkAll;

        that = ui.closest(that, '.grid-list')[0];
        list = ui.closest(this, '.grid-content')[0];

        if (this.checked) {
            ui.addClass(list, 'checked');

        } else {

            ui.removeClass(list, 'checked');
            checkAll = ui.find('.grid-check-all', that)[0];

            if (ui.find('.grid-check-all', that)[0] !== undefined) {
                checkAll.checked = false;
            }

        }

    });

    // first loading
    ui.gridList.Start = function () {

        ui.each('.grid-list:not(.grid-list-loaded)', function () {

            var id, gridShow, index, i;

            // define id
            startListID += 1;
            id = 'gridList-' + startListID;

            this.setAttribute('data-ui-id', id);

            // check stored variables
            if (testStorage && sessionStorage !== undefined) {

                loadedVals[id] = sessionStorage.getItem('ui-gridList-' + id + '-vals');
                showCount[id] = Number(sessionStorage.getItem('ui-gridList-' + id + '-show'));
                pagingCount[id] = Number(sessionStorage.getItem('ui-gridList-' + id + '-paging'));

            }

            // calculate grid-show
            gridShow = ui.find('select.grid-show', this)[0];
            if (showCount[id] === 0) {

                if (gridShow !== undefined) {

                    if (showCount[id] === undefined || showCount[id] === 0) {

                        if (isNaN(Number(gridShow.value))) {

                            showCount[id] = 0;
                            pagingCount[id] = 1;

                            ui.addClass(this, 'grid-show-all');

                        } else {
                            showCount[id] = gridShow.value;
                        }

                    }

                }

            } else {

                for (i = 0; i < gridShow.options.length; i++) {

                    if (Number(customLowerCase(gridShow.options[i].innerText)) === showCount[id]) {

                        index = Array.prototype.slice.call(gridShow.options).indexOf(gridShow.options[i]);
                        gridShow.selectedIndex = index;

                    }

                }

            }

            // load values
            if (loadedVals[id] !== undefined && loadedVals[id] !== null) {

                if (loadedVals[id].length > 0) {
                    gridFilter(this, true);
                }

            }

            // load grids
            ui.addClass(this, 'grid-list-loaded');
            loadGrid(this, id);

        });

    };

    // clear stored variables when page refreshing
    ui.on(window, 'beforeunload', function () {

        if (testStorage && sessionStorage !== undefined) {

            if (window.performance) {
                if (performance.navigation.type !== 1) { // The Navigation Timing API: if === 1 means page refreshed

                    var gridLists, id;
                    gridLists = ui.find('.grid-list');

                    ui.each(gridLists, function () {

                        id = this.getAttribute('data-ui-id');

                        sessionStorage.setItem('ui-gridList-' + id + '-vals', '');
                        sessionStorage.setItem('ui-gridList-' + id + '-show', 0);
                        sessionStorage.setItem('ui-gridList-' + id + '-paging', 0);

                    });

                }
            }

        }

    });

    // Loaders
    ui.onload(ui.gridList.Start);

    // ajax callback loader
    ui.on(document, 'ui:ajaxCallbacks', function () {
        if (ui.ajax.classNames.indexOf('grid-list') > -1) { ui.gridList.Start(); }
    });

}());
