import * as React from 'react';
import { useId, useEffect } from 'react';
import { ui } from '@ui';

// assets
import "@less/modules/line-chart";
import "@js/modules/line-chart";

let LineChart = function () {}

interface LineChartHolderProps {

    children?: React.ReactNode,

    x: string[],

    className?: string,
    style?: any,

}

const LineChartHolder = function (

    { children, x, className, style }:LineChartHolderProps) {

        useEffect(() => {

            // values
            ui.lineChart.colors = [
                'hsl(20, 100%, 66%)',
                'hsl(199, 88%, 56%)',
                'hsl(347, 100%, 69%)',
                'hsl(260, 100%, 70%)',
                'hsl(180, 48%, 52%)',
                'hsl(42, 100%, 67%)',
                'hsl(13, 26%, 41%)',
                'hsl(65, 49%, 54%)',
                'hsl(0, 0%, 42%)',
                'hsl(225, 43%, 57%)',
            ];

            ui.lineChart.showGrid = false;
            ui.lineChart.showGridText = true;
            ui.lineChart.showInfo = true;

            // inits
            ui.lineChart.Init();

        }, []); // Runs only first render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-line-chart-holder' + setClassName + ' ui-ease-line-chart';

        return (
            <>
                <div className={classes} style={style} data-ui-x={x}>
                    {children}
                </div>
            </>
        );
    }

interface LineChartLineProps {

    children?: React.ReactNode,

    name?: string,

    curved?: boolean,
    dotted?: boolean,
    dashed?: boolean,
    filled?: boolean,

}

const LineChartLine = function (

    { children, name, curved, dotted, dashed, filled }:LineChartLineProps) {

        // types
        const setCurved = curved ? ' curved' : '';
        const setDotted = dotted ? ' dotted' : '';
        const setDashed = dashed ? ' dashed' : '';
        const setFilled = filled ? ' filled' : '';

        let setType = setCurved + setDotted + setDashed + setFilled;
        setType = setType.replace(/^\s+/g, ''); // remove first spaces

        // classes
        const classes = 'ui-line-chart';

        return (
            <>
                <ul className={classes} data-ui-name={name} data-ui-type={setType}>
                    {children}
                </ul>
            </>
        );
    }

interface LineChartItemsProps {

    y: number[],
    url?: string,

}

const LineChartItems = function (

    { y, url }:LineChartItemsProps) {

        const id = useId();

        return (
            <>
                {y.map((value, i) => {

                    return (
                        <React.Fragment key={id + i}>
                            <li data-ui-y={value} data-ui-url={url}></li>
                        </React.Fragment>
                    )

                })}
            </>
        );
    }

export default Object.assign(LineChart, {
    Holder: LineChartHolder,
    Line: LineChartLine,
    Items: LineChartItems,
});