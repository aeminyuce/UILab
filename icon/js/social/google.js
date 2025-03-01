
    'use strict';
    var  React = require('react');

    var google = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M94.025 249.061c46.045 15.461 103.354 4.436 134-35 22.364-27.618 27.407-64.6 25-99-39.436-.36-79.628-.059-119 0-.074 14.05.96 27.95 1 42 23.618.657 46.385.528 70 1-5.96 20.423-19.386 39.63-40 47-39.776 17.534-90.477-6.273-103-48-15.092-39.969 10.133-87.367 51-99 25.322-8.907 51.312.832 73 14 10.954-10.278 20.905-20.911 31-32-24.633-20.614-49.758-32-89-31s-115.321 33.87-117 124 83 116 83 116' })
        );
    }

    module.exports = google;
