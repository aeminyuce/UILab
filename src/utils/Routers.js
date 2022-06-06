import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// utils
import PageLoader from "utils/PageLoader";

// assets
import "style/ui-react";
import "script/ui-react";

// components
const TopButton = lazy(() => import("components/TopButton"));

// routes
const Page_Index = lazy(() => import("../App"));
const Page_Calendar = lazy(() => import("../Calendar"));

export default function Routers() {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Page_Index />} />
                        <Route path="calendar" element={<Page_Calendar />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <TopButton />
        </>
    );
}