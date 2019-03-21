/*
 Countdown JS
 Countdown JS requires Events JS
*/

var countdown = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax, setInterval, clearInterval */

    var countdownTimer;

    countdown.Start = function () {

        var countdown, arr, calc;

        countdown = selector('.countdown');
        if (countdown.length === 0) { return; }

        arr = [];

        events.each(countdown, function (i) {

            var
                date = new Date(),

                day = selector('.d', this)[0],
                hour = selector('.h', this)[0],
                minute = selector('.m', this)[0],
                sec = selector('.s', this)[0];

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

            events.each(countdown, function (i) {

                var
                    dateLeft = calc(arr[i] - new Date()),

                    day = selector('.d', this)[0],
                    hour = selector('.h', this)[0],
                    minute = selector('.m', this)[0],
                    sec = selector('.s', this)[0];

                dateLeft = dateLeft.split(':');

                if (day !== undefined) { day.textContent = dateLeft[0]; }
                if (hour !== undefined) { hour.textContent = dateLeft[1]; }
                if (minute !== undefined) { minute.textContent = dateLeft[2]; }
                if (sec !== undefined) { sec.textContent = dateLeft[3]; }

            });

        }

        clearInterval(countdownTimer);
        countdownTimer = setInterval(drawFnc, 1000);

    };

    // Loaders
    events.onload(countdown.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('countdown') > -1) { countdown.Start(); }
    });

}());
