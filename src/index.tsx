import 'react-app-polyfill/ie11';

import * as React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// shared assets
import "@utils/SharedStyles";
import "@utils/SharedScripts";

// app
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(
    <>
        {process.env.NODE_ENV === 'development' ?
            <HashRouter>
                <App />
            </HashRouter>
            :
            <BrowserRouter>
                <App />
            </BrowserRouter>
        }
    </>
);