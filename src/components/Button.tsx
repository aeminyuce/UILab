import * as React from 'react';

interface ButtonProps {

    children?: React.ReactNode,

    title?: string,

    square?: boolean;
    ghost?: boolean;
    noease?: boolean;

    type?: 'submit' | 'button',
    size?: 'lg' | 'sm' | 'xs',

    className?: string,
    data?: any,

}

export default function Button(

    { children, title, square, ghost, noease, type, size, className, data }:ButtonProps) {

        // classes
        const setSquare = square ? ' ui-btn-square' : '';
        const setGhost = ghost ? ' ui-btn-ghost' : '';
        const setEase = noease ? '' : ' ui-ease-btn';

        const setSize = size ? ' ui-btn-' + size : '';
        const setclassName = className ? ' ' + className : '';

        const classes = "ui-btn" + setSize + setSquare + setGhost + setclassName + setEase;

        // data attributes
        let setData = [];

        for (const name in data) {
            const attr = "data-ui-" + name;
            setData[attr] = data[name];
        }

        return (
            <>
                <button title={title} type={type} className={classes} {...setData}>
                    {children}
                </button>
            </>
        );
    }