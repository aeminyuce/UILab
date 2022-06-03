import React from "react";
import { createRoot } from 'react-dom/client';

// utils
import Routers from "utils/Routers";

// assets
import "style/ui-react";
import "script/ui-react";

import "style/modules/line-chart";
import "script/modules/line-chart";

import "style/modules/calendar";
import "script/modules/calendar";

const root = createRoot(document.getElementById('app'));
root.render(<Routers />);