/*
 Calendar JS
 Calendar JS requires Selector Js, Events JS, Ajax JS
*/

var calendar = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    dateFormat: 1, // 0: dd/mm/yyyy, 1: mm/dd/yyyy
    startDayofWeek: 1, // 0: Sunday, 1: Monday

    fillWeekends: true, // true: fills dark color to weekends' background

    prevIcon: 'icon-arrow-left', // header's previous button icon
    nextIcon: 'icon-arrow-right', // header's next button icon
    backIcon: 'icon-angle-left', // detail's back button icon

    todayTheme: '' // use themes

};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, ajax */

    var checkCalendars;

    // first loading
    calendar.Start = function () {

        // get calendar's data-date
        function getAttr(that, date, newDate) {

            var attr = that.getAttribute('data-date');
            if (attr !== null && attr !== '') {

                attr = attr.split(',');
                if (attr.length === 1) { // set only month

                    if (!isNaN(Number(attr[0])) && attr[0].length <= 2) {

                        if (attr[0] === '0') { attr[0] = 1; }
                        date.setMonth(attr[0] - 1);

                    }

                } else if (attr.length === 2) { // set year and month

                    if (!isNaN(Number(attr[0])) && attr[0].length === 4) {
                        if (!isNaN(Number(attr[1])) && attr[1].length <= 2) {

                            date.setFullYear(attr[0]);

                            if (attr[1] === '0') { attr[1] = 1; }
                            date.setMonth(attr[1] - 1);

                        }
                    }

                }

                if (newDate === undefined) {
                    attr = attr.toString();

                } else {
                    attr = newDate.toString();
                }

                if (attr === 'prev') {
                    date.setMonth(date.getMonth() - 1);

                } else if (attr === 'next') {
                    date.setMonth(date.getMonth() + 1);
                }

            }

        }

        // get calendar-picker value
        function pickerVal(that) {

            if (that.value !== '') {

                var val = that.value.split('/');
                if (val.length === 3 && val[0].length <= 2 && val[1].length <= 2 && val[2].length === 4) {

                    if (!isNaN(val[0]) && !isNaN(val[1]) && !isNaN(val[2])) {

                        if (calendar.dateFormat === 1) {
                            return Number(val[2]) + ',' + Number(val[0] - 1) + ',' + Number(val[1]); // mm/dd/yyyy
                        }

                        return Number(val[2]) + ',' + Number(val[1] - 1) + ',' + Number(val[0]); // dd/mm/yyyy

                    }

                }

                return '';

            }

        }

        // create calendar table
        function createFnc(that, newDate, picker) {

            var date, today, pickerDay, container, html, i, j, sysDays, activeDay, days, prevLastDay, firstDay, lastDay, src, keys, dday, details;

            date = new Date();
            date.setDate(1); // for the prev and next implementations

            pickerDay = '';

            // set new date
            if (newDate !== undefined) {

                if (newDate === 'prev' || newDate === 'next') {


                    if (picker) { // called from calendar-picker
                        pickerDay = pickerVal(picker); // check value
                    }

                    getAttr(that, date, newDate); // get data-date

                } else {

                    newDate = newDate.split(',');

                    date.setFullYear(newDate[0]);
                    date.setMonth(newDate[1]);

                    if (newDate[2] !== undefined) { // defined a new day from calendar-picker
                        pickerDay = Number(newDate[0]) + ',' +  Number(newDate[1]) + ',' + Number(newDate[2]);
                    }

                }

            } else {
                getAttr(that, date); // get data-date
            }

            // set new data-date
            that.setAttribute('data-date', date.getFullYear() + ',' + (date.getMonth() + 1));

            // create table
            html = '';
            container = selector('.calendar-container', that)[0];

            if (container === undefined) {
                html += '<div class="calendar-container ease-layout ease-slow ease-in-out">';
            }

            html += '<table';

            if (calendar.fillWeekends) {
                html += ' class="fill-weekends"';
            }

            html += '>' +
                '<caption>' +
                    '<button type="button" tabindex="-1" class="calendar-prev">' +
                        '<i class="icon ' + calendar.prevIcon + '"></i>' +
                    '</button>' +
                    '<span class="calendar-title ease-bg">' +
                        '<button type="button" tabindex="-1" class="calendar-month">' + calendar.months[date.getMonth()] + '</button>' +
                        '<button type="button" tabindex="-1" class="calendar-year">' + date.getFullYear() + '</button>' +
                    '</span>' +
                    '<button type="button" tabindex="-1" class="calendar-next">' +
                        '<i class="icon ' + calendar.nextIcon + '"></i>' +
                    '</button>' +
                '</caption>' +
                '<thead>';

            for (i = 0; i < calendar.days.length; i += 1) {
                html += '<th>' + calendar.days[i] + '</th>';
            }

            html += '</thead><tbody>';

            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            if (calendar.startDayofWeek === 0) {

                sysDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // don't update to your language
                firstDay = sysDays.indexOf(sysDays[firstDay.getDay()]);

            } else {

                sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // don't update to your language
                firstDay = sysDays.indexOf(sysDays[firstDay.getDay() - 1]);

            }

            if (firstDay < 1) { firstDay = 7; }

            prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
            days = prevLastDay - (firstDay - 1);

            lastDay = new Date(date.getFullYear(), (date.getMonth() + 1), 0).getDate();

            activeDay = false;
            today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + new Date().getDate();

            for (i = 0; i < 6; i += 1) {

                html += '<tr>';

                for (j = 0; j < 7; j += 1) {

                    if (days > prevLastDay) {

                        days = 1;
                        prevLastDay = lastDay;

                        if (i < 2) {
                            activeDay = true;

                        } else {
                            activeDay = false;
                        }

                    }

                    if (activeDay) {

                        if (date.getFullYear() + ' ' + date.getMonth() + ' ' + days === today) { // today
                            html += '<td class="today">' +
                                    '<button class="' + calendar.todayTheme + '" type="button" tabindex="-1">' + days + '</button>' +
                                '</td>';

                        } else { // other days

                            if (pickerDay !== '') { // defined a new day from calendar-picker

                                if (date.getFullYear() + ',' + date.getMonth() + ',' + days === pickerDay) {

                                    html += '<td data-day="' + days + '" class="pickerday">' +
                                            '<button type="button" tabindex="-1">' + days + '</button>' +
                                        '</td>';

                                } else {

                                    html += '<td data-day="' + days + '">' +
                                            '<button type="button" tabindex="-1">' + days + '</button>' +
                                        '</td>';
                                }

                            } else {

                                html += '<td data-day="' + days + '">' +
                                        '<button type="button" tabindex="-1">' + days + '</button>' +
                                    '</td>';

                            }

                        }

                    } else { // passive days
                        html += '<td class="passive"><span>' + days + '</span></td>';
                    }

                    days += 1;

                }

                html += '</tr>';

            }

            html += '</tbody>' +
                '</table>';

            if (container === undefined) {

                html += '</div>';
                that.insertAdjacentHTML('afterbegin', html);

            } else {

                container.innerHTML = '';
                container.insertAdjacentHTML('afterbegin', html);

            }

            // check details
            src = that.getAttribute('data-src');
            if (src !== null && src !== '') {

                details = '';

                // get json data with ajax
                ajax({
                    url : src,
                    callback: function (status, response) {

                        if (status === 'success') {

                            response = JSON.parse(response);
                            if (response.length === 'undefined') { return; }

                            for (i = 0; i < response.length; i += 1) {

                                if (response[i] === null) { return; }

                                if (Number(response[i].year) === date.getFullYear()) {
                                    if (Number(response[i].month) === date.getMonth() + 1) {

                                        // select detailed days
                                        dday = selector('[data-day="' + response[i].day + '"]', that);
                                        events.addClass(dday, 'toggle-details');

                                        // create details html
                                        details += '<li data-d="' + response[i].day + '">' +
                                            '<strong>' + response[i].day + '</strong>' +
                                            '<b>' + response[i].dayName + '</b><br>';

                                        keys = Object.keys(response[i].details);

                                        for (j = 0; j < keys.length; j += 1) {
                                            details += '<span><i>' + keys[j] + '</i> ' + response[i].details[keys[j]] + '</span>';
                                        }

                                        details += '</li>';

                                    }
                                }

                            }

                            container = selector('.calendar-container', that)[0];
                            if (events.hasClass(that, 'show-details')) {

                                setTimeout(function () {
                                    events.addClass(selector('.details', container), 'open');
                                }, 20);

                            }

                            if (details !== '') {

                                details = '<div class="details">' +
                                            '<button class="toggle-details" type="button" tabindex="-1">' +
                                                '<i class="icon ' + calendar.backIcon + '"></i>' +
                                            '</button>' +
                                        '<ul>' + details + '</ul>' +
                                    '</div>';

                                events.addClass(container, 'has-details'); // enable buttons click event

                            } else {

                                details = '<div class="details no-details">' +
                                        '<button class="toggle-details" type="button" tabindex="-1">' +
                                            '<i class="icon ' + calendar.backIcon + '"></i>' +
                                        '</button>' +
                                        '<ul>' +
                                            '<li>' +
                                                '<strong></strong>' +
                                                '<b></b><br>' +
                                                '<span></span>' +
                                                '<span></span>' +
                                                '<span></span>' +
                                            '</li>' +
                                        '</ul>' +
                                    '</div>';

                                events.removeClass(container, 'has-details'); // disable buttons click event

                            }

                            container.insertAdjacentHTML('afterbegin', details);
                            details = '';

                        }

                    }
                });

            }

            html = '';
            events.addClass(that, 'active');

        }

        // ckeck not loaded calendars
        checkCalendars = function () {

            var calendars = selector('.calendar:not(.active)');
            if (calendars.length > 0) {

                events.each(calendars, function () {
                    createFnc(this);
                });

            }

        };
        checkCalendars();

        // Events
        // calendar navigation
        events.on(document, 'click', '.calendar-prev,.calendar-next', function () {

            var that, picker, form;

            that = events.closest(this, '.calendar')[0];
            picker = events.closest(that, '.calendar-picker')[0]; // check called from calendar-picker

            if (events.hasClass(this, 'calendar-next')) {

                if (picker === undefined) {
                    createFnc(that, 'next');

                } else { // calendar-picker

                    form = selector('[type="text"]', picker)[0];
                    createFnc(that, 'next', form);

                }

            } else {

                if (picker === undefined) {
                    createFnc(that, 'prev');

                } else { // calendar-picker

                    form = selector('[type="text"]', picker)[0];
                    createFnc(that, 'prev', form);

                }

            }

        });

        // change month and year with panel
        events.on(document, 'click', '.calendar-month,.calendar-year', function () {

            var that, date, year, years, month, html, i, panelType, getList, getSelected, getIndex;

            date = new Date();
            that = events.closest(this, '.calendar')[0];

            getAttr(that, date);

            // create panel
            html = '<div class="panel ease-layout ease-slow ease-in-out">' +
                    '<ul>';

            if (events.hasClass(this, 'calendar-year')) { // years

                panelType = 'year';

                year = date.getFullYear();
                years = 1920 + (new Date().getFullYear() - 1920) + 100;

                for (i = 1920; i <= years; i += 1) {

                    html += '<li><button type="button" tabindex="-1" ';

                    if (year === i) {
                        html += 'class="call selected" ';

                    } else {
                        html += 'class="call" ';
                    }

                    html += 'name="' + i + '">' + i + '</button></li>';

                }

            } else { // months

                panelType = 'month';

                month = calendar.months[date.getMonth()];
                for (i = 0; i < calendar.months.length; i += 1) {

                    html += '<li><button type="button" tabindex="-1" ';

                    if (month === calendar.months[i]) {
                        html += 'class="call selected" ';

                    } else {
                        html += 'class="call" ';
                    }

                    html += 'name="' + i + '">' + calendar.months[i] + '</button></li>';
                }

            }

            html += '</ul>' +
                '</div>';

            // show panel
            that.insertAdjacentHTML('afterbegin', html);
            html = '';

            // animate panel
            setTimeout(function () {

                events.addClass(that, 'show-panel');

                // scroll to active year
                if (panelType === 'year') {

                    getList = selector('.calendar .panel .call', that);
                    getSelected = selector('.calendar .panel .call.selected', that)[0];

                    getIndex = Math.floor(Array.prototype.slice.call(getList).indexOf(getSelected) / 12);
                    selector('.panel', that)[0].scrollTop = (getIndex * (that.offsetHeight - 10)); // IE, EDGE: scrollTo() not supported for div element

                    getList = '';

                }

            }, 20);

        });

        // close panel
        events.on(document, 'click', '.calendar .panel .call', function () {

            var that, date;

            date = new Date();
            that = events.closest(this, '.calendar')[0];

            getAttr(that, date);
            events.removeClass(that, 'show-panel');

            if (!events.hasClass(this, 'selected')) { // check user selected different date

                if (this.name.length === 4) { // selected year
                    createFnc(that, this.name + ',' + date.getMonth());

                } else { // selected month
                    createFnc(that, date.getFullYear() + ',' + this.name);
                }
            }

            setTimeout(function () {
                that.removeChild(selector('.panel', that)[0]);
            }, 400);

        });

        // close picker
        function pickerCloseFnc(type, target) {

            var allPickers = selector('.calendar-picker .calendar');

            function removePicker(form, picker) {

                form.removeChild(picker);
                events.removeClass(form, 'picker-l picker-t');

            }

            if (type === 'continuous') { // when the user holds the tab button continuously

                events.each(allPickers, function (i) {

                    events.removeClass(this, 'open-ease');
                    setTimeout(function () {

                        var that, form;

                        that = selector('.calendar-picker .calendar')[i];
                        if (that === undefined) { return; }

                        form = that.parentElement;
                        removePicker(form, that);

                    }, 150);

                });

            } else {

                events.each(allPickers, function () {

                    var that, form;

                    that = this;
                    form = that.parentElement;

                    events.removeClass(that, 'open-ease');

                    setTimeout(function () {
                        removePicker(form, that);
                    }, 150);

                });

            }

            // remove events
            events.off('body', 'mousedown.pickerClose');
            events.off(target, 'keydown.pickerClose keyup.pickerChange');

        }

        // show picker
        events.on(document, 'focus', '.calendar-picker > [type="text"]', function () {

            var that, form, offset, html, picker, inputDate, formHeight, pickerWidth, pickerHeight;

            that = this;

            // check duplicate
            form = that.parentElement;
            if (selector('.calendar', form).length > 0) { return; }

            // remove events
            events.off('body', 'mousedown.pickerClose');
            events.off(that, 'keydown.pickerClose keyup.pickerChange');

            // create picker
            html = '<div class="calendar';

            if (events.hasClass(form, 'round')) {
                html += ' round';
            }

            html += ' ease-calendar"></div>';
            form.insertAdjacentHTML('beforeend', html);

            picker = selector('.calendar', form)[0];

            // check value
            inputDate = pickerVal(that);

            if (inputDate === '') {
                createFnc(picker);

            } else {
                createFnc(picker, inputDate);
            }

            setTimeout(function () {

                // check picker position
                offset = form.getBoundingClientRect();

                formHeight = form.offsetHeight;
                pickerWidth = picker.offsetWidth;
                pickerHeight = picker.offsetHeight;

                if (offset.left + pickerWidth + 15 > window.innerWidth) { // 15px: scrollbar size

                    if ((offset.left - (pickerWidth - form.offsetWidth) - 15) > 0) {
                        events.addClass(form, 'picker-l');
                    }

                }

                if (offset.top + parseInt(formHeight + pickerHeight, 10) >= window.innerHeight) {

                    if (offset.top - parseInt(formHeight + pickerHeight, 10) + formHeight > 0) {
                        events.addClass(form, 'picker-t');
                    }

                }

                // show picker
                setTimeout(function () {
                    events.addClass(picker, 'open-ease');
                }, 10);

            }, 0);

            // close events
            events.on('body', 'mousedown.pickerClose', function (ev) {

                // prevent for picker elements
                if (events.closest(ev.target, form)[0] !== undefined) {
                    return;
                }

                if (ev.button !== 2) { // inherited right clicks
                    pickerCloseFnc('default', that);
                }

            });

            events.on(that, 'keydown.pickerClose', function (ev) {

                if (ev.keyCode === 9 || ev.keyCode === 13 || ev.keyCode === 27) { // Tab || Enter || Esc
                    pickerCloseFnc('continuous', that);
                }

            });

            // change event
            events.on(that, 'keyup.pickerChange', function () {

                inputDate = pickerVal(this); // check value

                if (inputDate === '') {
                    createFnc(picker);

                } else {
                    createFnc(picker, inputDate);
                }

            });

        });

        // picker buttons
        events.on(document, 'click', '.calendar-picker .calendar tbody td button', function () {

            var date, day, month, picker, that, form;

            date = new Date();

            picker = events.closest(this, '.calendar-picker')[0];

            that = selector('.calendar', picker)[0];
            form = selector('[type="text"]', picker)[0];

            getAttr(that, date); // get data-date
            date.setDate(this.textContent); // set new day

            // set values to input form
            day = date.getDate().toString();
            if (day.length === 1) { day = '0' + day; }

            month = date.getMonth();
            month += 1;

            month = month.toString();
            if (month.length === 1) { month = '0' + month; }

            if (calendar.dateFormat === 1) {
                form.value = month + '/' + day + '/' + date.getFullYear(); // mm/dd/yyyy

            } else {
                form.value = day + '/' + month + '/' + date.getFullYear(); // dd/mm/yyyy
            }

            // close picker
            pickerCloseFnc('default', form);

        });

        // toggle details
        events.on(document, 'click', '.calendar .toggle-details', function () {

            var that, details, day, i, list, scroll;

            that = events.closest(this, '.calendar')[0];
            details = selector('.details', that)[0];

            if (events.hasClass(that, 'show-details')) {

                events.removeClass(that, 'show-details');

                setTimeout(function () {
                    events.removeClass(details, 'open');
                }, 300);

            } else {

                events.addClass(details, 'open');

                setTimeout(function () {
                    events.addClass(that, 'show-details');
                }, 20);

                scroll = 0;

                day = this.getAttribute('data-day');
                list = selector('.details li', that);

                for (i = 0; i < list.length; i += 1) {

                    if (list[i].getAttribute('data-d') === day) {
                        break;
                    }

                    scroll += list[i].offsetHeight + 20; // 20: margin-bottom size

                }

                selector('ul', details)[0].scrollTop = scroll; // IE, EDGE: scrollTo() not supported for div element

            }

        });

    };

    // Loaders
    events.onload(calendar.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('calendar') > -1) { checkCalendars(); }
    });

}());
