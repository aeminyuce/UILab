import { lazy } from 'react';

export const Home = lazy(() => import(
    /* webpackChunkName: "Home" */
    "../Home"
));

export const Calendar = lazy(() => import(
    /* webpackChunkName: "Calendar" */
    "../Calendar"
));
