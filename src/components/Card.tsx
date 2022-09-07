import * as React from 'react';

// assets
import "@less/modules/card";
import "@js/modules/card";

interface CardProps {

    children?: React.ReactNode,

    type?: 'info' | 'success' | 'warning' | 'danger',

    myRef?: any,

    className?: string,
    style?: any,

}

const Card = function (

    { children, type, myRef, className, style }:CardProps) {

        // classes
        const setType = type ? ' ui-card-' + type : '';
        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-card' + setType + setClassName;

        return (
            <>
                <div ref={myRef} className={classes} style={style}>
                    {children}
                </div>
            </>
        );
    }

const CardSide = function (

    { children, myRef, className, style }:CardProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-card-side' + setClassName;

        return (
            <>
                <div ref={myRef} className={classes} style={style}>
                    {children}
                </div>
            </>
        );
    }

export default Object.assign(Card, {
    Side: CardSide,
});