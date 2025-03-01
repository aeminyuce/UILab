
    'use strict';
    var  React = require('react');

    var arrow-to-right = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M12 120.959h180.608l-85.213-85.182c-4.237-4.237-4.237-11.32 0-15.557 4.237-4.238 11.321-4.238 15.558 0l104.038 104a11.07 11.07 0 0 1 3.224 7.778 11 11 0 0 1-3.224 7.781l-104.038 104c-4.237 4.238-11.321 4.238-15.558 0-4.237-4.237-4.237-11.32 0-15.557l85.29-85.258H12c-5.991 0-11-5.009-11-11-.003-5.993 5.007-11.005 11-11.005m229.231-108.96c0-5.991 5.009-11 11-11 5.992 0 11 5.008 11 11v240c0 5.991-5.009 11-11 11s-11-5.009-11-11z' })
        );
    }

    module.exports = arrow-to-right;
