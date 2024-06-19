import * as React from 'react';

// imports
import { SpacerProps } from './_Models';

export default function Spacer(

    { size, className, style }:SpacerProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-sp-' + size + setClassName;

        return <span className={classes} style={style}></span>
    }