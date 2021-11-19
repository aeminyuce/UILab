/*
 UI Datatable JS
 Requires UI JS
*/

ui.datatable = {

    // targets
    target: 'ui-datatable',
    targetLoaded: 'ui-datatable-loaded',

    // main classnames
    nameContainer: 'ui-datatable-container',

    nameListContent: 'ui-datatable-content',
    nameListStriped: 'ui-datatable-striped',
    nameListShowAll: 'ui-datatable-showed-all',
    nameListFiltered: 'ui-datatable-filtered',

    nameFilter: 'ui-datatable-filter',
    nameListShow: 'ui-datatable-show',

    nameCheckAll: 'ui-datatable-check-all',
    nameCheck: 'ui-datatable-check',

    nameTotal: 'ui-datatable-total',
    namePaging: 'ui-datatable-paging',

    // helper classnames
    nameActive: 'ui-active',
    nameEven: 'ui-even',

    nameShow: 'ui-showed',
    nameFiltered: 'ui-filtered',
    nameChecked: 'ui-checked',

    nameAsc: 'ui-asc',
    nameDesc: 'ui-desc',

    // outer classnames
    nameIcon: 'ui-icon',

    nameBtnActive: 'ui-btn-active',
    nameBtnPassive: 'ui-btn-passive',

    namePrev: 'ui-paging-prev',
    nameNext: 'ui-paging-next',

    // icons
    sortIcon : 'sort-fill',
    ascIcon : 'sort-up-fill',
    descIcon : 'sort-down-fill',

    prevIcon : 'angle-left',
    nextIcon : 'angle-right',

    // values
    valueSplit : '|',
    customLetters : { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" },

    sortTypeNumber: 'number',
    listIdNaming: 'ui-gridList-',

    // storages
    storageTest: 'ui-gridList-test',
    storageVals: 'ui-gridList-vals-',
    storageShow: 'ui-gridList-show-',
    storagePaging: 'ui-gridList-paging-',

    // data attributes
    dataDefault: 'data-ui-default',
    dataActive: 'data-ui-active',
    dataID: 'data-ui-id',
    dataSort: 'data-ui-sort',
    dataType: 'data-ui-type',
    dataVal: 'data-ui-val',
    dataIndex: 'data-ui-index'

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
        sessionStorage.setItem(ui.datatable.storageTest, 0);

    } catch (e) {
        testStorage = false;
    }

    // custom lowercase
    (function () {

        var k, re, chars, keys;
        keys = Object.keys(ui.datatable.customLetters); // returns array

        chars = '(([';
        for (k = 0; k < keys.length; k++) { chars += keys[k]; }
        chars += ']))';

        re = new RegExp(chars, 'g');

        customLowerCase = function (string) {

            string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
                return ui.datatable.customLetters[l];
            });

            return string.toLowerCase();

        };

    }());

    // create paging
    function createPaging(paging, id, listLength) {

        var defaultClass, activeClass, classes, re, rex, html, total, i, min, max;

        re = new RegExp('\\s+\\s');
        rex = new RegExp('\\s+$');

        defaultClass = paging[0].getAttribute(ui.datatable.dataDefault);
        if (defaultClass === null) { defaultClass = ''; }

        activeClass = paging[0].getAttribute(ui.datatable.dataActive);
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

        classes = ui.datatable.namePrev + ' ' + defaultClass;
        if (pagingCount[id] === 1) { classes += ' ' + ui.datatable.nameBtnPassive; }

        classes = classes.replace(re, ' ').replace(rex, '');
        html = '<button class="' + classes + '">' +
                '<svg class="' + ui.datatable.nameIcon + '"><use href="#' + ui.datatable.prevIcon + '"/></svg>' +
            '</button>\n';

        for (i = min; i <= max; i++) {

            if (i === pagingCount[id]) {

                classes = ui.datatable.nameBtnActive + ' ' + defaultClass + ' ' + activeClass;
                classes = classes.replace(re, ' ').replace(rex, '');

                html += '<button class="' + classes + '">' + pagingCount[id] + '</button>\n';

            } else {
                html += '<button class="' + defaultClass + '">' + i + '</button>\n';
            }

        }

        classes = ui.datatable.nameNext + ' ' + defaultClass;
        if (pagingCount[id] === total) { classes += ' ' + ui.datatable.nameBtnPassive; }

        classes = classes.replace(re, ' ').replace(rex, '');
        html += '<button class="' + classes + '">' +
                '<svg class="' + ui.datatable.nameIcon + '"><use href="#' + ui.datatable.nextIcon + '"/></svg>' +
            '</button>\n';

        paging[0].innerHTML = '';
        paging[0].insertAdjacentHTML('beforeend', html);

        // set paging to storage
        if (testStorage && sessionStorage !== undefined) {
            sessionStorage.setItem(ui.datatable.storagePaging + id, pagingCount[id]);
        }

        // empty variables
        classes = '';
        html = '';

    }

    // loader
    function loadGrid(that, id) {

        var i, list, paging, gridTotal, isEven, gridStriped;

        if (ui.hasClass(that, ui.datatable.nameListFiltered)) {
            list = ui.find('.' + ui.datatable.nameListContent + '.' + ui.datatable.nameFiltered, that);

        } else {
            list = ui.find('.' + ui.datatable.nameListContent, that);
        }

        // paging
        paging = ui.find('.' + ui.datatable.namePaging, that);
        if (paging.length > 0) {

            if (pagingCount[id] === undefined || pagingCount[id] === 0) {

                pagingCount[id] = 1; // paging available
                createPaging(paging, id, list.length); // create paging buttons

            } else {
                createPaging(paging, id, list.length); // update paging buttons
            }

        } else {

            pagingCount[id] = 0; // paging not available
            ui.addClass(that, ui.datatable.nameListShowAll);

        }

        // total grids
        gridTotal = ui.find('.' + ui.datatable.nameTotal, that);

        if (gridTotal.length > 0) {
            gridTotal[0].textContent = list.length;
        }

        // define even elements and visible grids
        isEven = false;
        gridStriped = ui.hasClass(that, ui.datatable.nameListStriped);

        ui.removeClass(ui.find('.' + ui.datatable.nameListContent + '.' + ui.datatable.nameShow, that), ui.datatable.nameShow);

        function evenList(t) {

            if (gridStriped) {

                if (isEven) {

                    ui.addClass(t, ui.datatable.nameEven);
                    isEven = false;

                } else {

                    ui.removeClass(t, ui.datatable.nameEven);
                    isEven = true;

                }

            }

            ui.addClass(t, ui.datatable.nameShow);

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
    // paging
    ui.on(document,
        'click',

        '.' + ui.datatable.target + ' .' + ui.datatable.namePaging + ' button',

        function () {

            var that, id;

            that = ui.closest(this, '.' + ui.datatable.target)[0];
            id = that.getAttribute(ui.datatable.dataID);

            if (ui.hasClass(this, ui.datatable.nameNext)) {
                pagingCount[id] += 1;

            } else if (ui.hasClass(this, ui.datatable.namePrev)) {
                pagingCount[id] -= 1;

            } else {
                pagingCount[id] = Number(this.textContent);
            }

            loadGrid(that, id);

        });

    // show
    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' select.' + ui.datatable.nameListShow,

        function () {

            var that, id;

            that = ui.closest(this, '.' + ui.datatable.target)[0];
            id = that.getAttribute(ui.datatable.dataID);

            if (isNaN(Number(this.value))) {

                showCount[id] = 0;
                pagingCount[id] = 1;

                ui.addClass(that, ui.datatable.nameListShowAll);

            } else {

                showCount[id] = this.value;
                ui.removeClass(that, ui.datatable.nameListShowAll);

            }

            // set show count to storage
            if (testStorage && sessionStorage !== undefined) {
                sessionStorage.setItem(ui.datatable.storageShow + id, showCount[id]);
            }

            loadGrid(that, id);

        });

    // sort
    ui.on(document,
        'mousedown',

        '.' + ui.datatable.target + ' [' + ui.datatable.dataSort + ']',

        function () {

            var that, id, buttons, isAsc, gridContainer, list, sortIndex, sortType, arr, arrSorted;

            that = ui.closest(this, '.' + ui.datatable.target)[0];
            id = that.getAttribute(ui.datatable.dataID);

            // modify buttons
            buttons = ui.find('[' + ui.datatable.dataSort + ']', that);

            ui.removeClass(buttons, ui.datatable.nameActive);
            ui.addClass(this, ui.datatable.nameActive);

            ui.each(buttons,

                function () {

                    if (!ui.hasClass(this, ui.datatable.nameActive)) {

                        ui.removeClass(this, ui.datatable.nameAsc + ' ' + ui.datatable.nameDesc);
                        ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', '#' + ui.datatable.sortIcon);

                    }

                });

            isAsc = ui.hasClass(this, ui.datatable.nameAsc);

            if (isAsc) {

                ui.removeClass(this, ui.datatable.nameAsc);
                ui.addClass(this, ui.datatable.nameDesc);

                ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', '#' + ui.datatable.descIcon);

            } else {

                ui.removeClass(this, ui.datatable.nameDesc);
                ui.addClass(this, ui.datatable.nameAsc);

                ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', '#' + ui.datatable.ascIcon);

            }

            // sort
            gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];

            list = ui.find('.' + ui.datatable.nameListContent, gridContainer);
            ui.each(list,

                function () {
                    temp.appendChild(this);
                });

            arr = [];
            arrSorted = [];

            sortIndex = this.getAttribute(ui.datatable.dataSort);

            if (sortIndex === null || sortIndex === '' || sortIndex === '0') {
                sortIndex = 0;

            } else { sortIndex = Number(sortIndex) - 1; }

            sortType = this.getAttribute(ui.datatable.dataType);
            if (sortType === null) { sortType = ''; }

            list = ui.find('.' + ui.datatable.nameListContent, temp);
            ui.each(list,

                function () {

                    var val = this.getAttribute(ui.datatable.dataVal);

                    if (val !== null && val !== '') {

                        val = val.split(ui.datatable.valueSplit)[sortIndex];

                        if (sortType !== ui.datatable.sortTypeNumber) {
                            val = customLowerCase(val);
                        }

                        arr.push(val);
                        arrSorted.push(val);

                    }

                });

            if (isAsc) {

                if (sortType === ui.datatable.sortTypeNumber) {
                    arrSorted.sort(function (a, b) { return b - a; });

                } else {
                    arrSorted.sort().reverse();
                }

            } else {

                if (sortType === ui.datatable.sortTypeNumber) {
                    arrSorted.sort(function (a, b) { return a - b; });

                } else {
                    arrSorted.sort();
                }

            }

            ui.each(list,

                function (i) {

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

    // filter
    function gridFilter(that, firstLoading) {

        var id, filters, val, vals, index, sortType, sortIndex, indexes, list, gridContainer, j, contentVal, contentArr, activeFilters, passed, checkAll;

        id = that.getAttribute(ui.datatable.dataID);

        vals = [];
        indexes = [];

        // read all filter values
        filters = ui.find('.' + ui.datatable.nameFilter, that);
        ui.each(filters,

            function (i) {

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

                    sortType = this.getAttribute(ui.datatable.dataType);
                    if (sortType === null) { sortType = ''; }

                    if (sortType === ui.datatable.sortTypeNumber) {
                        vals.push(val);

                    } else {
                        vals.push(customLowerCase(val));
                    }

                }

                sortIndex = this.getAttribute(ui.datatable.dataIndex);
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

            gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];

            list = ui.find('.' + ui.datatable.nameListContent, gridContainer);
            ui.each(list,

                function () {
                    temp.appendChild(this);
                });

            list = ui.find('.' + ui.datatable.nameListContent, temp);

            // remove checked
            checkAll = ui.find('.' + ui.datatable.nameCheckAll, that);

            if (checkAll.length > 0) {

                ui.each(checkAll,

                    function () {
                        this.checked = false;
                    });

            }

            ui.each(list,

                function () {

                    if (ui.hasClass(this, ui.datatable.nameChecked)) {

                        ui.removeClass(this, ui.datatable.nameChecked);
                        ui.find('.' + ui.datatable.nameCheck, this)[0].checked = false;

                    }

                });

            if (activeFilters.length > 0) {

                ui.addClass(that, ui.datatable.nameListFiltered);
                ui.each(list,

                    function () {

                        passed = [];

                        contentVal = this.getAttribute(ui.datatable.dataVal);

                        if (contentVal !== null && contentVal !== '') {

                            contentVal = customLowerCase(contentVal);
                            contentArr = contentVal.split(ui.datatable.valueSplit);

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
                            ui.addClass(this, ui.datatable.nameFiltered);

                        } else {
                            ui.removeClass(this, ui.datatable.nameFiltered);
                        }

                    });

            } else {

                ui.removeClass(that, ui.datatable.nameListFiltered);
                ui.removeClass(list, ui.datatable.nameFiltered);

            }

            // set filters to storage
            if (testStorage && sessionStorage !== undefined) {
                sessionStorage.setItem(ui.datatable.storageVals + id, vals.toString());
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

    ui.on(document,
        'keyup',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameFilter + '[type="text"]',

        function () {

            var that = ui.closest(this, '.' + ui.datatable.target)[0];
            gridFilter(that, false);

        });

    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameFilter + ':not([type="text"])',

        function () {

            var that = ui.closest(this, '.' + ui.datatable.target)[0];
            gridFilter(that, false);

        });

    // check
    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameCheckAll,

        function () {

            var that, list, form, checked, checkFnc, uncheckFnc;

            that = ui.closest(this, '.' + ui.datatable.target)[0];
            list = ui.find('.' + ui.datatable.nameListContent, that);

            checked = this.checked;

            checkFnc = function (t) {

                if (!ui.hasClass(t, ui.datatable.nameChecked)) {

                    form = ui.find('.' + ui.datatable.nameCheck, t)[0];
                    if (form !== undefined) {

                        ui.addClass(t, ui.datatable.nameChecked);
                        form.checked = true;

                    }

                }

            };

            uncheckFnc = function (t) {

                if (ui.hasClass(t, ui.datatable.nameChecked)) {

                    form = ui.find('.' + ui.datatable.nameCheck, t)[0];
                    if (form !== undefined) {

                        ui.removeClass(t, ui.datatable.nameChecked);
                        form.checked = false;

                    }

                }

            };

            ui.each(list,

                function () {

                    if (checked) {

                        if (ui.hasClass(that, ui.datatable.nameListFiltered)) {

                            if (ui.hasClass(this, ui.datatable.nameFiltered)) {
                                checkFnc(this);

                            } else { uncheckFnc(this); }

                        } else { checkFnc(this); }

                    } else { uncheckFnc(this); }

                });

        });

    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameCheck,

        function () {

            var that, list, checkAll;

            that = ui.closest(that, '.' + ui.datatable.target)[0];
            list = ui.closest(this, '.' + ui.datatable.nameListContent)[0];

            if (this.checked) {
                ui.addClass(list, ui.datatable.nameChecked);

            } else {

                ui.removeClass(list, ui.datatable.nameChecked);
                checkAll = ui.find('.' + ui.datatable.nameCheckAll, that)[0];

                if (ui.find('.' + ui.datatable.nameCheckAll, that)[0] !== undefined) {
                    checkAll.checked = false;
                }

            }

        });

    // first loading
    ui.datatable.Start = function () {

        ui.each('.' + ui.datatable.target + ':not(.' + ui.datatable.targetLoaded + ')',

            function () {

                var id, gridShow, index, i;

                // define id
                startListID += 1;
                id = ui.datatable.listIdNaming + startListID;

                this.setAttribute(ui.datatable.dataID, id);

                // check stored variables
                if (testStorage && sessionStorage !== undefined) {

                    loadedVals[id] = sessionStorage.getItem(ui.datatable.storageVals + id);
                    showCount[id] = Number(sessionStorage.getItem(ui.datatable.storageShow + id));
                    pagingCount[id] = Number(sessionStorage.getItem(ui.datatable.storagePaging + id));

                }

                // calculate show
                gridShow = ui.find('select.' + ui.datatable.nameListShow, this)[0];
                if (showCount[id] === 0) {

                    if (gridShow !== undefined) {

                        if (showCount[id] === undefined || showCount[id] === 0) {

                            if (isNaN(Number(gridShow.value))) {

                                showCount[id] = 0;
                                pagingCount[id] = 1;

                                ui.addClass(this, ui.datatable.nameListShowAll);

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
                ui.addClass(this, ui.datatable.targetLoaded);
                loadGrid(this, id);

            });

    };

    // clear stored variables when page refreshing
    ui.on(window,
        'beforeunload',

        function () {

            if (testStorage && sessionStorage !== undefined) {

                if (window.performance) {
                    if (performance.navigation.type !== 1) { // The Navigation Timing API: if === 1 means page refreshed

                        var gridLists, id;
                        gridLists = ui.find('.' + ui.datatable.target);

                        ui.each(gridLists,

                            function () {

                                id = this.getAttribute(ui.datatable.dataID);

                                sessionStorage.setItem(ui.datatable.storageVals + id, '');
                                sessionStorage.setItem(ui.datatable.storageShow + id, 0);
                                sessionStorage.setItem(ui.datatable.storagePaging + id, 0);

                            });

                    }
                }

            }

        });

    // Loaders
    ui.onload(ui.datatable.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.datatable.target) > -1) {
                ui.datatable.Start();
            }

        });

}());
