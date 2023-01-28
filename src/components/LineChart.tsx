import * as React from 'react';
import { useId, useEffect } from 'react';
import { ui } from '@ui';

// utils
import RandomColors from '@utils/RandomColors';

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

    showGrid?: boolean,
    gridStroke?: number,
    showGridText?: boolean,
    showInfo?: boolean,
    showInfoStats?: boolean,
    noRepeatadCircles?: boolean,

    className?: string,
    style?: any,

}

const LineChartHolder = function (

    { children, x, step, size, prefix, suffix, showGrid, gridStroke, showGridText, showInfo, showInfoStats, noRepeatadCircles, className, style }:LineChartHolderProps) {

        // settings
        const setShowGrid = showGrid ? showGrid : false;
        const setGridStoke = gridStroke ? gridStroke : 0;
        const setShowGridText = showGridText ? showGridText : false;
        const setShowInfo = showInfo ? showInfo : false;
        const setShowInfoStats = showInfoStats ? showInfoStats : false;

        const setNoRepeatadCircles = noRepeatadCircles ? noRepeatadCircles : false;

        useEffect(() => {

            // values
            ui.lineChart.colors = RandomColors(10);
            ui.lineChart.showGrid = setShowGrid;
            ui.lineChart.gridStroke = setGridStoke;
            ui.lineChart.showGridText = setShowGridText;
            ui.lineChart.showInfo = setShowInfo;
            ui.lineChart.showInfoStats = setShowInfoStats;

            ui.lineChart.noRepeatadCircles = setNoRepeatadCircles;

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
                data-ui-prefix={prefix} data-ui-suffix={suffix}>
                    {children}
            </div>
        );
    }

interface LineChartLineProps {

    children?: React.ReactNode,

    name?: string,

    curved?: boolean,
    dotted?: boolean,
    dashed?: boolean,
    filled?: boolean,
    noCircles?: boolean,

}

const LineChartLine = function (

    { children, name, curved, dotted, dashed, filled, noCircles }:LineChartLineProps) {

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
            <ul className={classes} data-ui-name={name} data-ui-type={setType} data-ui-no-circles={noCircles}>
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

        const id = useId();

        return (y && Array.isArray(y) &&
            <>
                {
                    y.map((value, i) => {

                        return (
                            <React.Fragment key={id + i}>
                                <li data-ui-y={value} data-ui-url={url}></li>
                            </React.Fragment>
                        )

                    })
                }
            </>
        );
    }

export default Object.assign(LineChart, {
    Holder: LineChartHolder,
    Line: LineChartLine,
    Items: LineChartItems,
});