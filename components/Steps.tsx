import * as React from 'react';

// imports
import { StepsProps, StepsItemProps } from './_Models';

// assets
import '../less/modules/steps';

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