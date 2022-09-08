import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

// shared assets
import "@utils/SharedStyles";
import "@utils/SharedScripts";

// app
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);