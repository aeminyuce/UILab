import React from "react";

// components
import Icon from "components/Icon";

export default function Loader() {
    return (
        <>
            <div className="ui-card ui-set-fixed ui-set-all">
                <div className="ui-set-absolute ui-set-c">
                    <Icon src="loader-line" size="xxl" animate="spin"></Icon>
                </div>
            </div>
        </>
    );
}