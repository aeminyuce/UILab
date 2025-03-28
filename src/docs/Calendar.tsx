import * as React from 'react';
import Calendar from '@components/Calendar';
import Grid from '@components/Grid';

// layouts
import Code from '@layouts/Code';
import PageHeader from '@layouts/PageHeader';
import PageNav from '@layouts/PageNav';
import Preview from '@layouts/Preview';

// utils
import { StoreActions } from '@utils/StoreActions';

export default function () {
    const { calendarTheme, setCalendarTheme, calendarStyle, setCalendarStyle } = StoreActions();

    // themes
    const selectedTheme = calendarTheme ? ' ' + calendarTheme : '';

    const themeList = [
        { name: 'Gray', theme: 'ui-theme-gray', color: 'ui-fill-dark-200' },
        { name: 'Jungle', theme: 'ui-theme-jungle', color: 'ui-fill-dark-100' },
        { name: 'Sea', theme: 'ui-theme-sea', color: 'ui-fill-dark-100' },
        { name: 'Blue', theme: 'ui-theme-blue', color: 'ui-fill-dark-100' },
        { name: 'Ice', theme: 'ui-theme-ice', color: 'ui-fill-dark-100' },
        { name: 'Orchid', theme: 'ui-theme-orchid', color: 'ui-fill-dark-100' },
        { name: 'Pink', theme: 'ui-theme-pink', color: 'ui-fill-dark-100' },
    ]

    // styles
    const styles = {
        basic: `
            import * as React from 'react';
            import Calendar from '@components/Calendar';
            import { Calendar } from '@components/Calendar';
            import { Calendar, Button } from '@components/Calendar';

            import {
                Calendar,
                Button,
            } from '@components/Calendar';

            // js comment
            export default function () {
                return (
                    {/* jsx comment */}
                    <Calendar className='ui-round ui-shadow-lg${selectedTheme}' />
                );
            }
        `
    }

    return (
        <Grid.Container as='div' noGutter='all'>
            <Grid.Static fluid='no'>
                <PageNav />
                <Grid.Row gap='no'>
                    <Grid.Col size={12}>
                        <PageHeader pageTitle='Calendar' />
                        <Grid.Container fixed='xl' as='div' className='ui-m-30-v'>

                            <p>The Calendar component lets users select a day, month, or year.</p>

                            <Preview indSize={3} theme={{ get: selectedTheme, set: setCalendarTheme}} themeList={themeList} type='react' value={styles.basic}>
                                <Calendar className={`ui-round ui-shadow-lg${selectedTheme}`} />
                            </Preview>

                            <h3 className='ui-h3'>Globals</h3>
                            <p>You can change calendar component's global settings.</p>

                            <Code indSize={8} className='ui-round' type='js' value={`
                                ui.globals.pickerSep = '/';

                                // js comment
                                ui.globals.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                                ui.globals.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                                ui.globals.dateFormat = 1;                                              // 0: dd mm yyyy, 1: mm dd yyyy
                                ui.globals.startDayofWeek = 1;                                          // 0: Sunday, 1: Monday

                                ui.globals.fillWeekends = true;                                         // true: fills dark color to weekends' background

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