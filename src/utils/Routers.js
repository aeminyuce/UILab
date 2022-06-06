import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// utils
import Loader from "utils/Loader";

// assets
import "style/ui-react";
import "script/ui-react";

// routes
const Page_Index = lazy(() => import("../App"));
const Page_Calendar = lazy(() => import("../Calendar"));

export default function Routers() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Page_Index />} />
                    <Route path="calendar" element={<Page_Calendar />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}