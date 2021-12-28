/* dual multi select */

import { ui } from './../core/globals.js';
export default () => ui;

ui.dualMultiSelect = {

    // targets
    target: 'ui-dual-multi-select',

    // outer classnames
    nameSelectMulti: 'ui-select-multi',

    // data attributes
    dataIndex: 'data-ui-index'

};

(() => {

    var
        resetOptions,
        movetoSource;

    ui.dualMultiSelect.Start = function () {

        resetOptions = function (selects, isSubmit) { // reset options

            var sourceList, targetList;

            sourceList = ui.find('option', selects[0]);
            targetList = ui.find('option', selects[1]);

            ui.each(sourceList,

                function () {

                    if (ui.userAgents.mobile) {
                        this.selected = true;

                    } else {
                        this.selected = false;
                    }

                });

            ui.each(targetList,

                function () {

                    if (ui.userAgents.mobile || isSubmit !== undefined) {
                        this.selected = true;

                    } else {
                        this.selected = false;
                    }

                });

        };

        ui.dualMultiSelect.Init = function () {

            var i, holder, selects, name, arr, userArr, arrStart, index, options, selected;

            holder = ui.find('.' + ui.dualMultiSelect.target);
            ui.each(holder,

                function () {

                    arr = [];
                    arrStart = [];

                    selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', this);

                    // move name attribute from source to target select
                    name = selects[0].name;

                    selects[0].removeAttribute('name');
                    selects[1].name = name;

                    // get user defined idexes
                    options = ui.find('option', selects[0]);
                    ui.each(options,

                        function () {

                            index = this.getAttribute(ui.dualMultiSelect.dataIndex);
                            if (index !== null && index !== '' && !isNaN(index)) {

                                arr.push(index);
                                arrStart.push(index);

                            } else { arr.push(''); }

                        });

                    // create new indexes for not defined options
                    arrStart = arrStart.sort();
                    userArr = arrStart;

                    arrStart = Number(arrStart[arrStart.length - 1]);
                    if (isNaN(arrStart)) {

                        arrStart = 0;
                        for (i = 0; i < options.length; i++) {

                            arrStart += 1;
                            arr[i] = arrStart.toString();

                        }

                    } else {

                        for (i = 1; i <= options.length; i++) {

                            if (arr[i] === '') {

                                arrStart += 1;
                                arr[i] = arrStart.toString();

                            }

                        }

                    }

                    // set all indexes to options
                    ui.each(options,

                        function (j) {

                            this.setAttribute(ui.dualMultiSelect.dataIndex, arr[j]);

                            if (userArr.length > 0) { // move user defined options from source to target by index

                                index = Number(arr.indexOf(userArr[j]));
                                if (index > -1) { selects[1].appendChild(options[index]); }

                            } else { // move options selected with attribute from source to target

                                selected = this.getAttribute('selected');
                                if (selected !== null) { selects[1].appendChild(this); }

                            }

                        });

                    resetOptions(selects); // reset options

                });

        };
        ui.dualMultiSelect.Init();

        movetoSource = function (that, selects) {

            var i, j, sourceList, index, arr, inserted;

            i = Number(that.getAttribute(ui.dualMultiSelect.dataIndex));
            sourceList = ui.find('option', selects[0]);

            if (sourceList.length === 0) {

                // first moving to empty list
                selects[0].appendChild(that);

            } else if (sourceList.length === 1) {

                // only one option in list
                index = Number(sourceList[0].getAttribute(ui.dualMultiSelect.dataIndex));

                if (i > index) {
                    selects[0].appendChild(that);

                } else {
                    selects[0].insertBefore(that, sourceList[0]);
                }

            } else {

                arr = [];
                inserted = false;

                // move to index
                for (j = 0; j < sourceList.length; j++) {

                    index = Number(sourceList[j].getAttribute(ui.dualMultiSelect.dataIndex));
                    arr.push(index);

                    if (index - 1 >= i) {

                        inserted = true;
                        selects[0].insertBefore(that, sourceList[j]);

                        break;

                    }

                }

                // move biggest index to end of the list
                if (!inserted) {

                    if (i > arr.sort()[arr.length - 1]) {
                        selects[0].appendChild(that);
                    }

                }

            }

        };

        // Event Listeners
        ui.on(document,
            'change',

            '.' + ui.dualMultiSelect.target + ' .' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]',

            function (e) {

                if (!e.isTrusted) { return; } // prevent trigger change event listeners

                var i, that, options, selects, parent, dir;

                options = Array.prototype.slice.call(e.target); // get option list
                for (i = 0; options.length; i++) {

                    if (options[i].selected) { // get selected option

                        that = options[i];
                        break;

                    }

                }

                selects = ui.closest(that, '.' + ui.dualMultiSelect.target)[0];
                selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);

                parent = ui.closest(that, '.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]')[0];
                dir = Array.prototype.slice.call(selects).indexOf(parent);

                if (dir === 0) { // move from source to target select
                    selects[1].appendChild(that);

                } else { // move from target to source select
                    movetoSource(that, selects);
                }

                resetOptions(selects); // reset options

            });

        ui.on(document,
            'reset',

            'form',

            function () {

                var i, holder, selects, sourceList, targetList, selected;

                setTimeout(() => { // wait for form reset started on DOM

                    holder = ui.find('.' + ui.dualMultiSelect.target);
                    ui.each(holder,

                        function () {

                            selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', this);

                            targetList = ui.find('option', selects[1]);
                            ui.each(targetList,

                                function () {

                                    selected = this.getAttribute('selected');
                                    i = Number(this.getAttribute(ui.dualMultiSelect.dataIndex)) - 1;

                                    if (selected === null) { // move options to source that not selected with attribute
                                        movetoSource(this, selects);
                                    }

                                });

                            targetList = ui.find('option', selects[1]); // reload modified list

                            sourceList = ui.find('option', selects[0]);
                            ui.each(sourceList,

                                function () {

                                    selected = this.getAttribute('selected');
                                    if (selected !== null) { // move options to target that selected with attribute

                                        if (targetList.length === 0) {
                                            selects[1].appendChild(this);

                                        } else {
                                            selects[1].insertBefore(this, targetList[i]);
                                        }
                                    }

                                });

                            resetOptions(selects); // reset options

                        });

                }, 0);

            });

        ui.on(document,
            'submit',

            'form',

            function (e) {

                var elems, selects;

                elems = Array.prototype.slice.call(e.target); // get submitted element list
                ui.each(elems,

                    function () {

                        if (this.tagName === 'SELECT' && this.multiple) { // get multiple selects

                            selects = ui.closest(this, '.' + ui.dualMultiSelect.target)[0];
                            selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);

                            if (selects !== undefined) {
                                resetOptions(selects, true); // reset options, set target list to selected before submit
                            }

                        }

                    });

            });

    };

    // loaders
    ui.onload(ui.dualMultiSelect.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.dualMultiSelect.target) > 0) {
                ui.dualMultiSelect.Init();
            }

        });

})();
