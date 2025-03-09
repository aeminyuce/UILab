import { lazy } from 'react';

export const Home = lazy(() => import( /* webpackChunkName: "Home" */ "../Home" ));
export const Calendar = lazy(() => import( /* webpackChunkName: "Calendar" */ "../docs/Calendar" ));
export const SvgIcons = lazy(() => import( /* webpackChunkName: "Calendar" */ "../SvgIcons" ));
