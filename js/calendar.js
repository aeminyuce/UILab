/*
 Calendar JS
 Calendar JS requires Events JS
*/

var calendar = {

    startDayofWeek: 1, // 0: Sunday, 1: Monday

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    prevIcon: 'icon-angle-left',
    nextIcon: 'icon-angle-right'

};

(function () {

    'use strict';
    /*globals document, selector, events,  navigator, ajax, DOMParser */

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

            var date, year, month, today, setDate, getDate, html, i, j, sysDays, activeDay, days, prevLastDay, firstDay, lastDay;

            date = new Date();

            month = date.getMonth();
            today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + date.getDate();

            if (innerDate === undefined) {
                setDate = that.getAttribute('data-date');

            } else { setDate = innerDate; }

            if (setDate !== null && setDate !== '') {

                if (setDate === 'prev') {
                    date.setMonth(month - 1);

                } else if (setDate === 'next') {
                    date.setMonth(month + 1);

                } else {

                    getDate = setDate.split(',');
                    if (getDate.length === 1) { // set only month

                        if (!isNaN(Number(getDate[0])) && getDate[0].length <= 2) {

                            if (getDate[0] === 0) { getDate[0] = 1; }
                            date.setMonth(getDate[0] - 1);

                        }

                    } else if (getDate.length === 2) { // set year and month

                        if (!isNaN(Number(getDate[0])) && getDate[0].length === 4) {
                            if (!isNaN(Number(getDate[1])) && getDate[1].length <= 2) {

                                date.setFullYear(getDate[0]);

                                if (getDate[1] === '0') { getDate[1] = 1; }
                                date.setMonth(getDate[1] - 1);

                            }
                        }

                    }
                }

                month = date.getMonth();

            }

            year = date.getFullYear();

            html = '<table>' +
                        '<caption>' +
                            '<button class="calendar-prev ease-btn">' +
                                '<i class="icon icon-md ' + calendar.prevIcon + '"></i>' +
                            '</button>' +
                            '<span class="calendar-title">' +
                                '<b>' + calendar.months[month] + '</b> ' + year +
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

            firstDay = new Date(year, month, 1);

            if (calendar.startDayofWeek === 0) {

                sysDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // don't update to your language
                firstDay = sysDays.indexOf(sysDays[firstDay.getDay()]);

            } else {

                sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // don't update to your language
                firstDay = sysDays.indexOf(sysDays[firstDay.getDay() - 1]);

            }

            if (firstDay < 1) { firstDay = 7; }

            prevLastDay = new Date(year, month, 0).getDate();
            days = prevLastDay - (firstDay - 1);

            lastDay = new Date(year, (month + 1), 0).getDate();
            activeDay = false;

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

                        if ((year + ' ' + month + ' ' + days) === today) {
                            html += '<td class="today"><b>' + days + '</b><span></span></td>';

                        } else {
                            html += '<td>' + days + '</td>';
                        }

                    } else {
                        html += '<td class="passive">' + days + '</td>';
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

            calendars = selector('.calendar');
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

    };

    // Loaders
    events.onload(calendar.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('calendar') > -1) { checkCalendars(); }
    });

}());
