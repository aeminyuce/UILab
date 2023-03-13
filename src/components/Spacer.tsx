import * as React from 'react';

const gridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface SpacerProps {

    size: typeof gridSizes,

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