'use strict';
        var  React = require('react');

        var icon_settings = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M1 220.001c.027-23.41 19.59-42.973 43-43 19.277.024 36.618 13.372 41.575 32h166.426c5.991 0 11 5.009 11 11s-5.009 11-11 11H85.575c-4.957 18.629-22.298 31.976-41.575 32-23.41-.026-42.974-19.59-43-43m129.426-77H12c-5.991 0-11-5.009-11-11s5.009-11 11-11h118.426c4.957-18.628 22.298-31.976 41.575-32 19.277.024 36.617 13.372 41.574 32h38.426a11 11 0 0 1 11 11c0 5.991-5.009 11-11 11h-38.426c-4.956 18.629-22.297 31.976-41.574 32-19.278-.024-36.618-13.371-41.575-32m20.574-11c.013 11.433 9.567 20.987 21 21 11.433-.013 20.987-9.567 21-21-.012-11.433-9.567-20.988-21-21-11.433.012-20.989 9.567-21.001 21zm-150-88c.027-23.41 19.59-42.973 43-43 19.276.025 36.617 13.372 41.575 32h166.426c5.991 0 11 5.009 11 11s-5.009 11-11 11H85.575c-4.957 18.628-22.298 31.976-41.575 32-23.41-.026-42.974-19.59-43-43' })
            );
        }

        module.exports = icon_settings;