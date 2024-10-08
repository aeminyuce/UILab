import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// utils
import { icon_arrow_to_top } from './utils/assets';

// assets
import '../less/modules/top-button';
import '../js/modules/top-button';

export default function TopButton() {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;
        ui.topButton.icon = icon_arrow_to_top;

        // settings
        ui.topButton.stylesTarget = 'ui-circle ui-ease-layout';

    }, []);

    return <></>;

}