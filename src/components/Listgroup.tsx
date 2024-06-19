import * as React from 'react';

// assets
import '@ui-less/modules/listgroup';

interface ListgroupProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const Listgroup = function (

    { children, className, style }:ListgroupProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-listgroup' + setClassName;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

interface ListgroupListProps {

    children?: React.ReactNode,

    iconSize?: 'xxl' | 'xl' | 'lg' | 'sm' | 'xs',
    avatarSize?: 'lg' | 'default' | 'sm' | 'xs',

    className?: string,
    style?: any,

}

const ListgroupList = function (

    { children, iconSize, avatarSize, className, style }:ListgroupListProps) {

        // classes
        const setClassName = className ? ' ' + className : '';

        const setIconSize = iconSize ? ' ui-listgroup-has-icon-' + iconSize : '';
        const setAvatarSize = avatarSize ? ' ui-listgroup-has-avatar-' + avatarSize : '';

        const classes = 'ui-ease-listgroup' + setIconSize + setAvatarSize + setClassName;

        return (
            <ul className={classes} style={style}>
                {children}
            </ul>
        );
    }

interface ListgroupItemProps {

    children?: React.ReactNode,

    onClick?: React.ReactEventHandler,
    onMouseDown?: React.ReactEventHandler,
    onMouseUp?: React.ReactEventHandler,

    className?: string,
    style?: any,

}

const ListgroupItem = function (

    { children, onClick, onMouseDown, onMouseUp, className, style }:ListgroupItemProps) {

        return (
            <li className={className} style={style} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                {children}
            </li>
        );
    }

export default Object.assign(Listgroup, {
    List: ListgroupList,
    Item: ListgroupItem,
});