import * as React from 'react';

// assets
import "@less/modules/grid";
import '@js/modules/grid';

let Grid = function () {}

interface GridContainerProps {

    children?: React.ReactNode,

    as: 'div' | 'header' | 'main' | 'footer',

    noGutter?: 'all' | 'xl' | 'lg' | 'sm' | 'xs',
    fixed?: true | 'xl',

    className?: string,
    style?: any,

}

let GridContainer = function (

    { children, as, noGutter, fixed, className, style }:GridContainerProps) {

        // classes
        let setNoGutter: string = '';

        if (noGutter) {

            if (noGutter === 'all') {
                setNoGutter = ' ui-no-gutter';

            } else {
                setNoGutter = ' ui-no-gutter-' + noGutter;
            }

        } else {
            setNoGutter = '';
        }

        let setFixed:string = '';
        let classes:string = '';

        if (fixed) {

            setFixed = 'ui-fixed';

            if (fixed === 'xl') {
                setFixed += ' ui-fixed-' + fixed;
            }

        } else {

            setFixed = '';
            classes += 'ui-container';

        }

        const setClassName = className ? ' ' + className : '';
        classes += setNoGutter + setFixed + setClassName;

        return (
            <>
                {as === 'div' &&

                    <div className={classes} style={style}>
                        {children}
                    </div>

                }
                {as === 'header' &&

                    <header className={classes} style={style}>
                        {children}
                    </header>

                }
                {as === 'main' &&

                    <main className={classes} style={style}>
                        {children}
                    </main>

                }
                {as === 'footer' &&

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

        let setGap: string = '';
        const setGapDir = gapDir ? '-' + gapDir : '';

        if (gap) {

            if (gap === 'no') {
                setGap = ' ui-no-row-gap' + setGapDir;

            } else {
                setGap = ' ui-row-gap-' + gap + setGapDir;
            }

        }

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-row' + setFluid + setGap + setClassName;

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

const gridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridColProps {

    children?: React.ReactNode,

    size: typeof gridSizes | string, // string: for string col names

    xl?: typeof gridSizes,
    lg?: typeof gridSizes,
    md?: typeof gridSizes,
    sm?: typeof gridSizes,
    xs?: typeof gridSizes,

    offset?: typeof gridSizes,
    push?: typeof gridSizes,
    pull?: typeof gridSizes,

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
        const setClassName = className ? ' ' + className : '';

        const classes = sizes + offsets + setFluid + setClassName;

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
        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-col-static' + setFluid + setClassName;

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