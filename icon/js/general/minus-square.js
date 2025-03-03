'use strict';
var  React = require('react');

module.exports.IconMinusSquare = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M48 263c-25.588-.029-46.97-21.412-47-47V48C1.029 22.412 22.412 1.029 48 1h168c25.588.03 46.971 21.412 47 47v168c-.03 25.587-21.413 46.97-47 47zM23 48v168c.015 13.611 11.39 24.985 25 25h168c13.611-.015 24.985-11.389 25-25V48c-.015-13.61-11.389-24.985-25-25H48c-13.61.015-24.985 11.39-25 25m60.5 95c-5.991 0-11-5.009-11-11s5.009-11 11-11h96c5.991 0 11 5.009 11 11s-5.009 11-11 11z' })
    );
}