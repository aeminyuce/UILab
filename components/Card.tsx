import * as React from 'react';

// imports
import { CardProps } from './_Models';

// assets
import '../less/modules/card';
import '../js/modules/card';

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