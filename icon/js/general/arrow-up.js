'use strict';
var  React = require('react');

module.exports.IconArrowUp = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M121 252V39.714L20.811 140.746c-4.219 4.254-11.302 4.283-15.556.064-4.254-4.218-4.284-11.302-.066-15.556l119-120a11.07 11.07 0 0 1 7.787-3.255 11.06 11.06 0 0 1 7.8 3.222l120 120c4.238 4.237 4.238 11.321 0 15.558-4.23 4.239-11.325 4.239-15.554-.001L143 39.556V252c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
    );
}