import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import '@less/modules/grid';
import '@js/modules/grid';

const Grid = function () {}

interface GridContainerProps {

    children?: React.ReactNode,

    as: 'div' | 'header' | 'main' | 'footer',

    noGutter?: 'all' | 'xl' | 'lg' | 'sm' | 'xs',
    fixed?: true | 'xl',

    id?: any,
    className?: string,
    style?: any,

}

const GridContainer = function (

    { children, as, noGutter, fixed, id, className, style }:GridContainerProps) {

        // classes
        let setNoGutter = '';

        if (noGutter) {

            if (noGutter === 'all') {
                setNoGutter = ' ui-no-gutter';

            } else {
                setNoGutter = ' ui-no-gutter-' + noGutter;
            }

        } else setNoGutter = '';

        let setFixed = '';
        let classes = '';

        if (fixed) {

            setFixed = ' ui-fixed';

            if (fixed === 'xl') {
                setFixed += ' ui-fixed-' + fixed;
            }

        } else {

            setFixed = '';
            classes += 'ui-container';

        }

        const setClassName = className ? ' ' + className : '';

        classes = classes.replace(/^\s+/g, ''); // remove first spaces
        classes += setNoGutter + setFixed + setClassName;

        return (
            <>
                {as === 'div' &&
                    <div id={id} className={classes} style={style}>
                        {children}
                    </div>
                }
                {as === 'header' &&
                    <header id={id} className={classes} style={style}>
                        {children}
                    </header>
                }
                {as === 'main' &&
                    <main id={id} className={classes} style={style}>
                        {children}
                    </main>
                }
                {as === 'footer' &&
                    <footer id={id} className={classes} style={style}>
                        {children}
                    </footer>
                }
            </>
        );

    }

interface GridRowProps {

    children?: React.ReactNode,

    as?: 'dl',

    align?: 'l' | 'c' | 'r',
    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs',

    gap?: 'no' | 'lg' | 'md' | 'sm' | 'xs',
    vGap?: 'no' | 'lg' | 'md' | 'sm' | 'xs',
    hGap?: 'no' | 'lg' | 'md' | 'sm' | 'xs',

    className?: string,
    data?: any,
    style?: any,

}

const GridRow = function (

    { children, as, align, fluid, gap, vGap, hGap, className, data, style }:GridRowProps) {

        // classes
        const setAlign = align ? ' ui-row-align-' + align : '';
        const setFluid = fluid ? ' ui-' + fluid + '-fluid' : '';

        let setGap = '';
        if (gap) {

            if (gap === 'no') setGap = ' ui-no-row-gap';
            else setGap = ' ui-row-gap-' + gap;

        }

        let setVGap = '';
        if (vGap) {

            if (vGap === 'no') setVGap = ' ui-no-row-gap-v';
            else setVGap = ' ui-row-gap-' + vGap + '-v';

        }

        let setHGap = '';
        if (hGap) {

            if (hGap === 'no') setHGap = ' ui-no-row-gap-h';
            else setHGap = ' ui-row-gap-' + hGap + '-h';

        }

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-row' + setAlign + setFluid + setGap + setVGap + setHGap + setClassName;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        return (
            <>
                {as === 'dl' ?
                    <dl className={classes} {...setData} style={style}>
                        {children}
                    </dl>
                    :
                    <div className={classes} {...setData} style={style}>
                        {children}
                    </div>
                }
            </>
        );
    }

const gridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridColProps {

    children?: React.ReactNode,

    as?: 'dt' | 'dd',

    size: typeof gridSizes | string, // string: for string col names
    offset?: typeof gridSizes,
    push?: typeof gridSizes,
    pull?: typeof gridSizes,

    xl?: typeof gridSizes | string | {
        size?: typeof gridSizes | string, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },
    lg?: typeof gridSizes | string | {
        size?: typeof gridSizes | string, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },
    md?: typeof gridSizes | string | {
        size?: typeof gridSizes | string, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },
    sm?: typeof gridSizes | string | {
        size?: typeof gridSizes | string, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
    },
    xs?: typeof gridSizes | string | {
        size?: typeof gridSizes | string, offset?: typeof gridSizes, push?: typeof gridSizes, pull?: typeof gridSizes
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

    { children, as, size, offset, push, pull, xl, lg, md, sm, xs, fluid, order, className, data, style }:GridColProps) {

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

        let classes = defaults + responsiveSizes + setFluid + setClassName + setOrder;
        if (classes === '') { classes = null; }

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
                {!as &&
                    <div className={classes} {...setData} style={style}>
                        {children}
                    </div>
                }
                {(as === 'dt') &&
                    <dt className={classes} {...setData} style={style}>
                        {children}
                    </dt>
                }
                {(as === 'dd') &&
                    <dd className={classes} {...setData} style={style}>
                        {children}
                    </dd>
                }
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
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

export default Object.assign(Grid, {
    Container: GridContainer,
    Row: GridRow,
    Col: GridCol,
    Static: GridStatic,
});