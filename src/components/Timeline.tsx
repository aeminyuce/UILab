import * as React from 'react';

// assets
import "@less/modules/timeline";

interface TimelineProps {

    children?: React.ReactNode,

    left?: boolean,
    hide?: 'lines' | 'h-lines',

    className?: string,
    style?: any,

}

const Timeline = function (

    { children, left, hide, className, style }:TimelineProps) {

        // classes
        const setLeft = left ? ' ui-timeline-l' : '';
        const setHide = hide ? ' ui-timeline-no-' + hide : '';

        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-timeline' + setClassName + setLeft + setHide;

        return (
            <>
                <ul className={classes} style={style}>
                    {children}
                </ul>
            </>
        );
    }

interface TimeLineItemProps {

    children?: React.ReactNode,

    onClick?: React.ReactEventHandler,

    className?: string,
    style?: any,

}

const TimeLineItem = function (

    { children, onClick, className, style }:TimeLineItemProps) {

        return (
            <>
                <li className={className} style={style} onClick={onClick}>
                    {children}
                </li>
            </>
        );
    }

export default Object.assign(Timeline, {
    Item: TimeLineItem,
});