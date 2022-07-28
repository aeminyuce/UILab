import * as React from 'react';
import Icon from '@components/Icon';

// assets
const icon_loader_line = require("@icon/general/loader-line.svg") as string;

export default function PageLoader() {
    return (
        <>
            <div className="ui-align-c ui-p-30-v ui-m-30-v">
                <span className="ui-sp-30 ui-m-30-v"></span>
                <Icon src={icon_loader_line} size="xxl" animate="spin"></Icon>
                <span className="ui-sp-30 ui-m-30-v"></span>
            </div>
        </>
    );
}