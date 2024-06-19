import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
import PageTitle from '@ui-layouts/PageTitle';

// utils
import {

    Home,
    Calendar,

} from '@ui-utils/PageRoutes';

export default function () {
    return (
        <Routes>
            <Route path="/*" element={
                <PageTitle title="Home"><Home /></PageTitle>
            } />
            <Route path="calendar" element={
                <PageTitle title="Calendar"><Calendar /></PageTitle>
            } />
        </Routes>
    );
}