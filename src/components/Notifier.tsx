import * as React from 'react';

// assets
import "@less/modules/notifier";

interface NotifierProps {

    children?: React.ReactNode,

    newNotify?: true,
    lg?: true,

    className?: string,
    dataVal?: number,
    style?: any,

}

export default function Notifier(

    { children, newNotify, lg, className, dataVal, style }:NotifierProps) {

        // classes
        const setNewNotifier = newNotify ? 'ui-notifier' : '';
        const setLarge = lg ? ' ui-notifier-lg' : '';
        const setClassName = className ? ' ' + className : '';

        const classes = setNewNotifier + setLarge + setClassName;

        return (
            <>
                <span className={classes} data-ui-val={dataVal} style={style}>
                    {children}
                </span>
            </>
        );
    }