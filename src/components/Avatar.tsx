import * as React from 'react';

// assets
import "@less/modules/avatars";

interface AvatarProps {

    children?: React.ReactNode,

    size?: 'lg' | 'sm' | 'xs',
    className?: string,

}

export default function Avatar(

    { children, size, className }:AvatarProps) {

        // classes
        const setclassName = className ? ' ' + className : '';
        const setSize = size ? ' ui-avatar-' + size : '';

        const classes = "ui-avatar" + setSize + setclassName;

        return (
            <>
                <span className={classes}>
                    {children}
                </span>
            </>
        );
    }