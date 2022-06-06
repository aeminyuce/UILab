import { useEffect } from "react";
import { ui } from 'ui';

// utils
import SVGLoader from "utils/SVGLoader";

// assets
import icon_arrow_to_top from 'icon/general/arrow-to-top.svg';

import "style/modules/top-button";
import "script/modules/top-button";

export default function TopButton() {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;
        ui.topButton.icon = SVGLoader(icon_arrow_to_top);

    }, []); // Runs only first render

}