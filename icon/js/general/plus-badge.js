'use strict';
var  React = require('react');

module.exports.IconPlusBadge = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M121 180v-37H83.5c-5.991 0-11-5.009-11-11s5.009-11 11-11H121V84c0-5.991 5.009-11 11-11s11 5.009 11 11v37h36.5c5.991 0 11 5.009 11 11s-5.009 11-11 11H143v37c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
    );
}