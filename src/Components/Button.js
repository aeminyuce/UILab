import React from "react";

export default function Button(props) {
    return (
        <>
            <button
                className="ui-btn ui-ease-btn"
                type={props.submit ? 'submit' : 'button'}
            >
                {props.label ? props.label : 'New Button'}
            </button>
        </>
    );
}