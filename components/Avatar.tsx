import * as React from 'react';

// imports
import { AvatarProps } from './_Models';

// assets
import '../less/modules/avatars';

export default function Avatar(

    { children, onClick, onMouseDown, onMouseUp, size, title, className, data, style }:AvatarProps) {

        // classes
        const setClassName = className ? ` ${className}` : '';
        const setSize = size ? ` ui-avatar-${size}` : '';

        const classes = `ui-avatar${setSize}${setClassName}`;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = `data-ui-${name}`;
            setData[attr] = data[name];

        }

        return (
            <span className={classes} {...setData} style={style} title={title}
                onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                    {children}
            </span>
        );
    }