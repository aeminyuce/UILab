'use strict';
var  React = require('react');

module.exports.IconDocs = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M36 263c-5.991 0-11-5.009-11-11V52c0-5.991 5.009-11 11-11h29V12c0-5.991 5.009-11 11-11h152c5.991 0 11 5.009 11 11v200c0 5.991-5.009 11-11 11h-29v29c0 5.991-5.009 11-11 11zm181-62V23H87v178zm-101-58c-5.991 0-11-5.009-11-11s5.009-11 11-11h48c5.991 0 11 5.009 11 11s-5.009 11-11 11zm0-40c-5.991 0-11-5.009-11-11s5.009-11 11-11h72c5.991 0 11 5.009 11 11s-5.009 11-11 11z' })
    );
}