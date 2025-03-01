
    'use strict';
    var  React = require('react');

    var undo = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M38.574 224.566c-4.237-4.237-4.237-11.32 0-15.557 4.192-4.192 11.325-4.233 15.557 0a109.12 109.12 0 0 0 77.075 31.875c59.391 0 108.949-49.559 108.949-108.95 0-56.959-45.654-105.364-102.456-108.757A109.16 109.16 0 0 0 63.847 46.23H78.5c5.991 0 11 5.009 11 11s-5.009 11-11 11h-42c-5.991 0-11-5.009-11-11v-42c0-5.991 5.009-11 11-11s11 5.009 11 11v15.929C98.914-11.61 175.637-8.895 223.836 39.305c51.078 51.076 51.078 134.186 0 185.261-50.336 50.934-133.324 51.934-185.262 0' })
        );
    }

    module.exports = undo;
