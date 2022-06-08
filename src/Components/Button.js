import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {

    if (!props.label) return;

    const defaultClassNames = "ui-btn ui-ease-btn";

    return (
        <>
            <button type={props.type} className={defaultClassNames}>
                {props.label}
            </button>
        </>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['submit', 'button']),
};