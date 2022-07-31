import * as React from 'react';

// assets
import '@less/modules/dropdown';
import '@js/modules/dropdown';

interface DropdownProps {

    children?: React.ReactNode,

    hover?: true,
    align?: 'l' | 'c',
    pos?: 'l' | 'r',
    nav?: true | 'full-h',

    className?: string,
    style?: any,

}

const Dropdown = function (

    { children, hover, align, pos, nav, className, style }:DropdownProps) {

        // classes
        const setHover = hover ? ' ui-menu-hover' : '';
        const setAlign = align ? ' ui-menu-' + align : '';
        const setPos = pos ? ' ui-menu-pos-' + pos : '';

        let setNav: string = '';

        if (nav) {
            setNav = nav === true ? ' ui-nav' : ' ui-nav ui-nav-full-h';
        }

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-dropdown' + setHover + setAlign + setPos + setNav + setClassName + ' ui-ease-dropdown';

        return (
            <>
                <div className={classes} style={style}>
                    {children}
                </div>
            </>
        );
    }

interface DropdownMenuProps {

    children?: React.ReactNode,

    hasIcon?: true,

    className?: string,
    style?: any,

}

const DropdownMenu = function (

    { children, hasIcon, className, style }:DropdownMenuProps) {

        // classes
        const setHasIcon = hasIcon ? ' ui-dropdown-has-icon' : '';

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-dropdown-menu' + setHasIcon + setClassName;

        return (
            <>
                <ul className={classes} style={style}>
                    {children}
                </ul>
            </>
        );
    }

interface DropdownItemProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const DropdownItem = function (

    { children, className, style }:DropdownItemProps) {

        return (
            <>
                <li className={className} style={style}>
                    {children}
                </li>
            </>
        );
    }

export default Object.assign(Dropdown, {
    Menu: DropdownMenu,
    Item: DropdownItem,
});