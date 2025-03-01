
    'use strict';
    var  React = require('react');

    var percent-badge = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M134.501 165.499c.018-16.877 14.123-30.982 31-31 16.877.018 30.981 14.123 31 31-.019 16.877-14.123 30.981-31 31-16.877-.018-30.982-14.122-31.001-30.999zm22 0c.006 4.899 4.101 8.993 9 9 4.899-.007 8.993-4.101 9-9-.006-4.9-4.1-8.994-9-9-4.9.005-8.996 4.101-9.001 9.001zm-80.279 21.279c-4.238-4.237-4.238-11.321 0-15.558l95-95c4.232-4.233 11.365-4.192 15.557 0 4.238 4.237 4.238 11.321 0 15.558l-95 95c-4.23 4.241-11.328 4.24-15.557 0M66.502 97.5c.018-16.878 14.122-30.982 31-31 16.877.019 30.981 14.123 31 31-.02 16.877-14.123 30.98-31 31-16.878-.017-30.984-14.122-31.002-31zm22 0c.004 4.9 4.1 8.996 9 9 4.9-.004 8.996-4.1 9-9-.004-4.9-4.1-8.996-9-9-4.901.003-8.998 4.099-9.002 9z' })
        );
    }

    module.exports = percent-badge;
