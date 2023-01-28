import * as React from 'react';
import Icon from '@components/Icon';
import Card from '@components/Card';

// assets
const icon_loader_line = require("@icon/loader-line.svg") as string;

export default function () {
    return (
        <>
            <Card className="ui-set-fixed ui-set-all">
                <div className="ui-set-absolute ui-set-c">
                    <Icon src={icon_loader_line} size="xxl" animate="spin" />
                </div>
            </Card>
        </>
    );
}