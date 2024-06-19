import * as React from 'react';

// imports
import { SidebarProps, SidebarContentProps } from './_Models';

// assets
import '../less/modules/sidebar';
import '../js/modules/sidebar';

const Sidebar = function (

    { children, pos, className, style }:SidebarProps) {

        // classes
        const setPos = pos ? ' ui-sidebar-' + pos : '';

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-sidebar' + setPos + setClassName + ' ui-ease-layout ui-ease-in-out';

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

const SidebarContent = function (

    { children, className, style }:SidebarContentProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-sidebar-content' + setClassName;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

export default Object.assign(Sidebar, {
    Content: SidebarContent,
});