/* calendar */

import { ui } from './../core/globals.js';
export default () => ui;

ui.calendar = {

    // targets
    target: 'ui-calendar',
    targetHolder: 'body',

    // main classnames
    nameContainer: 'ui-calendar-container',
    nameTitle: 'ui-calendar-title',
    nameDetails: 'ui-calendar-details',

    namePickerOpened: 'ui-calendar-picker-opened',
    namePicker: 'ui-calendar-picker',
    namePickerTop: 'ui-calendar-picker-t',
    namePickerLeft: 'ui-calendar-picker-l',

    namePanel: 'ui-calendar-panel',
    nameShowPanel: 'ui-calendar-show-panel',
    namePanelCall: 'ui-calendar-panel-call',

    nameMonth: 'ui-calendar-month',
    nameYear: 'ui-calendar-year',

    namePrev: 'ui-calendar-prev',
    nameNext: 'ui-calendar-next',

    nameToday: 'ui-calendar-today',
    namePickerDay: 'ui-calendar-pickerday',
    namePassiveDay: 'ui-calendar-days-passive',

    nameWeekend: 'ui-calendar-fill-weekends',

    nameToggleDetails: 'ui-calendar-toggle-details',
    nameShowDetails: 'ui-calendar-show-details',
    nameHasDetails: 'ui-calendar-has-details',
    nameEmptyDetails: 'ui-calendar-details-empty',

    // outer classnames
    nameHover: 'ui-hover',
    nameRound: 'ui-round',

    // styling classnames
    stylesCalendar: 'ui-ease-calendar',
    stylesTitle: 'ui-ease-bg',

    stylesContainer: 'ui-ease-layout ui-ease-slow ui-ease-in-out',
    stylesPanel: 'ui-ease-layout ui-ease-slow ui-ease-in-out',

    stylesToday: '',
    stylesPickerDay: 'ui-theme-red ui-fill-dark-100',

    stylesDetailScroll: 'ui-scrollbar-faded ui-scrollbar-round',

    // values
    pickerSep: '/',

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    dateFormat: 1, // 0: dd mm yyyy, 1: mm dd yyyy
    startDayofWeek: 1, // 0: Sunday, 1: Monday

    setPrev: 'prev',
    setNext: 'next',

    fillWeekends: true, // true: fills dark color to weekends' background

    calendarPadding: 5,
    scrollbarSize: 15,

    // data attributes
    dataDate: 'data-ui-date',
    dataSrc: 'data-ui-src',

    dataDay: 'data-ui-day',
    dataD: 'data-ui-d',

    // custom events
    eventClose: 'ui:pickerClose',
    pickerChange: 'ui:pickerChange'

};

// first loading
ui.calendar.Start = () => {

    // get calendar's date
    function getAttr(that, date, newDate) {

        let attr = that.getAttribute(ui.calendar.dataDate);
        if (attr !== null && attr !== '') {

            attr = attr.split(',');
            if (attr.length === 1) { // set only month

                if (!isNaN(Number(attr[0])) && attr[0].length <= 2) {

                    if (attr[0] === '0') {
                        attr[0] = 1;
                    }

                    date.setMonth(attr[0] - 1);

                }

            } else if (attr.length === 2) { // set year and month

                if (!isNaN(Number(attr[0])) && attr[0].length === 4) {
                    if (!isNaN(Number(attr[1])) && attr[1].length <= 2) {

                        date.setFullYear(attr[0]);

                        if (attr[1] === '0') {
                            attr[1] = 1;
                        }

                        date.setMonth(attr[1] - 1);

                    }
                }

            }

            if (newDate === undefined) attr = attr.toString();
            else attr = newDate.toString();

            if (attr === ui.calendar.setPrev) date.setMonth(date.getMonth() - 1);
            else if (attr === ui.calendar.setNext) date.setMonth(date.getMonth() + 1);

        }

    }

    // get picker value
    const pickerVal = (that) => {

        if (that.value !== '') {

            const val = that.value.split(ui.calendar.pickerSep);

            if (val.length === 3 && val[0].length <= 2 && val[1].length <= 2 && val[2].length === 4) {

                if (!isNaN(val[0]) && !isNaN(val[1]) && !isNaN(val[2])) {

                    if (ui.calendar.dateFormat === 1) return Number(val[2]) + ',' + Number(val[0] - 1) + ',' + Number(val[1]); // mm dd yyyy
                    return Number(val[2]) + ',' + Number(val[1] - 1) + ',' + Number(val[0]); // dd mm yyyy

                }

            }

            return '';

        }

    }

    // create calendar table
    function createFnc(that, newDate, picker) {

        const date = new Date();
        date.setDate(1); // for the prev and next implementations

        let pickerDay = '';

        // set new date
        if (newDate !== undefined) {

            if (newDate === ui.calendar.setPrev || newDate === ui.calendar.setNext) {

                if (picker) { // called from picker
                    pickerDay = pickerVal(picker); // check value
                }

                getAttr(that, date, newDate); // get date

            } else {

                newDate = newDate.split(',');

                date.setFullYear(newDate[0]);
                date.setMonth(newDate[1]);

                if (newDate[2] !== undefined) { // defined a new day from picker
                    pickerDay = Number(newDate[0]) + ',' + Number(newDate[1]) + ',' + Number(newDate[2]);
                }

            }

        } else getAttr(that, date); // get date

        // set new date
        that.setAttribute(ui.calendar.dataDate, date.getFullYear() + ',' + (date.getMonth() + 1));

        // create table
        let html = '';

        let container = ui.find('.' + ui.calendar.nameContainer, that)[0];

        if (container === undefined) {
            html += '<div class="' + ui.calendar.nameContainer + ' ' + ui.calendar.stylesContainer + '">';
        }

        html += '<table';

        if (ui.calendar.fillWeekends) {
            html += ' class="' + ui.calendar.nameWeekend + '"';
        }

        html += '>' +
        '<caption>' +

            '<button type="button" tabindex="-1" class="' + ui.calendar.namePrev + '">' +
                '<svg class="' + ui.globals.nameIcon + '" viewBox="' + ui.globals.svgIconViewBox + '">' +
                    '<path d="' + ui.assets('iconArrowLeft') + '" />' +
                '</svg>' +
            '</button>' +

            '<span class="' + ui.calendar.nameTitle + ' ' + ui.calendar.stylesTitle + '">' +
                '<button type="button" tabindex="-1" class="' + ui.calendar.nameMonth + '">' + ui.calendar.months[date.getMonth()] + '</button>' +
                '<button type="button" tabindex="-1" class="' + ui.calendar.nameYear + '">' + date.getFullYear() + '</button>' +
            '</span>' +

            '<button type="button" tabindex="-1" class="' + ui.calendar.nameNext + '">' +
                '<svg class="' + ui.globals.nameIcon + '" viewBox="' + ui.globals.svgIconViewBox + '">' +
                    '<path d="' + ui.assets('iconArrowRight') + '" />' +
                '</svg>' +
            '</button>' +

        '</caption>' +
        '<thead>';

        if (ui.calendar.startDayofWeek === 0) { // Sunday
            html += '<th>' + ui.calendar.days[ui.calendar.days.length - 1] + '</th>';
        }

        Array.prototype.forEach.call(ui.calendar.days,

            item => {
                html += '<th>' + item + '</th>';
            });

        html += '</thead>' +
                '<tbody>';

        let sysDays;
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

        if (ui.calendar.startDayofWeek === 0) { // Sunday

            sysDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // don't update to your language
            firstDay = sysDays.indexOf(sysDays[firstDay.getDay()]);

        } else { // Monday

            sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // don't update to your language
            firstDay = sysDays.indexOf(sysDays[firstDay.getDay() - 1]);

        }

        if (firstDay < 1) { firstDay = 7; }

        let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        let days = prevLastDay - (firstDay - 1);

        const lastDay = new Date(date.getFullYear(), (date.getMonth() + 1), 0).getDate();

        let activeDay = false;
        const today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + new Date().getDate();

        for (let i = 0; i < 6; i++) {

            html += '<tr>';

            for (let j = 0; j < 7; j++) {

                if (days > prevLastDay) {

                    days = 1;
                    prevLastDay = lastDay;

                    if (i < 2) activeDay = true;
                    else activeDay = false;

                }

                if (activeDay) {

                    if (date.getFullYear() + ' ' + date.getMonth() + ' ' + days === today) { // today

                        let todayStyles = '';

                        if (ui.calendar.stylesToday !== '') {
                            todayStyles = ui.calendar.stylesToday + ' ' + ui.calendar.nameHover;
                        }

                        html += '<td class="' + ui.calendar.nameToday + '">' +
                                    '<button class="' + todayStyles + '" type="button" tabindex="-1">' + days + '</button>' +
                                '</td>';

                    } else { // other days

                        if (pickerDay !== '') { // defined a new day from picker

                            if (date.getFullYear() + ',' + date.getMonth() + ',' + days === pickerDay) {

                                let pickerDayStyles = '';

                                if (ui.calendar.pickerDayStyles !== '') {
                                    pickerDayStyles = ui.calendar.stylesPickerDay + ' ' + ui.calendar.nameHover;
                                }

                                html += '<td ' + ui.calendar.dataDay + '="' + days + '" class="' + ui.calendar.namePickerDay + '">' +
                                            '<button class="' + pickerDayStyles + '" type="button" tabindex="-1">' + days + '</button>' +
                                        '</td>';

                            } else {

                                html += '<td ' + ui.calendar.dataDay + '="' + days + '">' +
                                            '<button type="button" tabindex="-1">' + days + '</button>' +
                                        '</td>';
                            }

                        } else {

                            html += '<td ' + ui.calendar.dataDay + '="' + days + '">' +
                                        '<button type="button" tabindex="-1">' + days + '</button>' +
                                    '</td>';

                        }

                    }

                } else { // passive days

                    html += '<td class="' + ui.calendar.namePassiveDay + '">' +
                                '<span>' + days + '</span>' +
                            '</td>';
                }

                days += 1;

            }

            html += '</tr>';

        }

        html += '</tbody>' +
            '</table>';

        if (container === undefined) {

            html += '</div>';
            that.insertAdjacentHTML('afterbegin', html);

        } else {

            container.innerHTML = '';
            container.insertAdjacentHTML('afterbegin', html);

        }

        // check details
        const src = that.getAttribute(ui.calendar.dataSrc);
        if (src !== null && src !== '') {

            let details = '';

            // get json data with ajax
            ui.ajax({

                url : src,
                callback: (status, response) => {

                    if (status === 'success') {

                        response = JSON.parse(response);
                        if (response.length === 'undefined') return;

                        Array.prototype.forEach.call(response,

                            item => {

                                if (item === null) return;

                                if (Number(item.year) === date.getFullYear()) {
                                    if (Number(item.month) === date.getMonth() + 1) {

                                        // select detailed days
                                        const dday = ui.find('[' + ui.calendar.dataDay + '="' + item.day + '"]', that);
                                        ui.addClass(dday, ui.calendar.nameToggleDetails);

                                        // create details html
                                        details += '<li ' + ui.calendar.dataD + '="' + item.day + '">' +
                                                        '<strong>' + item.day + '</strong>' +
                                                        '<b>' + item.dayName + '</b><br>';

                                        for (let key in item.details) {

                                            details += '<span>' +
                                                            '<i>' + key + '</i> ' +
                                                            item.details[key] +
                                                        '</span>';

                                        }

                                        details += '</li>';

                                    }
                                }

                            });

                        container = ui.find('.' + ui.calendar.nameContainer, that)[0];

                        if (ui.hasClass(that, ui.calendar.nameShowDetails)) {

                            setTimeout(() => {
                                ui.addClass(ui.find('.' + ui.calendar.nameDetails, container), ui.globals.nameOpen);
                            }, 10);

                        }

                        if (details !== '') {

                            let detailsTemp;

                            detailsTemp = '<div class="' + ui.calendar.nameDetails + '">' +

                                            '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">' +
                                                '<svg class="' + ui.globals.nameIcon + '" viewBox="' + ui.globals.svgIconViewBox + '">' +
                                                    '<path d="' +ui.assets('iconAngleLeft') + '" />' +
                                                '</svg>' +
                                            '</button>' +

                                            '<ul class="' + ui.calendar.stylesDetailScroll + '">' + details + '</ul>' +

                                        '</div>';

                            ui.addClass(container, ui.calendar.nameHasDetails); // enable buttons click event

                            details = detailsTemp;
                            detailsTemp = '';

                        } else {

                            details = '<div class="' + ui.calendar.nameDetails + ' ' + ui.calendar.nameEmptyDetails + '">' +

                                            '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">' +
                                                '<svg class="' + ui.globals.nameIcon + '" viewBox="' + ui.globals.svgIconViewBox + '">' +
                                                    '<path d="' + ui.assets('iconAngleLeft') + '" />' +
                                                '</svg>' +
                                            '</button>' +

                                            '<ul>' +
                                                '<li>' +
                                                    '<strong></strong>' +
                                                    '<b></b><br>' +
                                                    '<span></span>' +
                                                    '<span></span>' +
                                                    '<span></span>' +
                                                '</li>' +
                                            '</ul>' +

                                        '</div>';

                            ui.removeClass(container, ui.calendar.nameHasDetails); // disable buttons click event

                        }

                        container.insertAdjacentHTML('afterbegin', details);
                        details = '';

                    }

                }

            });

        }

        html = '';
        ui.addClass(that, ui.globals.nameActive);

    }

    // ckeck not loaded calendars
    ui.calendar.Init = () => {

        const calendars = ui.find('.' + ui.calendar.target + ':not(.' + ui.globals.nameActive + ')');

        if (calendars.length > 0) {
            Array.prototype.forEach.call(calendars, el => {

                // remove opened panels first
                let panel = ui.find('.' + ui.calendar.namePanel, el)[0];
                if (panel) panel.remove();

                createFnc(el);
            });
        }

    };
    ui.calendar.Init();

    // Event Listeners
    // calendar navigation
    ui.on(document,
        'click',

        '.' + ui.calendar.namePrev + ',.' + ui.calendar.nameNext,

        function () {

            const that = ui.closest(this, '.' + ui.calendar.target)[0];
            const picker = ui.closest(that, '.' + ui.calendar.namePicker)[0]; // check called from picker

            let form;

            if (ui.hasClass(this, ui.calendar.nameNext)) {

                if (picker === undefined) {
                    createFnc(that, ui.calendar.setNext);

                } else { // picker

                    form = ui.find('[type="text"]', picker)[0];
                    createFnc(that, ui.calendar.setNext, form);

                }

            } else {

                if (picker === undefined) {
                    createFnc(that, ui.calendar.setPrev);

                } else { // picker

                    form = ui.find('[type="text"]', picker)[0];
                    createFnc(that, ui.calendar.setPrev, form);

                }

            }

        });

    // change month and year with panel
    ui.on(document,
        'click',

        '.' + ui.calendar.nameMonth + ',.' + ui.calendar.nameYear,

        function () {

            let panelType;

            const date = new Date();
            const that = ui.closest(this, '.' + ui.calendar.target)[0];

            getAttr(that, date);

            // create panel
            let html = '<div class="' + ui.calendar.namePanel + ' ' + ui.calendar.stylesDetailScroll + ' ' + ui.calendar.stylesPanel + '">' +
                        '<ul>';

            if (ui.hasClass(this, ui.calendar.nameYear)) { // years

                panelType = 'year';

                const year = date.getFullYear();
                const years = 1920 + (new Date().getFullYear() - 1920) + 100;

                for (let i = 1920; i <= years; i++) {

                    html += '<li>' +
                                '<button type="button" tabindex="-1" ';

                    if (year === i) {
                        html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.globals.nameSelected + '" ';

                    } else html += 'class="' + ui.calendar.namePanelCall + '" ';

                    html += 'name="' + i + '">' + i + '</button>' +
                        '</li>';

                }

            } else { // months

                panelType = 'month';
                const month = ui.calendar.months[date.getMonth()];

                Array.prototype.forEach.call(ui.calendar.months,

                    (item, i) => {

                        html += '<li>' +
                                    '<button type="button" tabindex="-1" ';

                        if (month === item) {
                            html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.globals.nameSelected + '" ';

                        } else html += 'class="' + ui.calendar.namePanelCall + '" ';

                        html += 'name="' + i + '">' + item + '</button>' +
                            '</li>';

                    });

            }

            html += '</ul>' +
                '</div>';

            // show panel
            that.insertAdjacentHTML('afterbegin', html);
            html = '';

            // animate panel
            setTimeout(() => {

                ui.addClass(that, ui.calendar.nameShowPanel);

                // scroll to active year
                if (panelType === 'year') {

                    let getList = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall, that);
                    const getSelected = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall + '.' + ui.globals.nameSelected, that)[0];

                    const getIndex = Math.floor(Array.prototype.slice.call(getList).indexOf(getSelected) / 12);
                    ui.find('.' + ui.calendar.namePanel, that)[0].scrollTop = (getIndex * (that.offsetHeight - (ui.calendar.calendarPadding * 2))); // IE, EDGE: scrollTo() not supported for div element

                    getList = '';

                }

            }, 10);

        });

    // close panel
    ui.on(document,
        'click',

        '.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall,

        function () {

            const date = new Date();
            const that = ui.closest(this, '.' + ui.calendar.target)[0];

            getAttr(that, date);
            ui.removeClass(that, ui.calendar.nameShowPanel);

            if (!ui.hasClass(this, ui.globals.nameSelected)) { // check user selected different date

                if (this.name.length === 4) { // selected year
                    createFnc(that, this.name + ',' + date.getMonth());

                } else { // selected month
                    createFnc(that, date.getFullYear() + ',' + this.name);
                }
            }

            setTimeout(() => {
                ui.find('.' + ui.calendar.namePanel, that)[0].remove();
            }, ui.globals.slow);

        });

    // close picker
    function pickerCloseFnc(type, target) {

        ui.removeClass(document, ui.calendar.namePickerOpened);
        const allPickers = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target);

        function removePicker(form, picker) {

            picker.remove();
            ui.removeClass(form, ui.calendar.namePickerLeft + ' ' + ui.calendar.namePickerTop);

        }

        if (type === 'continuous') { // when the user holds the tab button continuously

            Array.prototype.forEach.call(allPickers,

                (item, i) => {

                    ui.removeClass(item, ui.globals.nameOpenEase);

                    setTimeout(() => {

                        const that = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target)[i];
                        if (that === undefined) return;

                        const form = that.parentElement;
                        removePicker(form, that);

                    }, ui.globals.ease);

                });

        } else {

            Array.prototype.forEach.call(allPickers,

                item => {

                    const form = item.parentElement;

                    ui.removeClass(item, ui.globals.nameOpenEase);

                    setTimeout(() => {
                        removePicker(form, item);
                    }, ui.globals.ease);

                });

        }

        // remove event listeners
        ui.off(ui.calendar.targetHolder, 'mousedown.' + ui.calendar.eventClose);
        ui.off(target, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.pickerChange);

    }

    // show picker
    ui.on(document,
        'focus',

        '.' + ui.calendar.namePicker + ' > [type="text"]',

        function () {

            // check duplicate
            const form = this.parentElement;
            if (ui.find('.' + ui.calendar.target, form).length > 0) return;

            ui.addClass(document, ui.calendar.namePickerOpened);

            // remove event listeners
            ui.off(ui.calendar.targetHolder, 'mousedown.' + ui.calendar.eventClose);
            ui.off(this, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.pickerChange);

            // create picker
            let html = '<div class="' + ui.calendar.target;

            if (ui.hasClass(form, ui.calendar.nameRound)) {
                html += ' ' + ui.calendar.nameRound;
            }

            html += ' ' + ui.calendar.stylesCalendar + '">' +
                '</div>';

            form.insertAdjacentHTML('beforeend', html);

            const picker = ui.find('.' + ui.calendar.target, form)[0];

            // check value
            let inputDate = pickerVal(this);

            if (inputDate === '') createFnc(picker);
            else createFnc(picker, inputDate);

            // check picker position
            const offset = form.getBoundingClientRect();

            const formHeight = form.offsetHeight;
            const pickerWidth = picker.offsetWidth;
            const pickerHeight = picker.offsetHeight;

            if (offset.left + pickerWidth + ui.calendar.scrollbarSize > window.innerWidth) {

                if ((offset.left - (pickerWidth - form.offsetWidth) - ui.calendar.scrollbarSize) > 0) {
                    ui.addClass(form, ui.calendar.namePickerLeft);
                }

            }

            if (ui.modal !== undefined && ui.closest(this, '.' + ui.modal.targetWin)[0] === undefined) { // prevent vertical positioning when picker in modal!

                if (offset.top + parseInt(formHeight + pickerHeight) >= window.innerHeight) {

                    if (offset.top - parseInt(formHeight + pickerHeight) + formHeight > 0) {
                        ui.addClass(form, ui.calendar.namePickerTop);
                    }

                }

            }

            // show picker
            setTimeout(() => {
                ui.addClass(picker, ui.globals.nameOpenEase);
            }, 10);

            // close event listeners
            ui.on(ui.calendar.targetHolder,
                'mousedown.' + ui.calendar.eventClose,

                (ev) => {

                    // prevent for picker elements
                    if (ui.closest(ev.target, form)[0] !== undefined) return;

                    // inherited right clicks
                    if (ev.button !== 2) pickerCloseFnc('default', this);

                });

            ui.on(this,
                'keydown.' + ui.calendar.eventClose,

                function (ev) {

                    if (ev.keyCode === 9 || ev.keyCode === 13 || ev.keyCode === 27) { // Tab || Enter || Esc
                        pickerCloseFnc('continuous', this);
                    }

                });

            // change event
            ui.on(this,
                'keyup.' + ui.calendar.pickerChange,

                function () {

                    inputDate = pickerVal(this); // check value

                    if (inputDate === '') createFnc(picker);
                    else createFnc(picker, inputDate);

                });

        });

    // picker buttons
    ui.on(document,
        'click',

        '.' + ui.calendar.namePicker + ' .' + ui.calendar.target + ' tbody td button',

        function () {

            const date = new Date();
            const picker = ui.closest(this, '.' + ui.calendar.namePicker)[0];

            const that = ui.find('.' + ui.calendar.target, picker)[0];
            const form = ui.find('[type="text"]', picker)[0];

            getAttr(that, date); // get date
            date.setDate(this.textContent); // set new day

            // set values to input form
            let day = date.getDate().toString();
            if (day.length === 1) day = '0' + day;

            let month = date.getMonth();
            month += 1;

            month = month.toString();
            if (month.length === 1) { month = '0' + month; }

            if (ui.calendar.dateFormat === 1) {
                form.value = month + ui.calendar.pickerSep + day + ui.calendar.pickerSep + date.getFullYear(); // mm dd yyyy

            } else form.value = day + ui.calendar.pickerSep + month + ui.calendar.pickerSep + date.getFullYear(); // dd mm yyyy

            ui.trigger(form, 'keyup'); // trigger change event
            ui.trigger(document, ui.calendar.pickerChange); // set custom event

            // close picker
            pickerCloseFnc('default', form);

        });

    // toggle details
    ui.on(document,
        'click',

        '.' + ui.calendar.target + ' .' + ui.calendar.nameToggleDetails,

        function () {

            const that = ui.closest(this, '.' + ui.calendar.target)[0];
            const details = ui.find('.' + ui.calendar.nameDetails, that)[0];

            if (ui.hasClass(that, ui.calendar.nameShowDetails)) {

                ui.removeClass(that, ui.calendar.nameShowDetails);

                setTimeout(() => {
                    ui.removeClass(details, ui.globals.nameOpen);
                }, ui.globals.ease * 2);

            } else {

                ui.addClass(details, ui.globals.nameOpen);

                setTimeout(() => {
                    ui.addClass(that, ui.calendar.nameShowDetails);
                }, 10);

                let scroll = 0;

                const day = this.getAttribute(ui.calendar.dataDay);
                const list = ui.find('.' + ui.calendar.nameDetails + ' li', that);

                for (let i = 0; i < list.length; i++) {

                    if (list[i].getAttribute(ui.calendar.dataD) === day) { break; }
                    scroll += list[i].offsetHeight + ui.calendar.calendarPadding;

                }

                ui.find('ul', details)[0].scrollTop = scroll; // IE, EDGE: scrollTo() not supported for div element

            }

        });

};

// loaders
ui.onload(ui.calendar.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {
        if (ui.ajax.classNames.indexOf(ui.calendar.target) > -1) ui.calendar.Init();
    });