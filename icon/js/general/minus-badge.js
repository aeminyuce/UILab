'use strict';
var  React = require('react');

module.exports.IconMinusBadge = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M83.5 143c-5.991 0-11-5.009-11-11s5.009-11 11-11h96c5.991 0 11 5.009 11 11s-5.009 11-11 11z' })
    );
}