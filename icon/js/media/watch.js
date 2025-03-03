'use strict';
var  React = require('react');

module.exports.IconWatch = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M92.5 263.5c-5.991 0-11-5.009-11-11s5.009-11 11-11h80c5.992 0 11 5.008 11 11s-5.008 11-11 11zm3-36c-31.576-.036-57.964-26.424-58-58v-74c.036-31.576 26.424-57.964 58-58h74c31.576.036 57.964 26.424 58 58v74c-.036 31.576-26.424 57.964-58 58zm-3-205c-5.991 0-11-5.009-11-11s5.009-11 11-11h80c5.992 0 11 5.008 11 11 0 5.928-5.015 11-11 11z' })
    );
}