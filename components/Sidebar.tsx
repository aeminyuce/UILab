import * as React from 'react';

// utils
import { SidebarProps, SidebarTitleProps, SidebarContentProps } from './utils/Models';

// assets
import '../less/modules/sidebar';
import '../js/modules/sidebar';

const Sidebar = function (props:SidebarProps) {

    const { children, pos, className, style } = props;

    // classes
    const setPos = pos ? ` ui-sidebar-${pos}` : '';

    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-sidebar${setPos}${setClassName} ui-ease-layout ui-ease-in-out`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}

const SidebarTitle = function (props:SidebarTitleProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-sidebar-title${setClassName}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}

const SidebarContent = function (props:SidebarContentProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-sidebar-content${setClassName}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}

export default Object.assign(Sidebar, {
    Title: SidebarTitle,
    Content: SidebarContent,
});