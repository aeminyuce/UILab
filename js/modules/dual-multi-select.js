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

    let
        resetOptions,
        movetoSource;

    ui.dualMultiSelect.Start = () => {

        resetOptions = function (selects, isSubmit) { // reset options

            Array.prototype.forEach.call(ui.find('option', selects[0]),

                item => {

                    if (ui.userAgents.mobile) item.selected = true;
                    else item.selected = false;

                });

            Array.prototype.forEach.call(ui.find('option', selects[1]),

                item => {

                    if (ui.userAgents.mobile || isSubmit !== undefined) item.selected = true;
                    else item.selected = false;

                });

        };

        ui.dualMultiSelect.Init = () => {

            Array.prototype.forEach.call(ui.find('.' + ui.dualMultiSelect.target),

                el => {

                    let arr = [];
                    let arrStart = [];

                    const selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', el);

                    // move name attribute from source to target select
                    const name = selects[0].name;

                    selects[0].removeAttribute('name');
                    selects[1].name = name;

                    // get user defined idexes
                    const options = ui.find('option', selects[0]);

                    Array.prototype.forEach.call(options,

                        item => {

                            const index = item.getAttribute(ui.dualMultiSelect.dataIndex);

                            if (index !== null && index !== '' && !isNaN(index)) {

                                arr.push(index);
                                arrStart.push(index);

                            } else arr.push('');

                        });

                    // create new indexes for not defined options
                    arrStart = arrStart.sort();

                    const userArr = arrStart;

                    arrStart = Number(arrStart[arrStart.length - 1]);
                    if (isNaN(arrStart)) {

                        arrStart = 0;
                        for (let i = 0; i < options.length; i++) {

                            arrStart += 1;
                            arr[i] = arrStart.toString();

                        }

                    } else {

                        for (let j = 1; j <= options.length; j++) {

                            if (arr[j] === '') {

                                arrStart += 1;
                                arr[j] = arrStart.toString();

                            }

                        }

                    }

                    // set all indexes to options
                    Array.prototype.forEach.call(options,

                        (item, i) => {

                            item.setAttribute(ui.dualMultiSelect.dataIndex, arr[i]);

                            if (userArr.length > 0) { // move user defined options from source to target by index

                                const index = Number(arr.indexOf(userArr[i]));
                                if (index > -1) selects[1].appendChild(options[index]);

                            } else { // move options selected with attribute from source to target

                                const selected = item.getAttribute('selected');
                                if (selected !== null) selects[1].appendChild(item);

                            }

                        });

                    resetOptions(selects); // reset options

                });

        };
        ui.dualMultiSelect.Init();

        movetoSource = function (that, selects) {

            const i = Number(that.getAttribute(ui.dualMultiSelect.dataIndex));
            const sourceList = ui.find('option', selects[0]);

            if (sourceList.length === 0) {

                // first moving to empty list
                selects[0].appendChild(that);

            } else if (sourceList.length === 1) {

                // only one option in list
                const firstIndex = Number(sourceList[0].getAttribute(ui.dualMultiSelect.dataIndex));

                if (i > firstIndex) selects[0].appendChild(that);
                else selects[0].insertBefore(that, sourceList[0]);

            } else {

                const arr = [];
                let inserted = false;

                // move to index
                for (let j = 0; j < sourceList.length; j++) {

                    const otherIndex = Number(sourceList[j].getAttribute(ui.dualMultiSelect.dataIndex));
                    arr.push(otherIndex);

                    if (otherIndex - 1 >= i) {

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

                if (!e.isTrusted) return; // prevent trigger change event listeners

                let that;
                const options = Array.prototype.slice.call(e.target); // get option list

                for (let i = 0; options.length; i++) {

                    if (options[i].selected) { // get selected option

                        that = options[i];
                        break;

                    }

                }

                const selects = ui.closest(that, '.' + ui.dualMultiSelect.target)[0];
                const multi = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);

                const parent = ui.closest(that, '.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]')[0];
                const dir = Array.prototype.slice.call(multi).indexOf(parent);

                if (dir === 0) multi[1].appendChild(that); // move from source to target select
                else movetoSource(that, multi); // move from target to source select

                resetOptions(multi); // reset options

            });

        ui.on(document,
            'reset',

            'form',

            function () {

                setTimeout(() => { // wait for form reset started on DOM

                    Array.prototype.forEach.call(ui.find('.' + ui.dualMultiSelect.target),

                        el => {

                            let index;
                            let selected;

                            const selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', el);

                            Array.prototype.forEach.call(ui.find('option', selects[1]),

                                item => {

                                    selected = item.getAttribute('selected');
                                    index = Number(item.getAttribute(ui.dualMultiSelect.dataIndex)) - 1;

                                    if (selected === null) { // move options to source that not selected with attribute
                                        movetoSource(item, selects);
                                    }

                                });

                            const targetList = ui.find('option', selects[1]); // reload modified list

                            Array.prototype.forEach.call(ui.find('option', selects[0]),

                                item => {

                                    selected = item.getAttribute('selected');
                                    if (selected !== null) { // move options to target that selected with attribute

                                        if (targetList.length === 0) selects[1].appendChild(item);
                                        else selects[1].insertBefore(item, targetList[index]);
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

                Array.prototype.forEach.call(e.target,

                    item => { // get submitted element list

                        if (item.tagName === 'SELECT' && item.multiple) { // get multiple selects

                            const selects = ui.closest(item, '.' + ui.dualMultiSelect.target)[0];
                            const multi = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);

                            if (multi !== undefined) {
                                resetOptions(multi, true); // reset options, set target list to selected before submit
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

        () => {
            if (ui.ajax.classNames.indexOf(ui.dualMultiSelect.target) > 0) ui.dualMultiSelect.Init();
        });

})();
