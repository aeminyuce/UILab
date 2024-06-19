import * as React from 'react';

// assets
import '@ui-less/modules/notifier';

interface NotifierProps {

    children?: React.ReactNode,

    lg?: boolean,

    className?: string,
    dataVal?: any,
    style?: any,

}

export default function Notifier(

    { children, lg, className, dataVal, style }:NotifierProps) {

        // classes
        const setLarge = lg ? ' ui-notifier-lg' : '';
        const setClassName = className ? ' ' + className : '';

        const classes = dataVal ? 'ui-notifier' + setLarge + setClassName : null

        return (
            <span className={classes} data-ui-val={dataVal} style={style}>
                {children}
            </span>
        );
    }