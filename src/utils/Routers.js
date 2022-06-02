import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routes
import App from "../App";
import Calendar from "../Calendar";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="calendar" element={<Calendar />} />
            </Routes>
        </BrowserRouter>
    );
}