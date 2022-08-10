import * as React from 'react';
import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// layouts
import PageLoader from '@layouts/PageLoader';

// components
import TopButton from '@components/TopButton';

// routes
const Route_Index = lazy(() => import(/* webpackChunkName: "App" */ "../App"));
const Route_Calendar = lazy(() => import(/* webpackChunkName: "Calendar" */ "../Calendar"));

export default function () {
    return (
        <>
            <HashRouter>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Route_Index />} />
                        <Route path="calendar" element={<Route_Calendar />} />
                    </Routes>
                </Suspense>
            </HashRouter>

            <TopButton />
        </>
    );
}