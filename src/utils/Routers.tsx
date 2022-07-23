import * as React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// assets
import "@/src/utils/SharedStyles";
import "@/src/utils/SharedScripts";

// components
const PageLoader = lazy(() => import("@/src/components/PageLoader"));
const TopButton = lazy(() => import("@/src/components/TopButton"));

// routes
const Route_Index = lazy(() => import("../App"));
const Route_Calendar = lazy(() => import("../Calendar"));

export default function Routers() {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<PageLoader />}>
                    <Routes>

                        <Route path="/" element={<Route_Index />} />

                        <Route path="calendar" element={<Route_Calendar />} />

                    </Routes>
                </Suspense>
            </BrowserRouter>
            <TopButton />
        </>
    );
}