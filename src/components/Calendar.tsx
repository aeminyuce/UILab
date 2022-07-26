import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';
import Icon from '@components/Icon';

// utils
import SVGLoader from "@utils/SVGLoader";

// assets
const icon_angle_left = require("@icon/general/angle-left.svg") as string;
const icon_arrow_left = require("@icon/general/arrow-left.svg") as string;
const icon_arrow_right = require("@icon/general/arrow-right.svg") as string;
const icon_calendar = require("@icon/general/calendar.svg") as string;

import "@less/modules/calendar";
import "@js/modules/calendar";

export default function Calendar() {

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

interface PickerProps {
    placeholder?: string,
    classNameExt?: string,
}

export function Picker({placeholder, classNameExt}:PickerProps) {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;

        ui.calendar.prevIcon = SVGLoader({src: icon_arrow_left});
        ui.calendar.nextIcon = SVGLoader({src: icon_arrow_right});

        // init
        ui.calendar.Init();

    }, []); // Runs only first render

    const setClassNameExt = classNameExt ? ' ' + classNameExt : '';

    return (
        <>
            <div className={"ui-calendar-picker ui-input ui-form-icon-l" + setClassNameExt}>
                <Icon src={icon_calendar}></Icon>
                <input type="text" placeholder={placeholder}/>
            </div>
        </>
    );
}