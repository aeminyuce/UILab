/*
 Data Grid JS
 Data Grid JS requires Events JS
*/

var dataList = {

    valueSplit : '|',

    sortIcon : 'icon icon-xs icon-sort',
    ascIcon : 'icon icon-xs icon-angle-up',
    descIcon : 'icon icon-xs icon-angle-down',

    prevIcon : 'icon icon-xs icon-angle-left',
    nextIcon : 'icon icon-xs icon-angle-right',

    customLetters : { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" }

};

(function () {

    'use strict';
    /*globals window,document, selector, events, sessionStorage, performance, ajax */

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
        sessionStorage.setItem('dataListTest', 0);

    } catch (e) {
        testStorage = false;
    }

    // custom lowercase
    (function () {

        var k, re, chars, keys;
        keys = Object.keys(dataList.customLetters); // returns array

        chars = '(([';
        for (k = 0; k < keys.length; k += 1) { chars += keys[k]; }
        chars += ']))';

        re = new RegExp(chars, 'g');

        customLowerCase = function (string) {

            string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
                return dataList.customLetters[l];
            });

            return string.toLowerCase();

        };

    }());

    // create paging
    function createPaging(paging, id, listLength) {

        var defaultClass, activeClass, classes, re, rex, html, total, i, min, max;

        re = new RegExp('\\s+\\s');
        rex = new RegExp('\\s+$');

        defaultClass = paging[0].getAttribute('data-default');
        if (defaultClass === null) { defaultClass = ''; }

        activeClass = paging[0].getAttribute('data-active');
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
        html = '<button class="' + classes + '"><i class="' + dataList.prevIcon + '"></i></button>\n';

        for (i = min; i <= max; i += 1) {

            if (i === pagingCount[id]) {

                classes = 'btn-active ' + defaultClass + ' ' + activeClass;
                classes = classes.replace(re, ' ').replace(rex, '');

                html += '<button class="' + classes + '">' + pagingCount[id] + '</button>\n';

            } else {
                html += '<button class="' + defaultClass + '">' + i + '</button>\n';
            }

        }

        classes = 'next ' + defaultClass;
        if (i === total + 1) { classes += ' btn-passive'; }

        classes = classes.replace(re, ' ').replace(rex, '');
        html += '<button class="' + classes + '"><i class="' + dataList.nextIcon + '"></i></button>\n';

        html = events.parser(html);
        paging[0].innerHTML = html;

        // set paging to storage
        if (testStorage && sessionStorage !== undefined) {
            sessionStorage.setItem(id + '-paging', pagingCount[id]);
        }

        // empty variables
        classes = '';
        html = '';

    }

    // data loader
    function loadData(that, id) {

        var i, list, listLength, paging, dataTotal, isEven, dataStriped;

        list = selector('.data-content', that);
        listLength = list.length;

        // paging
        paging = selector('.data-paging', that);
        if (paging.length > 0) {

            if (pagingCount[id] === undefined || pagingCount[id] === 0) {

                pagingCount[id] = 1; // paging available
                createPaging(paging, id, listLength); // create paging buttons

            } else {
                createPaging(paging, id, listLength); // update paging buttons
            }

        } else {

            pagingCount[id] = 0; // paging not available
            events.addClass(that, 'data-show-all');

        }

        // total data
        dataTotal = selector('.data-total', that);

        if (dataTotal.length > 0) {
            dataTotal[0].textContent = listLength;
        }

        // define even elements and visible datas
        isEven = false;
        dataStriped = events.hasClass(that, 'data-striped');

        events.removeClass(selector('.data-content.show', that), 'show');

        function evenList(t) {

            if (dataStriped) {

                if (isEven) {

                    events.addClass(t, 'even');
                    isEven = false;

                } else {

                    events.removeClass(t, 'even');
                    isEven = true;

                }

            }

            events.addClass(t, 'show');

        }

        if (showCount[id] > 0 && pagingCount[id] > 0) {

            for (i = (pagingCount[id] - 1) * showCount[id]; i < pagingCount[id] * showCount[id]; i += 1) {
                evenList(list[i]);
            }

        } else {

            for (i = 0; i < listLength; i += 1) {
                evenList(list[i]);
            }

        }

        // empty variables
        list = '';

    }

    // Events
    // data-paging
    events.on(document, 'click', '.data-list .data-paging button', function () {

        var that, id;

        that = events.closest(this, '.data-list')[0];
        id = that.getAttribute('data-id');

        if (events.hasClass(this, 'next')) {
            pagingCount[id] += 1;

        } else if (events.hasClass(this, 'prev')) {
            pagingCount[id] -= 1;

        } else {
            pagingCount[id] = Number(this.textContent);
        }

        loadData(that, id);


    });

    // data-show
    events.on(document, 'change', '.data-list select.data-show', function () {

        var that, id;

        that = events.closest(this, '.data-list')[0];
        id = that.getAttribute('data-id');

        if (isNaN(Number(this.value))) {

            showCount[id] = 0;
            pagingCount[id] = 1;

            events.addClass(that, 'data-show-all');

        } else {

            showCount[id] = this.value;
            events.removeClass(that, 'data-show-all');

        }

        // set show count to storage
        if (testStorage && sessionStorage !== undefined) {
            sessionStorage.setItem(id + '-show', showCount[id]);
        }

        loadData(that, id);

    });

    // data-sort
    events.on(document, 'click', '.data-list [data-sort]', function () {

        var that, id, buttons, isAsc, dataContainer, list, sortIndex, sortType, arr, arrSorted;

        that = events.closest(this, '.data-list')[0];
        id = that.getAttribute('data-id');

        // modify buttons
        buttons = selector('[data-sort]', that);

        events.removeClass(buttons, 'active');
        events.addClass(this, 'active');

        events.each(buttons, function () {
            if (!events.hasClass(this, 'active')) {

                events.removeClass(this, 'asc desc');
                selector('.icon', this)[0].setAttribute('class', dataList.sortIcon);

            }
        });

        isAsc = events.hasClass(this, 'asc');

        if (isAsc) {

            events.removeClass(this, 'asc');
            events.addClass(this, 'desc');

            selector('.icon', this)[0].setAttribute('class', dataList.descIcon);

        } else {

            events.removeClass(this, 'desc');
            events.addClass(this, 'asc');

            selector('.icon', this)[0].setAttribute('class', dataList.ascIcon);

        }

        // sort
        dataContainer = selector('.data-container', that)[0];
        temp.innerHTML = events.parser(dataContainer.innerHTML);

        arr = [];
        arrSorted = [];

        sortIndex = this.getAttribute('data-sort');

        if (sortIndex === null || sortIndex === '' || sortIndex === '0') {
            sortIndex = 0;

        } else { sortIndex = Number(sortIndex) - 1; }

        sortType = this.getAttribute('data-type');
        if (sortType === null) { sortType = ''; }

        list = selector('.data-content', temp[0]);
        events.each(list, function () {

            var val = this.getAttribute('data-val');
            if (val !== null && val !== '') {

                val = val.split(dataList.valueSplit)[sortIndex];

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

        events.each(list, function (i) {

            temp.appendChild(list[arr.indexOf(arrSorted[i])]);
            arr[arr.indexOf(arrSorted[i])] = '';

        });

        // load sorted data
        dataContainer.appendChild(temp);
        pagingCount[id] = 1;
        loadData(that, id);

        // empty variables
        arr = [];
        arrSorted = [];

        buttons = '';
        list = '';

    });

    // data-filter
    function dataFilter(that, firstLoading) {

        var id, filters, val, vals, sortType, sortIndex, indexes, list;

        id = that.getAttribute('data-id');

        vals = [];
        indexes = [];

        // read all filter values
        filters = selector('.data-filter', that);
        events.each(filters, function (i) {

            if (firstLoading) {

                vals = loadedVals[id].split(',');

                if (this.type === 'checkbox' || this.type === 'radio') {
                    if (vals[i] !== '') { this.checked = true; }

                } else if (this.tagName === 'SELECT') {
                    this.selectedIndex = vals[i];

                } else {
                    this.value = vals[i];
                }


            } else {

                val = '';

                if (this.type === 'checkbox' || this.type === 'radio') {
                    if (this.checked) { val = this.value; }

                } else if (this.tagName === 'SELECT') {
                    val = this.selectedIndex.toString();

                } else {
                    val = this.value;
                }

                val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                sortType = this.getAttribute('data-type');
                if (sortType === null) { sortType = ''; }

                if (sortType === 'number') {
                    vals.push(val);

                } else {
                    vals.push(customLowerCase(val));
                }

            }

            sortIndex = this.getAttribute('data-index');
            if (sortIndex !== null) {

                if (sortIndex === '' || sortIndex === '0') {
                    sortIndex = 0;

                } else {
                    sortIndex = Number(sortIndex) - 1;
                }

                indexes.push(sortIndex);

            } else { indexes.push(''); }

        });

        // filter datas
        if (vals.length > 0) {

            list = selector('.data-content', that);
            events.each(list, function () {

                /*
                for (i = 0; i < vals.length; i += 1) {

                    if (indexes[i] === "") {


                    } else {

                        if (list[i].getAttribute('data-content').match(new RegExp(vals[i]indexes[i], 'g')) !== null) {
                            events.addClass(list[i]);
                        }

                    }

                }
                */

            });

            // set filters to storage
            if (testStorage && sessionStorage !== undefined) {
                sessionStorage.setItem(id + '-vals', vals.toString());
            }

        }

        // load filtered data
        loadData(that, id);

        // empty variables
        vals = [];
        indexes = [];

        filters = '';

    }

    events.on(document, 'keyup', '.data-list .data-filter[type="text"]', function () {

        var that = events.closest(this, '.data-list')[0];
        dataFilter(that, false);

    });

    events.on(document, 'change', '.data-list .data-filter:not([type="text"])', function () {

        var that = events.closest(this, '.data-list')[0];
        dataFilter(that, false);

    });

    // first loading
    function dataListFnc() {

        events.each('.data-list:not(.passive)', function () {

            var id, dataShow;

            // define id
            startListID += 1;
            id = 'dataList-' + startListID;

            this.setAttribute('data-id', id);

            // check stored variables
            if (testStorage && sessionStorage !== undefined) {

                loadedVals[id] = sessionStorage.getItem(id + '-vals');
                showCount[id] = Number(sessionStorage.getItem(id + '-show'));
                pagingCount[id] = Number(sessionStorage.getItem(id + '-paging'));

            }

            // calculate data-show
            dataShow = selector('select.data-show', this)[0];
            if (dataShow !== undefined) {

                if (showCount[id] === undefined || showCount[id] === 0) {

                    if (!isNaN(Number(dataShow.value))) {
                        showCount[id] = dataShow.value;
                    }

                }

                if (dataShow.value !== showCount[id]) {
                    dataShow.value = showCount[id];
                }

            }

            // load values
            if (loadedVals[id] !== undefined && loadedVals[id].length > 0) {
                dataFilter(this, true);
            }

            // load data
            events.addClass(this, 'passive');
            loadData(this, id);

        });

    }

    // clear stored variables when page refreshing
    events.on(window, 'beforeunload', function () {

        if (testStorage && sessionStorage !== undefined) {

            if (window.performance) {
                if (performance.navigation.type !== 1) { // The Navigation Timing API: if === 1 means page refreshed

                    var dataLists, id;
                    dataLists = selector('.data-list');

                    events.each(dataLists, function () {

                        id = this.getAttribute('data-id');

                        sessionStorage.setItem(id + '-vals', '');
                        sessionStorage.setItem(id + '-show', 0);
                        sessionStorage.setItem(id + '-paging', 0);

                    });

                }
            }

        }

    });

    // Loaders
    events.onload(dataListFnc);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.ajaxClassNames.indexOf('data-list') > -1) { dataListFnc(); }
    });

}());
