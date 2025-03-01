
    'use strict';
    var  React = require('react');

    var moneys = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M64 214c-29.709 0-46.7 8.644-46.871 8.731C9.939 226.466 1.025 221.12 1 213V94c0-3.976 2.221-7.73 5.707-9.643.6-.332 13.314-7.189 35.292-10.259v-24.1c0-4.089 2.35-7.93 5.99-9.792.895-.458 22.312-11.208 58.011-11.208 32.452 0 60.806 20 93 20 29.778 0 47.914-8.757 48.094-8.845 7.18-3.536 15.886 1.83 15.906 9.845v119c0 4.13-2.397 8.003-6.093 9.845-.7.351-13.848 6.783-35.907 9.717v24.438c0 4.13-2.397 8.003-6.093 9.845-.914.455-22.784 11.156-57.907 11.156C124.57 234.001 96.206 214 64 214m135-46a132.2 132.2 0 0 0 42-6.476V65.556A158.5 158.5 0 0 1 199 71c-32.441 0-60.788-20-93-20-19.851 0-34.385 3.821-42 6.433v96.49C78.11 150.488 92.495 149 107 149c31.801 0 60.198 19 92 19m-71-58.245c0-17.8 11.021-31.75 25.092-31.75s25.091 13.946 25.091 31.75-11.022 31.745-25.091 31.745S128 127.554 128 109.75z' })
        );
    }

    module.exports = moneys;
