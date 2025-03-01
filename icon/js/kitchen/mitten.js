
    'use strict';
    var  React = require('react');

    var mitten = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M27.999 263c-5.991 0-11-5.009-11-11V91c0-50.468 37.776-90 86-90 45.514 0 77.141 15.9 82.267 89.524 15.767-9.835 36.554-12.545 50.511 1.698 14.783 14.777 15.223 35.278.655 54.885l-50.433 69.465V252c0 5.991-5.009 11-11 11zm141.57-61.245c49.868-68.685 55.444-74.5 55.631-81.755.163-6.327-2.936-12.443-8.983-14.982-11.894-4.995-26.15 8.47-33.441 15.761-6.774 6.773-18.778 1.8-18.778-7.779 0-83.544-25.282-90-61-90-35.888 0-64 29.869-64 68v110.755z' })
        );
    }

    module.exports = mitten;
