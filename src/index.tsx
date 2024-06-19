import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// shared assets
import "@ui-utils/SharedStyles";
import "@ui-utils/SharedScripts";

// app
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);