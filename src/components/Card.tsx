import * as React from 'react';

// assets
import "@less/modules/card";
import "@js/modules/card";

interface CardProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const Card = function (

    { children, className, style }:CardProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-card' + setClassName;

        return (
            <>
                <div className={classes} style={style}>
                    {children}
                </div>
            </>
        );
    }

const CardSide = function (

    { children, className, style }:CardProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-card-side' + setClassName;

        return (
            <>
                <div className={classes} style={style}>
                    {children}
                </div>
            </>
        );
    }

export default Object.assign(Card, {
    Side: CardSide,
});