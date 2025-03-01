
    'use strict';
    var  React = require('react');

    var calculator = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M35 263c-5.97 0-11-4.978-11-11V12c0-5.992 5.009-11 11-11h194c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11zm11-22h172V95H46zM218 73V23H46v50zm-43 157c-5.447 0-10-4.553-10-10V116c0-5.447 4.553-10 10-10h22c5.447 0 10 4.553 10 10v104c0 5.447-4.553 10-10 10zm-54 0c-5.447 0-10-4.553-10-10v-36c0-5.447 4.553-10 10-10h22c5.447 0 10 4.553 10 10v36c0 5.447-4.553 10-10 10zm-54 0c-5.447 0-10-4.553-10-10v-36c0-5.447 4.553-10 10-10h22c5.447 0 10 4.553 10 10v36c0 5.447-4.553 10-10 10zm54-68c-5.447 0-10-4.553-10-10v-36c0-5.447 4.553-10 10-10h22c5.447 0 10 4.553 10 10v36c0 5.447-4.553 10-10 10zm-54 0c-5.447 0-10-4.553-10-10v-36c0-5.447 4.553-10 10-10h22c5.447 0 10 4.553 10 10v36c0 5.447-4.553 10-10 10z' })
        );
    }

    module.exports = calculator;
