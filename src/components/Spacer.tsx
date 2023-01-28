import * as React from 'react';

interface SpacerProps {

    size: 1 | 2 | 3 | 4 | 5 | 10 | 15 | 20 | 25 | 30,

    className?: string,
    style?: any,

}

export default function Spacer(

    { size, className, style }:SpacerProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-sp-' + size + setClassName;

        return <span className={classes} style={style}></span>
    }