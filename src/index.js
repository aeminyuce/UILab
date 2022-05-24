import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

import '../less/ui.less';
import '../js/ui.js';

const root = createRoot(document.getElementById('app'));
root.render(<App />);