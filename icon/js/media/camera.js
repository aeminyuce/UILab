
    'use strict';
    var  React = require('react');

    var camera = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M12 239c-5.991 0-11-5.009-11-11V69c0-5.991 5.009-11 11-11h46.824C72.04 30.349 88.175 26 96.999 26h72c14.722 0 27.216 10.756 37.2 32h46.8c5.991 0 11 5.009 11 11v159c0 5.991-5.009 11-11 11zm11-22h219V80h-43c-4.435.001-8.536-2.762-10.2-6.873C181.3 54.601 173.655 48 169 48H97c-5.141 0-13.306 6.6-20.8 25.127C74.536 77.238 70.435 80.001 66 80H23zm55-76c.034-29.943 25.057-54.966 55-55 29.943.034 54.966 25.057 55 55-.034 29.943-25.057 54.966-55 55-29.943-.034-54.966-25.057-55-55' })
        );
    }

    module.exports = camera;
