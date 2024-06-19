import * as React from 'react';

// assets
import '@ui-less/modules/tables';

interface TableProps {

    children?: React.ReactNode,

    bottomCaption?: boolean,
    condensed?: boolean,
    condensedMore?: boolean,
    noSep?: boolean,
    nowrap?: boolean,
    sidebar?: boolean,
    valign?: boolean,
    striped?: boolean,
    hover?: boolean,
    border?: boolean,

    className?: string,
    style?: any,

}

const Table = function (

    { children, bottomCaption, condensed, condensedMore, noSep, nowrap, sidebar, valign, striped, hover, border, className, style }:TableProps) {

        // classes
        const setClassName = className ? ' ' + className : '';

        const setBottomCaption = bottomCaption ? ' ui-table-caption-b' : '';
        const setCondensed = condensed ? ' ui-table-condensed' : '';
        const setCondensedMore = condensedMore ? ' ui-table-condensed-more' : '';
        const setNoSep = noSep ? ' ui-table-no-sep' : '';
        const setNowrap = nowrap ? ' ui-table-nowrap' : '';
        const setSidebar = sidebar ? ' ui-table-sidebar' : '';
        const setValign = valign ? ' ui-table-valign' : '';
        const setStriped = striped ? ' ui-table-striped' : '';
        const setHover = hover ? ' ui-table-hover' : '';
        const setBorder = border ? ' ui-table-border' : '';

        const setClasses = setBottomCaption + setCondensed + setCondensedMore + setNoSep + setNowrap + setSidebar + setValign + setStriped + setHover + setBorder;

        const classes = 'ui-table' + setClasses + setClassName + ' ui-ease-table';

        return (
            <table className={classes} style={style}>
                {children}
            </table>
        );
    }

interface TableScrollProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const TableScroll =  function (

    { children, className, style }:TableScrollProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-table-scroll' + setClassName;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

interface TableFluidProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const TableFluid =  function (

    { children, className, style }:TableFluidProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-table-fluid' + setClassName;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

export default Object.assign(Table, {
    Scroll: TableScroll,
    Fluid: TableFluid,
});