'use strict';
var  React = require('react');

module.exports.IconSquare = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M48 1h168c25.588.029 46.971 21.412 47 47v168c-.029 25.588-21.412 46.971-47 47H48c-25.588-.029-46.971-21.412-47-47V48C1.029 22.412 22.412 1.029 48 1m168 240c13.611-.015 24.985-11.389 25-25V48c-.015-13.61-11.389-24.985-25-25H48c-13.61.015-24.985 11.39-25 25v168c.015 13.611 11.39 24.985 25 25z' })
    );
}