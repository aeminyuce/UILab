'use strict';
var  React = require('react');

module.exports.IconSunset = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M48 229c-5.991 0-11-5.009-11-11s5.009-11 11-11h168c5.991 0 11 5.009 11 11s-5.009 11-11 11zm-36-44c-5.992 0-11-5.008-11-11 0-5.991 5.009-11 11-11h24.874A105 105 0 0 1 33 134c.06-53.898 45.102-98.94 99-99 53.898.061 98.939 45.102 99 99a88.8 88.8 0 0 1-4.841 29H252c5.991 0 11 5.009 11 11 0 5.928-5.015 11-11 11z' })
    );
}