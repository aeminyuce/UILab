/*
 UI Calendar JS
 Requires UI JS
*/

ui.calendar = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    dateFormat: 1, // 0: dd/mm/yyyy, 1: mm/dd/yyyy
    startDayofWeek: 1, // 0: Sunday, 1: Monday

    fillWeekends: true, // true: fills dark color to weekends' background

    prevIcon: 'arrow-left', // header's previous button
    nextIcon: 'arrow-right', // header's next button
    backIcon: 'angle-left', // detail's back button

    todayTheme: '', // use themes with hover
    pickerDayTheme: '' // use themes with hover

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout */

    var checkCalendars;

    // first loading
    ui.calendar.Start = function () {

        // get calendar's data-ui-date
        function getAttr(that, date, newDate) {

            var attr = that.getAttribute('data-ui-date');
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

        // get picker value
        function pickerVal(that) {

            if (that.value !== '') {

                var val = that.value.split('/');
                if (val.length === 3 && val[0].length <= 2 && val[1].length <= 2 && val[2].length === 4) {

                    if (!isNaN(val[0]) && !isNaN(val[1]) && !isNaN(val[2])) {

                        if (ui.calendar.dateFormat === 1) {
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

            var date, today, pickerDay, container, html, i, j, todayStyles, pickerDayStyles, sysDays, activeDay, days, prevLastDay, firstDay, lastDay, src, keys, dday, details;

            date = new Date();
            date.setDate(1); // for the prev and next implementations

            pickerDay = '';

            // set new date
            if (newDate !== undefined) {

                if (newDate === 'prev' || newDate === 'next') {


                    if (picker) { // called from picker
                        pickerDay = pickerVal(picker); // check value
                    }

                    getAttr(that, date, newDate); // get data-ui-date

                } else {

                    newDate = newDate.split(',');

                    date.setFullYear(newDate[0]);
                    date.setMonth(newDate[1]);

                    if (newDate[2] !== undefined) { // defined a new day from picker
                        pickerDay = Number(newDate[0]) + ',' +  Number(newDate[1]) + ',' + Number(newDate[2]);
                    }

                }

            } else {
                getAttr(that, date); // get data-ui-date
            }

            // set new data-ui-date
            that.setAttribute('data-ui-date', date.getFullYear() + ',' + (date.getMonth() + 1));

            // create table
            html = '';
            container = ui.find('.calendar-container', that)[0];

            if (container === undefined) {
                html += '<div class="calendar-container ease-layout ease-slow ease-in-out">';
            }

            html += '<table';

            if (ui.calendar.fillWeekends) {
                html += ' class="fill-weekends"';
            }

            html += '>' +
                '<caption>' +
                    '<button type="button" tabindex="-1" class="calendar-prev">' +
                        '<svg class="icon"><use href="#' + ui.calendar.prevIcon + '"/></svg>' +
                    '</button>' +
                    '<span class="calendar-title ease-bg">' +
                        '<button type="button" tabindex="-1" class="calendar-month">' + ui.calendar.months[date.getMonth()] + '</button>' +
                        '<button type="button" tabindex="-1" class="calendar-year">' + date.getFullYear() + '</button>' +
                    '</span>' +
                    '<button type="button" tabindex="-1" class="calendar-next">' +
                        '<svg class="icon"><use href="#' + ui.calendar.nextIcon + '"/></svg>' +
                    '</button>' +
                '</caption>' +
                '<thead>';

            if (ui.calendar.startDayofWeek === 0) { // Sunday

                html += '<th>' + ui.calendar.days[ui.calendar.days.length - 1] + '</th>';

                for (i = 0; i < ui.calendar.days.length - 1; i++) {
                    html += '<th>' + ui.calendar.days[i] + '</th>';
                }

            } else { // Monday

                for (i = 0; i < ui.calendar.days.length; i++) {
                    html += '<th>' + ui.calendar.days[i] + '</th>';
                }

            }

            html += '</thead><tbody>';

            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            if (ui.calendar.startDayofWeek === 0) { // Sunday

                sysDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // don't update to your language
                firstDay = sysDays.indexOf(sysDays[firstDay.getDay()]);

            } else { // Monday

                sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // don't update to your language
                firstDay = sysDays.indexOf(sysDays[firstDay.getDay() - 1]);

            }

            if (firstDay < 1) { firstDay = 7; }

            prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
            days = prevLastDay - (firstDay - 1);

            lastDay = new Date(date.getFullYear(), (date.getMonth() + 1), 0).getDate();

            activeDay = false;
            today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + new Date().getDate();

            for (i = 0; i < 6; i++) {

                html += '<tr>';

                for (j = 0; j < 7; j++) {

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

                            todayStyles = '';

                            if (ui.calendar.todayTheme !== '') {
                                todayStyles = ui.calendar.todayTheme + ' hover';
                            }

                            html += '<td class="today">' +
                                    '<button class="' + todayStyles + '" type="button" tabindex="-1">' + days + '</button>' +
                                '</td>';

                        } else { // other days

                            if (pickerDay !== '') { // defined a new day from picker

                                if (date.getFullYear() + ',' + date.getMonth() + ',' + days === pickerDay) {

                                    pickerDayStyles = '';

                                    if (ui.calendar.pickerDayStyles !== '') {
                                        pickerDayStyles = ui.calendar.pickerDayTheme + ' hover';
                                    }

                                    html += '<td data-ui-day="' + days + '" class="pickerday">' +
                                            '<button class="' + pickerDayStyles + '" type="button" tabindex="-1">' + days + '</button>' +
                                        '</td>';

                                } else {

                                    html += '<td data-ui-day="' + days + '">' +
                                            '<button type="button" tabindex="-1">' + days + '</button>' +
                                        '</td>';
                                }

                            } else {

                                html += '<td data-ui-day="' + days + '">' +
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
            src = that.getAttribute('data-ui-src');
            if (src !== null && src !== '') {

                details = '';

                // get json data with ajax
                ui.ajax({

                    url : src,
                    callback: function (status, response) {

                        if (status === 'success') {

                            response = JSON.parse(response);
                            if (response.length === 'undefined') { return; }

                            for (i = 0; i < response.length; i++) {

                                if (response[i] === null) { return; }

                                if (Number(response[i].year) === date.getFullYear()) {
                                    if (Number(response[i].month) === date.getMonth() + 1) {

                                        // select detailed days
                                        dday = ui.find('[data-ui-day="' + response[i].day + '"]', that);
                                        ui.addClass(dday, 'toggle-details');

                                        // create details html
                                        details += '<li data-ui-d="' + response[i].day + '">' +
                                            '<strong>' + response[i].day + '</strong>' +
                                            '<b>' + response[i].dayName + '</b><br>';

                                        keys = Object.keys(response[i].details);

                                        for (j = 0; j < keys.length; j++) {
                                            details += '<span><i>' + keys[j] + '</i> ' + response[i].details[keys[j]] + '</span>';
                                        }

                                        details += '</li>';

                                    }
                                }

                            }

                            container = ui.find('.calendar-container', that)[0];
                            if (ui.hasClass(that, 'show-details')) {

                                setTimeout(function () {
                                    ui.addClass(ui.find('.details', container), 'open');
                                }, 20);

                            }

                            if (details !== '') {

                                details = '<div class="details">' +
                                            '<button class="toggle-details" type="button" tabindex="-1">' +
                                                '<svg class="icon"><use href="#' + ui.calendar.backIcon + '"/></svg>' +
                                            '</button>' +
                                        '<ul>' + details + '</ul>' +
                                    '</div>';

                                ui.addClass(container, 'has-details'); // enable buttons click event

                            } else {

                                details = '<div class="details empty-details">' +
                                        '<button class="toggle-details" type="button" tabindex="-1">' +
                                            '<svg class="icon"><use href="#' + ui.calendar.backIcon + '"/></svg>' +
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

                                ui.removeClass(container, 'has-details'); // disable buttons click event

                            }

                            container.insertAdjacentHTML('afterbegin', details);
                            details = '';

                        }

                    }

                });

            }

            html = '';
            ui.addClass(that, 'active');

        }

        // ckeck not loaded calendars
        checkCalendars = function () {

            var calendars = ui.find('.calendar:not(.active)');
            if (calendars.length > 0) {

                ui.each(calendars, function () {
                    createFnc(this);
                });

            }

        };
        checkCalendars();

        // Event Listeners
        // calendar navigation
        ui.on(document, 'click', '.calendar-prev,.calendar-next', function () {

            var that, picker, form;

            that = ui.closest(this, '.calendar')[0];
            picker = ui.closest(that, '.calendar-picker')[0]; // check called from picker

            if (ui.hasClass(this, 'calendar-next')) {

                if (picker === undefined) {
                    createFnc(that, 'next');

                } else { // picker

                    form = ui.find('[type="text"]', picker)[0];
                    createFnc(that, 'next', form);

                }

            } else {

                if (picker === undefined) {
                    createFnc(that, 'prev');

                } else { // picker

                    form = ui.find('[type="text"]', picker)[0];
                    createFnc(that, 'prev', form);

                }

            }

        });

        // change month and year with panel
        ui.on(document, 'click', '.calendar-month,.calendar-year', function () {

            var that, date, year, years, month, html, i, panelType, getList, getSelected, getIndex;

            date = new Date();
            that = ui.closest(this, '.calendar')[0];

            getAttr(that, date);

            // create panel
            html = '<div class="panel ease-layout ease-slow ease-in-out">' +
                    '<ul>';

            if (ui.hasClass(this, 'calendar-year')) { // years

                panelType = 'year';

                year = date.getFullYear();
                years = 1920 + (new Date().getFullYear() - 1920) + 100;

                for (i = 1920; i <= years; i++) {

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

                month = ui.calendar.months[date.getMonth()];
                for (i = 0; i < ui.calendar.months.length; i++) {

                    html += '<li><button type="button" tabindex="-1" ';

                    if (month === ui.calendar.months[i]) {
                        html += 'class="call selected" ';

                    } else {
                        html += 'class="call" ';
                    }

                    html += 'name="' + i + '">' + ui.calendar.months[i] + '</button></li>';
                }

            }

            html += '</ul>' +
                '</div>';

            // show panel
            that.insertAdjacentHTML('afterbegin', html);
            html = '';

            // animate panel
            setTimeout(function () {

                ui.addClass(that, 'show-panel');

                // scroll to active year
                if (panelType === 'year') {

                    getList = ui.find('.calendar .panel .call', that);
                    getSelected = ui.find('.calendar .panel .call.selected', that)[0];

                    getIndex = Math.floor(Array.prototype.slice.call(getList).indexOf(getSelected) / 12);
                    ui.find('.panel', that)[0].scrollTop = (getIndex * (that.offsetHeight - 10)); // IE, EDGE: scrollTo() not supported for div element

                    getList = '';

                }

            }, 20);

        });

        // close panel
        ui.on(document, 'click', '.calendar .panel .call', function () {

            var that, date;

            date = new Date();
            that = ui.closest(this, '.calendar')[0];

            getAttr(that, date);
            ui.removeClass(that, 'show-panel');

            if (!ui.hasClass(this, 'selected')) { // check user selected different date

                if (this.name.length === 4) { // selected year
                    createFnc(that, this.name + ',' + date.getMonth());

                } else { // selected month
                    createFnc(that, date.getFullYear() + ',' + this.name);
                }
            }

            setTimeout(function () {
                that.removeChild(ui.find('.panel', that)[0]);
            }, ui.globals.slow);

        });

        // close picker
        function pickerCloseFnc(type, target) {

            var allPickers = ui.find('.calendar-picker .calendar');

            function removePicker(form, picker) {

                form.removeChild(picker);
                ui.removeClass(form, 'picker-l picker-t');

            }

            if (type === 'continuous') { // when the user holds the tab button continuously

                ui.each(allPickers, function (i) {

                    ui.removeClass(this, 'open-ease');
                    setTimeout(function () {

                        var that, form;

                        that = ui.find('.calendar-picker .calendar')[i];
                        if (that === undefined) { return; }

                        form = that.parentElement;
                        removePicker(form, that);

                    }, ui.globals.ease);

                });

            } else {

                ui.each(allPickers, function () {

                    var that, form;

                    that = this;
                    form = that.parentElement;

                    ui.removeClass(that, 'open-ease');

                    setTimeout(function () {
                        removePicker(form, that);
                    }, ui.globals.ease);

                });

            }

            // remove event listeners
            ui.off('body', 'mousedown.ui:pickerClose');
            ui.off(target, 'keydown.ui:pickerClose keyup.ui:pickerChange');

        }

        // show picker
        ui.on(document, 'focus', '.calendar-picker > [type="text"]', function () {

            var that, form, offset, html, picker, inputDate, formHeight, pickerWidth, pickerHeight;

            that = this;

            // check duplicate
            form = that.parentElement;
            if (ui.find('.calendar', form).length > 0) { return; }

            // remove event listeners
            ui.off('body', 'mousedown.ui:pickerClose');
            ui.off(that, 'keydown.ui:pickerClose keyup.ui:pickerChange');

            // create picker
            html = '<div class="calendar';

            if (ui.hasClass(form, 'round')) {
                html += ' round';
            }

            html += ' ease-calendar"></div>';
            form.insertAdjacentHTML('beforeend', html);

            picker = ui.find('.calendar', form)[0];

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
                        ui.addClass(form, 'picker-l');
                    }

                }

                if (offset.top + parseInt(formHeight + pickerHeight, 10) >= window.innerHeight) {

                    if (offset.top - parseInt(formHeight + pickerHeight, 10) + formHeight > 0) {
                        ui.addClass(form, 'picker-t');
                    }

                }

                // show picker
                setTimeout(function () {
                    ui.addClass(picker, 'open-ease');
                }, 10);

            }, 0);

            // close event listeners
            ui.on('body', 'mousedown.ui:pickerClose', function (ev) {

                // prevent for picker elements
                if (ui.closest(ev.target, form)[0] !== undefined) {
                    return;
                }

                if (ev.button !== 2) { // inherited right clicks
                    pickerCloseFnc('default', that);
                }

            });

            ui.on(that, 'keydown.ui:pickerClose', function (ev) {

                if (ev.keyCode === 9 || ev.keyCode === 13 || ev.keyCode === 27) { // Tab || Enter || Esc
                    pickerCloseFnc('continuous', that);
                }

            });

            // change event
            ui.on(that, 'keyup.ui:pickerChange', function () {

                inputDate = pickerVal(this); // check value

                if (inputDate === '') {
                    createFnc(picker);

                } else {
                    createFnc(picker, inputDate);
                }

            });

        });

        // picker buttons
        ui.on(document, 'click', '.calendar-picker .calendar tbody td button', function () {

            var date, day, month, picker, that, form;

            date = new Date();

            picker = ui.closest(this, '.calendar-picker')[0];

            that = ui.find('.calendar', picker)[0];
            form = ui.find('[type="text"]', picker)[0];

            getAttr(that, date); // get data-ui-date
            date.setDate(this.textContent); // set new day

            // set values to input form
            day = date.getDate().toString();
            if (day.length === 1) { day = '0' + day; }

            month = date.getMonth();
            month += 1;

            month = month.toString();
            if (month.length === 1) { month = '0' + month; }

            if (ui.calendar.dateFormat === 1) {
                form.value = month + '/' + day + '/' + date.getFullYear(); // mm/dd/yyyy

            } else {
                form.value = day + '/' + month + '/' + date.getFullYear(); // dd/mm/yyyy
            }

            // close picker
            pickerCloseFnc('default', form);

        });

        // toggle details
        ui.on(document, 'click', '.calendar .toggle-details', function () {

            var that, details, day, i, list, scroll;

            that = ui.closest(this, '.calendar')[0];
            details = ui.find('.details', that)[0];

            if (ui.hasClass(that, 'show-details')) {

                ui.removeClass(that, 'show-details');

                setTimeout(function () {
                    ui.removeClass(details, 'open');
                }, ui.globals.ease * 2);

            } else {

                ui.addClass(details, 'open');

                setTimeout(function () {
                    ui.addClass(that, 'show-details');
                }, 20);

                scroll = 0;

                day = this.getAttribute('data-ui-day');
                list = ui.find('.details li', that);

                for (i = 0; i < list.length; i++) {

                    if (list[i].getAttribute('data-ui-d') === day) {
                        break;
                    }

                    scroll += list[i].offsetHeight + 20; // 20: margin-bottom size

                }

                ui.find('ul', details)[0].scrollTop = scroll; // IE, EDGE: scrollTo() not supported for div element

            }

        });

    };

    // Loaders
    ui.onload(ui.calendar.Start);

    // ajax callback loader
    ui.on(document, 'ui:ajaxCallbacks', function () {
        if (ui.ajax.classNames.indexOf('calendar') > -1) { checkCalendars(); }
    });

}());
