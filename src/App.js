import React, { useEffect } from "react";

// UI
import '../less/ui.less';
import '../js/ui.js';

// Globals
import { ui } from '../js/core/globals.js';

// Icons
import svg from '../dist/icons.svg';

ui.globals.iconSrc = svg;
ui.icons.iconSrc = svg;

// Components
import Button from "./Components/Button";

export default function App() {

    useEffect(() => {

        // Inits
        ui.calendar.Init();
        ui.carousel.Init();
        ui.donutChart.Init();
        ui.dualMultiSelect.Init();
        ui.formSpinner.Init();
        ui.forms.Init();
        ui.lineChart.Init();
        ui.photoslide.Init();
        ui.pieChart.Init();
        ui.textareaCounter.Init();
        ui.weather.Init();

    }, []);

    return (
        <>
            <div className="ui-fixed ui-p-30-v">

                <h1>Hello World</h1>
                <Button classname="ui-btn ui-ease-btn" label="Test Button"></Button>

                <br/><br/>
                <h2>SVG Icon Example</h2>
                <svg className="ui-icon"><use href={svg + "#brackets-curly"}></use></svg>
                <br/><br/>

                <h3 className="ui-h3">Calendar Styles</h3>

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
                <div className="ui-row">
                    <div className="ui-col-6">
                        <h5 className="ui-h5 ui-font-bold ui-align-c">Line Chart</h5>
                        <div className="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul className="ui-line-chart">
                                <li data-ui-y="84"></li>
                                <li data-ui-y="56"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="140"></li>
                                <li data-ui-y="28"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="28"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ui-col-6">
                        <h5 className="ui-h5 ui-font-bold ui-align-c">Curved Line Chart</h5>
                        <div className="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul className="ui-line-chart" data-ui-type="curved">
                                <li data-ui-y="0"></li>
                                <li data-ui-y="-56"></li>
                                <li data-ui-y="-112"></li>
                                <li data-ui-y="-140"></li>
                                <li data-ui-y="-28"></li>
                                <li data-ui-y="-20"></li>
                                <li data-ui-y="-28"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                show top button

            </div>
        </>
    );
}