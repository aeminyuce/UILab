import * as React from 'react';

// imports
import { TimelineProps, TimelineItemProps } from './_Models';

// assets
import '../less/modules/timeline';

const Timeline = function (

    { children, left, hide, className, style }:TimelineProps) {

        // classes
        const setLeft = left ? ' ui-timeline-l' : '';
        const setHide = hide ? ` ui-timeline-no-${hide}` : '';

        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-timeline${setClassName}${setLeft}${setHide}`;

        return (
            <ul className={classes} style={style}>
                {children}
            </ul>
        );
    }

const TimelineItem = function (

    { children, onClick, align, className, style }:TimelineItemProps) {

        // classes
        const setAlign = align ? `ui-timeline-align-${align}` : '';

        const setClassName = className ? ` ${className}` : '';
        const classes = setAlign + setClassName;

        return (
            <li className={classes} style={style} onClick={onClick}>
                {children}
            </li>
        );
    }

export default Object.assign(Timeline, {
    Item: TimelineItem,
});