import * as React from 'react';

// assets
import '@less/modules/tab';
import '@js/modules/tab';

let Tab = function () {}

interface TabHolderProps {

    children?: React.ReactNode,

    className?: string,
    dataClasses? : string,
    style?: any,

}

const TabHolder = function (

    { children, className, dataClasses, style }:TabHolderProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-tab-holder' + setClassName + ' ui-ease-tab';

        return (
            <>
                <div className={classes} data-ui-classes={dataClasses} style={style}>
                    {children}
                </div>
            </>
        );
    }

interface TabContentProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const TabContent = function (

    { children, className, style }:TabContentProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-tab-content' + setClassName;

        return (
            <>
                <div className={classes} style={style}>
                    {children}
                </div>
            </>
        );
    }

export default Object.assign(Tab, {
    Holder: TabHolder,
    Content: TabContent,
});