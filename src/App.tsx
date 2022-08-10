import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Link, HashRouter, Routes, Route } from 'react-router-dom';
import Icon from '@components/Icon';
import Button from '@components/Button';
import Grid from '@components/Grid';
import LineChart from '@components/LineChart';
import TopButton from '@components/TopButton';

// layouts
import PageLoader from '@layouts/PageLoader';

// utils
import { Route_Calendar } from '@utils/PageRoutes';

// assets
const icon_envelope = require("@icon/general/envelope.svg") as string;
const icon_camera = require("@icon/media/camera.svg") as string;

export default function () {
    return (
        <>
            <HashRouter>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="calendar" element={<Route_Calendar />} />
                    </Routes>
                </Suspense>
            </HashRouter>

            <TopButton />
        </>
    );
}

const Home = function () {
    return (
        <>
            <Grid.Container fixed as="div" className="ui-p-30-v">

                <img src="img/uilab-logo.png" />
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
                <Button type="submit">
                    Test Button
                </Button>
                <br/><br/>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <h3 className="ui-h3">Line Charts</h3>
                    </Grid.Col>
                    <Grid.Col size={12}>
                        <LineChart />
                    </Grid.Col>
                </Grid.Row>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                show top button

            </Grid.Container>
        </>
    );
}