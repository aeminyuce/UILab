import * as React from 'react';

// utils
import { ListgroupProps, ListgroupListProps, ListgroupItemProps } from './utils/models';

// assets
import '../less/modules/listgroup';

const Listgroup = function (props:ListgroupProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-listgroup${setClassName}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}


const ListgroupList = function (props:ListgroupListProps) {

    const { children, iconSize, avatarSize, className, style } = props;

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

const ListgroupItem = function (props:ListgroupItemProps) {

    const { children, onClick, onMouseDown, onMouseUp, className, style } = props;

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