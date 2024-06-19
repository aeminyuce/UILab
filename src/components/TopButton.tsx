import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
const icon_arrow_to_top = '<path d="M12 1.001h240a11 11 0 0 1 11 11 11 11 0 0 1-11 11H12a11 11 0 0 1-11-11 11 11 0 0 1 11-11Zm8.219 140.284 104-104.038a11 11 0 0 1 7.78-3.224 10.991 10.991 0 0 1 7.778 3.224l104 104.038a11 11 0 0 1 0 15.557 11 11 0 0 1-15.555 0l-85.26-85.29v180.687a11 11 0 0 1-11 11 11 11 0 0 1-11-11V71.631l-85.181 85.211a11 11 0 0 1-15.555 0 10.961 10.961 0 0 1-3.225-7.779 10.975 10.975 0 0 1 3.217-7.779Z" />';

import '@ui-less/modules/top-button';
import '@ui-js/modules/top-button';

export default function TopButton() {

    useEffect(() => {

        // icons
        ui.globals.inlineSvg = true;
        ui.topButton.icon = icon_arrow_to_top;

        // settings
        ui.topButton.stylesTarget = 'ui-circle ui-ease-layout ui-theme-sub ui-fill-dark-100';

    }, []); // Runs only first render

    return (
        <></>
    );

}