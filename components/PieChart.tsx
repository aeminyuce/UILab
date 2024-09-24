import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// utils
import { PieChartHolderProps, PieChartItemProps } from './utils/models';

// assets
import '../less/modules/pie-chart';
import '../js/modules/pie-chart';

const PieChart = function () {}

const PieChartHolder = function (

    { children, info, className, style }:PieChartHolderProps) {

        useEffect(() => {

            // inits
            ui.pieChart.Init();

        });

        // classes
        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-pie-chart${setClassName} ui-ease-pie-chart`;

        return (
            <div className={classes} style={style} data-ui-info={info}>
                <ul>
                    {children}
                </ul>
            </div>
        );
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