'use strict';
var  React = require('react');

module.exports.IconBan = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M0 132C0 59.216 59.214 0 132 0s132 59.216 132 132-59.214 132-132 132S0 204.785 0 132m132 110c59.887-.067 109.933-50.113 110-110a109.52 109.52 0 0 0-27.057-72.177L59.822 214.944A109.53 109.53 0 0 0 132 242M22 132a109.45 109.45 0 0 0 22.744 66.91L198.909 44.743A109.44 109.44 0 0 0 132 22c-59.886.068-109.932 50.114-110 110' })
    );
}