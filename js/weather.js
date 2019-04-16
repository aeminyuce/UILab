/*
 Weather JS
 Weather JS requires Events JS
*/

var weather = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    graphPath: 'images/weather/', // animation graphics folder

    dateTarget : '.w-date', // use css selectors
    clockTarget : '.w-clock' // use css selectors

};

(function () {

    'use strict';
    /*globals document, selector, events, setInterval, ajax */

    var
        dateLoaded,
        clockLoaded,

        re = new RegExp('\\s+\\s'),
        rex = new RegExp('^\\s|\\s+$'),

        loadGraphs;

    weather.Start = function () {

        function dateFnc() {

            var  dateTarget, clockTarget, date, dateText, clockText, minute, hour, day, month;

            // date
            date = new Date();

            day = date.getDay();
            dateText = weather.days[day];

            day = day.toString();
            if (day.length === 1) { day = '0' + day; }

            month = date.getMonth();
            month = weather.months[month];

            dateText += ', ' + day + ' ' + month + ' ' + date.getFullYear();
            if (dateLoaded !== dateText) {

                dateTarget = selector(weather.dateTarget);

                events.each(dateTarget, function () {
                    this.textContent = dateText;
                });

            }

            dateLoaded = dateText;

            // clock
            hour = date.getHours().toString();
            if (hour.length === 1) { hour = '0' + hour; }

            minute = date.getMinutes().toString();
            if (minute.length === 1) { minute = '0' + minute; }

            clockText = hour + ':' + minute;
            if (clockLoaded !== clockText) {

                clockTarget = selector(weather.clockTarget);

                events.each(clockTarget, function () {
                    this.textContent = clockText;
                });

            }

            clockLoaded = clockText;

        }

        // load date and clock
        dateFnc();
        setInterval(dateFnc, 1000);

        // load animation graphics
        loadGraphs = function () {

            var graphs, i, html;

            graphs = selector('.weather .graphs:not(.loaded)');
            events.each(graphs, function () {

                var data = this.getAttribute('data-graphs');
                if (data !== null && data !== '') {

                    data = data.replace(re, ' ').replace(rex, '');
                    if (data !== '') {

                        data = data.split(' ');
                        if (data.length > 0) {

                            html = '';
                            events.addClass(this, 'loaded');

                            for (i = 0; i < data.length; i += 1) {
                                html += '<div class="' + data[i] + '" style="background-image: url(' + weather.graphPath + data[i] + '.png);"></div>';
                            }

                            this.insertAdjacentHTML('beforeend', html);

                        }

                    }

                }

            });

        };

        loadGraphs();

    };

    // Loaders
    events.onload(weather.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('weather') > -1) { loadGraphs(); }
    });

}());
