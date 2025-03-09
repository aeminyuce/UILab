import * as React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
import PageTitle from '@layouts/PageTitle';

// utils
import {
    Home,
    Calendar,
    SvgIcons
} from '@utils/RouteComponents';

export default function RoutePaths() {
    return (
        <Suspense>
            <Routes>
                <Route path='/*' element={
                    <PageTitle title='Home'><Home /></PageTitle>
                } />
                <Route path='calendar' element={
                    <PageTitle title='Calendar'><Calendar /></PageTitle>
                } />
                <Route path='icons' element={
                    <PageTitle title='Icons'><SvgIcons /></PageTitle>
                } />
            </Routes>
        </Suspense>
    );
}