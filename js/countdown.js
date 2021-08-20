/*
 UI Countdown JS
 Requires UI JS
*/

ui.countdown = {};

(function () {

    'use strict';
    /*globals document, ui, setInterval, clearInterval */

    var countdownTimer;

    ui.countdown.Start = function () {

        var countdown, arr, calc;

        countdown = ui.find('.countdown');
        if (ui.countdown.length === 0) { return; }

        arr = [];

        ui.each(countdown, function (i) {

            var
                date = new Date(),

                day = ui.find('.d', this)[0],
                hour = ui.find('.h', this)[0],
                minute = ui.find('.m', this)[0],
                sec = ui.find('.s', this)[0];

            if (day !== undefined) { date.setDate(date.getDate() + Number(day.textContent)); }
            if (hour !== undefined) { date.setHours(date.getHours() + Number(hour.textContent)); }
            if (minute !== undefined) { date.setMinutes(date.getMinutes() + Number(minute.textContent)); }
            if (sec !== undefined) { date.setSeconds(date.getSeconds() + Number(sec.textContent)); }

            arr[i] = date.getTime();

        });

        calc = function (ms) {

            var
                days = Math.floor(ms / (24 * 60 * 60 * 1000)),
                daysMs = ms % (24 * 60 * 60 * 1000),

                hours = Math.floor(daysMs / (60 * 60 * 1000)),
                hoursMs = ms % (60 * 60 * 1000),

                minutes = Math.floor(hoursMs / (60 * 1000)),
                minutesMs = ms % (60 * 1000),

                sec = Math.floor(minutesMs / 1000) + 1;

            if (days < 0) { days = 0; }
            if (hours < 0) { hours = 0; }
            if (minutes < 0) { minutes = 0; }
            if (sec < 0) { sec = 0; }

            return days + ':' + hours + ':' + minutes + ':' + sec;

        };

        function drawFnc() {

            ui.each(countdown, function (i) {

                var
                    dateLeft = calc(arr[i] - new Date()),

                    day = ui.find('.d', this)[0],
                    hour = ui.find('.h', this)[0],
                    minute = ui.find('.m', this)[0],
                    sec = ui.find('.s', this)[0];

                dateLeft = dateLeft.split(':');

                if (day !== undefined) {

                    if (dateLeft[0] === '0') { day.textContent = '00'; } else {
                        if (dateLeft[0].length === 1) { day.textContent = '0' + dateLeft[0]; } else { day.textContent = dateLeft[0];}
                    }

                }
                if (hour !== undefined) {

                    if (dateLeft[1] === '0') { hour.textContent = '00'; } else {
                        if (dateLeft[1].length === 1) { hour.textContent = '0' + dateLeft[1]; } else { hour.textContent = dateLeft[1];}
                    }

                }
                if (minute !== undefined) {

                    if (dateLeft[2] === '0') { minute.textContent = '00'; } else {
                        if (dateLeft[2].length === 1) { minute.textContent = '0' + dateLeft[2]; } else { minute.textContent = dateLeft[2];}
                    }

                }
                if (sec !== undefined) {

                    if (dateLeft[3] === '0') { sec.textContent = '00'; } else {
                        if (dateLeft[3].length === 1) { sec.textContent = '0' + dateLeft[3]; } else { sec.textContent = dateLeft[3];}
                    }

                }

            });

        }

        clearInterval(countdownTimer);
        countdownTimer = setInterval(drawFnc, 1000);

    };

    // Loaders
    ui.onload(ui.countdown.Start);

    // ajax callback loader
    ui.on(document, 'ui:ajaxCallbacks', function () {
        if (ui.ajax.classNames.indexOf('countdown') > -1) { ui.countdown.Start(); }
    });

}());
