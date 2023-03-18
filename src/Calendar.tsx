import * as React from 'react';
import { Link } from 'react-router-dom';
import Calendar from '@components/Calendar';
import Grid from '@components/Grid';

export default function () {
    return (
        <>
            <Grid.Container fixed as="div" className="ui-p-30-v">

                <img src="img/uilab-logo.png" />
                <br/>
                <Link className="ui-link" to="/">Home</Link> | <Link className="ui-link" to="/calendar">Calendar</Link>
                <br/><br/>
                <h1 className="ui-h3">Calendars</h1>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Calendar />
                    </Grid.Col>
                </Grid.Row>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                show top button

            </Grid.Container>
        </>
    );
}