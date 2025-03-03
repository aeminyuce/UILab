'use strict';
var  React = require('react');

module.exports.IconQuestionMarker = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M125.129 260.589C120.877 257.189 21 176.546 21 112 21 43.438 78.616 1 132 1s111 42.438 111 111c0 64.545-99.877 145.188-104.127 148.589-3.966 3.177-9.778 3.178-13.744 0M43 112c0 41.366 58.948 100.121 89 125.721 30.051-25.6 89-84.354 89-125.721 0-54.973-46.2-89-89-89s-89 34.027-89 89' })
    );
}