import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// utils
import {

    Home,
    Calendar,

} from '@utils/PageRoutes';
import PageTitle from '@utils/PageTitle';

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