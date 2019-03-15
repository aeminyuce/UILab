/*
 Calendar JS
 Calendar JS requires Events JS
*/

var calendar = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    prevIcon: 'icon-angle-left',
    nextIcon: 'icon-angle-right'

};

(function () {

    'use strict';
    /*globals selector, events */

    calendar.Start = function () {

        var calendars, sysDays;

        calendars = selector('.calendar');
        if (calendars.length > 0) {

            sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

            events.each(calendars, function () {

                var html, d, i, j, firstDay, monthLength;
                d = new Date();

                html = '<table>' +
                            '<caption>' +
                                '<button class="calendar-prev ease-btn">' +
                                    '<i class="icon icon-md ' + calendar.prevIcon + '"></i>' +
                                '</button>' +
                                '<span class="calendar-title">' +
                                    '<b>' + calendar.months[d.getMonth()] + '</b> ' + d.getFullYear() +
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

                firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
                console.log('ik gün:' + sysDays[firstDay.getDay() - 1]);
                console.log('ilk gün kaçıncı tdden başlayacak:' + sysDays.indexOf(sysDays[firstDay.getDay() - 1]));
                
                monthLength = new Date(d.getFullYear(), (d.getMonth() + 1), 0).getDate();

                for (i = 0; i < Math.ceil(monthLength / 7); i += 1) {

                    html += '<tr>';

                    for (j = 0; j < 7; j += 1) {
                        html += '<td>' + j + '</td>';
                    }

                    html += '</tr>';

                }

                html += '</tbody>' +
                        '</thead>' +
                    '</table>';

                this.insertAdjacentHTML('afterbegin', html);

            });

        }


    };

    // Loaders
    events.onload(calendar.Start);

}());
