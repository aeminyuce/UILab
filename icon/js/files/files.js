'use strict';
var  React = require('react');

module.exports.IconFiles = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M36.5 263c-5.991 0-11-5.009-11-11V52c0-5.991 5.009-11 11-11h29V12c0-5.991 5.009-11 11-11h80c2.897 0 5.73 1.173 7.779 3.222l72 72A11 11 0 0 1 239.5 84v128c0 5.991-5.009 11-11 11h-29v29c0 5.991-5.009 11-11 11zm181-62V94h-61c-5.447 0-10-4.553-10-10V23h-59v178z' })
    );
}