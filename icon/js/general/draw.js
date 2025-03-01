
    'use strict';
    var  React = require('react');

    var draw = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'null' })
        );
    }

    module.exports = draw;
