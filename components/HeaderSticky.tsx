import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// utils
import { HeaderStickyProps } from './utils/Models';

// assets
import '../less/modules/header-sticky';
import '../js/modules/header-sticky';

export default function HeaderSticky(props:HeaderStickyProps) {

    const { children, className, dataClasses, dataSpace, style } = props;

    useEffect(() => {

        // start
        ui.headerSticky.Start();

    });

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-header-sticky${setClassName} ui-ease-layout`;

    return (
        <header className={classes} data-ui-classes={dataClasses} data-ui-space={dataSpace} style={style}>
            {children}
        </header>
    );

}
