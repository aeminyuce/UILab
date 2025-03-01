
    'use strict';
    var  React = require('react');

    var chart-line = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M12 263c-5.991 0-11-5.009-11-11V12C1 6.009 6.009 1 12 1s11 5.009 11 11v229h229c5.991 0 11 5.009 11 11s-5.009 11-11 11zm38.313-66.4c-5.363-2.672-7.612-9.388-4.94-14.751l37.358-74.968c2.337-4.691 7.85-7.115 12.886-5.666l85.857 24.69 36.015-94.747c2.129-5.6 8.59-8.503 14.191-6.374s8.503 8.59 6.374 14.191l-39.612 104.208c-2.006 5.277-7.896 8.223-13.322 6.663l-86.782-24.957-33.274 66.771c-2.67 5.365-9.399 7.624-14.751 4.935z' })
        );
    }

    module.exports = chart-line;
