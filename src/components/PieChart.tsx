import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import '@less/modules/pie-chart';
import '@js/modules/pie-chart';

const PieChart = function () {}

interface PieChartHolderProps {

    children?: React.ReactNode,

    info?: string,

    className?: string,
    style?: any,

}

const PieChartHolder = function (

    { children, info, className, style }:PieChartHolderProps) {

        useEffect(() => {

            // inits
            ui.pieChart.Init();

        }); // Runs every render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-pie-chart' + setClassName + ' ui-ease-pie-chart';

        return (
            <div className={classes} style={style} data-ui-info={info}>
                <ul>
                    {children}
                </ul>
            </div>
        );
    }

interface PieChartItemProps {

    percent: any,
    fill: string,

    customName?: string,
    title?: string,

}

const PieChartItem = function (

    { percent, fill, customName, title }:PieChartItemProps) {

        return (
            <li data-ui-percent={percent} data-ui-custom={customName} data-ui-fill={fill} data-ui-title={title}></li>
        );
    }


export default Object.assign(PieChart, {
    Holder: PieChartHolder,
    Item: PieChartItem,
});