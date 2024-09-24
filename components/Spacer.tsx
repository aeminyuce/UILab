import * as React from 'react';

// utils
import { SpacerProps } from './utils/models';

export default function Spacer(

    { size, className, style }:SpacerProps) {

        // classes
        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-sp-${size}${setClassName}`;

        return <span className={classes} style={style}></span>
    }