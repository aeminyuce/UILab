'use strict';
        var  React = require('react');

        var icon_behance = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M144 152c0-31.963 23.328-56 56-56 36.706 0 54.119 27.13 52 60h-78c.8 18.545 10.56 30 27 30 11.889 0 22.078-9.356 24-16h26c-8.266 25.21-26.608 38-51 38-33.967 0-56-22.937-56-56m30-16h48c-2.721-14.814-8.577-18-23-18-18.751 0-24.6 9.841-25 18M12 205V57h70c28.315 0 48 10.483 48 38 0 14.42-8.1 23.755-21 30 18.134 5.146 28 19.661 28 38 0 29.951-26.186 42-53 42zm30-24h38c12.994 0 23-3.685 23-19 0-15.021-8.984-21-23-21H42zm0-65h36c11.4 0 20-4.606 20-17 0-14.119-11.308-17-23-17H42zm129-29V71h56v16z' })
            );
        }

        module.exports = icon_behance;