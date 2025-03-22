/* datatable */

import { ui } from './../core/globals.js';
export default () => ui;

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

    // outer classnames
    nameBtnActive: 'ui-btn-active',
    nameBtnPassive: 'ui-btn-passive',

    namePrev: 'ui-paging-prev',
    nameNext: 'ui-paging-next',

    // icons
    sortIcon : 'sort',
    ascIcon : 'sort-up',
    descIcon : 'sort-down',
    ascNumberIcon : 'sort-number-up',
    descNumberIcon : 'sort-number-down',

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

(() => {

    let
        testStorage = true,
        startListID = 0,

        loadedVals = [],
        showCount = [],
        pagingCount = [],

        temp = document.createDocumentFragment();

    // test for storage is supported?
    try {
        sessionStorage.setItem(ui.datatable.storageTest, 0);

    } catch (e) {
        testStorage = false;
    }

    const customLowerCase = (string) => { // custom lowercase

        const keys = Object.keys(ui.datatable.customLetters); // returns array

        let chars = '(([';
        for (let i = 0; i < keys.length; i++) chars += keys[i];
        chars += ']))';

        const re = new RegExp(chars, 'g');

        string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
            return ui.datatable.customLetters[l];
        });

        return string.toLowerCase();

    };

    // create paging
    function createPaging(paging, id, listLength) {

        let total, min, max;

        if (showCount[id] === undefined || showCount[id] === 0) {
            total = 1;

        } else {

            total = Math.ceil(listLength / showCount[id]);
            if (total < 1) { total = 1; }

        }

        if (pagingCount[id] < 1) { pagingCount[id] = 1; }
        if (pagingCount[id] > total) pagingCount[id] = total;

        if (pagingCount[id] === total) min = pagingCount[id] - 2;
        else min = pagingCount[id] - 1;

        if (min < 1) { min = 1; }

        if (pagingCount[id] === 1) max = pagingCount[id] + 2;
        else max = pagingCount[id] + 1;

        if (max > total) { max = total; }

        let defaultClass = paging[0].getAttribute(ui.datatable.dataDefault);

        if (defaultClass === null) {
            defaultClass = '';
        }

        let activeClass = paging[0].getAttribute(ui.datatable.dataActive);

        if (activeClass === null) {
            activeClass = '';
        }

        let classes = ui.datatable.namePrev + ' ' + defaultClass;

        if (pagingCount[id] === 1) {
            classes += ' ' + ui.datatable.nameBtnPassive;
        }

        const re = new RegExp('\\s+\\s');
        const rex = new RegExp('\\s+$');

        classes = classes.replace(re, ' ').replace(rex, '');

        let html = '<button class="' + classes + '">' +
                        '<svg class="' + ui.globals.nameIcon + '" viewBox="' + ui.globals.svgIconViewBox + '">' +
                            '<path d="' + ui.assets('iconAngleLeft') + '" />' +
                        '</svg>' +
                    '</button>\n';

        for (let i = min; i <= max; i++) {

            if (i === pagingCount[id]) {

                classes = ui.datatable.nameBtnActive + ' ' + defaultClass + ' ' + activeClass;
                classes = classes.replace(re, ' ').replace(rex, '');

                html += '<button class="' + classes + '">' + pagingCount[id] + '</button>\n';

            } else html += '<button class="' + defaultClass + '">' + i + '</button>\n';

        }

        classes = ui.datatable.nameNext + ' ' + defaultClass;
        if (pagingCount[id] === total) { classes += ' ' + ui.datatable.nameBtnPassive; }

        classes = classes.replace(re, ' ').replace(rex, '');
        html += '<button class="' + classes + '">' +
                    '<svg class="' + ui.globals.nameIcon + '" viewBox="' + ui.globals.svgIconViewBox + '">' +
                        '<path d="' + ui.assets('iconAngleRight') + '" />' +
                    '</svg>' +
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

        let list;

        if (ui.hasClass(that, ui.datatable.nameListFiltered)) {
            list = ui.find('.' + ui.datatable.nameListContent + '.' + ui.globals.nameFiltered, that);

        } else list = ui.find('.' + ui.datatable.nameListContent, that);

        // paging
        const paging = ui.find('.' + ui.datatable.namePaging, that);

        if (paging.length > 0) {

            if (pagingCount[id] === undefined || pagingCount[id] === 0) {

                pagingCount[id] = 1; // paging available
                createPaging(paging, id, list.length); // create paging buttons

            } else createPaging(paging, id, list.length); // update paging buttons

        } else {

            pagingCount[id] = 0; // paging not available
            ui.addClass(that, ui.datatable.nameListShowAll);

        }

        // total grids
        const gridTotal = ui.find('.' + ui.datatable.nameTotal, that);

        if (gridTotal.length > 0) {
            gridTotal[0].textContent = list.length;
        }

        // define even elements and visible grids
        let isEven = false;
        const gridStriped = ui.hasClass(that, ui.datatable.nameListStriped);

        ui.removeClass(ui.find('.' + ui.datatable.nameListContent + '.' + ui.globals.nameShowed, that), ui.globals.nameShowed);

        function evenList(el) {

            if (gridStriped) {

                if (isEven) {

                    ui.addClass(el, ui.datatable.nameEven);
                    isEven = false;

                } else {

                    ui.removeClass(el, ui.datatable.nameEven);
                    isEven = true;

                }

            }

            ui.addClass(el, ui.globals.nameShowed);

        }

        if (showCount[id] > 0 && pagingCount[id] > 0) {

            for (let i = (pagingCount[id] - 1) * showCount[id]; i < pagingCount[id] * showCount[id]; i++) {
                evenList(list[i]);
            }

        } else Array.prototype.forEach.call(list, item => { evenList(item); });

        // empty variables
        list = '';

    }

    // Event Listeners
    // paging
    ui.on(document,
        'click',

        '.' + ui.datatable.target + ' .' + ui.datatable.namePaging + ' button',

        function () {

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            const id = that.getAttribute(ui.datatable.dataID);

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

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            const id = that.getAttribute(ui.datatable.dataID);

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

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            const id = that.getAttribute(ui.datatable.dataID);

            // modify buttons
            let buttons = ui.find('[' + ui.datatable.dataSort + ']', that);

            ui.removeClass(buttons, ui.globals.nameActive);
            ui.addClass(this, ui.globals.nameActive);

            Array.prototype.forEach.call(buttons,

                el => {

                    if (!ui.hasClass(el, ui.globals.nameActive)) {

                        ui.removeClass(el, ui.globals.nameAsc + ' ' + ui.globals.nameDesc);
                        ui.find('.' + ui.globals.nameIcon, el)[0] = ui.datatable.sortIcon;

                    }

                });

            let sortType = this.getAttribute(ui.datatable.dataType);
            if (sortType === null) { sortType = ''; }

            const isAsc = ui.hasClass(this, ui.globals.nameAsc);

            if (isAsc) {

                ui.removeClass(this, ui.globals.nameAsc);
                ui.addClass(this, ui.globals.nameDesc);

                if (sortType === ui.datatable.sortTypeNumber) {
                    ui.find('.' + ui.globals.nameIcon, this)[0] = ui.datatable.descNumberIcon;

                } else {
                    ui.find('.' + ui.globals.nameIcon, this)[0] = ui.datatable.descIcon;
                }

            } else {

                ui.removeClass(this, ui.globals.nameDesc);
                ui.addClass(this, ui.globals.nameAsc);

                if (sortType === ui.datatable.sortTypeNumber) {
                    ui.find('.' + ui.globals.nameIcon, this)[0] = ui.datatable.ascNumberIcon;

                } else {
                    ui.find('.' + ui.globals.nameIcon, this)[0] = ui.datatable.ascIcon;
                }

            }

            // sort
            const gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];

            Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, gridContainer),

                el => {
                    temp.appendChild(el);
                });

            let arr = [];
            let arrSorted = [];

            let sortIndex = this.getAttribute(ui.datatable.dataSort);

            if (sortIndex === null || sortIndex === '' || sortIndex === '0') sortIndex = 0;
            else sortIndex = Number(sortIndex) - 1;

            let list = ui.find('.' + ui.datatable.nameListContent, temp);
            Array.prototype.forEach.call(list,

                el => {

                    let val = el.getAttribute(ui.datatable.dataVal);
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

                if (sortType === ui.datatable.sortTypeNumber) arrSorted.sort((a, b) => b - a);
                else arrSorted.sort().reverse();

            } else {

                if (sortType === ui.datatable.sortTypeNumber) arrSorted.sort((a, b) => a - b);
                else arrSorted.sort();

            }

            for (let i = 0; i < list.length; i++) {

                temp.appendChild(list[arr.indexOf(arrSorted[i])]);
                arr[arr.indexOf(arrSorted[i])] = '';

            }

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

        let contentArr, contentVal;

        let vals = [];
        let indexes = [];

        const id = that.getAttribute(ui.datatable.dataID);

        // read all filter values
        Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameFilter, that),

            (el, i) => {

                if (firstLoading) {

                    vals = loadedVals[id].split(',');

                    if (el.type === 'checkbox' || el.type === 'radio') {
                        if (vals[i] !== '') el.checked = true;

                    } else if (el.tagName === 'SELECT') {

                        Array.prototype.forEach.call(el.options,

                            item => {

                                if (customLowerCase(item.innerText) === vals[i]) {

                                    const index = Array.prototype.slice.call(el.options).indexOf(item);
                                    el.selectedIndex = index;

                                }

                            });

                    } else el.value = vals[i];

                } else {

                    let val = '';

                    if (el.type === 'checkbox' || el.type === 'radio') {
                        if (el.checked) val = el.value;

                    } else val = el.value;

                    val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                    let sortType = el.getAttribute(ui.datatable.dataType);

                    if (sortType === null) sortType = '';

                    if (sortType === ui.datatable.sortTypeNumber) vals.push(val);
                    else vals.push(customLowerCase(val));

                }

                let sortIndex = el.getAttribute(ui.datatable.dataIndex);
                if (sortIndex !== null) {

                    if (sortIndex === '' || sortIndex === '0') sortIndex = 0;
                    else sortIndex = Number(sortIndex) - 1;

                    indexes.push(sortIndex);

                } else indexes.push('');

            });

        // filter
        let list;
        if (vals.length > 0) {

            const activeFilters = vals.filter((filterVal) => filterVal !== '');
            const gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];

            Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, gridContainer),

                el => {
                    temp.appendChild(el);
                });

            // remove checked
            const checkAll = ui.find('.' + ui.datatable.nameCheckAll, that);

            if (checkAll.length > 0) {
                Array.prototype.forEach.call(checkAll, item => { item.checked = false; });
            }

            list = ui.find('.' + ui.datatable.nameListContent, temp);
            Array.prototype.forEach.call(list,

                el => {

                    if (ui.hasClass(el, ui.globals.nameChecked)) {

                        ui.removeClass(el, ui.globals.nameChecked);
                        ui.find('.' + ui.datatable.nameCheck, el)[0].checked = false;

                    }

                });

            if (activeFilters.length > 0) {

                ui.addClass(that, ui.datatable.nameListFiltered);

                Array.prototype.forEach.call(list,

                    el => {

                        let passed = [];

                        contentVal = el.getAttribute(ui.datatable.dataVal);

                        if (contentVal !== null && contentVal !== '') {

                            contentVal = customLowerCase(contentVal);
                            contentArr = contentVal.split(ui.datatable.valueSplit);

                            Array.prototype.forEach.call(vals,

                                (item, j) => {

                                    if (item !== '') {

                                        if (indexes[j] === '') {
                                            if (contentVal.replace(/\|/g, ' ').match(item) !== null) passed.push('pass'); // contain

                                        } else if (contentArr[indexes[j]] === item) passed.push('pass'); // equal

                                    }

                                });

                        }

                        if (activeFilters.length === passed.length) ui.addClass(el, ui.globals.nameFiltered);
                        else ui.removeClass(el, ui.globals.nameFiltered);

                    });

            } else {

                ui.removeClass(that, ui.datatable.nameListFiltered);
                ui.removeClass(list, ui.globals.nameFiltered);

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

        list = '';
        contentVal = '';

    }

    ui.on(document,
        'keyup',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameFilter + '[type="text"]',

        function () {

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            gridFilter(that, false);

        });

    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameFilter + ':not([type="text"])',

        function () {

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            gridFilter(that, false);

        });

    // check
    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameCheckAll,

        function () {

            const checkFnc = (el) => {

                if (!ui.hasClass(el, ui.globals.nameChecked)) {

                    const form = ui.find('.' + ui.datatable.nameCheck, el)[0];
                    if (form !== undefined) {

                        ui.addClass(el, ui.globals.nameChecked);
                        form.checked = true;

                    }

                }

            };

            const uncheckFnc = (el) => {

                if (ui.hasClass(el, ui.globals.nameChecked)) {

                    const form = ui.find('.' + ui.datatable.nameCheck, el)[0];
                    if (form !== undefined) {

                        ui.removeClass(el, ui.globals.nameChecked);
                        form.checked = false;

                    }

                }

            };

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            const checked = this.checked;

            Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, that),

                el => {

                    if (checked) {

                        if (ui.hasClass(that, ui.datatable.nameListFiltered)) {

                            if (ui.hasClass(el, ui.globals.nameFiltered)) checkFnc(el);
                            else uncheckFnc(el);

                        } else checkFnc(el);

                    } else uncheckFnc(el);

                });

        });

    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameCheck,

        function () {

            const that = ui.closest(that, '.' + ui.datatable.target)[0];
            const list = ui.closest(this, '.' + ui.datatable.nameListContent)[0];

            if (this.checked) {
                ui.addClass(list, ui.globals.nameChecked);

            } else {

                ui.removeClass(list, ui.globals.nameChecked);

                const checkAll = ui.find('.' + ui.datatable.nameCheckAll, that)[0];

                if (ui.find('.' + ui.datatable.nameCheckAll, that)[0] !== undefined) {
                    checkAll.checked = false;
                }

            }

        });

    // first loading
    ui.datatable.Start = () => {

        Array.prototype.forEach.call(ui.find('.' + ui.datatable.target + ':not(.' + ui.datatable.targetLoaded + ')'),

            el => {

                // define id
                startListID += 1;

                const id = ui.datatable.listIdNaming + startListID;
                el.setAttribute(ui.datatable.dataID, id);

                // check stored variables
                if (testStorage && sessionStorage !== undefined) {

                    loadedVals[id] = sessionStorage.getItem(ui.datatable.storageVals + id);
                    showCount[id] = Number(sessionStorage.getItem(ui.datatable.storageShow + id));
                    pagingCount[id] = Number(sessionStorage.getItem(ui.datatable.storagePaging + id));

                }

                // calculate show
                const gridShow = ui.find('select.' + ui.datatable.nameListShow, el)[0];
                if (showCount[id] === 0) {

                    if (gridShow !== undefined) {

                        if (showCount[id] === undefined || showCount[id] === 0) {

                            if (isNaN(Number(gridShow.value))) {

                                showCount[id] = 0;
                                pagingCount[id] = 1;

                                ui.addClass(el, ui.datatable.nameListShowAll);

                            } else showCount[id] = gridShow.value;

                        }

                    }

                } else {

                    Array.prototype.forEach.call(gridShow.options,

                        item => {

                            if (Number(customLowerCase(item.innerText)) === showCount[id]) {

                                const index = Array.prototype.slice.call(gridShow.options).indexOf(item);
                                gridShow.selectedIndex = index;

                            }

                        });

                }

                // load values
                if (loadedVals[id] !== undefined && loadedVals[id] !== null) {
                    if (loadedVals[id].length > 0) gridFilter(el, true);
                }

                // load grids
                ui.addClass(el, ui.datatable.targetLoaded);
                loadGrid(el, id);

            });

    };

    // clear stored variables when page refreshing
    ui.on(window,
        'beforeunload',

        () => {

            if (testStorage && sessionStorage !== undefined) {

                if (window.performance) {

                    if (performance.navigation.type !== 1) { // The Navigation Timing API: if === 1 means page refreshed

                        Array.prototype.forEach.call(ui.find('.' + ui.datatable.target),

                            item => {

                                const id = item.getAttribute(ui.datatable.dataID);

                                sessionStorage.setItem(ui.datatable.storageVals + id, '');
                                sessionStorage.setItem(ui.datatable.storageShow + id, 0);
                                sessionStorage.setItem(ui.datatable.storagePaging + id, 0);

                            });

                    }

                }

            }

        });

    // loaders
    ui.onload(ui.datatable.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {
            if (ui.ajax.classNames.indexOf(ui.datatable.target) > -1) ui.datatable.Start();
        });

})();
