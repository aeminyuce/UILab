import * as React from 'react';
import { useEffect, Fragment } from 'react';
import { ui } from '../js/core/globals';

// utils
import { LineChartHolderProps, LineChartLineProps, LineChartItemsProps } from './utils/models';

// assets
import '../less/modules/line-chart';
import '../js/modules/line-chart';

const LineChart = function () {}

const LineChartHolder = function (props:LineChartHolderProps) {

    const { children, x, step, size, prefix, suffix, sep, showGrid, showGridRootsOnly, showGridText, gridStroke, showInfo, showInfoStats, className, style } = props;

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

    }, []);

    useEffect(() => {

        // init
        ui.lineChart.Init();

    }, [className, style]);

    useEffect(() => {

        // inits for loaded charts
        ui.lineChart.Init(ui.lineChart.nameLoaded);

    }, [x]);

    const setSize = size ? `${size.rows},${size.rowsHeight}` : null;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-line-chart-holder${setClassName} ui-ease-line-chart`;

    return (
        <div
            className={classes} style={style} data-ui-x={x}
            data-ui-size={setSize} data-ui-step={step}
            data-ui-prefix={prefix} data-ui-suffix={suffix} data-ui-sep={sep}>
                {children}
        </div>
    );

}

const LineChartLine = function (props:LineChartLineProps) {

    const { children, name, noSelected, curved, dotted, dashed, filled, noCircles, noRepeatedCircles, onlyRepeated } = props;

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

const LineChartItems = function (props:LineChartItemsProps) {

    const { y, url } = props;

    return (y && Array.isArray(y) &&
        <>
        {y.map((value: any) => {
            return (
                <Fragment key={value.toString()}>
                    <li data-ui-y={value} data-ui-url={url}></li>
                </Fragment>
            )
        })}
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

    const randomColors: string[] = [];

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