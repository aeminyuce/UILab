import * as React from 'react';

// imports
import { TabHolderProps, TabContentProps } from './_Models';

// assets
import '../less/modules/tab';
import '../js/modules/tab';

const Tab = function () {}

const TabHolder = function (

    { children, accordion, noease, className, dataClasses, style }:TabHolderProps) {

        // classes
        const setAccordion = accordion ? ' ui-tab-accordion' : '';
        const setEase = noease ? '' : ' ui-ease-tab';

        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-tab-holder' + setAccordion + setClassName + setEase;

        return (
            <div className={classes} data-ui-classes={dataClasses} style={style}>
                {children}
            </div>
        );
    }


const TabContent = function (

    { children, open, className, style }:TabContentProps) {

        // classes
        const setOpen = open ? ' ui-open ui-open-ease' : '';

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-tab-content' + setClassName + setOpen;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

export default Object.assign(Tab, {
    Holder: TabHolder,
    Content: TabContent,
});