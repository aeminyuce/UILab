import React, { lazy } from "react";
import { Link } from "react-router-dom";

// components
const Icon = lazy(() => import("components/Icon"));
const Button = lazy(() => import("components/Button"));
const LineChart = lazy(() => import("components/LineChart"));

export default function App() {
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
                <div className="ui-col-12">
                    <h3 className="ui-h3">Line Charts</h3>
                </div>
                <div className="ui-row">
                    <div className="ui-col-12">
                        <LineChart />
                    </div>
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                show top button

            </div>
        </>
    );
}