import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
import PageTitle from '@layouts/PageTitle';

// utils
import {

    Home,
    Calendar,

} from '@utils/PageRoutes';

export default function () {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <PageTitle title="Home"><Home /></PageTitle>
                } />
                <Route path="calendar" element={
                    <PageTitle title="Calendar"><Calendar /></PageTitle>
                } />
            </Routes>
        </>
    );
}