'use strict';
        var  React = require('react');

        var icon_remove_square = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M48 263c-25.588-.029-46.97-21.412-47-47V48C1.029 22.412 22.412 1.029 48 1h168c25.588.028 46.972 21.412 47 47v168c-.029 25.588-21.412 46.971-47 47zM23 48v168c.015 13.611 11.39 24.985 25 25h168c13.611-.015 24.985-11.389 25-25V48c-.015-13.61-11.389-24.985-25-25H48c-13.61.015-24.985 11.39-25 25m134.663 125.719L131.5 147.555l-26.162 26.162c-4.237 4.237-11.32 4.237-15.557 0-4.236-4.236-4.236-11.319 0-15.555l26.163-26.163-26.163-26.164c-4.236-4.236-4.236-11.32 0-15.556 4.237-4.237 11.32-4.237 15.557 0l26.163 26.163 26.163-26.163c4.237-4.237 11.32-4.237 15.557 0 4.236 4.237 4.236 11.32 0 15.556l-26.163 26.163 26.163 26.164c4.237 4.237 4.237 11.32 0 15.557-4.23 4.241-11.328 4.24-15.558 0' })
            );
        }

        module.exports = icon_remove_square;