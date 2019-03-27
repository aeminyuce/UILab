/*
 Calendar JS
 Calendar JS requires Events JS
*/

var calendar = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    dateFormat : 1, // 1: mm/dd/yyyy, 0: dd/mm/yyyy
    startDayofWeek: 1, // 0: Sunday, 1: Monday

    fillWeekends: true, // true: fills dark color to weekends' background

    prevIcon: 'icon-angle-left', // header's previous button icon
    nextIcon: 'icon-angle-right' // header's next button icon

};

(function () {

    'use strict';
    /*globals window, document, selector, events,  navigator, setTimeout, clearTimeout, ajax, DOMParser */

    var
        checkCalendars,

        pickerOpenTimer,
        pickerCloseTimer;

    // parser
    function parser(text) {

        var html;

        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {

            html = document.implementation.createHTMLDocument('');
            html.body.innerHTML = text;

            return html.body.innerHTML;

        }

        parser.item = new DOMParser();

        html = parser.item.parseFromString(text, 'text/html');
        html = html.querySelector('body').innerHTML;

        return html;

    }

    // first loading
    calendar.Start = function () {

        // get calendar's data-date
        function getAttr(that, date, newDate) {

            var attr = that.getAttribute('data-date');
            if (attr !== null && attr !== '') {

                attr = attr.split(',');
                if (attr.length === 1) { // set only month

                    if (!isNaN(Number(attr[0])) && attr[0].length <= 2) {

                        if (attr[0] === 0) { attr[0] = 1; }
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

        // create calendar table
        function createFnc(that, newDate) {

            var date, today, container, html, i, j, sysDays, activeDay, days, prevLastDay, firstDay, lastDay;

            date = new Date();

            // set new date
            if (newDate !== undefined) {

                if (newDate === 'prev' || newDate === 'next') {
                    getAttr(that, date, newDate); // get data-date

                } else {

                    newDate = newDate.split(',');

                    date.setFullYear(newDate[0]);
                    date.setMonth(newDate[1]);

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
                            '<button tabindex="-1" class="calendar-prev">' +
                                '<i class="icon icon-md ' + calendar.prevIcon + '"></i>' +
                            '</button>' +
                            '<span class="calendar-title ease-bg">' +
                                '<button tabindex="-1" class="calendar-month">' + calendar.months[date.getMonth()] + '</button>' +
                                '<button tabindex="-1" class="calendar-year">' + date.getFullYear() + '</button>' +
                            '</span>' +
                            '<button tabindex="-1" class="calendar-next">' +
                                '<i class="icon icon-md ' + calendar.nextIcon + '"></i>' +
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
            today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + date.getDate();

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

                        if ((date.getFullYear() + ' ' + date.getMonth() + ' ' + days) === today) { // today
                            html += '<td class="today"><button tabindex="-1">' + days + '</button><span></span></td>';

                        } else { // other days
                            html += '<td><button tabindex="-1">' + days + '</button></td>';
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

                html = parser(html);
                that.innerHTML = html;

            } else {

                html = parser(html);
                container.innerHTML = html;

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

            var that = events.closest(this, '.calendar')[0];

            if (events.hasClass(this, 'calendar-next')) {
                createFnc(that, 'next');

            } else {
                createFnc(that, 'prev');
            }

        });

        // change month and year with panel
        events.on(document, 'click', '.calendar-month,.calendar-year', function () {

            var that, date, year, years, month, html, i, panelType, getList, getSelected, getIndex;

            date = new Date();
            that = events.closest(this, '.calendar')[0];

            getAttr(that, date);
            events.addClass(that, 'top-panel');

            // create panel
            html = '<div class="panel ease-layout ease-slow ease-in-out">' +
                    '<ul>';

            if (events.hasClass(this, 'calendar-year')) { // years

                panelType = 'year';

                year = date.getFullYear();
                years = 1920 + (new Date().getFullYear() - 1920) + 100;

                for (i = 1920; i <= years; i += 1) {

                    html += '<li><button tabindex="-1" ';

                    if (year === i) {
                        html += 'class="selected" ';
                    }

                    html += 'name="' + i + '">' + i + '</button></li>';

                }

            } else { // months

                panelType = 'month';

                month = calendar.months[date.getMonth()];
                for (i = 0; i < calendar.months.length; i += 1) {

                    html += '<li><button tabindex="-1" ';

                    if (month === calendar.months[i]) {
                        html += 'class="selected" ';
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

                    getList = selector('.panel li button', that);
                    getSelected = selector('.panel li button.selected', that)[0];

                    getIndex = Math.floor(Array.prototype.slice.call(getList).indexOf(getSelected) / 12);
                    selector('.panel', that)[0].scrollTop = (getIndex * (that.offsetHeight - 10)); // IE, EDGE: scrollTo() not supported for div element

                    getList = '';

                }

            }, 20);

        });

        // close panel
        events.on(document, 'click', '.calendar .panel li button', function () {

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
        function pickerCloseFnc(form) {

            var picker = selector('.calendar', form)[0];
            if (picker === undefined) { return; }

            events.removeClass(picker, 'open-ease');

            clearTimeout(pickerCloseTimer);
            pickerCloseTimer = setTimeout(function () {

                form.removeChild(picker);
                events.removeClass(form, 'picker-left picker-top');

            }, 150);

        }

        // show picker
        events.on(document, 'focus', '.text.calendar-picker > [type="text"]', function () {

            var forms, val, form, offset, html, picker, formHeight, pickerWidth, pickerHeight;

            // close all other opened pickers
            forms = selector('.calendar-picker');

            events.each(forms, function () {
                pickerCloseFnc(this);
            });

            // check value
            if (this.value !== '') {

                val = this.value.split('/');
                if (val.length === 3) {
                    console.log('value detected.');
                }

            }

            // create picker
            form = this.parentElement;

            html = '<div class="calendar';

            if (events.hasClass(form, 'rounded')) {
                html += ' rounded';
            }

            html += ' ease-opacity"></div>';
            form.insertAdjacentHTML('beforeend', html);

            picker = selector('.calendar', form)[0];
            createFnc(picker);

            setTimeout(function () {

                // check picker position
                offset = form.getBoundingClientRect();

                formHeight = form.offsetHeight;

                pickerWidth = picker.offsetWidth;
                pickerHeight = picker.offsetHeight;

                if (offset.left + pickerWidth + 15 > window.innerWidth) { // 15px: scrollbar size

                    if ((offset.left - (pickerWidth - form.offsetWidth) - 15) > 0) {
                        events.addClass(form, 'picker-left');
                    }

                }

                if (offset.top + parseInt(formHeight + pickerHeight, 10) >= window.innerHeight) {

                    if (offset.top - parseInt(formHeight + pickerHeight, 10) + formHeight > 0) {
                        events.addClass(form, 'picker-top');
                    }

                }

                // show picker
                clearTimeout(pickerOpenTimer);

                pickerOpenTimer = setTimeout(function () {
                    events.addClass(picker, 'open-ease');
                }, 10);

            }, 0);

            // add close event
            events.on(document, 'mousedown.pickerClose', function (ev) {

                // prevent for picker elements
                if (events.closest(ev.target, '.calendar-picker')[0] !== undefined) {
                    return;
                }

                if (ev.button !== 2) { // inherited right clicks

                    pickerCloseFnc(form);
                    events.off(document, 'mousedown.pickerClose');

                }

            });

        });

        // close picker on blur
        events.on(document, 'blur', '.text.calendar-picker > [type="text"]', function () {

            pickerCloseFnc(this.parentElement);
            events.off(document, 'mousedown.pickerClose');

        });

    };

    // Loaders
    events.onload(calendar.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('calendar') > -1) { checkCalendars(); }
    });

}());
