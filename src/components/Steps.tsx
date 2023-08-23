import * as React from 'react';

// assets
import '@less/modules/steps';

interface StepsProps {

    children?: React.ReactNode,

    hasInfo?: boolean,
    hasIcon?: boolean,

    className?: string,
    style?: any,

}

const Steps = function (

    { children, hasInfo, hasIcon, className, style }:StepsProps) {

        // classes
        const setHasInfo = hasInfo ? ' ui-steps-info' : '';
        const setHasIcon = hasIcon ? ' ui-steps-icon' : '';

        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-steps-bar' + setClassName + setHasInfo + setHasIcon;

        return (
            <ul className={classes} style={style}>
                {children}
            </ul>
        );
    }

interface StepsItemProps {

    children?: React.ReactNode,

    onClick?: React.ReactEventHandler,

    active?: boolean,

    infoText?: string,
    tooltipText?: string,

    className?: string,
    style?: any,

}

const StepsItem = function (

    { children, onClick, active, infoText, tooltipText, className, style }:StepsItemProps) {

        // classes
        const setActive = active ? 'ui-active' : '';

        const setClassName = className ? ' ' + className : '';
        const classes = setActive + setClassName;

        // data attributes
        const setTooltip = tooltipText ? true : null;

        return (
            <li className={classes} style={style} onClick={onClick}>
                {children}

                {tooltipText ?
                    <span data-ui-tooltip={setTooltip} title={tooltipText}>
                        {infoText}
                    </span>
                    :
                    <>
                        {infoText && <span>{infoText}</span>}
                    </>
                }
            </li>
        );
    }

export default Object.assign(Steps, {
    Item: StepsItem,
});