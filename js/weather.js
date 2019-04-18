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

        var date, dateText, clockText, clockHtml, minute, hour, day, month, night, graphs;

        function dateFnc() {

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

                events.each('.w-date', function () {
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
            clockHtml = '<b>' + hour + '</b><b>' + minute + '</b>';

            if (clockLoaded !== clockText) {

                events.each('.w-clock', function () {
                    this.innerHTML = clockHtml;
                });

                // night
                events.each('.w-sunset', function () {

                    graphs = events.closest(this, '.weather');
                    graphs = selector('.graphs:not(.static)', graphs);

                    if (graphs === undefined) { return; }

                    night = this.textContent.split(':');

                    if (night[0].length === 1) { night[0] = '0' + night[0]; } // sunset hour
                    if (night[1].length === 1) { night[1] = '0' + night[1]; } // sunset minute

                    if ((hour === night[0] && minute > night[1]) || hour > night[0]) { // night
                        events.addClass(graphs, 'night');

                    } else { // day
                        events.removeClass(graphs, 'night');
                    }

                });

            }

            clockLoaded = clockText;

        }

        // check date, clock and night
        dateFnc();
        setInterval(dateFnc, 1000);

        // load animation graphics
        loadGraphs = function () {

            var i, html, staticEffects;

            graphs = selector('.weather .graphs:not(.loaded)');
            events.each(graphs, function () {

                var data = this.getAttribute('data-graphs');
                if (data !== null && data !== '') {

                    data = data.replace(re, ' ').replace(rex, '');
                    if (data !== '') {

                        data = data.split(' ');
                        if (data.length > 0) {

                            html = '';

                            night = false;
                            staticEffects = events.hasClass(this, 'static'); // check static weathers

                            events.addClass(this, 'loaded');

                            if (!staticEffects) {
                                night = events.hasClass(this, 'night');
                            }

                            for (i = 0; i < data.length; i += 1) {

                                if (!staticEffects) { // only dynamic weathers

                                    if (night) { // for converting sun to stars

                                        if (data[i] === 'sun') {
                                            html += '<div class="stars" style="background-image: url(' + weather.graphPath + 'stars.png);"></div>';
                                        }

                                    } else { // for converting starts to sun

                                        if (data[i] === 'stars') {
                                            html += '<div class="sun" style="background-image: url(' + weather.graphPath + 'sun.png);"></div>';
                                        }

                                    }

                                    if (data.length === 1 && (data[i] === 'sun' || data[i] === 'stars')) { // add shooting star if wather is clear
                                        html += '<div class="shooting-star" style="background-image: url(' + weather.graphPath + 'shooting-star.png);"></div>';
                                    }

                                }

                                html += '<div class="' + data[i] + '" style="background-image: url(' + weather.graphPath + data[i] + '.png);"></div>';

                            }

                            this.insertAdjacentHTML('beforeend', html);
                            html = '';

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
