/*
 Weather JS
 Weather JS requires Selector Js, Events JS
*/

var weather = {

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    graphPath: 'img/weather/' // animation graphics folder

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

        var date, dateText, dateHtml, clockText, clockHtml, minute, hour, day, month, that, graphs, animations, sun, sunPos, sunrise, sunset;

        animations = [];

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
                            animations = [];

                            events.addClass(this, 'loaded');

                            for (i = 0; i < data.length; i++) {

                                if (data[i] === 'clear') { // convert sun to stars
                                    animations.push('stars');

                                } else if (data[i] === 'stars') { // convert stars to sun
                                    animations.push('clear');
                                }

                                if (data.length === 1 && (data[i] === 'cloud' || data[i] === 'fog')) { // add sun and stars for cloudy and foggy weather

                                    animations.push('clear');
                                    animations.push('stars');

                                }

                                if (data[i] === 'cloud-heavy') { // add stars for mostly cloudy weather
                                    animations.push('stars');
                                }

                                if (data.length === 1 && (data[i] === 'clear' || data[i] === 'stars')) { // add shooting star if weather is clear
                                    animations.push('shooting-star');
                                }

                                animations.push(data[i]); // add other animations

                            }

                            // create animations
                            for (i = 0; i < animations.length; i++) {
                                html += '<div class="' + animations[i] + '" style="background-image: url(' + weather.graphPath + animations[i] + '.png);"></div>';
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

            day = date.getDay() - 1;
            dateText = weather.days[day];

            day = day.toString();
            if (day.length === 1) { day = '0' + day; }

            month = date.getMonth();
            month = weather.months[month];

            dateHtml = '<span class="w-dayname">' + dateText + '</span>, ' + month + ' ' + date.getDate() + ', ' + date.getFullYear();
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

            clockHtml = '<span>' + hour + '</span><span>' + minute + '</span>';
            clockText = hour + ':' + minute;

            if (clockLoaded !== clockText) {

                events.each('.w-clock', function () {
                    this.innerHTML = clockHtml;
                });

                // check sunrise and sunset
                graphs = selector('.weather .graphs[data-day]');
                events.each(graphs, function () {

                    sunPos = this.getAttribute('data-day');
                    if (sunPos === null || sunPos === '') { return; }

                    sunPos = sunPos.split(',');
                    if (sunPos.length !== 2) { return; }

                    sunrise = sunPos[0].split(':');
                    if (sunrise.length !== 2) { return; }

                    if (sunrise[0].length === 1) { sunrise[0] = '0' + sunrise[0]; } // sunrise hour
                    if (sunrise[1].length === 1) { sunrise[1] = '0' + sunrise[1]; } // sunrise minute

                    sunset = sunPos[1].split(':');
                    if (sunset.length !== 2) { return; }

                    if (sunset[0].length === 1) { sunset[0] = '0' + sunset[0]; } // sunset hour
                    if (sunset[1].length === 1) { sunset[1] = '0' + sunset[1]; } // sunset minute

                    // convert day or night
                    sun = selector('.clear', this)[0];
                    that = events.closest(this, '.weather')[0];

                    if (((hour === sunrise[0] && minute < sunrise[1]) || hour < sunrise[0]) || ((hour === sunset[0] && minute > sunset[1]) || hour > sunset[0])) { // night

                        events.addClass(that, 'night');

                        // sun positioning
                        if (sun !== undefined) {
                            sun.style.removeProperty('left');
                        }

                    } else { // day

                        events.removeClass(that, 'night');

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
