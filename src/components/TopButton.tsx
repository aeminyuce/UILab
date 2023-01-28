import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// utils
import SVGLoader from '@utils/SVGLoader';

// assets
const icon_arrow_to_top = require("@icon/arrow-to-top.svg") as string;

import '@less/modules/top-button';
import '@js/modules/top-button';

export default function TopButton() {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;
        ui.topButton.icon = SVGLoader({src: icon_arrow_to_top});

        // settings
        ui.topButton.stylesTarget = 'ui-circle ui-ease-layout ui-theme-sub ui-fill-dark-100';

    }, []); // Runs only first render

    return (
        <></>
    );

}