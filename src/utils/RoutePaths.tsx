import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// utils
import {

    Home,
    Calendar,

 } from '@utils/PageRoutes';


export default function () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="calendar" element={<Calendar />} />
            </Routes>
        </>
    );
}