import * as React from 'react';
import { Link } from 'react-router-dom';

// utils
import { BreadcrumbsProps, BreadcrumbsItemProps } from './utils/models';

// assets
import '../less/modules/breadcrumbs';

const Breadcrumbs = function (props:BreadcrumbsProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-breadcrumbs${setClassName}`;

    return (
        <nav className={classes} style={style}>
            <ul>
                {children}
            </ul>
        </nav>
    );

}

const BreadcrumbsItem = function (props:BreadcrumbsItemProps) {

    const { children, to, className, data, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = setClassName;

    // data attributes
    let setData = [];

    for (const name in data) {

        const attr = `data-ui-${name}`;
        setData[attr] = data[name];

    }

    return (
        <>
        {to ? (
            <li>
                <Link to={to} className={classes} {...setData} style={style}>
                    {children}
                </Link>
            </li>
        ) : (
            <li className={classes} {...setData} style={style}>
                {children}
            </li>
        )}
        </>
    );

}

export default Object.assign(Breadcrumbs, {
    Item: BreadcrumbsItem,
});