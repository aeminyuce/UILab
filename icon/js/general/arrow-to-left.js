'use strict';
var  React = require('react');

module.exports.IconArrowToLeft = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M1 12C1 6.009 6.009 1 12 1s11 5.009 11 11v240a11 11 0 0 1-22 0zm36.246 112.222 104.038-104c4.236-4.236 11.319-4.236 15.555 0 4.192 4.192 4.233 11.325 0 15.557l-85.292 85.26h180.687c5.991 0 11 5.009 11 11s-5.009 11-11 11H71.627l85.212 85.182c4.236 4.236 4.236 11.319 0 15.555s-11.319 4.236-15.555 0l-104.038-104a11.07 11.07 0 0 1-3.224-7.781 11 11 0 0 1 3.224-7.773' })
    );
}