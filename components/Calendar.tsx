import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// imports
import Icon from './Icon';
import Form from './Form';
import { icon_arrow_left, icon_arrow_right, icon_angle_left, icon_calendar } from './_Icons';
import { CalendarPickerProps } from './_Models';

// assets
import '../less/modules/calendar';
import '../js/modules/calendar';

const Calendar = function () {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;

        ui.calendar.prevIcon = icon_arrow_left;
        ui.calendar.nextIcon = icon_arrow_right;
        ui.calendar.backIcon = icon_angle_left;

        // init
        ui.calendar.Init();

    }, []);

    return (
        <div className="ui-calendar ui-ease-calendar"></div>
    );
}

const CalendarPicker = function (

    { onChange, onInput, onBlur, name, tabIndex, value, defaultValue, placeholder, disabled, autoComplete, number, numberFloat, required, minlength, maxlength, myRef, id, className, style }:CalendarPickerProps) {

        useEffect(() => {

            // icons
            ui.globals.inlineSvg = true;

            ui.calendar.prevIcon = icon_arrow_left;
            ui.calendar.nextIcon = icon_arrow_right;

            // init
            ui.calendar.Init();

        }, []);

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-calendar-picker ui-form-icon-l' + setClassName;

        return (
            <Form.Input id={id} myRef={myRef} name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} placeholder={placeholder}
                 autoComplete={autoComplete} required={required} className={classes} style={style} disabled={disabled}
                 number={number} numberFloat={numberFloat} minlength={minlength} maxlength={maxlength}
                 onChange={onChange} onInput={onInput} onBlur={onBlur}>
                    <Icon path src={icon_calendar} />
            </Form.Input>
        );
    }

export default Object.assign(Calendar, {
    Picker: CalendarPicker,
});