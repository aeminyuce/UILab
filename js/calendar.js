/*
 Calendar JS
 Calendar JS requires Events JS
*/

var calendar = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    dateFormat : 'mm/dd/yyyy', // mm/dd/yyyy or dd/mm/yyyy
    startDayofWeek: 1, // 0: Sunday, 1: Monday
    
    fillWeekends: true, // true: fills dark color to weekends' background

    prevIcon: 'icon-angle-left', // header's previous button icon
    nextIcon: 'icon-angle-right' // header's next button icon

};

(function () {

    'use strict';
    /*globals document, selector, events,  navigator, setTimeout, ajax, DOMParser */

    var checkCalendars;

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

        var calendars, createFnc;

        createFnc = function (that, innerDate) {

            var date, today, getAttr, html, i, j, sysDays, activeDay, days, prevLastDay, firstDay, lastDay;

            date = new Date();
            getAttr = that.getAttribute('data-date');

            if (getAttr !== null && getAttr !== '') {

                getAttr = getAttr.split(',');
                if (getAttr.length === 1) { // set only month

                    if (!isNaN(Number(getAttr[0])) && getAttr[0].length <= 2) {

                        if (getAttr[0] === 0) { getAttr[0] = 1; }
                        date.setMonth(getAttr[0] - 1);

                    }

                } else if (getAttr.length === 2) { // set year and month

                    if (!isNaN(Number(getAttr[0])) && getAttr[0].length === 4) {
                        if (!isNaN(Number(getAttr[1])) && getAttr[1].length <= 2) {

                            date.setFullYear(getAttr[0]);

                            if (getAttr[1] === '0') { getAttr[1] = 1; }
                            date.setMonth(getAttr[1] - 1);

                        }
                    }

                }

                if (innerDate === undefined) {
                    innerDate = getAttr.toString();
                }

                if (innerDate === 'prev') {
                    date.setMonth(date.getMonth() - 1);

                } else if (innerDate === 'next') {
                    date.setMonth(date.getMonth() + 1);
                }

            }

            that.setAttribute('data-date', date.getFullYear() + ',' + (date.getMonth() + 1));

            html = '<table class="';

            if (calendar.fillWeekends) {
                html += 'fill-weekends ';
            }

            html += 'ease-layout ease-slow ease-in-out">' +
                        '<caption>' +
                            '<button class="calendar-prev ease-btn">' +
                                '<i class="icon icon-md ' + calendar.prevIcon + '"></i>' +
                            '</button>' +
                            '<span class="calendar-title ease-1st-btn">' +
                                '<span class="calendar-month">' + calendar.months[date.getMonth()] + '</span>' +
                                '<span class="calendar-year">' + date.getFullYear() + '</span>' +
                            '</span>' +
                            '<button class="calendar-next ease-btn">' +
                                '<i class="icon icon-md ' + calendar.nextIcon + '"></i>' +
                            '</button>' +
                        '</caption>' +
                    '<thead>';

            for (i = 0; i < calendar.days.length; i += 1) {
                html += '<th>' + calendar.days[i] + '</th>';
            }

            html += '<tbody>';

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

                html += '<tr class="ease-2nd-btn">';

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
                            html += '<td class="today"><button>' + days + '</button><span></span></td>';

                        } else { // other days
                            html += '<td><button>' + days + '</button></td>';
                        }

                    } else { // passive days
                        html += '<td class="passive"><span>' + days + '</span></td>';
                    }

                    days += 1;

                }

                html += '</tr>';

            }

            html += '</tbody>' +
                    '</thead>' +
                '</table>';

            html = parser(html);
            that.innerHTML = html;
            html = '';

            events.addClass(that, 'active');

        };

        checkCalendars = function () {

            calendars = selector('.calendar:not(.active)');
            if (calendars.length > 0) {

                events.each(calendars, function () {
                    createFnc(this);
                });

            }

        };
        checkCalendars();

        // Events
        events.on(document, 'click', '.calendar-prev,.calendar-next', function () {

            var that = events.closest(this, '.calendar')[0];

            if (events.hasClass(this, 'calendar-next')) {
                createFnc(that, 'next');

            } else {
                createFnc(that, 'prev');
            }

        });

        events.on(document, 'click', '.calendar-month,.calendar-year', function () {

            var that, html;

            that = events.closest(this, '.calendar')[0];
            events.addClass(that, 'top-pane');

            html = '<div class="pane ease-layout ease-slow ease-in-out">';

            if (events.hasClass(this, 'calendar-month')) {
                html += 'months';

            } else {
                html += 'years';
            }

            html += '</div>';
            that.insertAdjacentHTML('afterbegin', html);

            setTimeout(function () {
                events.addClass(that, 'show-pane');
            }, 10);

        });

    };

    // Loaders
    events.onload(calendar.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('calendar') > -1) { checkCalendars(); }
    });

}());
