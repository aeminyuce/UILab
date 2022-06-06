import React, { useEffect } from "react";

// utils
import JsInits from "utils/JsInits";
import JsIcons from "utils/JsIcons";

// assets
import "style/modules/line-chart";
import "script/modules/line-chart";

export default function LineChart() {

    useEffect(() => {

        JsIcons();
        JsInits();

    }, []); // Runs only first render

    return (
        <>
            <div className="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                <ul className="ui-line-chart">
                    <li data-ui-y="84"></li>
                    <li data-ui-y="56"></li>
                    <li data-ui-y="112"></li>
                    <li data-ui-y="140"></li>
                    <li data-ui-y="28"></li>
                    <li data-ui-y="0"></li>
                    <li data-ui-y="28"></li>
                </ul>
            </div>
        </>
    );
}