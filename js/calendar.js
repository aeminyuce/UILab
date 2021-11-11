/*
 UI Calendar JS
 Requires UI JS
*/

ui.calendar = {

    // targets
    target: 'ui-calendar',

    // main classnames
    nameContainer: 'ui-calendar-container',
    nameTitle: 'ui-calendar-title',
    nameDetails: 'ui-calendar-details',

    namePicker: 'ui-calendar-picker',
    namePickerTop: 'ui-picker-t',
    namePickerLeft: 'ui-picker-l',

    namePanel: 'ui-calendar-panel',
    nameShowPanel: 'ui-show-panel',
    namePanelCall: 'ui-panel-call',

    nameMonth: 'ui-calendar-month',
    nameYear: 'ui-calendar-year',

    namePrev: 'ui-calendar-prev',
    nameNext: 'ui-calendar-next',

    nameToday: 'ui-today',
    namePickerDay: 'ui-pickerday',
    namePassiveDay: 'ui-passive',

    nameWeekend: 'ui-fill-weekends',

    nameToggleDetails: 'ui-toggle-details',
    nameShowDetails: 'ui-show-details',
    nameHasDetails: 'ui-has-details',
    nameEmptyDetails: 'ui-empty-details',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameActive: 'ui-active',
    nameSelected: 'ui-selected',

    // outer classnames
    nameIcon: 'ui-icon',
    nameHover: 'ui-hover',
    nameRound: 'ui-round',

    // styling classnames
    stylesCalendar: 'ui-ease-calendar',
    stylesTitle: 'ui-ease-bg',

    stylesContainer: 'ui-ease-layout ui-ease-slow ui-ease-in-out',
    stylesPanel: 'ui-ease-layout ui-ease-slow ui-ease-in-out',

    stylesToday: 'ui-theme-sub ui-fill-dark-100',
    stylesPickerDay: 'ui-theme-red ui-fill-dark-100',

    stylesDetailScroll: 'ui-scrollbar-faded',

    // icons
    prevIcon: 'arrow-left', // header's previous button
    nextIcon: 'arrow-right', // header's next button
    backIcon: 'angle-left', // detail's back button

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
    eventChange: 'ui:pickerChange'

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout */

    var checkCalendars;

    // first loading
    ui.calendar.Start = function () {

        // get calendar's date
        function getAttr(that, date, newDate) {

            var attr = that.getAttribute(ui.calendar.dataDate);

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

                if (newDate === undefined) {
                    attr = attr.toString();

                } else {
                    attr = newDate.toString();
                }

                if (attr === ui.calendar.setPrev) {
                    date.setMonth(date.getMonth() - 1);

                } else if (attr === ui.calendar.setNext) {
                    date.setMonth(date.getMonth() + 1);
                }

            }

        }

        // get picker value
        function pickerVal(that) {

            if (that.value !== '') {

                var val = that.value.split(ui.calendar.pickerSep);

                if (val.length === 3 && val[0].length <= 2 && val[1].length <= 2 && val[2].length === 4) {

                    if (!isNaN(val[0]) && !isNaN(val[1]) && !isNaN(val[2])) {

                        if (ui.calendar.dateFormat === 1) {
                            return Number(val[2]) + ',' + Number(val[0] - 1) + ',' + Number(val[1]); // mm dd yyyy
                        }

                        return Number(val[2]) + ',' + Number(val[1] - 1) + ',' + Number(val[0]); // dd mm yyyy

                    }

                }

                return '';

            }

        }

        // create calendar table
        function createFnc(that, newDate, picker) {

            var date, today, pickerDay, container, html, i, j, todayStyles, pickerDayStyles, sysDays, activeDay, days, prevLastDay, firstDay, lastDay, src, keys, dday, details;

            date = new Date();
            date.setDate(1); // for the prev and next implementations

            pickerDay = '';

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
                        pickerDay = Number(newDate[0]) + ',' +  Number(newDate[1]) + ',' + Number(newDate[2]);
                    }

                }

            } else {
                getAttr(that, date); // get date
            }

            // set new date
            that.setAttribute(ui.calendar.dataDate, date.getFullYear() + ',' + (date.getMonth() + 1));

            // create table
            html = '';
            container = ui.find('.' + ui.calendar.nameContainer, that)[0];

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
                    '<svg class="' + ui.calendar.nameIcon + '"><use href="#' + ui.calendar.prevIcon + '"/></svg>' +
                '</button>' +

                '<span class="' + ui.calendar.nameTitle + ' ' + ui.calendar.stylesTitle + '">' +
                    '<button type="button" tabindex="-1" class="' + ui.calendar.nameMonth + '">' + ui.calendar.months[date.getMonth()] + '</button>' +
                    '<button type="button" tabindex="-1" class="' + ui.calendar.nameYear + '">' + date.getFullYear() + '</button>' +
                '</span>' +

                '<button type="button" tabindex="-1" class="' + ui.calendar.nameNext + '">' +
                    '<svg class="' + ui.calendar.nameIcon + '"><use href="#' + ui.calendar.nextIcon + '"/></svg>' +
                '</button>' +

            '</caption>' +
            '<thead>';

            if (ui.calendar.startDayofWeek === 0) { // Sunday

                html += '<th>' + ui.calendar.days[ui.calendar.days.length - 1] + '</th>';

                for (i = 0; i < ui.calendar.days.length - 1; i++) {
                    html += '<th>' + ui.calendar.days[i] + '</th>';
                }

            } else { // Monday

                for (i = 0; i < ui.calendar.days.length; i++) {
                    html += '<th>' + ui.calendar.days[i] + '</th>';
                }

            }

            html += '</thead>' +
                    '<tbody>';

            firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

            if (ui.calendar.startDayofWeek === 0) { // Sunday

                sysDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // don't update to your language
                firstDay = sysDays.indexOf(sysDays[firstDay.getDay()]);

            } else { // Monday

                sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // don't update to your language
                firstDay = sysDays.indexOf(sysDays[firstDay.getDay() - 1]);

            }

            if (firstDay < 1) { firstDay = 7; }

            prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
            days = prevLastDay - (firstDay - 1);

            lastDay = new Date(date.getFullYear(), (date.getMonth() + 1), 0).getDate();

            activeDay = false;
            today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + new Date().getDate();

            for (i = 0; i < 6; i++) {

                html += '<tr>';

                for (j = 0; j < 7; j++) {

                    if (days > prevLastDay) {

                        days = 1;
                        prevLastDay = lastDay;

                        if (i < 2) {
                            activeDay = true;

                        } else {
                            activeDay = false;
                        }

                    }

                    if (activeDay) {

                        if (date.getFullYear() + ' ' + date.getMonth() + ' ' + days === today) { // today

                            todayStyles = '';

                            if (ui.calendar.stylesToday !== '') {
                                todayStyles = ui.calendar.stylesToday + ' ' + ui.calendar.nameHover;
                            }

                            html += '<td class="' + ui.calendar.nameToday + '">' +
                                        '<button class="' + todayStyles + '" type="button" tabindex="-1">' + days + '</button>' +
                                    '</td>';

                        } else { // other days

                            if (pickerDay !== '') { // defined a new day from picker

                                if (date.getFullYear() + ',' + date.getMonth() + ',' + days === pickerDay) {

                                    pickerDayStyles = '';

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
            src = that.getAttribute(ui.calendar.dataSrc);
            if (src !== null && src !== '') {

                details = '';

                // get json data with ajax
                ui.ajax({

                    url : src,
                    callback: function (status, response) {

                        if (status === 'success') {

                            response = JSON.parse(response);
                            if (response.length === 'undefined') { return; }

                            for (i = 0; i < response.length; i++) {

                                if (response[i] === null) { return; }

                                if (Number(response[i].year) === date.getFullYear()) {
                                    if (Number(response[i].month) === date.getMonth() + 1) {

                                        // select detailed days
                                        dday = ui.find('[' + ui.calendar.dataDay + '="' + response[i].day + '"]', that);
                                        ui.addClass(dday, ui.calendar.nameToggleDetails);

                                        // create details html
                                        details += '<li ' + ui.calendar.dataD + '="' + response[i].day + '">' +
                                                        '<strong>' + response[i].day + '</strong>' +
                                                        '<b>' + response[i].dayName + '</b><br>';

                                        keys = Object.keys(response[i].details);

                                        for (j = 0; j < keys.length; j++) {

                                            details += '<span>' +
                                                            '<i>' + keys[j] + '</i> ' +
                                                            response[i].details[keys[j]] +
                                                        '</span>';

                                        }

                                        details += '</li>';

                                    }
                                }

                            }

                            container = ui.find('.' + ui.calendar.nameContainer, that)[0];

                            if (ui.hasClass(that, ui.calendar.nameShowDetails)) {

                                setTimeout(function () {
                                    ui.addClass(ui.find('.' + ui.calendar.nameDetails, container), ui.calendar.nameOpen);
                                }, 10);

                            }

                            if (details !== '') {

                                details = '<div class="' + ui.calendar.nameDetails + '">' +
                                                '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">' +
                                                    '<svg class="' + ui.calendar.nameIcon + '"><use href="#' + ui.calendar.backIcon + '"/></svg>' +
                                                '</button>' +
                                                '<ul class="' + ui.calendar.stylesDetailScroll + '">' + details + '</ul>' +
                                            '</div>';

                                ui.addClass(container, ui.calendar.nameHasDetails); // enable buttons click event

                            } else {

                                details = '<div class="' + ui.calendar.nameDetails + ' ' + ui.calendar.nameEmptyDetails + '">' +
                                                '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">' +
                                                    '<svg class="' + ui.calendar.nameIcon + '"><use href="#' + ui.calendar.backIcon + '"/></svg>' +
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
            ui.addClass(that, ui.calendar.nameActive);

        }

        // ckeck not loaded calendars
        checkCalendars = function () {

            var calendars = ui.find('.' + ui.calendar.target + ':not(.' + ui.calendar.nameActive + ')');

            if (calendars.length > 0) {

                ui.each(calendars,

                    function () {
                        createFnc(this);
                    });

            }

        };
        checkCalendars();

        // Event Listeners
        // calendar navigation
        ui.on(document,
            'click',

            '.' + ui.calendar.namePrev + ',.' + ui.calendar.nameNext,

            function () {

                var that, picker, form;

                that = ui.closest(this, '.' + ui.calendar.target)[0];
                picker = ui.closest(that, '.' + ui.calendar.namePicker)[0]; // check called from picker

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

                var that, date, year, years, month, html, i, panelType, getList, getSelected, getIndex;

                date = new Date();
                that = ui.closest(this, '.' + ui.calendar.target)[0];

                getAttr(that, date);

                // create panel
                html = '<div class="' + ui.calendar.namePanel + ' ' + ui.calendar.stylesPanel + '">' +
                            '<ul>';

                if (ui.hasClass(this, ui.calendar.nameYear)) { // years

                    panelType = 'year';

                    year = date.getFullYear();
                    years = 1920 + (new Date().getFullYear() - 1920) + 100;

                    for (i = 1920; i <= years; i++) {

                        html += '<li>' +
                                    '<button type="button" tabindex="-1" ';

                        if (year === i) {
                            html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.calendar.nameSelected + '" ';

                        } else {
                            html += 'class="' + ui.calendar.namePanelCall + '" ';
                        }

                        html += 'name="' + i + '">' + i + '</button>' +
                            '</li>';

                    }

                } else { // months

                    panelType = 'month';

                    month = ui.calendar.months[date.getMonth()];
                    for (i = 0; i < ui.calendar.months.length; i++) {

                        html += '<li>' +
                                    '<button type="button" tabindex="-1" ';

                        if (month === ui.calendar.months[i]) {
                            html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.calendar.nameSelected + '" ';

                        } else {
                            html += 'class="' + ui.calendar.namePanelCall + '" ';
                        }

                        html += 'name="' + i + '">' + ui.calendar.months[i] + '</button>' +
                            '</li>';
                    }

                }

                html += '</ul>' +
                    '</div>';

                // show panel
                that.insertAdjacentHTML('afterbegin', html);
                html = '';

                // animate panel
                setTimeout(function () {

                    ui.addClass(that, ui.calendar.nameShowPanel);

                    // scroll to active year
                    if (panelType === 'year') {

                        getList = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall, that);
                        getSelected = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall + '.' + ui.calendar.nameSelected, that)[0];

                        getIndex = Math.floor(Array.prototype.slice.call(getList).indexOf(getSelected) / 12);
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

                var that, date;

                date = new Date();
                that = ui.closest(this, '.' + ui.calendar.target)[0];

                getAttr(that, date);
                ui.removeClass(that, ui.calendar.nameShowPanel);

                if (!ui.hasClass(this, ui.calendar.nameSelected)) { // check user selected different date

                    if (this.name.length === 4) { // selected year
                        createFnc(that, this.name + ',' + date.getMonth());

                    } else { // selected month
                        createFnc(that, date.getFullYear() + ',' + this.name);
                    }
                }

                setTimeout(function () {
                    that.removeChild(ui.find('.' + ui.calendar.namePanel, that)[0]);
                }, ui.globals.slow);

            });

        // close picker
        function pickerCloseFnc(type, target) {

            var allPickers = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target);

            function removePicker(form, picker) {

                form.removeChild(picker);
                ui.removeClass(form, ui.calendar.namePickerLeft + ' ' + ui.calendar.namePickerTop);

            }

            if (type === 'continuous') { // when the user holds the tab button continuously

                ui.each(allPickers,

                    function (i) {

                        ui.removeClass(this, ui.calendar.nameOpenEase);

                        setTimeout(function () {

                            var that, form;

                            that = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target)[i];
                            if (that === undefined) { return; }

                            form = that.parentElement;
                            removePicker(form, that);

                        }, ui.globals.ease);

                    });

            } else {

                ui.each(allPickers,

                    function () {

                        var that, form;

                        that = this;
                        form = that.parentElement;

                        ui.removeClass(that, ui.calendar.nameOpenEase);

                        setTimeout(function () {
                            removePicker(form, that);
                        }, ui.globals.ease);

                    });

            }

            // remove event listeners
            ui.off('body', 'mousedown.' + ui.calendar.eventClose);
            ui.off(target, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.eventChange);

        }

        // show picker
        ui.on(document,
            'focus',

            '.' + ui.calendar.namePicker + ' > [type="text"]',

            function () {

                var that, form, offset, html, picker, inputDate, formHeight, pickerWidth, pickerHeight;

                that = this;

                // check duplicate
                form = that.parentElement;
                if (ui.find('.' + ui.calendar.target, form).length > 0) { return; }

                // remove event listeners
                ui.off('body', 'mousedown.' + ui.calendar.eventClose);
                ui.off(that, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.eventChange);

                // create picker
                html = '<div class="' + ui.calendar.target;

                if (ui.hasClass(form, ui.calendar.nameRound)) {
                    html += ' ' + ui.calendar.nameRound;
                }

                html += ' ' + ui.calendar.stylesCalendar + '">' +
                    '</div>';

                form.insertAdjacentHTML('beforeend', html);

                picker = ui.find('.' + ui.calendar.target, form)[0];

                // check value
                inputDate = pickerVal(that);

                if (inputDate === '') {
                    createFnc(picker);

                } else {
                    createFnc(picker, inputDate);
                }

                // check picker position
                offset = form.getBoundingClientRect();

                formHeight = form.offsetHeight;

                pickerWidth = picker.offsetWidth;
                pickerHeight = picker.offsetHeight;

                if (offset.left + pickerWidth + ui.calendar.scrollbarSize > window.innerWidth) {

                    if ((offset.left - (pickerWidth - form.offsetWidth) - ui.calendar.scrollbarSize) > 0) {
                        ui.addClass(form, ui.calendar.namePickerLeft);
                    }

                }

                if (offset.top + parseInt(formHeight + pickerHeight) >= window.innerHeight) {

                    if (offset.top - parseInt(formHeight + pickerHeight) + formHeight > 0) {
                        ui.addClass(form, ui.calendar.namePickerTop);
                    }

                }

                // show picker
                setTimeout(function () {
                    ui.addClass(picker, ui.calendar.nameOpenEase);
                }, 10);

                // close event listeners
                ui.on('body',
                    'mousedown.' + ui.calendar.eventClose,

                    function (ev) {

                        // prevent for picker elements
                        if (ui.closest(ev.target, form)[0] !== undefined) {
                            return;
                        }

                        if (ev.button !== 2) { // inherited right clicks
                            pickerCloseFnc('default', that);
                        }

                    });

                ui.on(that,
                    'keydown.' + ui.calendar.eventClose,

                    function (ev) {

                        if (ev.keyCode === 9 || ev.keyCode === 13 || ev.keyCode === 27) { // Tab || Enter || Esc
                            pickerCloseFnc('continuous', that);
                        }

                    });

                // change event
                ui.on(that,
                    'keyup.' + ui.calendar.eventChange,

                    function () {

                        inputDate = pickerVal(this); // check value

                        if (inputDate === '') {
                            createFnc(picker);

                        } else {
                            createFnc(picker, inputDate);
                        }

                    });

            });

        // picker buttons
        ui.on(document,
            'click',

            '.' + ui.calendar.namePicker + ' .' + ui.calendar.target + ' tbody td button',

            function () {

                var date, day, month, picker, that, form;

                date = new Date();

                picker = ui.closest(this, '.' + ui.calendar.namePicker)[0];

                that = ui.find('.' + ui.calendar.target, picker)[0];
                form = ui.find('[type="text"]', picker)[0];

                getAttr(that, date); // get date
                date.setDate(this.textContent); // set new day

                // set values to input form
                day = date.getDate().toString();
                if (day.length === 1) { day = '0' + day; }

                month = date.getMonth();
                month += 1;

                month = month.toString();
                if (month.length === 1) { month = '0' + month; }

                if (ui.calendar.dateFormat === 1) {
                    form.value = month + ui.calendar.pickerSep + day + ui.calendar.pickerSep + date.getFullYear(); // mm dd yyyy

                } else {
                    form.value = day + ui.calendar.pickerSep + month + ui.calendar.pickerSep + date.getFullYear(); // dd mm yyyy
                }

                // close picker
                pickerCloseFnc('default', form);

            });

        // toggle details
        ui.on(document,
            'click',

            '.' + ui.calendar.target + ' .' + ui.calendar.nameToggleDetails,

            function () {

                var that, details, day, i, list, scroll;

                that = ui.closest(this, '.' + ui.calendar.target)[0];
                details = ui.find('.' + ui.calendar.nameDetails, that)[0];

                if (ui.hasClass(that, ui.calendar.nameShowDetails)) {

                    ui.removeClass(that, ui.calendar.nameShowDetails);

                    setTimeout(function () {
                        ui.removeClass(details, ui.calendar.nameOpen);
                    }, ui.globals.ease * 2);

                } else {

                    ui.addClass(details, ui.calendar.nameOpen);

                    setTimeout(function () {
                        ui.addClass(that, ui.calendar.nameShowDetails);
                    }, 10);

                    scroll = 0;

                    day = this.getAttribute(ui.calendar.dataDay);
                    list = ui.find('.' + ui.calendar.nameDetails + ' li', that);

                    for (i = 0; i < list.length; i++) {

                        if (list[i].getAttribute(ui.calendar.dataD) === day) {
                            break;
                        }

                        scroll += list[i].offsetHeight + ui.calendar.calendarPadding;

                    }

                    ui.find('ul', details)[0].scrollTop = scroll; // IE, EDGE: scrollTo() not supported for div element

                }

            });

    };

    // Loaders
    ui.onload(ui.calendar.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.calendar.target) > -1) {
                checkCalendars();
            }

        });

}());
