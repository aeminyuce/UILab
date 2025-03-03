'use strict';
var  React = require('react');

module.exports.IconInfoBadge = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M121 192v-72c0-5.991 5.009-11 11-11s11 5.009 11 11v72c0 5.991-5.009 11-11 11s-11-5.009-11-11m0-112v-8c0-5.991 5.009-11 11-11s11 5.009 11 11v8c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
    );
}