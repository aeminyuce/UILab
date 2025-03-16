import * as React from 'react';

// utils
import { NotifierProps } from './utils/models';

// assets
import '../less/modules/notifier';

export default function Notifier(props:NotifierProps) {

    const { children, lg, className, dataVal, style } = props;

    // classes
    const setLarge = lg ? ' ui-notifier-lg' : '';
    const setClassName = className ? ` ${className}` : '';

    const classes = dataVal ? `ui-notifier${setLarge}${setClassName}` : undefined;

    return (
        <span className={classes} data-ui-val={dataVal} style={style}>
            {children}
        </span>
    );

}