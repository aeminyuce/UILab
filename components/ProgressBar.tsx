import * as React from 'react';

// imports
import { ProgressBarProps, ProgressBarItemProps } from './_Models';

// assets
import '../less/modules/progress-bar';

const ProgressBar = function (

    { children, size, className, style }:ProgressBarProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setSize = size ? ' ui-progress-' + size : '';

        const classes = 'ui-progress-bar' + setSize + setClassName;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

const ProgressBarItem = function (

    { percent, prefix, suffix, className, style }:ProgressBarItemProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = setClassName;

        // styles
        let styles = null;

        if (style) {
            styles = {['width']: percent + '%', ...style};

        } else styles = {['width']: percent + '%'};

        return (
            <span className={classes} style={styles}>
                {prefix && prefix}
                {percent}
                {suffix && suffix}
            </span>
        );
    }

export default Object.assign(ProgressBar, {
    Item: ProgressBarItem,
});