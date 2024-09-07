import * as React from 'react';
import Calendar from '@components/Calendar';
import Card from '@components/Card';
import Grid from '@components/Grid';

// layouts
import PageHeader from '@layouts/PageHeader';
import PageNav from '@layouts/PageNav';
import CodePreview from '@layouts/CodePreview';

export default function () {
    return (
        <Grid.Container as='div' noGutter='all'>
            <Grid.Static fluid='no'>
                <PageNav />
                <Grid.Row gap='no'>
                    <Grid.Col size={12}>
                        <PageHeader pageTitle='Calendar' />
                        <Grid.Container fixed='xl' as='div' className='ui-m-30-v'>

                            <p>The Calendar component lets users select a day, month, or year.</p>

                            <h3 className="ui-h3">Import</h3>
                            <CodePreview indSize={8} className='ui-round' value={`
                                import * as React from 'react';
                                import Calendar from '@components/Calendar';
                            `} />

                            <h3 className="ui-h3">Preview</h3>
                            <Grid.Row gap='no' className="ui-highlight ui-border ui-border-light ui-round">
                                <Grid.Col lg={{ size: 6, push: 3 }} size={8} push={2} fluid='sm' className='ui-p-10-h ui-p-30-v ui-m-30-v'>
                                    <Calendar className='ui-round ui-shadow-lg' />
                                </Grid.Col>
                            </Grid.Row>

                            <h3 className="ui-h3">Usage</h3>
                            <CodePreview indSize={8} className='ui-round' value={`
                                export default function () {
                                    return (
                                        <Calendar className='ui-round ui-shadow-lg' />
                                    );
                                }
                            `} />

                            <h3 className="ui-h3">Javascript</h3>
                            <p>You can change calendar component's global settings.</p>

                            <CodePreview indSize={8} className='ui-round' value={`
                                ui.globals.pickerSep = '/';

                                ui.globals.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                                ui.globals.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                                ui.globals.dateFormat = 1;               // 0: dd mm yyyy, 1: mm dd yyyy
                                ui.globals.startDayofWeek = 1;           // 0: Sunday, 1: Monday

                                ui.globals.fillWeekends = true;          // true: fills dark color to weekends' background

                                ui.globals.calendarPadding = 5;
                                ui.globals.scrollbarSize = 15;
                            `} />

                            <h3 className="ui-h3">CSS</h3>
                            <p>The Calendar component useing CSS class names listed below.</p>

                            <Card className='ui-round ui-p-10 ui-shadow-lg'>
                                <Grid.Row fluid='xs'>
                                    <Grid.Col lg={3} size={6}>
                                        <ul className="ui-list-unstyled ui-list-sp-5">
                                            <li>ui-calendar</li>
                                            <li>ui-calendar-next</li>
                                            <li>ui-calendar-prev</li>
                                            <li>ui-calendar-year</li>
                                            <li>ui-calendar-month</li>
                                            <li>ui-calendar-panel</li>
                                        </ul>
                                    </Grid.Col>
                                    <Grid.Col lg={3} size={6}>
                                        <ul className="ui-list-unstyled ui-list-sp-5">
                                            <li>ui-calendar-title</li>
                                            <li>ui-calendar-today</li>
                                            <li>ui-calendar-picker</li>
                                            <li>ui-calendar-details</li>
                                            <li>ui-calendar-picker-l</li>
                                            <li>ui-calendar-picker-t</li>
                                        </ul>
                                    </Grid.Col>
                                    <Grid.Col lg={3} size={6}>
                                        <ul className="ui-list-unstyled ui-list-sp-5">
                                            <li>ui-calendar-container</li>
                                            <li>ui-calendar-pickerday</li>
                                            <li>ui-calendar-panel-call</li>
                                            <li>ui-calendar-show-panel</li>
                                            <li>ui-calendar-has-details</li>
                                            <li>ui-calendar-days-passive</li>
                                        </ul>
                                    </Grid.Col>
                                    <Grid.Col lg={3} size={6}>
                                        <ul className="ui-list-unstyled ui-list-sp-5">
                                            <li>ui-calendar-show-details</li>
                                            <li>ui-calendar-details-empty</li>
                                            <li>ui-calendar-fill-weekends</li>
                                            <li>ui-calendar-picker-opened</li>
                                            <li>ui-calendar-toggle-details</li>
                                        </ul>
                                    </Grid.Col>
                                </Grid.Row>
                            </Card>

                        </Grid.Container>
                    </Grid.Col>
                </Grid.Row>
            </Grid.Static>
        </Grid.Container>
    );
}