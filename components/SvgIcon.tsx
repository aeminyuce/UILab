import * as React from 'react';
import { createElement } from 'react';

// utils
import { SvgIconProps } from './utils/models';

// assets
import '../less/modules/icons';

export default function SvgIcon(

    {as, src, symbolId, size, float, opacity, animate, toggle, className, style }:SvgIconProps) {

        // decode src string
        const decodeStrUri = (src: any) => {
            const str = src.toString();
            return decodeURIComponent(str);
        }

        // get svg path
        const getPath = (str: string) => {
            const pathMatch = str.match(/\s+d=['"]([^'"]*)['"]/);
            return pathMatch ? pathMatch[1] : '';
        }

        // get svg viewbox
        const getViewbox = (str: string) => {
            const viewBoxMatch = str.match(/\s+viewBox=['"]([^'"]*)['"]/);
            return viewBoxMatch ? viewBoxMatch[1] : null;
        }

        // get svg symbol
        const getSymbol = (id: string, str: string) => {
            const re = `<symbol id=['"]${id}['"][^]*<\/symbol>`;
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

        if (as === 'js') {
            return createElement(src, { className: classes, style: style });

        } else {
            const loadSrc = decodeStrUri(src);

            if (as === 'file') {
                return (
                    <svg className={classes} style={style} viewBox={getViewbox(loadSrc)}>
                        <path d={getPath(loadSrc)} />
                    </svg>
                )
            }
            if (as === 'sprite') {
                const loadSymbol = getSymbol(symbolId, loadSrc);

                return (
                    <svg className={classes} style={style} viewBox={getViewbox(loadSymbol)}>
                        <path d={getPath(loadSymbol)} />
                    </svg>
                )
            }
            if (as === 'path') {
                return (
                    <svg className={classes} style={style} viewBox="0 0 264 264">
                        <path d={loadSrc} />
                    </svg>
                )
            }
        }
    }