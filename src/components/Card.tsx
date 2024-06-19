import * as React from 'react';

// assets
import '@ui-less/modules/card';
import '@ui-js/modules/card';

interface CardProps {

    children?: React.ReactNode,

    as?: 'div' | 'span',
    type?: 'info' | 'success' | 'warning' | 'danger',

    myRef?: any,

    className?: string,
    style?: any,

}

const Card = function (

    { children, as, type, myRef, className, style }:CardProps) {

        // classes
        const setType = type ? ' ui-card-' + type : '';
        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-card' + setType + setClassName;

        // type
        const setAs = as ? as : 'div';

        return (
            <>
                {setAs === 'div' &&
                    <div ref={myRef} className={classes} style={style}>
                        {children}
                    </div>
                }
                {setAs === 'span' &&
                    <span ref={myRef} className={classes} style={style}>
                        {children}
                    </span>
                }
            </>
        );

    }

const CardSide = function (

    { children, myRef, className, style }:CardProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-card-side' + setClassName;

        return (
            <div ref={myRef} className={classes} style={style}>
                {children}
            </div>
        );
    }

export default Object.assign(Card, {
    Side: CardSide,
});