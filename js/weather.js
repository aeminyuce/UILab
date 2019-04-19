/*
 Weather JS
 Weather JS requires Events JS
*/

var weather = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    graphPath: 'images/weather/' // animation graphics folder

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

        var date, dateText, dateHtml, clockText, clockHtml, minute, hour, day, month, that, graphs, sun, sunrise, sunset, icons;

        // load animation graphics
        loadGraphs = function () {

            var i, html;

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

                                // for converting sun to stars or starts to sun
                                if (data[i] === 'sun') {
                                    html += '<div class="stars ease-position ease-slow2x" style="background-image: url(' + weather.graphPath + 'stars.png);"></div>';
                                }

                                if (data[i] === 'stars') {
                                    html += '<div class="sun ease-position ease-slow2x" style="background-image: url(' + weather.graphPath + 'sun.png);"></div>';
                                }

                                if (data.length === 1 && (data[i] === 'sun' || data[i] === 'stars')) { // add shooting star if wather is clear
                                    html += '<div class="shooting-star" style="background-image: url(' + weather.graphPath + 'shooting-star.png);"></div>';
                                }

                                html += '<div class="' + data[i] + ' ease-position ease-slow2x" style="background-image: url(' + weather.graphPath + data[i] + '.png);"></div>';

                            }

                            this.insertAdjacentHTML('beforeend', html);
                            html = '';

                        }

                    }

                }

            });

        };

        loadGraphs();

        // check date, clock and night
        function dateFnc() {

            // date
            date = new Date();

            day = date.getDay();
            dateText = weather.days[day];

            day = day.toString();
            if (day.length === 1) { day = '0' + day; }

            month = date.getMonth();
            month = weather.months[month];

            dateHtml = '<span class="w-dayname">' + dateText + '</span>, ' + month + ' ' + day + ', ' + date.getFullYear();
            dateText = dateText + ', ' + month + ' ' + day + ', ' + date.getFullYear();

            if (dateLoaded !== dateText) {

                events.each('.w-date', function () {
                    this.innerHTML = dateHtml;
                });

            }

            dateLoaded = dateText;

            // clock
            hour = date.getHours().toString();
            if (hour.length === 1) { hour = '0' + hour; }

            minute = date.getMinutes().toString();
            if (minute.length === 1) { minute = '0' + minute; }

            clockHtml = '<b>' + hour + '</b><b>' + minute + '</b>';
            clockText = hour + ':' + minute;

            if (clockLoaded !== clockText) {

                events.each('.w-clock', function () {
                    this.innerHTML = clockHtml;
                });

                // check sunrise and sunset
                events.each('.w-sunset', function () {

                    that = events.closest(this, '.weather')[0];

                    graphs = selector('.graphs', that)[0];
                    if (graphs === undefined) { return; }

                    sunrise = selector('.w-sunrise', that)[0];
                    if (sunrise === undefined) { return; }

                    sunrise = sunrise.textContent.split(':');

                    if (sunrise[0].length === 1) { sunrise[0] = '0' + sunrise[0]; } // sunrise hour
                    if (sunrise[1].length === 1) { sunrise[1] = '0' + sunrise[1]; } // sunrise minute

                    sunset = this.textContent.split(':');

                    if (sunset[0].length === 1) { sunset[0] = '0' + sunset[0]; } // sunset hour
                    if (sunset[1].length === 1) { sunset[1] = '0' + sunset[1]; } // sunset minute

                    // convert to day or night
                    sun = selector('.sun', graphs)[0];

                    if (((hour === sunrise[0] && minute < sunrise[1]) || hour < sunrise[0]) || ((hour === sunset[0] && minute > sunset[1]) || hour > sunset[0])) { // night

                        events.addClass(graphs, 'night');

                        // convert sun icons to moon
                        icons = selector('.icon-sun', that);

                        events.addClass(icons, 'icon-moon');
                        events.removeClass(icons, 'icon-sun');

                        icons = selector('.icon-cloud-sun', that);

                        events.addClass(icons, 'icon-cloud-moon');
                        events.removeClass(icons, 'icon-cloud-sun');

                        // sun positioning
                        if (sun !== undefined) {
                            sun.style.removeProperty('left');
                        }

                    } else { // day

                        events.removeClass(graphs, 'night');

                        // convert moon icons to sun
                        icons = selector('.icon-moon', that);

                        events.addClass(icons, 'icon-sun');
                        events.removeClass(icons, 'icon-moon');

                        icons = selector('.icon-cloud-moon', that);

                        events.addClass(icons, 'icon-cloud-sun');
                        events.removeClass(icons, 'icon-cloud-moon');

                        // sun positioning
                        if (sun !== undefined) {
                            sun.style.left = parseInt((hour - sunrise[0]) * 100 / (sunset[0] - sunrise[0]), 10) + '%';
                        }

                    }

                });

            }

            clockLoaded = clockText;

        }

        dateFnc();
        setInterval(dateFnc, 1000);

    };

    // Loaders
    events.onload(weather.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('weather') > -1) { loadGraphs(); }
    });

}());
