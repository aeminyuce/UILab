import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// layouts
import StoreProvider from '@layouts/StoreProvider';

// shared assets
import "../less/ui.less";
import "../js/ui.js";

// app
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>
);