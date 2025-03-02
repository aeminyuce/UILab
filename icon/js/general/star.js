'use strict';
        var  React = require('react');

        var icon_star = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'm201.514 255.106-69.512-36.544-69.51 36.544c-7.03 3.696-15.89-2.494-14.51-10.542l13.275-77.4-56.236-54.816c-5.818-5.672-2.5-15.888 5.542-17.057l77.715-11.292 34.755-70.421c3.603-7.304 14.433-7.096 17.934-.001l34.755 70.421 77.715 11.293c8.043 1.166 11.363 11.379 5.542 17.051l-56.234 54.816 13.274 77.4c1.373 8.003-7.32 14.316-14.505 10.548' })
            );
        }

        module.exports = icon_star;