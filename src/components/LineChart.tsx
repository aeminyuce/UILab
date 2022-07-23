import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import "@less/modules/line-chart";
import "@js/modules/line-chart";

export default function LineChart() {

    useEffect(() => {

        // inits
        ui.lineChart.Init();

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