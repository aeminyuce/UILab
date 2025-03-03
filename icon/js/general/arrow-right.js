'use strict';
var  React = require('react');

module.exports.IconArrowRight = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 121h212.48L123.223 19.78c-4.236-4.237-4.236-11.32 0-15.556s11.32-4.236 15.556 0l120 119.955a11.07 11.07 0 0 1 3.223 7.781c0 2.897-1.174 5.731-3.223 7.779l-120 119.955c-4.236 4.236-11.32 4.236-15.556 0-4.198-4.187-4.24-11.337 0-15.563L224.392 143H12c-5.991 0-11-5.009-11-11s5.009-11 11-11' })
    );
}