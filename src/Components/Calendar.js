import React, { useEffect } from "react";

// utils
import JsInits from "utils/JsInits";
import JsIcons from "utils/JsIcons";

// assets
import "style/modules/calendar";
import "script/modules/calendar";

export default function Calendar() {

    useEffect(() => {

        JsIcons();
        JsInits();

    }, []); // Runs only first render

    return (
        <>
            <div className="ui-calendar ui-ease-calendar"></div>
        </>
    );
}