'use strict';
var  React = require('react');

module.exports.IconSave = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M20.002 263c-5.991 0-11-5.009-11-11V13c0-5.991 5.009-11 11-11h170a11 11 0 0 1 7.234 2.713l55 48a11.08 11.08 0 0 1 3.768 8.288v191c0 5.991-5.009 11-11 11zm11-22h203V66l-48.125-42h-22.875v35c0 5.991-5.009 11-11 11h-90c-5.991 0-11-5.009-11-11V24h-20zm50-108c.032-28.31 23.69-51.968 52-52 28.31.033 51.967 23.69 52 52-.033 28.31-23.69 51.967-52 52-28.31-.033-51.967-23.69-52-52' })
    );
}