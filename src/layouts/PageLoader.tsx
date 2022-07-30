import * as React from 'react';
import Icon from '@components/Icon';

// assets
const icon_loader_line = require("@icon/general/loader-line.svg") as string;

export default function () {
    return (
        <>
            <div className="ui-card ui-set-fixed ui-set-all">
                <div className="ui-set-absolute ui-set-c">
                    <Icon src={icon_loader_line} size="xxl" animate="spin"></Icon>
                </div>
            </div>
        </>
    );
}