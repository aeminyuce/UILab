import * as React from 'react';

// assets
import '@less/modules/progress-bar';

interface ProgressBarProps {

    children?: React.ReactNode,

    size?: 'xxl' | 'xl' | 'lg' | 'sm',

    className?: string,
    style?: any,

}

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

interface ProgressBarItemProps {

    percent: any,

    prefix?: string,
    suffix?: string,

    className?: string,
    style?: any,

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