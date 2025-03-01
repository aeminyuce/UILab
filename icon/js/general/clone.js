
    'use strict';
    var  React = require('react');

    var clone = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M104 262.999c-25.588-.028-46.972-21.412-47-47v-9h-9c-25.588-.029-46.971-21.412-47-47v-112c.029-25.588 21.412-46.971 47-47h112c25.588.028 46.972 21.412 47 47v9h9c25.587.03 46.97 21.413 47 47v112c-.029 25.588-21.412 46.971-47 47zm-25-159v112c.015 13.611 11.39 24.985 25 25h112c13.611-.015 24.985-11.389 25-25v-112c-.015-13.61-11.389-24.985-25-25H104c-13.61.015-24.985 11.39-25 25' })
        );
    }

    module.exports = clone;
