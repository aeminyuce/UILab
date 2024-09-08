import * as React from 'react';
import { useContext } from 'react';
import Calendar from '@components/Calendar';
import Grid from '@components/Grid';

// layouts
import Code from '@layouts/Code';
import PageHeader from '@layouts/PageHeader';
import PageNav from '@layouts/PageNav';
import Preview from '@layouts/Preview';

// contexes
import { StoreContext } from './App';

export default function () {
    const storeContext = useContext(StoreContext);
    const activeTheme = storeContext.store.previewTheme;

    return (
        <Grid.Container as='div' noGutter='all'>
            <Grid.Static fluid='no'>
                <PageNav />
                <Grid.Row gap='no'>
                    <Grid.Col size={12}>
                        <PageHeader pageTitle='Calendar' />
                        <Grid.Container fixed='xl' as='div' className='ui-m-30-v'>

                            <p>The Calendar component lets users select a day, month, or year.</p>

                            <h3 className='ui-h3'>Import</h3>
                            <Code indSize={8} className='ui-round' value={`
                                import * as React from 'react';
                                import Calendar from '@components/Calendar';
                            `} />

                            <Preview indSize={8} value={`
                                export default function () {
                                    return (
                                        <Calendar className='ui-round ui-shadow-lg${activeTheme ? ` ${activeTheme}` : ''}' />
                                    );
                                }
                            `}>
                                <Calendar className={`ui-round ui-shadow-lg${activeTheme ? ` ${activeTheme}` : ''}`} />
                            </Preview>

                            <h3 className='ui-h3'>Javascript</h3>
                            <p>You can change calendar component's global settings.</p>

                            <Code indSize={8} className='ui-round' value={`
                                ui.globals.pickerSep = '/';

                                ui.globals.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                                ui.globals.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                                ui.globals.dateFormat = 1;               // 0: dd mm yyyy, 1: mm dd yyyy
                                ui.globals.startDayofWeek = 1;           // 0: Sunday, 1: Monday

                                ui.globals.fillWeekends = true;          // true: fills dark color to weekends' background

                                ui.globals.calendarPadding = 5;
                                ui.globals.scrollbarSize = 15;
                            `} />

                        </Grid.Container>
                    </Grid.Col>
                </Grid.Row>
            </Grid.Static>
        </Grid.Container>
    );
}