import * as React from 'react';

// assets
import '@less/modules/dropdown';
import '@js/modules/dropdown';

interface DropdownProps {

    children?: React.ReactNode,

    hover?: boolean,
    block?: boolean,
    align?: 'l' | 'c',
    pos?: 'l' | 'r',
    nav?: true | 'full-h',

    className?: string,
    style?: any,

}

const Dropdown = function (

    { children, hover, block, align, pos, nav, className, style }:DropdownProps) {

        // classes
        const setHover = hover ? ' ui-menu-hover' : '';
        const setBlock = block ? ' ui-block' : '';
        const setAlign = align ? ' ui-menu-' + align : '';
        const setPos = pos ? ' ui-menu-pos-' + pos : '';

        let setNav: string = '';

        if (nav) {
            setNav = nav === true ? ' ui-nav' : ' ui-nav ui-nav-full-h';
        }

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-dropdown' + setHover + setBlock + setAlign + setPos + setNav + setClassName + ' ui-ease-dropdown';

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

    hasIcon?: boolean,

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

    select?: boolean,
    selected?: boolean,

    className?: string,
    style?: any,

}

const DropdownItem = function (

    { children, select, selected, className, style }:DropdownItemProps) {

        // classes
        const setSelected = selected ? ' ui-selected' : '';
        const setClassName = className ? ' ' + className : '';

        let classes = setSelected + setClassName;
        classes = classes.replace(/^\s+/g, ''); // remove first spaces

        return (
            <>
                <li className={classes} style={style}>
                    {children}
                </li>
            </>
        );
    }

export default Object.assign(Dropdown, {
    Menu: DropdownMenu,
    Item: DropdownItem,
});