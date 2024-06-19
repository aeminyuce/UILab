import * as React from 'react';

// imports
import { NotifierProps } from './_Models';

// assets
import '../less/modules/notifier';

export default function Notifier(

    { children, lg, className, dataVal, style }:NotifierProps) {

        // classes
        const setLarge = lg ? ' ui-notifier-lg' : '';
        const setClassName = className ? ' ' + className : '';

        const classes = dataVal ? 'ui-notifier' + setLarge + setClassName : undefined;

        return (
            <span className={classes} data-ui-val={dataVal} style={style}>
                {children}
            </span>
        );
    }