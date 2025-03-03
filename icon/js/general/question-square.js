'use strict';
var  React = require('react');

module.exports.IconQuestionSquare = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M48 263c-25.588-.029-46.97-21.412-47-47V48C1.03 22.412 22.412 1.03 48 1h168c25.588.03 46.971 21.412 47 47v168c-.029 25.588-21.412 46.971-47 47zM23 48v168c.015 13.611 11.39 24.985 25 25h168c13.61-.016 24.984-11.39 25-25V48c-.016-13.61-11.39-24.984-25-25H48c-13.61.015-24.985 11.39-25 25' })
    );
}