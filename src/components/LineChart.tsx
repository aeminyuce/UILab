import * as React from 'react';
import { useId, useEffect } from 'react';
import { ui } from '@ui';

// assets
import '@less/modules/line-chart';
import '@js/modules/line-chart';

const LineChart = function () {}

interface LineChartHolderProps {

    children?: React.ReactNode,

    x: string[],
    step?: number,
    size?: {
        rows: number,
        rowsHeight: number,
    },
    prefix? : string,
    suffix? : string,
    sep? : '.' | ',',

    showGrid?: boolean,
    showGridRootsOnly?: boolean,
    showGridText?: boolean,
    gridStroke?: number,

    showInfo?: boolean,
    showInfoStats?: boolean,

    className?: string,
    style?: any,

}

const LineChartHolder = function (

    { children, x, step, size, prefix, suffix, sep, showGrid, showGridRootsOnly, showGridText, gridStroke, showInfo, showInfoStats, className, style }:LineChartHolderProps) {

        // settings
        const setShowGrid = showGrid ? showGrid : false;
        const setShowGridRootsOnly = showGridRootsOnly ? showGridRootsOnly : false;
        const setShowGridText = showGridText ? showGridText : false;
        const setGridStoke = gridStroke ? gridStroke : 0;
        const setShowInfo = showInfo ? showInfo : false;
        const setShowInfoStats = showInfoStats ? showInfoStats : false;

        useEffect(() => {

            // values
            ui.lineChart.colors = RandomColors(10);
            ui.lineChart.showGrid = setShowGrid;
            ui.lineChart.showGridRootsOnly = setShowGridRootsOnly;
            ui.lineChart.showGridText = setShowGridText;
            ui.lineChart.gridStroke = setGridStoke;
            ui.lineChart.showInfo = setShowInfo;
            ui.lineChart.showInfoStats = setShowInfoStats;

            // inits
            ui.lineChart.Init();

        }, []); // Runs only first render

        useEffect(() => {

            // inits for loaded charts
            ui.lineChart.Init(ui.lineChart.nameLoaded);

        }, [x]); // Runs when x changed

        const setSize = size ? size.rows + ',' + size.rowsHeight : null;

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-line-chart-holder' + setClassName + ' ui-ease-line-chart';

        return (
            <div
                className={classes} style={style} data-ui-x={x}
                data-ui-size={setSize} data-ui-step={step}
                data-ui-prefix={prefix} data-ui-suffix={suffix} data-ui-sep={sep}>
                    {children}
            </div>
        );
    }

interface LineChartLineProps {

    children?: React.ReactNode,

    name?: string,
    noSelected?: boolean,

    curved?: boolean,
    dotted?: boolean,
    dashed?: boolean,
    filled?: boolean,

    noCircles?: boolean,
    noRepeatedCircles?: boolean,

    onlyRepeated?: boolean,

}

const LineChartLine = function (

    { children, name, noSelected, curved, dotted, dashed, filled, noCircles, noRepeatedCircles, onlyRepeated }:LineChartLineProps) {

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
            <ul
                className={classes} data-ui-name={name} data-ui-no-selected={noSelected} data-ui-type={setType}
                data-ui-no-circles={noCircles} data-ui-no-repeated-circles={noRepeatedCircles} data-ui-only-repeated={onlyRepeated}>
                    {children}
            </ul>
        );
    }

interface LineChartItemsProps {

    y: number[],
    url?: string,

}

const LineChartItems = function (

    { y, url }:LineChartItemsProps) {

        const keyId = useId();

        return (y && Array.isArray(y) &&
            <>
                {
                    y.map((value, i) => {

                        return (
                            <React.Fragment key={keyId + i}>
                                <li data-ui-y={value} data-ui-url={url}></li>
                            </React.Fragment>
                        )

                    })
                }
            </>
        );
    }

const RandomColors = (size: number) => {

    // colors
    let defaultColors = [
        'hsl(199, 88%, 56%)',       // blue
        'hsl(20, 100%, 66%)',       // orange
        'hsl(260, 100%, 70%)',      // purple
        'hsl(347, 100%, 69%)',      // red
        'hsl(180, 48%, 52%)',       // turquoise
        'hsl(42, 100%, 67%)',       // yellow
        'hsl(226, 52.2%, 50%)',     // dark blue
        'hsl(142, 82%, 42%)',       // green
        'hsl(284.9, 69.9%, 70%)',   // light purple
        'hsl(28.2, 100%, 36.3%)',   // brown
        'hsl(210.2, 86.5%, 68%)',   // middle blue
    ];

    const randomColors = [];

    for (let c = 0; c < size; c++) {

        const rand = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));
        randomColors[c] = `rgb(${rand(60, 160)}, ${rand(0, 160)}, ${rand(0, 200)})`;

    }

    return [...defaultColors, ...randomColors];

}

export default Object.assign(LineChart, {
    Holder: LineChartHolder,
    Line: LineChartLine,
    Items: LineChartItems,
});