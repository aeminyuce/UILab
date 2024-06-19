import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// imports
import { GridContainerProps, GridRowProps, GridColProps, GridStaticProps } from './_Models';

// assets
import '../less/modules/grid';
import '../js/modules/grid';

const Grid = function () {}

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

        classes += setNoGutter + setFixed + setClassName;
        classes = classes.replace(/^\s+/g, ''); // remove first spaces

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

const GridRow = function (

    { children, as, formHolder, align, fluid, gap, vGap, hGap, className, data, style }:GridRowProps) {

        // classes
        const setFormHolder = formHolder ? ' ui-form-holder' : '';
        const setAlign = align ? ' ui-row-align-' + align : '';

        let setFluid = fluid ? ' ui-' + fluid + '-fluid' : '';
        if (formHolder) setFluid = ' ui-no-fluid';

        let setGap = '';

        if (formHolder) setGap = ' ui-no-row-gap';
        else if (gap) {

            if (gap === 'no') setGap = ' ui-no-row-gap';
            else setGap = ' ui-row-gap-' + gap;

        }

        let setVGap = '';

        if (!formHolder && vGap) {

            if (vGap === 'no') setVGap = ' ui-no-row-gap-v';
            else setVGap = ' ui-row-gap-' + vGap + '-v';

        }

        let setHGap = '';

        if (!formHolder && hGap) {

            if (hGap === 'no') setHGap = ' ui-no-row-gap-h';
            else setHGap = ' ui-row-gap-' + hGap + '-h';

        }

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-row' + setFormHolder + setAlign + setFluid + setGap + setVGap + setHGap + setClassName;

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        return (
            <>
                {!as &&
                    <div className={classes} {...setData} style={style}>
                        {children}
                    </div>
                }
                {as === 'span' &&
                    <span className={classes} {...setData} style={style}>
                        {children}
                    </span>
                }
                {as === 'dl' &&
                    <dl className={classes} {...setData} style={style}>
                        {children}
                    </dl>
                }
            </>
        );
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

        } else { setXs = xs ? ' ui-col-xs-' + xs : ''; }

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

        }, []);

        return (
            <>
                {!as &&
                    <div className={classes} {...setData} style={style}>
                        {children}
                    </div>
                }
                {(as === 'span') &&
                    <span className={classes} {...setData} style={style}>
                        {children}
                    </span>
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

const GridStatic = function (

    { children, as, fluid, className, style }:GridStaticProps) {

        // classes
        const setFluid = fluid ? ' ui-' + fluid + '-fluid' : '';
        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-col-static' + setFluid + setClassName;

        return (
            <>
                {!as &&
                    <div className={classes} style={style}>
                        {children}
                    </div>
                }
                {as === 'span' &&
                    <span className={classes} style={style}>
                        {children}
                    </span>
                }
            </>
        );
    }

export default Object.assign(Grid, {
    Container: GridContainer,
    Row: GridRow,
    Col: GridCol,
    Static: GridStatic,
});