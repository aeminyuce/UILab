'use strict';
var  React = require('react');

module.exports.IconPlus = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M121.5 252V142.5H12c-5.991 0-11-5.009-11-11s5.009-11 11-11h109.5V12c0-5.991 5.009-11 11-11s11 5.009 11 11v108.5H252c5.991 0 11 5.009 11 11s-5.009 11-11 11H143.5V252c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
    );
}