import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import "@less/modules/header-sticky";
import "@js/modules/header-sticky";

interface HeaderStickyProps {

    children?: React.ReactNode,

    className?: string,
    dataClasses?: string,
    style?: any,

}

export default function HeaderSticky(

    { children, className, dataClasses, style }:HeaderStickyProps) {

        useEffect(() => {

            // start
            ui.headerSticky.Start();

        }, []); // Runs only first render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-header-sticky' + setClassName + ' ui-ease-layout';

        return (
            <>
                <header className={classes} data-ui-classes={dataClasses} style={style}>
                    {children}
                </header>
            </>
        );
    }
