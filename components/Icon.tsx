import * as React from 'react';
import { createElement } from 'react';

// utils
import { IconProps } from './utils/models';

// assets
import '../less/modules/icons';

export default function Icon(

    {src, path, size, float, opacity, animate, toggle, className, style }:IconProps) {

        // classes
        const setSize = size ? ` ui-icon-${size}` : '';
        const setAnimate = animate ? ` ui-animate-${animate}` : '';
        const setFloat = float ? ` ui-float-${float}` : '';
        const setToggle = toggle ? ' ui-toggle-icon' : '';

        const setClassName = className ? ` ${className}` : '';

        let setOpacity: string = '';

        if (opacity) {

            if (opacity === 'no') {
                setOpacity = ' ui-no-opacity';

            } else {
                setOpacity = ` ui-opacity-${opacity}`;
            }

        }

        const classes = `ui-icon${setSize}${setAnimate}${setFloat}${setToggle}${setOpacity}${setClassName}`;

        if (src) {
            return createElement(src, { className: classes, style: style });

        } else {
            return (
                <svg className={classes} style={style} viewBox="0 0 264 264">
                    <path d={path} />
                </svg>
            );
        }
    }