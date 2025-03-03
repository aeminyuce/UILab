'use strict';
var  React = require('react');

module.exports.IconMarker = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M132 1c53.383 0 111 42.438 111 111 0 64.545-99.877 145.188-104.128 148.59-3.969 3.175-9.774 3.175-13.743 0C120.877 257.188 21 176.545 21 112 21 43.438 78.617 1 132 1m0 236.721c30.051-25.6 89-84.355 89-125.721 0-54.973-46.2-89-89-89s-89 34.027-89 89c0 41.366 58.949 100.122 89 125.721' })
    );
}