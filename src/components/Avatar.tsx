import * as React from 'react';

// assets
import "@less/modules/avatars";

interface AvatarProps {

    children?: React.ReactNode,

    size?: 'lg' | 'sm' | 'xs',

    className?: string,
    data?: any,
    style?: any,

}

export default function Avatar(

    { children, size, className, data, style }:AvatarProps) {

        // classes
        const setclassName = className ? ' ' + className : '';
        const setSize = size ? ' ui-avatar-' + size : '';

        const classes = 'ui-avatar' + setSize + setclassName;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        return (
            <>
                <span className={classes} {...setData} style={style}>
                    {children}
                </span>
            </>
        );
    }