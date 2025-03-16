import * as React from 'react';

// utils
import { TimelineProps, TimelineItemProps } from './utils/models';

// assets
import '../less/modules/timeline';

const Timeline = function (props:TimelineProps) {

    const { children, left, hide, className, style } = props;

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

const TimelineItem = function (props:TimelineItemProps) {

    const { children, onClick, align, className, style } = props;

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