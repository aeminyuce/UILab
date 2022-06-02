import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Icon from "components/Icon";
import Button, { SquareButton } from "components/Button";

// modules
import 'style/line-chart';
import 'script/line-chart';

// utils
import Inits from 'utils/Inits';

export default function App() {

    useEffect(() => {
        Inits();

    }, []); // Runs only first render

    return (
        <>
            <div className="ui-fixed ui-p-30-v">

                <img src="/img/uilab-logo.png" />
                <br/>
                <Link className="ui-link" to="/">Home</Link> | <Link className="ui-link" to="/calendar">Calendar</Link>
                <br/><br/>

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
                <br/>
                <Icon src="envelope" size="lg" animate="bounce-y"></Icon>
                <br/><br/>
                <Button label="Test Button"></Button>
                <br/><br/>
                <SquareButton label="SB"></SquareButton>
                <br/><br/>
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