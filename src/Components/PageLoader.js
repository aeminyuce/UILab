import React, { lazy } from "react";

// assets
import icon_loader_line from 'icon/general/loader-line.svg';

// components
const Icon = lazy(() => import("components/Icon"));

export default function PageLoader() {
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