import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// utils
import { IconArrowToTop } from './utils/assets';

// assets
import '../less/modules/top-button';
import '../js/modules/top-button';

export default function TopButton() {

    useEffect(() => {

        // icons
        ui.topButton.icon = IconArrowToTop;

        // settings
        ui.topButton.stylesTarget = 'ui-circle ui-ease-layout';

    }, []);

    return <></>;

}