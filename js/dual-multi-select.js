/*
 Dual Multi Select JS
 Dual Multi Select JS requires Selector Js, Events JS
*/

var dualMultiSelect = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax, setTimeout */

    var
        resetOptions,
        loadSelects,
        resetSelects;

    dualMultiSelect.Start = function () {

        resetOptions = function (selects) { // reset options

            var sourceList, targetList;

            sourceList = selector('option', selects[0]);
            targetList = selector('option', selects[1]);

            events.each(sourceList, function () {
                this.selected = false;
            });

            events.each(targetList, function () {
                this.selected = true;
            });

        };

        loadSelects = function () {

            var i, holder, selects, name, arr, userArr, arrStart, index, options, selected;

            holder = selector('.dual-multi-select');
            events.each(holder, function () {

                arr = [];
                arrStart = [];

                selects = selector('.select-multi select[multiple]', this);

                // move name attribute from source to target select
                name = selects[0].name;

                selects[0].removeAttribute('name');
                selects[1].name = name;

                // get user defined idexes
                options = selector('option', selects[0]);
                events.each(options, function () {

                    index = this.getAttribute('data-index');
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
                    for (i = 0; i < options.length; i += 1) {

                        arrStart += 1;
                        arr[i] = arrStart.toString();

                    }

                } else {

                    for (i = 1; i <= options.length; i += 1) {

                        if (arr[i] === '') {

                            arrStart += 1;
                            arr[i] = arrStart.toString();

                        }

                    }

                }

                // set all indexes to options
                events.each(options, function (j) {

                    this.setAttribute('data-index', arr[j]);

                    if (userArr.length > 0) { // move user defined options from source to target select by index

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
        loadSelects();

        resetSelects = function () {

            var i, holder, selects, sourceList, targetList, selected;

            holder = selector('.dual-multi-select');
            events.each(holder, function () {

                selects = selector('.select-multi select[multiple]', this);

                sourceList = selector('option', selects[0]);
                targetList = selector('option', selects[1]);

                events.each(targetList, function () {

                    selected = this.getAttribute('selected');
                    i = Number(this.getAttribute('data-index')) - 1;

                    if (selected === null) { // move options to source that not selected with attribute

                        if (sourceList === undefined) {
                            selects[0].appendChild(this);

                        } else {
                            selects[0].insertBefore(this, sourceList[i]);
                        }
                    }

                });

                events.each(sourceList, function () {

                    selected = this.getAttribute('selected');
                    if (selected !== null) { // move options to target that selected with attribute

                        if (targetList === undefined) {
                            selects[1].appendChild(this);

                        } else {
                            selects[1].insertBefore(this, targetList[i]);
                        }
                    }

                });

                resetOptions(selects); // reset options

            });

        };

        // Events
        events.on(document, 'click', '.dual-multi-select .select-multi select[multiple] option', function () {

            var i, selects, parent, index, sourceList;

            selects = events.closest(this, '.dual-multi-select')[0];
            selects = selector('.select-multi select[multiple]', selects);

            parent = events.closest(this, '.select-multi select[multiple]')[0];
            index = Array.prototype.slice.call(selects).indexOf(parent);

            if (index === 0) { // move from source to target select

                selects[1].appendChild(this);
                resetOptions(selects); // reset options

            } else { // move from target to source select

                i = this.getAttribute('data-index') - 1;
                sourceList = selector('option', selects[0]);

                if (sourceList === undefined) {
                    selects[0].appendChild(this);

                } else {
                    selects[0].insertBefore(this, sourceList[i]);
                }

                resetOptions(selects); // reset options

            }

        });

        // clear dual multi selects target
        events.on(document, 'reset', 'form', function () {

            // wait for form reset started on DOM
            setTimeout(resetSelects, 0);

        });

    };

    // Loaders
    events.onload(dualMultiSelect.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('dual-multi-select') > 0) { loadSelects(); }
    });

}());
