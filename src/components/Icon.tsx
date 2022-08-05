import * as React from 'react';

// assets
import '@less/modules/icons';

interface IconProps {

    src: string,

    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
    opacity?: 'no' | 'more' | 'half' | 'full',
    animate?: string,

    className?: string,
    style?: any,
}

export default function Icon(

    {src, size, animate, opacity, className, style }:IconProps) {

        // get svg path
        const getPath = function(str: string) {

            const from = str.indexOf("d='") + 3;

            const cut = str.indexOf("'/%");
            const to = str.length - (str.length - cut);

            const path = str.substring(from, to);
            return path;

        }

        // classes
        const setSize = size ? ' ui-icon-' + size : '';
        const setAnimate = animate ? " ui-animate-" + animate : '';
        const setClassName = className ? ' ' + className : '';

        let setOpacity: string = '';

        if (opacity) {

            if (opacity === 'no') {
                setOpacity = ' ui-no-opacity';

            } else {
                setOpacity = ' ui-opacity-' + opacity;
            }

        }

        const classes = 'ui-icon' + setSize + setAnimate + setOpacity + setClassName;

        return (
            <>
                <svg className={classes} style={style} viewBox="0 0 264 264">
                    <path d={getPath(src)} />
                </svg>
            </>
        );

    }