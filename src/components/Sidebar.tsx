import * as React from 'react';

// assets
import '@ui-less/modules/sidebar';
import '@ui-js/modules/sidebar';

interface SidebarProps {

    children?: React.ReactNode,

    pos: 'l' | 'r',

    className?: string,
    style?: any,

}

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

interface SidebarContentProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

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