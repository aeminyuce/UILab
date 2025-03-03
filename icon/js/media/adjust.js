'use strict';
var  React = require('react');

module.exports.IconAdjust = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M1 132C1 59.767 59.767 1 132 1s131 58.767 131 131-58.766 131-131 131S1 204.233 1 132m22 0c.067 59.342 49.658 108.933 109 109V23c-59.342.067-108.933 49.658-109 109' })
    );
}