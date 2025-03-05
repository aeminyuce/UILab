import * as React from 'react';
import { createElement } from 'react';

// utils
import { SvgIconProps } from './utils/models';

// assets
import '../less/modules/icons';

export default function SvgIcon(

    {as, src, ssymbolId, size, float, opacity, animate, toggle, className, style }:SvgIconProps) {

        // get svg path
        const getPath = function(str: string) {
            const pathMatch = str.match(/d=['"]([^'"]+)['"]/);
            return pathMatch ? pathMatch[1] : '';
        }

        // get svg viewbox
        const getViewbox = function(str: string) {
            const viewBoxMatch = str.match(/viewBox=['"]([^'"]+)['"]/);
            return viewBoxMatch ? viewBoxMatch[1] : null;
        }

        // get svg symbol
        const getSymbol = function(id: string, str: string) {
            const re = `<symbol id="${id}"[\\s\\S]*?<\\/symbol>`;
            const rex = new RegExp(re, 'g');
            const symbolMatch = str.match(rex);

            return symbolMatch ? symbolMatch[0] : '';
        }

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

        return (
            <>
            {(as === 'js') &&
                createElement(src, { className: classes, style: style })
            }
            {(as === 'file' || as === 'sprite') &&
                <svg className={classes} style={style} viewBox={getViewbox(src.toString())}>
                    <path d={getPath(as === 'file' ? src.toString() : getSymbol(ssymbolId, src.toString()))} />
                </svg>
            }
            {(as === 'path') &&
                <svg className={classes} style={style} viewBox="0 0 264 264">
                    <path d={src.toString()} />
                </svg>
            }
            </>
        )
    }