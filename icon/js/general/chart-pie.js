
    'use strict';
    var  React = require('react');

    var chart-pie = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M2 144.001a119.135 119.135 0 0 1 119-119c5.991 0 11 5.009 11 11v97h97c5.991 0 11 5.009 11 11a119.136 119.136 0 0 1-119 119 119.136 119.136 0 0 1-119-119m22 0a97.11 97.11 0 0 0 97 97 97.14 97.14 0 0 0 64.555-24.66 97.14 97.14 0 0 0 31.826-61.34H121c-5.991 0-11-5.009-11-11V47.62a97.14 97.14 0 0 0-86 96.381m139-32c-5.447 0-10-4.553-10-10v-90c0-5.447 4.553-10 10-10a100.116 100.116 0 0 1 100 100c0 5.447-4.553 10-10 10z' })
        );
    }

    module.exports = chart-pie;
