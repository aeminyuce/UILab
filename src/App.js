import React, { useEffect } from "react";
import { ui } from '../js/core/globals.js';

import Button from "./Components/Button";

export default function App() {

    useEffect(() => { // https://betterprogramming.pub/tips-for-using-reacts-useeffect-effectively-dfe6ae951421
        ui.calendar.Init();
    }, []);

    return (
        <>
            <div className="ui-p-30">

                <h1>Hello World</h1>
                <Button classname="ui-btn ui-ease-btn" label="Test Button"></Button>

                <br/><br/>

                <h3 className="ui-h3">Calendar Styles</h3>

                <div className="ui-row ui-p-30-b">
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
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                test page scrolling

            </div>
        </>
    );
}