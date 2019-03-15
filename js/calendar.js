/*
 Calendar JS
 Calendar JS requires Events JS
*/

var calendar = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

};

(function () {

    'use strict';
    /*globals selector, events */

    calendar.Start = function () {

        var calendars = selector('.calendar');
        if (calendars.length > 0) {

            events.each(calendars, function () {

                var table, d, caption, html;

                table = selector('table', this)[0];
                if (table === undefined) { return; } // check the table html

                d = new Date();

                // create title
                caption = selector('caption', this)[0];
                if (caption !== undefined) {

                    html = '<span class="calendar-title">' +
                            '<b>' + calendar.months[d.getMonth()] + '</b> ' + d.getFullYear() +
                        '</span>';

                    caption.insertAdjacentHTML('beforeend', html);

                }

            });

        }


    };

    // Loaders
    events.onload(calendar.Start);

}());
