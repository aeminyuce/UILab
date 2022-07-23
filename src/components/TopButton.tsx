import * as React from 'react';
import { useEffect } from "react";
import { ui } from '@js/core/globals';

// utils
import SVGLoader from "@utils/SVGLoader";

// assets
const icon_arrow_to_top = require("@icon/general/arrow-to-top.svg") as string;

import "@less/modules/top-button";
import "@js/modules/top-button";

export default function TopButton() {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;
        ui.topButton.icon = SVGLoader(icon_arrow_to_top);

    }, []); // Runs only first render

    return (
        <></>
    );

}