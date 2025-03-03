'use strict';
var  React = require('react');

module.exports.IconFile = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M36 263c-5.991 0-11-5.009-11-11V12c0-5.991 5.009-11 11-11h120c2.897 0 5.73 1.173 7.779 3.222l72 72A11 11 0 0 1 239 84v168c0 5.991-5.009 11-11 11zm11-22h170V94h-61c-5.447 0-10-4.553-10-10V23H47z' })
    );
}