import * as React from 'react';
import { ui } from '../js/core/globals';
import config from '/ui.config.js';

// assets
import '../less/modules/top-button';
import '../js/modules/top-button';

export default function TopButton() {

    // settings
    ui.topButton.stylesTarget = config?.topButton?.stylesTarget || ui.topButton.stylesTarget;

    return <></>;

}