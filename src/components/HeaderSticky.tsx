import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import '@ui-less/modules/header-sticky';
import '@ui-js/modules/header-sticky';

interface HeaderStickyProps {

    children?: React.ReactNode,

    className?: string,
    dataClasses?: string,
    dataSpace?: number,
    style?: any,

}

export default function HeaderSticky(

    { children, className, dataClasses, dataSpace, style }:HeaderStickyProps) {

        useEffect(() => {

            // start
            ui.headerSticky.Start();

        }); // Runs every render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-header-sticky' + setClassName + ' ui-ease-layout';

        return (
            <header className={classes} data-ui-classes={dataClasses} data-ui-space={dataSpace} style={style}>
                {children}
            </header>
        );
    }
