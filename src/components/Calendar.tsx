import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';
import Icon from '@components/Icon';
import Form from '@components/Form';

// utils
import SVGLoader from '@utils/SVGLoader';

// assets
const icon_angle_left = require("@icon/general/angle-left.svg") as string;
const icon_arrow_left = require("@icon/general/arrow-left.svg") as string;
const icon_arrow_right = require("@icon/general/arrow-right.svg") as string;
const icon_calendar = require("@icon/general/calendar.svg") as string;

import "@less/modules/calendar";
import "@js/modules/calendar";

const Calendar = function () {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;

        ui.calendar.prevIcon = SVGLoader({src: icon_arrow_left});
        ui.calendar.nextIcon = SVGLoader({src: icon_arrow_right});
        ui.calendar.backIcon = SVGLoader({src: icon_angle_left});

        // init
        ui.calendar.Init();

    }, []); // Runs only first render

    return (
        <>
            <div className="ui-calendar ui-ease-calendar"></div>
        </>
    );
}

interface CalendarPickerProps {

    placeholder?: string,

    className?: string,
    style?: any,

}

const CalendarPicker = function (

    { placeholder, className, style }:CalendarPickerProps) {

        useEffect(() => {

            // icons
            ui.globals.inlineSvg = true;

            ui.calendar.prevIcon = SVGLoader({src: icon_arrow_left});
            ui.calendar.nextIcon = SVGLoader({src: icon_arrow_right});

            // init
            ui.calendar.Init();

        }, []); // Runs only first render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-calendar-picker ui-form-icon-l' + setClassName;

        return (
            <>
                <Form.Input placeholder={placeholder} className={classes} style={style}>
                    <Icon src={icon_calendar} />
                </Form.Input>
            </>
        );
    }


export default Object.assign(Calendar, {
    Picker: CalendarPicker,
});