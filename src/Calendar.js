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
            <div className="ui-fixed ui-p-30-v">

                <img src="/img/uilab-logo.png" />
                <h1 className="ui-h3">Calendars</h1>
                <div className="ui-row">
                    <div className="ui-col-4 ui-col-md-6">
                        <div className="ui-calendar ui-ease-calendar"></div>
                    </div>
                    <div className="ui-col-4 ui-col-md-6">
                        <div className="ui-calendar ui-ease-calendar ui-round"></div>
                    </div>
                    <div className="ui-col-4 ui-col-md-6">
                        <div className="ui-calendar ui-ease-calendar ui-round ui-shadow"></div>
                    </div>
                    <div className="ui-col-4 ui-col-md-6">
                        <div className="ui-calendar ui-ease-calendar ui-no-p ui-m-5 ui-shadow-lg ui-theme-sub ui-fill-dark-200"></div>
                    </div>
                    <div className="ui-col-4 ui-col-md-6">
                        <div className="ui-calendar ui-ease-calendar ui-round ui-theme-sub ui-fill-dark-200"></div>
                    </div>
                    <div className="ui-col-4 ui-col-md-6">
                        <div className="ui-calendar ui-ease-calendar ui-round ui-shadow-lg ui-theme-base ui-fill-dark-100"></div>
                    </div>
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                show top button

            </div>
        </>
    );
}