import React, { useEffect } from "react";
import { ui } from 'ui';

// utils
import SVGLoader from "utils/SVGLoader";

// assets
import icon_angle_left from 'icon/general/angle-left.svg';
import icon_arrow_left from 'icon/general/arrow-left.svg';
import icon_arrow_right from 'icon/general/arrow-right.svg';

import "style/modules/calendar";
import "script/modules/calendar";

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