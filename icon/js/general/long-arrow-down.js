'use strict';
var  React = require('react');

module.exports.IconLongArrowDown = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M133 263a11 11 0 0 1-7.778-3.221l-56-56c-4.237-4.237-4.237-11.32 0-15.557 4.237-4.236 11.32-4.236 15.556 0l37.221 37.222V12c0-5.991 5.009-11 11-11s11 5.009 11 11v213.1l36.153-36.81c4.198-4.275 11.281-4.339 15.556-.141s4.338 11.283.139 15.557l-55 56a11.08 11.08 0 0 1-7.8 3.292z' })
    );
}