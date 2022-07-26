import * as React from 'react';
import { createRoot } from 'react-dom/client';

// utils
import Routers from '@utils/Routers';

const root = createRoot(document.getElementById('app'));
root.render(<Routers />);