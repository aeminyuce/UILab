import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// utils
import SVGLoader from "@utils/SVGLoader";

// assets
const icon_angle_left = require("@icon/general/angle-left.svg") as string;
const icon_arrow_left = require("@icon/general/arrow-left.svg") as string;
const icon_arrow_right = require("@icon/general/arrow-right.svg") as string;

import "@less/modules/calendar";
import "@js/modules/calendar";

export default function Calendar() {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;

        ui.calendar.prevIcon = SVGLoader(icon_arrow_left);
        ui.calendar.nextIcon = SVGLoader(icon_arrow_right);
        ui.calendar.backIcon = SVGLoader(icon_angle_left);

        // init
        ui.calendar.Init();

    }, []); // Runs only first render

    return (
        <>
            <div className="ui-calendar ui-ease-calendar"></div>
        </>
    );
}