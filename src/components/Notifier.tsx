import * as React from 'react';

// assets
import "@less/modules/notifier";

interface NotifierProps {

    children?: React.ReactNode,

    newNotify?: boolean;
    lg?: boolean;

    className?: string,
    dataVal?: number,

}

export default function Notifier(

    { children, newNotify, lg, className, dataVal }:NotifierProps) {

        // classes
        const setNewNotifier = newNotify ? 'ui-notifier' : '';
        const setLarge = lg ? ' ui-notifier-lg' : '';
        const setclassName = className ? ' ' + className : '';

        const classes = setNewNotifier + setLarge + setclassName;

        return (
            <>
                <span className={classes} data-ui-val={dataVal}>
                    {children}
                </span>
            </>
        );
    }