'use strict';
        var  React = require('react');

        var icon_draw = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'null' })
            );
        }

        module.exports = icon_draw;