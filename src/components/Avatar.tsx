import * as React from 'react';

// assets
import '@less/modules/avatars';

interface AvatarProps {

    children?: React.ReactNode,

    onClick?: React.ReactEventHandler,
    onMouseDown?: React.ReactEventHandler,
    onMouseUp?: React.ReactEventHandler,

    size?: 'lg' | 'sm' | 'xs',
    title?: string,

    className?: string,
    data?: any,
    style?: any,

}

export default function Avatar(

    { children, onClick, onMouseDown, onMouseUp, size, title, className, data, style }:AvatarProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setSize = size ? ' ui-avatar-' + size : '';

        const classes = 'ui-avatar' + setSize + setClassName;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        return (
            <span className={classes} {...setData} style={style} title={title}
                onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                    {children}
            </span>
        );
    }