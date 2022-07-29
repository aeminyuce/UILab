import * as React from 'react';

// assets
import "@less/modules/grid";
import '@js/modules/grid';

interface GridProps {

    Container: any,
    Row: any,

    Col: any,
    Static : any,

}

let Grid = function ({ Container, Row, Col, Static }:GridProps) {}

interface ContainerProps {

    children?: React.ReactNode,

    variant: 'header' | 'main' | 'footer',
    noGutter?: 'all' | 'xl' | 'lg' | 'sm' | 'xs',

    className?: string,
    style?: any,

}

let GridContainer = function (

    { children, variant, noGutter, className, style }:ContainerProps) {

        // classes
        let setNoGutter:string;

        if (noGutter === 'all') {
            setNoGutter = noGutter ? ' ui-no-gutter' : '';

        } else {
            setNoGutter = noGutter ? ' ui-no-gutter-' + noGutter : '';
        }

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-container' + setNoGutter + setClassName;

        return (
            <>
                {variant === 'header' &&

                    <header className={classes} style={style}>
                        {children}
                    </header>

                }
                {variant === 'main' &&

                    <main className={classes} style={style}>
                        {children}
                    </main>

                }
                {variant === 'footer' &&

                    <footer className={classes} style={style}>
                        {children}
                    </footer>

                }
            </>
        );

    }

interface GridRowProps {

    children?: React.ReactNode,

    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs',

    gap?: 'no' | 'lg' | 'md' |'sm' | 'xs',
    gapDir?: 'v' | 'h',

    className?: string,
    data?: any,
    style?: any,

}

const GridRow = function (

    { children, fluid, gap, gapDir, className, data, style }:GridRowProps) {

        // classes
        const setFluid = fluid ? ' ui-' + fluid + '-fluid' : '';

        let setGap:string;
        const setGapDir = gapDir ? '-' + gapDir : '';

        if (gap === 'no') {
            setGap = ' ui-no-row-gap' + setGapDir;

        } else {
            setGap = gap ? ' ui-row-gap-' + gap + setGapDir : '';
        }

        const setclassName = className ? ' ' + className : '';
        const classes = 'ui-row' + setFluid + setGap + setclassName;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        return (
            <>
                <div className={classes} {...setData} style={style}>
                    {children}
                </div>
            </>
        );
    }

interface GridColProps {

    children?: React.ReactNode,

    size: number | string, // string: for string col names

    xl?: number,
    lg?: number,
    md?: number,
    sm?: number,
    xs?: number,

    offset?: number,
    push?: number,
    pull?: number,

    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs',

    className?: string,
    data?: any,
    style?: any,

}

const GridCol = function (

    { children, size, xl, lg, md, sm, xs, offset, push, pull, fluid, className, data, style }:GridColProps) {

        // classes
        const setSize = size ? 'ui-col-' + size : '';

        const setXl = xl ? ' ui-col-xl-' + xl : '';
        const setLg = lg ? ' ui-col-lg-' + lg : '';
        const setMd = md ? ' ui-col-md-' + md : '';
        const setSm = sm ? ' ui-col-sm-' + sm : '';
        const setXs = xs ? ' ui-col-xs-' + xs : '';

        const sizes = setSize + setXl + setLg + setMd + setSm + setXs;

        const setOffset = offset ? ' ui-offset-' + offset : '';
        const setPush = push ? ' ui-push-' + push : '';
        const setPull = pull ? ' ui-pull-' + pull : '';

        const offsets = setOffset + setPush + setPull;

        const setFluid = fluid ? ' ui-' + fluid + '-fluid' : '';
        const setclassName = className ? ' ' + className : '';

        const classes = sizes + offsets + setFluid + setclassName;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        return (
            <>
                <div className={classes} {...setData} style={style}>
                    {children}
                </div>
            </>
        );
    }

interface GridStaticProps {

    children?: React.ReactNode,

    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs',

    className?: string,
    data?: any,
    style?: any,

}

const GridStatic = function (

    { children, fluid, className, data, style }:GridStaticProps) {

        // classes
        const setFluid = fluid ? ' ui-' + fluid + '-fluid' : '';
        const setclassName = className ? ' ' + className : '';

        const classes = 'ui-col-static' + setFluid + setclassName;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        return (
            <>
                <div className={classes} {...setData} style={style}>
                    {children}
                </div>
            </>
        );
    }

export default Object.assign(Grid, {
    Container: GridContainer,
    Row: GridRow,
    Col: GridCol,
    Static: GridStatic,
});