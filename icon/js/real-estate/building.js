
    'use strict';
    var  React = require('react');

    var building.js = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M44 263c-5.991 0-11-5.009-11-11V12c0-5.991 5.009-11 11-11h176c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11zm165-22V23H55v218h47v-45c0-5.447 4.553-10 10-10h40c5.447 0 10 4.553 10 10v45zm-53-75c-5.447 0-10-4.553-10-10v-24c0-5.447 4.553-10 10-10h16c5.447 0 10 4.553 10 10v24c0 5.447-4.553 10-10 10zm-64 0c-5.447 0-10-4.553-10-10v-24c0-5.447 4.553-10 10-10h16c5.447 0 10 4.553 10 10v24c0 5.447-4.553 10-10 10zm64-72c-5.447 0-10-4.553-10-10V60c0-5.447 4.553-10 10-10h16c5.447 0 10 4.553 10 10v24c0 5.447-4.553 10-10 10zm-64 0c-5.447 0-10-4.553-10-10V60c0-5.447 4.553-10 10-10h16c5.447 0 10 4.553 10 10v24c0 5.447-4.553 10-10 10z' })
        );
    }

    module.exports = building.js;
