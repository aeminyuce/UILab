import * as React from 'react';

// imports
import { ListgroupProps, ListgroupListProps, ListgroupItemProps } from './_Models';

// assets
import '../less/modules/listgroup';

const Listgroup = function (

    { children, className, style }:ListgroupProps) {

        // classes
        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-listgroup${setClassName}`;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }


const ListgroupList = function (

    { children, iconSize, avatarSize, className, style }:ListgroupListProps) {

        // classes
        const setClassName = className ? ` ${className}` : '';

        const setIconSize = iconSize ? ` ui-listgroup-has-icon-${iconSize}` : '';
        const setAvatarSize = avatarSize ? ` ui-listgroup-has-avatar-${avatarSize}` : '';

        const classes = `ui-ease-listgroup${setIconSize}${setAvatarSize}${setClassName}`;

        return (
            <ul className={classes} style={style}>
                {children}
            </ul>
        );
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