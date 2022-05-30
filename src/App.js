import React, { useEffect } from "react";

// utils
import 'utils/Styles';
import 'utils/Scripts';

import Inits from 'utils/Inits';

// modules
import 'style/calendar';
import 'script/calendar';

import 'style/line-chart';
import 'script/line-chart';

// components
import Icon from "components/Icons";
import Button, { SquareButton } from "components/Button";

export default function App() {

    useEffect(() => {
        Inits();

    }); // Runs on every render

    return (
        <>
            <div className="ui-fixed ui-p-30-v">

                <h1>Icons</h1>
                <Icon src="envelope" size="xs"></Icon>
                <Icon src="envelope" size="sm"></Icon>
                <Icon src="envelope"></Icon>
                <Icon src="envelope" size="lg"></Icon>
                <Icon src="envelope" size="xl"></Icon>
                <Icon src="envelope" size="xxl"></Icon>
                <Icon src="camera"></Icon>
                <Icon src="camera" size="xl"></Icon>
                <Icon src="camera" size="xxl"></Icon>
                <br/><br/>
                <Button label="Test Button"></Button>
                <br/><br/>
                <SquareButton label="SB"></SquareButton>
                <br/><br/>
                <h3 className="ui-h3">Calendars</h3>
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
                <div className="ui-col-12">
                    <h3 className="ui-h3">Line Charts</h3>
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