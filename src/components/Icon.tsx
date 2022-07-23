import * as React from 'react';

interface IconProps {
    src: string,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
    animate?: string
}

export default function Icon({src, size, animate}:IconProps) {

    if (!src)
        return null;

    const getPath = function(str:string) { // get svg path

        const from = str.indexOf("d='") + 3;

        const cut = str.indexOf("'/%");
        const to = str.length - (str.length - cut);

        const path = str.substring(from, to);
        return path;

    }

    const setSize = size ? " ui-icon-" + size : '';
    const setAnimate = animate ? " ui-animate-" + animate : '';

    return (
        <svg className={"ui-icon" + setSize + setAnimate} viewBox="0 0 264 264">
            <path d={getPath(src)} />
        </svg>
    );

}