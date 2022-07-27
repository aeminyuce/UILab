import * as React from 'react';
import { createRoot } from 'react-dom/client';

// assets
import "@utils/SharedStyles";
import "@utils/SharedScripts";

// utils
import Routers from '@utils/Routers';

const root = createRoot(document.getElementById('app'));
root.render(<Routers />);