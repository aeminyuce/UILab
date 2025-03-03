'use strict';
var  React = require('react');

module.exports.IconLoaderLineDual = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M1 132c0-5.991 5.009-11 11-11s11 5.009 11 11c.067 59.342 49.658 108.933 109 109 5.991 0 11 5.009 11 11s-5.009 11-11 11C59.766 263 1 204.233 1 132m240 0c-.066-59.342-49.658-108.934-109-109-5.991 0-11-5.009-11-11s5.009-11 11-11c72.233 0 131 58.768 131 131 0 5.991-5.009 11-11 11s-11-5.009-11-11' })
    );
}