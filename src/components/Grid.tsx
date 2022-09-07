import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

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

        let setFixed: string = '';
        let classes: string = '';

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
                    <>
                        <div className={classes} style={style}>
                            {children}
                        </div>
                    </>
                }
                {as === 'header' &&
                    <>
                        <header className={classes} style={style}>
                            {children}
                        </header>
                    </>
                }
                {as === 'main' &&
                    <>
                        <main className={classes} style={style}>
                            {children}
                        </main>
                    </>
                }
                {as === 'footer' &&
                    <>
                        <footer className={classes} style={style}>
                            {children}
                        </footer>
                    </>
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
    offset?: typeof gridSizes,
    push?: typeof gridSizes,
    pull?: typeof gridSizes,

    xl?: typeof gridSizes | {
        size?: typeof gridSizes, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },
    lg?: typeof gridSizes | {
        size?: typeof gridSizes, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },
    md?: typeof gridSizes | {
        size?: typeof gridSizes, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },
    sm?: typeof gridSizes | {
        size?: typeof gridSizes, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },
    xs?: typeof gridSizes | {
        size?: typeof gridSizes, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },

    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs',

    order?: {
        when: 'xl' | 'lg' | 'default' | 'md' | 'sm' | 'xs',
        position: 'first' | 'last',
    },

    className?: string,
    data?: any,
    style?: any,

}

const GridCol = function (

    { children, size, offset, push, pull, xl, lg, md, sm, xs, fluid, order, className, data, style }:GridColProps) {

        // classes
        const setSize = size ? 'ui-col-' + size : '';
        const setOffset = offset ? ' ui-offset-' + offset : '';
        const setPush = push ? ' ui-push-' + push : '';
        const setPull = pull ? ' ui-pull-' + pull : '';

        const defaults = setSize + setOffset + setPush + setPull;

        let setXl = '';
        let setLg = '';
        let setMd = '';
        let setSm = '';
        let setXs = '';

        if (xl instanceof Object) {

            setXl += xl.size ? ' ui-col-xl-' + xl.size : '';
            setXl += xl.offset ? ' ui-offset-xl-' + xl.offset : '';
            setXl += xl.push ? ' ui-push-xl-' + xl.push : '';
            setXl += xl.pull ? ' ui-pull-xl-' + xl.pull : '';

        } else { setXl = xl ? ' ui-col-xl-' + xl : ''; }

        if (lg instanceof Object) {

            setLg += lg.size ? ' ui-col-lg-' + lg.size : '';
            setLg += lg.offset ? ' ui-offset-lg-' + lg.offset : '';
            setLg += lg.push ? ' ui-push-lg-' + lg.push : '';
            setLg += lg.pull ? ' ui-pull-lg-' + lg.pull : '';

        } else { setLg = lg ? ' ui-col-lg-' + lg : ''; }

        if (md instanceof Object) {

            setMd += md.size ? ' ui-col-md-' + md.size : '';
            setMd += md.offset ? ' ui-offset-md-' + md.offset : '';
            setMd += md.push ? ' ui-push-md-' + md.push : '';
            setMd += md.pull ? ' ui-pull-md-' + md.pull : '';

        } else { setMd = md ? ' ui-col-md-' + md : ''; }

        if (sm instanceof Object) {

            setSm += sm.size ? ' ui-col-sm-' + sm.size : '';
            setSm += sm.offset ? ' ui-offset-sm-' + sm.offset : '';
            setSm += sm.push ? ' ui-push-sm-' + sm.push : '';
            setSm += sm.pull ? ' ui-pull-sm-' + sm.pull : '';

        } else { setSm = sm ? ' ui-col-sm-' + sm : ''; }

        if (xs instanceof Object) {

            setXs += xs.size ? ' ui-col-xs-' + xs.size : '';
            setXs += xs.offset ? ' ui-offset-xs-' + xs.offset : '';
            setXs += xs.push ? ' ui-push-xs-' + xs.push : '';
            setXs += xs.pull ? ' ui-pull-xs-' + xs.pull : '';

        } else { setXs = xs ? ' ui-col-xs-' + sm : ''; }

        const responsiveSizes = setXl + setLg + setMd + setSm + setXs;

        const setFluid = fluid ? ' ui-' + fluid + '-fluid' : '';
        const setClassName = className ? ' ' + className : '';

        let setOrder = '';

        if (order instanceof Object) {
            setOrder += order.when ? ' ui-order-' + order.when + '-' + order.position : '';
        }

        const classes = defaults + responsiveSizes + setFluid + setClassName + setOrder;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        useEffect(() => {

            // start
            ui.grid.Start();

        }, []); // Runs only first render

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
    style?: any,

}

const GridStatic = function (

    { children, fluid, className, style }:GridStaticProps) {

        // classes
        const setFluid = fluid ? ' ui-' + fluid + '-fluid' : '';
        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-col-static' + setFluid + setClassName;

        return (
            <>
                <div className={classes} style={style}>
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