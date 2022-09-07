import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import "@less/modules/donut-chart";
import "@js/modules/donut-chart";

let DonutChart = function () {}

interface DonutChartHolderProps {

    children?: React.ReactNode,

    msg?: string,

    className?: string,
    style?: any,

}

const DonutChartHolder = function (

    { children, msg, className, style }:DonutChartHolderProps) {

        useEffect(() => {

            // inits
            ui.donutChart.Init();

        }, []); // Runs only first render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-donut-chart' + setClassName + ' ui-ease-donut-chart';

        const bgClasses = 'ui-donut-chart-bg';

        return (
            <>
                <div className={classes} style={style}>
                    {msg &&
                        <>
                            <strong>{msg}</strong>
                        </>
                    }
                    <svg viewBox="0 0 160 160">
                        <circle r="69.85699" cy="80" cx="80" className={bgClasses} />
                        {children}
                    </svg>
                </div>
            </>
        );
    }

interface DonutChartItemProps {

    stroke: string,
    percent: number,

    title?: string,

}

const DonutChartItem = function (

    { stroke, percent, title }:DonutChartItemProps) {

        return (
            <>
                <circle r="69.85699" cy="80" cx="80" stroke={stroke} data-ui-percent={percent} data-ui-title={title} />
            </>
        );
    }


export default Object.assign(DonutChart, {
    Holder: DonutChartHolder,
    Item: DonutChartItem,
});