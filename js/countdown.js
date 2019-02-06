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

        var countdown, j, arr, d, h, m, s;
        countdown = selector('.countdown');

        arr = [];
        for (j = 0; j < countdown.length; j += 1) { arr[j] = []; }

        clearInterval(countdownTimer);
        countdownTimer = setInterval(function () {

            events.each(countdown, function (i) {

                s = selector('.s', this)[0]; // second
                if (s === undefined) { return; }

                arr[i].s = parseInt(s.textContent, 10);

                if (arr[i].s <= 0) {

                    arr[i].s = 59;

                    m = selector('.m', this)[0]; // minute
                    if (m === undefined) { return; }

                    arr[i].m = parseInt(m.textContent, 10);

                    if (arr[i].m <= 0) {

                        arr[i].m = 59;

                        h = selector('.h', this)[0]; // hour
                        if (h === undefined) { return; }

                        arr[i].h = parseInt(h.textContent, 10);

                        if (arr[i].h <= 0) {

                            d = selector('.d', this)[0]; // day
                            if (d === undefined) { return; }
                            arr[i].d = parseInt(d.textContent, 10);

                            if (arr[i].d <= 0) { arr[i].d = 0; return; }
                            arr[i].d -= 1;
                            d.textContent = arr[i].d;

                            arr[i].h = 23;

                        } else { arr[i].h -= 1; }
                        h.textContent = arr[i].h;

                    } else { arr[i].m -= 1; }

                    if (arr[i].m.toString().length === 1) { arr[i].m = '0' + arr[i].m.toString(); }
                    m.textContent = arr[i].m;

                } else { arr[i].s -= 1; }

                if (arr[i].s.toString().length === 1) { arr[i].s = '0' + arr[i].s.toString(); }
                s.textContent = arr[i].s;

            });

        }, 1000);

    };

    // Loaders
    events.onload(countdown.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('countdown') > -1) { countdown.Start(); }
    });

}());
