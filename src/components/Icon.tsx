import * as React from 'react';

interface IconProps {

    src: string,

    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
    opacity?: 'no' | 'more' | 'half' | 'full',
    animate?: string,

    className?: string,
}

export default function Icon(

    {src, size, animate, opacity, className}:IconProps) {

        // get svg path
        const getPath = function(str:string) {

            const from = str.indexOf("d='") + 3;

            const cut = str.indexOf("'/%");
            const to = str.length - (str.length - cut);

            const path = str.substring(from, to);
            return path;

        }

        // classes
        const setSize = size ? ' ui-icon-' + size : '';
        const setAnimate = animate ? " ui-animate-" + animate : '';
        const setclassName = className ? ' ' + className : '';

        let setOpacity:String;

        if (opacity === 'no') {
            setOpacity = ' ui-no-opacity';

        } else {
            setOpacity = opacity ? ' ui-opacity-' + opacity : '';
        }

        const classes = "ui-icon" + setSize + setAnimate + setOpacity + setclassName;

        return (
            <svg className={classes} viewBox="0 0 264 264">
                <path d={getPath(src)} />
            </svg>
        );

    }