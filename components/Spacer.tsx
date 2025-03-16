import * as React from 'react';

// utils
import { SpacerProps } from './utils/Models';

export default function Spacer(props:SpacerProps) {

    const { size, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-sp-${size}${setClassName}`;

    return <span className={classes} style={style}></span>

}