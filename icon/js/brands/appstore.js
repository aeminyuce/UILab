'use strict';
        var  React = require('react');

        var icon_appstore = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'm71 213.059-12 20c-4.354 7.542-13.458 10.354-21 6s-10.354-13.458-6-21l9-17c1.506-2.164 5.565-5.7 13-5 0 0 17.734 1.907 19 11a11.73 11.73 0 0 1-2 6m169-53h-37a5.2 5.2 0 0 1-4-2l-42-72c-3.914-5.985-10 9-10 9-7.421 17.057 1.047 36.138 4 42l55 96c4.353 7.542 13.458 10.354 21 6 7.509-4.449 10.211-14.355 6-22l-14-23c-.268-.581-.836-2.993 2-3h19c8.709 0 16-6.291 16-15-.089-8.679-7.321-15.912-16-16m-72 21s1.683 10-6 10H25c-8.709 0-16-6.291-16-15 .09-8.679 7.321-15.911 16-16h35c5.708-.33 7-4 7-4l46-80a3.04 3.04 0 0 0 0-3l-15-26c-4.211-7.646-1.51-17.551 6-22 7.542-4.354 16.646-1.542 21 6l8 12 7-12c4.354-7.542 13.458-10.355 21-6 7.51 4.448 10.211 14.354 6 22l-64 111c-.281.677-1.089 1.813 1 2h39s21.978.282 25 21' })
            );
        }

        module.exports = icon_appstore;