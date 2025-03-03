'use strict';
var  React = require('react');

module.exports.IconArrowDown = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M130.977 263a11.07 11.07 0 0 1-7.787-3.255l-119-120c-4.219-4.254-4.19-11.337.064-15.556 4.254-4.22 11.338-4.191 15.557.064l101.19 102.041V13c0-5.991 5.009-11 11-11s11 5.009 11 11v211.444l100.222-100.222c4.237-4.237 11.32-4.237 15.557 0 4.192 4.192 4.233 11.325 0 15.557l-120 120A11.07 11.07 0 0 1 131 263z' })
    );
}