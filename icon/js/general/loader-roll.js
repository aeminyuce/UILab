'use strict';
var  React = require('react');

module.exports.IconLoaderRoll = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M132.5 263C59.992 263 1 204.459 1 132.5c0-5.991 5.009-11 11-11s11 5.009 11 11C23 192.328 72.122 241 132.5 241c59.07-.066 108.434-49.43 108.5-108.5C241 72.122 192.328 23 132.5 23c-5.991 0-11-5.009-11-11s5.009-11 11-11C204.459 1 263 59.992 263 132.5c-.079 71.047-59.453 130.421-130.5 130.5' })
    );
}