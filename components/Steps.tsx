import * as React from 'react';

// utils
import { StepsProps, StepsItemProps } from './utils/models';

// assets
import '../less/modules/steps';

const Steps = function (props:StepsProps) {

    const { children, hasInfo, hasIcon, className, style } = props;

    // classes
    const setHasInfo = hasInfo ? ' ui-steps-info' : '';
    const setHasIcon = hasIcon ? ' ui-steps-icon' : '';

    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-steps-bar${setClassName}${setHasInfo}${setHasIcon}`;

    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    );

}

const StepsItem = function (props:StepsItemProps) {

    const { children, onClick, active, infoText, tooltipText, className, style } = props;

    // classes
    const setActive = active ? 'ui-active' : '';

    const setClassName = className ? ` ${className}` : '';
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