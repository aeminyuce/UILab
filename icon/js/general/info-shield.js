
    'use strict';
    var  React = require('react');

    var info-shield = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M127.971 262.208c-2.9-1.167-71.427-29.141-100.489-80.816C-1.196 130.398.971 55.782 1.077 52.629c.183-5.35 4.356-9.902 9.67-10.549C51.545 37.156 90.952 22.233 126.74 2.378c3.334-1.846 7.491-1.817 10.798.077 35.626 20.466 74.977 34.55 115.812 39.621 5.388.631 9.607 5.277 9.718 10.7.064 3.148 1.23 77.69-27.409 128.614-29.047 51.647-96.576 79.629-99.436 80.8a11.06 11.06 0 0 1-8.252.018M23.071 62.484c.375 20.714 3.431 72.276 23.592 108.123 21.539 38.3 70.787 62.782 85.372 69.383 14.438-6.655 62.988-31.215 84.452-69.383 20.185-35.891 23.843-87.274 24.475-108.1-38.494-6.115-74.725-19.5-108.967-37.986-34.69 18.205-70.212 31.6-108.924 37.963m98 129.511v-72c0-5.991 5.009-11 11-11s11 5.009 11 11v72c0 5.991-5.009 11-11 11A11 11 0 0 1 121.069 192zm0-112v-8c0-5.991 5.009-11 11-11s11 5.009 11 11v8c0 5.991-5.009 11-11 11-5.99.001-10.999-5.005-11.002-10.995z' })
        );
    }

    module.exports = info-shield;
