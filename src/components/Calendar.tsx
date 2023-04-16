import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';
import Icon from '@components/Icon';
import Form from '@components/Form';

// assets
const icon_arrow_left = '<path d="m4.223 124.175 120-119.955a11 11 0 0 1 15.556 0 11 11 0 0 1 0 15.556L38.519 121H251a11 11 0 0 1 11 11 11 11 0 0 1-11 11H38.608l101.168 101.131a11 11 0 0 1 0 15.556 11 11 0 0 1-15.556 0l-120-119.955a11 11 0 0 1-3.223-7.781 11 11 0 0 1 3.226-7.776Z" />';
const icon_arrow_right = '<path d="M12 121h212.48L123.223 19.78a11 11 0 0 1 0-15.556 11 11 0 0 1 15.556 0l120 119.955a11 11 0 0 1 3.223 7.781 11 11 0 0 1-3.223 7.779l-120 119.955a11 11 0 0 1-15.556 0A10.969 10.969 0 0 1 120 251.91a10.961 10.961 0 0 1 3.223-7.779L224.392 143H12a11 11 0 0 1-11-11 11 11 0 0 1 11-11Z" />';
const icon_angle_left = '<path d="M61 131.955a11 11 0 0 1 3.223-7.78l120-119.955a11 11 0 0 1 15.556 0 11 11 0 0 1 0 15.556L87.559 131.955l112.218 112.176a11 11 0 0 1 0 15.556 11 11 0 0 1-15.556 0l-120-119.955A11 11 0 0 1 61 131.955Z" />';
const icon_calendar = 'M12 263a11 11 0 0 1-11-11V28a11 11 0 0 1 11-11h37v-5A11 11 0 0 1 60 1a11 11 0 0 1 11 11v5h122v-5a11 11 0 0 1 11-11 11 11 0 0 1 11 11v5h37a11 11 0 0 1 11 11v224a11 11 0 0 1-11 11Zm11-22h218V95H23ZM241 73V39h-26v5a11 11 0 0 1-11 11 11 11 0 0 1-11-11v-5H71v5a11 11 0 0 1-11 11 11 11 0 0 1-11-11v-5H23v34Z';

import '@less/modules/calendar';
import '@js/modules/calendar';

const Calendar = function () {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;

        ui.calendar.prevIcon = icon_arrow_left;
        ui.calendar.nextIcon = icon_arrow_right;
        ui.calendar.backIcon = icon_angle_left;

        // init
        ui.calendar.Init();

    }, []); // Runs only first render

    return (
        <div className="ui-calendar ui-ease-calendar"></div>
    );
}

interface CalendarPickerProps {

    onChange?: React.ReactEventHandler,
    onInput?: React.ReactEventHandler,
    onBlur?: React.ReactEventHandler,

    name?: string,
    tabIndex?: number,
    value?: any,
    defaultValue?: any,
    placeholder?: string,
    disabled?: boolean,
    autoComplete?: 'on' | 'off' | 'username' | 'current-password' | string,

    myRef?: any,

    id?: any,
    className?: string,
    style?: any,

}

const CalendarPicker = function (

    { onChange, onInput, onBlur, name, tabIndex, value, defaultValue, placeholder, disabled, autoComplete, myRef, id, className, style }:CalendarPickerProps) {

        useEffect(() => {

            // icons
            ui.globals.inlineSvg = true;

            ui.calendar.prevIcon = icon_arrow_left;
            ui.calendar.nextIcon = icon_arrow_right;

            // init
            ui.calendar.Init();

        }, []); // Runs only first render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-calendar-picker ui-form-icon-l' + setClassName;

        return (
            <Form.Input id={id} myRef={myRef} name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} placeholder={placeholder}
                 autoComplete={autoComplete} className={classes} style={style} disabled={disabled}
                 onChange={onChange} onInput={onInput} onBlur={onBlur}>
                    <Icon path src={icon_calendar} />
            </Form.Input>
        );
    }


export default Object.assign(Calendar, {
    Picker: CalendarPicker,
});