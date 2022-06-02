import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routes
const App = lazy(() => import('../App'));
const Calendar = lazy(() => import('../Calendar'));

// utils
import Loader from "utils/Loader";

export default function Routers() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="calendar" element={<Calendar />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}