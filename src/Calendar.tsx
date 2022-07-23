import * as React from 'react';
import { lazy } from 'react';

// components
const Calendar = lazy(() => import("@components/Calendar"));

export default function Page_Calendar() {
    return (
        <>
            <div className="ui-fixed ui-p-30-v">

                <img src="/img/uilab-logo.png" />
                <h1 className="ui-h3">Calendars</h1>
                <div className="ui-row">
                    <Calendar />
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                show top button

            </div>
        </>
    );
}