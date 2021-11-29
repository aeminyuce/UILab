/*
 UI Classnames JS
 Requires UI JS
*/

ui.classnames = {

    // targets
    targetList: 'classnames-list',
    targetAlerts: 'classnames-alerts',

    // main classnames
    nameTotal: 'classnames-total',

    // styling classnames
    stylesNoErrors: 'ui-opacity-half',
    stylesWarningSep: 'ui-font-18 ui-font-capitalize ui-m-20-t',

    stylesError: 'ui-color-red',
    stylesWarning: 'ui-color-yellow',

    stylesCatTite: 'ui-h4 ui-font-capitalize ui-m-10-b',

    stylesCatCard: 'ui-card ui-font-16 ui-round ui-p-10 ui-shadow-lg',
    stylesCatList: 'ui-list-unstyled ui-list-sp-5',

    stylesCatRow: 'ui-row ui-xs-fluid',
    stylesCatCol: 'ui-col-lg-3 ui-col-4 ui-col-sm-6',

    // values
    listColLength: 5,

    filePath: 'xhr/ajax-pages.php',
    prefix: 'ui',

    // messages
    msgErrors: 'Errors',
    msgNoErrors: '* No errors detected *',

    msgEmpty: 'Empty Classname!',
    msgDuplicate: 'Prefix Duplicated'

};

(function () {

    'use strict';
    /*globals document, ui */

    ui.classnames.Start = function () {

        var arr, total, created, list, alerts, lastAddedWarning;

        // create arrays
        arr = [];

        arr.list = [];
        arr.error = [];
        arr.warning = [];

        arr.filtered = [];
        arr.groups = [];

        lastAddedWarning = '';

        // get elements
        total = ui.find('.' + ui.classnames.nameTotal)[0];

        list = ui.find('.' + ui.classnames.targetList)[0];
        alerts = ui.find('.' + ui.classnames.targetAlerts)[0];

        // check all pages with xhr
        ui.ajax({
            url : ui.classnames.filePath,
            callback: function () { }
        });

        // get real classnames list with xhr triggered callback event
        ui.on(document,
            ui.globals.eventAjaxCallback,

            function () {

                var i, reStart, reDuplicate, str, strStart, strLength, html, title, items;

                // check all class names
                ui.each(ui.ajax.classNames,

                    function () {

                        // check prefix
                        reStart = ui.classnames.prefix + '-';
                        reStart = new RegExp(reStart, 'g');

                        // check duplicates
                        reDuplicate = '(' + ui.classnames.prefix + '-)|(-' + ui.classnames.prefix + ')';
                        reDuplicate = new RegExp(reDuplicate, 'g');

                        str = this.toString();
                        strStart = str.match(reStart);

                        if (strStart === null) {

                            if (str === '') {

                                // error: empty
                                arr.error.push(ui.classnames.msgEmpty);

                            } else {

                                // warning
                                arr.warning.push(str);

                            }

                        } else {

                            // list
                            arr.list.push(str);

                        }

                        strLength = str.match(reDuplicate);
                        if (strLength !== null) {

                            strLength = Number(str.match(reDuplicate).length);
                            if (strLength > 1) {

                                // error: duplicate
                                arr.error.push(ui.classnames.msgDuplicate + ': ' + str);

                            }

                        }

                    });

                // create errors
                if (arr.error.length === 0) {
                    alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesNoErrors + '">' + ui.classnames.msgNoErrors + '</li>');

                } else {
                    alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarningSep + '">' + ui.classnames.msgErrors + '</li>');
                }

                ui.each(arr.error,

                    function () {
                        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesError + '">' + this + '</li>');
                    });

                // create warnings
                arr.warning = arr.warning.sort();
                ui.each(arr.warning,

                    function () {

                        if (lastAddedWarning === '' || lastAddedWarning.split('-')[0] !== this.split('-')[0]) {
                            alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarningSep + '">' + this.split('-')[0] + '</li>');
                        }

                        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarning + '">' + this + '</li>');
                        lastAddedWarning = this;

                    });

                // filter list of classnames
                function filterClassnames(that) {

                    title = that.split('-')[1];

                    // Ex: ui-no-*, ui-sm-*
                    if (title === 'no' || title === 'xl' || title === 'lg' || title === 'md' || title === 'sm' || title === 'xs') {
                        title = that.split('-')[2];
                    }

                    // Ex: ui-sm-no-*
                    if (title === 'no') {
                        title = that.split('-')[3];
                    }

                    // filter rules
                    if (['container','fluid','fixed','row','gutter','col','push','pull','offset','order'].indexOf(title) >= 0) {
                        title = 'grids';

                    } else if (['h1','h2','h3','h4','h5','h6'].indexOf(title) >= 0) {
                        title = 'headings';

                    } else if (['form','input','select','dual','textarea','indeterminate','range','check','radio','switch','autocomplete','currency','spinner','file','number','required','label','pass'].indexOf(title) >= 0) {
                        title = 'forms';

                    } else if (['open','open-ease','active','selected','show'].indexOf(title) >= 0) {
                        title = 'helpers';

                    } else if (['w','weather','days','graphs','reports','now'].indexOf(title) >= 0) {
                        title = 'weather';

                    } else if (['code','rtl','pre','hr'].indexOf(title) >= 0) {
                        title = 'typography';

                    } else if (['theme','fill','stroke','text'].indexOf(title) >= 0) {
                        title = 'themes';

                    } else if (['line','donut','pie'].indexOf(title) >= 0) {
                        title = 'charts';

                    } else if (['icon','icons','toggle'].indexOf(title) >= 0) {
                        title = 'icons';

                    } else if (['dropdown','nav','menu'].indexOf(title) >= 0) {
                        title = 'dropdowns';

                    } else if (title === 'darkmode' || title === 'invert') {
                        title = 'dark Mode';

                    } else if (title === 'carousel' || title === 'bring') {
                        title = 'carousel';

                    } if (title === 'header' || title === 'sticky') {
                        title = 'header sticky';

                    } else if (title === 'list') {
                        title = 'listings';

                    } else if (title === 'm') {
                        title = 'margin';

                    } if (title === 'p') {
                        title = 'padding';

                    } if (title === 'sp') {
                        title = 'spacer';

                    } if (title === 'btn') {
                        title = 'button';

                    } if (title === 'ease') {
                        title = 'effects';

                    } if (title === 'animate') {
                        title = 'animation';

                    } if (title === 'img') {
                        title = 'image';

                    } if (title === 'imgupload') {
                        title = 'image upload';
                    }

                    return title;

                }

                // create group names
                ui.each(arr.list,

                    function () {

                        filterClassnames(this); // returns title

                        if (arr.filtered.indexOf(title) === -1) {
                            arr.filtered.push(title);
                        }

                    });

                // copy classnames to filtered groups
                ui.each(arr.list,

                    function () {

                        filterClassnames(this); // returns title

                        if (arr.filtered.indexOf(title) > -1) {

                            if (arr.groups[title] === undefined) {
                                arr.groups[title] = this;

                            } else {
                                arr.groups[title] += ', ' + this;
                            }

                        }

                    });

                // create categories
                created = 0;

                arr.filtered = arr.filtered.sort(function (a, b) {
                    return a.localeCompare(b);
                });

                ui.each(arr.filtered,

                    function () {

                        items = arr.groups[this].split(',');
                        items = items.sort(function (a, b) {

                            return a.length - b.length || a.localeCompare(b, undefined, {
                                numeric: true,
                                sensitivity: 'base'
                              });

                        });

                        html = '<h4 class="' + ui.classnames.stylesCatTite + '">' + this + '</h4>' +
                                '<div class="' + ui.classnames.stylesCatCard + '">' +
                                    '<div class="' + ui.classnames.stylesCatRow + '">';

                        for (i = 0; i < items.length; i++) {

                            if (parseInt(i / ui.classnames.listColLength) === i / ui.classnames.listColLength) { // create cols

                                if (i !== 0) {
                                    html += '</ul></div>'; // close tags
                                }

                                html += '<div class="' + ui.classnames.stylesCatCol + '">' +
                                            '<ul class="' + ui.classnames.stylesCatList + '">';

                            }

                            if (items[i].indexOf('[native code]') === -1) { // catch native code error

                                items[i] = items[i].replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                                html += '<li>' + items[i] + '</li>'; // create rows
                                created += 1;

                            }

                        }

                        html += '</ul></div></div></div>'; // close tags

                        list.insertAdjacentHTML('beforeend', html);

                    });

                total.textContent = arr.filtered.length + ' / ' + created;

                // empty variables
                arr = [];

                html = "";
                items = "";

            });

    };

    // Loaders
    ui.onload(ui.classnames.Start);

}());
