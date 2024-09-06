import * as React from 'react';
import Calendar from '@components/Calendar';
import Grid from '@components/Grid';

// layouts
import PageHeader from '@layouts/PageHeader';
import PageNav from '@layouts/PageNav';

export default function () {
    return (
    <Grid.Container as='main' noGutter='all'>
        <Grid.Static fluid='no'>
            <PageNav />
            <Grid.Row gap='no'>
                <Grid.Col size={12}>
                    <PageHeader pageTitle='Calendar' />
                    <Grid.Container fixed='xl' as='div' className='ui-p-15 ui-m-30-v'>

                        <h3 className="ui-h3">Calendar Styles</h3>
                        <Grid.Row className="ui-row ui-p-30-b">
                            <Grid.Col size={4} md={6}>
                                <Calendar />
                                <pre className="ui-pre ui-ease-pre ui-round ui-m-15-t">
                                    {`<Calendar/>`}
                                </pre>
                            </Grid.Col>
                            <Grid.Col size={4} md={6}>
                                <Calendar className='ui-round' />
                                <pre className="ui-pre ui-ease-pre ui-round ui-m-15-t">
                                    {`<Calendar`}<br />
                                    {`  className='ui-round'`}<br />
                                    {`/>`}
                                </pre>
                            </Grid.Col>
                            <Grid.Col size={4} md={6}>
                                <Calendar className='ui-round ui-shadow' />
                                <pre className="ui-pre ui-ease-pre ui-round ui-m-15-t">
                                    {`<Calendar`}<br />
                                    {`  className='ui-no-p ui-m-5 ui-shadow-lg ui-theme-sub ui-fill-dark-200'`}<br />
                                    {`/>`}
                                </pre>
                            </Grid.Col>
                            <Grid.Col size={4} md={6}>
                                <Calendar className='ui-no-p ui-m-5 ui-shadow-lg ui-theme-sub ui-fill-dark-200' />
                                <pre className="ui-pre ui-ease-pre ui-round ui-m-15-t">
                                    {`<Calendar`}<br />
                                    {`  className='ui-no-p ui-m-5 ui-shadow-lg ui-theme-sub ui-fill-dark-200'`}<br />
                                    {`/>`}
                                </pre>
                            </Grid.Col>
                            <Grid.Col size={4} md={6}>
                                <Calendar className='ui-round ui-theme-sub ui-fill-dark-200' />
                                <pre className="ui-pre ui-ease-pre ui-round ui-m-15-t">
                                    {`<Calendar`}<br />
                                    {`  className='ui-round ui-theme-sub ui-fill-dark-200'`}<br />
                                    {`/>`}
                                </pre>
                            </Grid.Col>
                            <Grid.Col size={4} md={6}>
                                <Calendar className='ui-round ui-shadow-lg ui-theme-base ui-fill-dark-100' />
                                <pre className="ui-pre ui-ease-pre ui-round ui-m-15-t">
                                    {`<Calendar`}<br />
                                    {`  <Calendar className='ui-round ui-shadow-lg ui-theme-base ui-fill-dark-100'`}<br />
                                    {`/>`}
                                </pre>
                            </Grid.Col>
                        </Grid.Row>

                    </Grid.Container>
                </Grid.Col>
            </Grid.Row>
        </Grid.Static>
    </Grid.Container>
    );
}