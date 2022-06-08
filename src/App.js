import React, { lazy } from "react";
import { Link } from "react-router-dom";

// assets
import icon_envelope from 'icon/general/envelope.svg';
import icon_camera from 'icon/media/camera.svg';

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
                <Icon src={icon_envelope} size="xs"></Icon>
                <Icon src={icon_envelope} size="sm"></Icon>
                <Icon src={icon_envelope}></Icon>
                <Icon src={icon_envelope} size="lg"></Icon>
                <Icon src={icon_envelope} size="xl"></Icon>
                <Icon src={icon_envelope} size="xxl"></Icon>
                <Icon src={icon_camera}></Icon>
                <Icon src={icon_camera} size="xl"></Icon>
                <Icon src={icon_camera} size="xxl"></Icon>
                <br/>
                <Icon src={icon_envelope} size="lg" animate="bounce-y"></Icon>
                <br/><br/>
                <Button type="submit" label="Test Button"></Button>
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
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                show top button

            </div>
        </>
    );
}