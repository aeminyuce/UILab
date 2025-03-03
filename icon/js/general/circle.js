'use strict';
var  React = require('react');

module.exports.IconCircle = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M132 1c72.234 0 131 58.766 131 131s-58.766 131-131 131S1 204.234 1 132 59.766 1 132 1m0 240c59.393 0 109-49.776 109-109 0-59.22-49.78-109-109-109C72.776 23 23 72.607 23 132c.067 59.342 49.658 108.933 109 109' })
    );
}