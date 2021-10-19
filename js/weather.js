/*
 UI Weather JS
 Requires UI JS
*/

ui.weather = {

    // targets
    target: 'ui-weather',

    // main classnames
    nameGraphs: 'ui-graphs',
    nameNight: 'ui-night',
    nameClear: 'ui-clear',

    nameWday: 'ui-w-dayname',
    nameWdate: 'ui-w-date',
    nameWclock: 'ui-w-clock',

    nameAnimatePrefix: 'ui-',

    // helper classnames
    nameLoaded: 'ui-loaded',

    // animations
    animateClear: 'clear',
    animateStars: 'stars',
    animateShootingStar: 'shooting-star',
    animateCloud: 'cloud',
    animateCloudHeavy: 'cloud-heavy',
    animateFog: 'fog',

    // values
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    graphPath: 'img/weather/', // animation graphics folder
    fileType: 'png',

    // data attributes
    dataGraphs: 'data-ui-graphs',
    dataDay: 'data-ui-day'

};

(function () {

    'use strict';
    /*globals document, ui, setInterval */

    var
        dateLoaded,
        clockLoaded,
        loadGraphs,

        re = new RegExp('\\s+\\s'),
        rex = new RegExp('^\\s|\\s+$');

    ui.weather.Start = function () {

        var date, dateText, dateHtml, clockText, clockHtml, minute, hour, day, month, that, graphs, animations, sun, sunPos, sunrise, sunset;

        animations = [];

        // load animation graphics
        loadGraphs = function () {

            var i, html;

            graphs = ui.find('.' + ui.weather.target + ' .' + ui.weather.nameGraphs + ':not(.' + ui.weather.nameLoaded + ')');
            ui.each(graphs,

                function () {

                    var data = this.getAttribute(ui.weather.dataGraphs);
                    if (data !== null && data !== '') {

                        data = data.replace(re, ' ').replace(rex, '');
                        if (data !== '') {

                            data = data.split(' ');
                            if (data.length > 0) {

                                html = '';
                                animations = [];

                                ui.addClass(this, ui.weather.nameLoaded);

                                for (i = 0; i < data.length; i++) {

                                    if (data[i] === ui.weather.animateClear) { // convert sun to stars
                                        animations.push(ui.weather.animateStars);

                                    } else if (data[i] === ui.weather.animateStars) { // convert stars to sun
                                        animations.push(ui.weather.animateClear);
                                    }

                                    if (data.length === 1 && (data[i] === ui.weather.animateCloud || data[i] === ui.weather.animateFog)) { // add sun and stars for cloudy and foggy weather

                                        animations.push(ui.weather.animateClear);
                                        animations.push(ui.weather.animateStars);

                                    }

                                    if (data[i] === ui.weather.animateCloudHeavy) { // add stars for mostly cloudy weather
                                        animations.push(ui.weather.animateStars);
                                    }

                                    if (data.length === 1 && (data[i] === ui.weather.animateClear || data[i] === ui.weather.animateStars)) { // add shooting star if weather is clear
                                        animations.push(ui.weather.animateShootingStar);
                                    }

                                    animations.push(data[i]); // add other animations

                                }

                                // create animations
                                for (i = 0; i < animations.length; i++) {
                                    html += '<div ' +
                                                'class="' + ui.weather.nameAnimatePrefix + animations[i] + '" ' +
                                                'style="background-image: url(' + ui.weather.graphPath + animations[i] + '.' + ui.weather.fileType + ');">' +
                                            '</div>';
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
            if (day === 0) { day = 6; } else { day -= 1; }

            dateText = ui.weather.days[day];

            day = day.toString();
            if (day.length === 1) { day = '0' + day; }

            month = date.getMonth();
            month = ui.weather.months[month];

            dateHtml = '<span class="' + ui.weather.nameWday + '">' + dateText + '</span>, ' + month + ' ' + date.getDate() + ', ' + date.getFullYear();
            dateText = dateText + ', ' + month + ' ' + day + ', ' + date.getFullYear();

            if (dateLoaded !== dateText) {

                ui.each('.' + ui.weather.nameWdate,

                    function () {
                        this.innerHTML = dateHtml;
                    });

            }

            dateLoaded = dateText;

            // clock
            hour = date.getHours().toString();
            if (hour.length === 1) { hour = '0' + hour; } // convert two digits

            minute = date.getMinutes().toString();
            if (minute.length === 1) { minute = '0' + minute; }

            clockHtml = '<span>' + hour + '</span><span>' + minute + '</span>';
            clockText = hour + ':' + minute;

            if (clockLoaded !== clockText) {

                ui.each('.' + ui.weather.nameWclock,

                    function () {
                        this.innerHTML = clockHtml;
                    });

                // check sunrise and sunset
                graphs = ui.find('.' + ui.weather.target + ' .' + ui.weather.nameGraphs + '[' + ui.weather.dataDay + ']');
                ui.each(graphs,

                    function () {

                        sunPos = this.getAttribute(ui.weather.dataDay);
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
                        sun = ui.find('.' + ui.weather.nameClear, this)[0];
                        that = ui.closest(this, '.' + ui.weather.target)[0];

                        if (((hour === sunrise[0] && minute < sunrise[1]) || hour < sunrise[0]) || ((hour === sunset[0] && minute > sunset[1]) || hour > sunset[0])) { // night

                            ui.addClass(that, ui.weather.nameNight);

                            // sun positioning
                            if (sun !== undefined) {
                                sun.style.removeProperty('left');
                            }

                        } else { // day

                            ui.removeClass(that, ui.weather.nameNight);

                            // sun positioning
                            if (sun !== undefined) {
                                sun.style.left = parseInt(hour - sunrise[0]) * 100 / (sunset[0] - sunrise[0]) + '%';
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
    ui.onload(ui.weather.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.weather.target) > -1) {
                loadGraphs();
            }

        });

}());
