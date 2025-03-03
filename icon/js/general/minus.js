'use strict';
var  React = require('react');

module.exports.IconMinus = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M1 132c0-5.991 5.009-11 11-11h240c5.991 0 11 5.009 11 11s-5.009 11-11 11H12c-5.991 0-11-5.009-11-11' })
    );
}