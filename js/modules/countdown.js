/* countdown */

import { ui } from './../core/globals.js';
export default () => ui;

ui.countdown = {

    // targets
    target: 'ui-countdown',

    // main classnames
    nameDay: 'ui-countdown-day',
    nameHour: 'ui-countdown-hour',
    nameMinute: 'ui-countdown-min',
    nameSecond: 'ui-countdown-sec'
};

(() => {

    let countdownTimer;

    ui.countdown.Start = () => {

        const countdown = ui.find('.' + ui.countdown.target);
        if (ui.countdown.length === 0) return;

        const arr = [];

        Array.prototype.forEach.call(countdown,

            (el, i) => {

                const date = new Date();
                const day = ui.find('.' + ui.countdown.nameDay, el)[0];

                if (day !== undefined) {
                    date.setDate(date.getDate() + Number(day.textContent));
                }

                const hour = ui.find('.' + ui.countdown.nameHour, el)[0];

                if (hour !== undefined) {
                    date.setHours(date.getHours() + Number(hour.textContent));
                }

                const minute = ui.find('.' + ui.countdown.nameMinute, el)[0];

                if (minute !== undefined) {
                    date.setMinutes(date.getMinutes() + Number(minute.textContent));
                }

                const sec = ui.find('.' + ui.countdown.nameSecond, el)[0];

                if (sec !== undefined) {
                    date.setSeconds(date.getSeconds() + Number(sec.textContent));
                }

                arr[i] = date.getTime();

            });

        const calc = (ms) => {

            let days = Math.floor(ms / (24 * 60 * 60 * 1000));
            if (days < 0) { days = 0; }

            const daysMs = ms % (24 * 60 * 60 * 1000);

            let hours = Math.floor(daysMs / (60 * 60 * 1000));
            if (hours < 0) { hours = 0; }

            const hoursMs = ms % (60 * 60 * 1000);

            let minutes = Math.floor(hoursMs / (60 * 1000));
            if (minutes < 0) { minutes = 0; }

            const minutesMs = ms % (60 * 1000);

            let sec = Math.floor(minutesMs / 1000) + 1;
            if (sec < 0) { sec = 0; }

            return days + ':' + hours + ':' + minutes + ':' + sec;

        }

        clearInterval(countdownTimer);
        countdownTimer = setInterval(() => {

            Array.prototype.forEach.call(countdown,

                (el, i) => {

                    let dateLeft = calc(arr[i] - new Date());
                    dateLeft = dateLeft.split(':');

                    const day = ui.find('.' + ui.countdown.nameDay, el)[0];
                    if (day !== undefined) {

                        if (dateLeft[0] === '0') {
                            day.textContent = '00';

                        } else {

                            if (dateLeft[0].length === 1) day.textContent = '0' + dateLeft[0];
                            else day.textContent = dateLeft[0];

                        }

                    }

                    const hour = ui.find('.' + ui.countdown.nameHour, el)[0];
                    if (hour !== undefined) {

                        if (dateLeft[1] === '0') {
                            hour.textContent = '00';

                        } else {

                            if (dateLeft[1].length === 1) hour.textContent = '0' + dateLeft[1];
                            else hour.textContent = dateLeft[1];

                        }

                    }

                    const minute = ui.find('.' + ui.countdown.nameMinute, el)[0];
                    if (minute !== undefined) {

                        if (dateLeft[2] === '0') {
                            minute.textContent = '00';

                        } else {

                            if (dateLeft[2].length === 1) minute.textContent = '0' + dateLeft[2];
                            else minute.textContent = dateLeft[2];

                        }

                    }

                    const sec = ui.find('.' + ui.countdown.nameSecond, el)[0];
                    if (sec !== undefined) {

                        if (dateLeft[3] === '0') {
                            sec.textContent = '00';

                        } else {

                            if (dateLeft[3].length === 1) sec.textContent = '0' + dateLeft[3];
                            else sec.textContent = dateLeft[3];

                        }

                    }

                });

        }, 1000);

    };

    // loaders
    ui.onload(ui.countdown.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {
            if (ui.ajax.classNames.indexOf(ui.countdown.target) > -1) ui.countdown.Start();
        });

})();
