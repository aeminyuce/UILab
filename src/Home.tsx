import * as React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@components/Icon';
import Button from '@components/Button';
import Grid from '@components/Grid';

// assets
const icon_envelope = require("@icon/envelope.svg") as string;
const icon_camera = require("@icon/camera.svg") as string;

export default function () {
    return (
        <>
            <Grid.Container fixed as="div" className="ui-p-30-v">

                <img src="img/uilab-logo.png" />
                <br/>
                <Link className="ui-link" to="/">Home</Link> | <Link className="ui-link" to="/calendar">Calendar</Link>
                <br/><br/>

                <h1>Icons</h1>
                <Icon src={icon_envelope} size="xs" />
                <Icon src={icon_envelope} size="sm" />
                <Icon src={icon_envelope} />
                <Icon src={icon_envelope} size="lg" />
                <Icon src={icon_envelope} size="xl" />
                <Icon src={icon_envelope} size="xxl" />
                <Icon src={icon_camera} />
                <Icon src={icon_camera} size="xl" />
                <Icon src={icon_camera} size="xxl" />
                <br/>
                <Icon src={icon_envelope} size="lg" animate="bounce-y" />
                <br/><br/>
                <Button type="submit">
                    Test Button
                </Button>
                <br/><br/>
                <Grid.Row>
                    <Grid.Col size={12}>
                        col-12 grid
                    </Grid.Col>
                </Grid.Row>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                show top button

            </Grid.Container>
        </>
    );
}