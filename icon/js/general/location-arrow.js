'use strict';
var  React = require('react');

module.exports.IconLocationArrow = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M144.001 263c-5.99-.003-10.997-5.01-11-11V131h-121c-5.123 0-9.68-3.683-10.755-8.692s1.57-10.238 6.241-12.34l240-108c4.122-1.855 9.096-.943 12.292 2.253s4.108 8.17 2.253 12.292l-108 240c-1.758 3.907-5.747 6.487-10.031 6.487m-80.75-154h80.75c5.991 0 11 5.009 11 11v80.75l75.068-166.818z' })
    );
}