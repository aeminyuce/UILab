
    'use strict';
    var  React = require('react');

    var export = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M263 216.001c-.029 25.588-21.412 46.971-47 47H48c-25.588-.029-46.971-21.412-47-47v-104c0-5.991 5.009-11 11-11s11 5.009 11 11v104c.015 13.611 11.39 24.985 25 25h168c13.611-.015 24.985-11.389 25-25v-104c0-5.991 5.009-11 11-11s11 5.009 11 11zm-79.045-151.85c-4.237 4.237-11.32 4.237-15.557 0l-25.4-25.4V156c0 5.991-5.009 11-11 11s-11-5.009-11-11V38.739L95.429 64.318c-4.237 4.237-11.32 4.237-15.557 0s-4.237-11.32 0-15.557l43.27-43.285c4.326-5.885 13.419-5.875 17.731.02l43.083 43.1c4.238 4.23 4.238 11.326-.002 15.554z' })
        );
    }

    module.exports = export;
