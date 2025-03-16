import * as React from 'react';
import { createElement } from 'react';

// utils
import { SvgIconProps } from './utils/models';

// assets
import '../less/modules/icons';

export default function SvgIcon(props:SvgIconProps) {

    const {as, src, symbolId, size, float, opacity, animate, toggle, className, style } = props;

    // decode src string
    const decodeStrUri = (src: any) => {
        const str = src.toString();
        return decodeURIComponent(str);
    }

    // get svg path
    const getPath = (str: string) => {
        const pathMatch = str.match(/<path[^>]*>/g);

        let pathTags = [];
        if (pathMatch) pathMatch.map((path: string) => pathTags.push(path));

        return pathTags;
    }

    // get svg path d='' attribute
    const getPathAttr = (str: string) => {
        const pathAttrMatch = str.match(/\s+d=['"]([^'"]*)['"]/g);
        return pathAttrMatch ? pathAttrMatch[0].replace(" d=", "").replace(/\'/g, '') : '';
    }

    // get svg viewbox
    const getViewbox = (str: string) => {
        const viewBoxMatch = str.match(/\s+viewBox=['"]([^'"]*)['"]/g);
        return viewBoxMatch ? viewBoxMatch[0].replace(" viewBox=", "").replace(/\'/g, '') : null;
    }

    // get svg symbol
    const getSymbol = (id: string, str: string) => {
        const re = `<symbol id=['"]${id}['"][^]*?<\/symbol>`;
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
                    <path d={getPathAttr(loadSrc)} />
                </svg>
            )
        }
        if (as === 'sprite') {
            const loadSymbol = getSymbol(symbolId, loadSrc);
            const pathItems = getPath(loadSymbol); // for mutliple paths

            return (
                <svg className={classes} style={style} viewBox={getViewbox(loadSymbol)}>
                    {pathItems && pathItems.map((path: string, i: number) => {
                        return <path key={symbolId + i} d={getPathAttr(path)} />
                    })}
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