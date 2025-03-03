'use strict';
var  React = require('react');

module.exports.IconMobileV = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M78 263c-15.788-.018-28.982-13.212-29-29V30c.018-15.788 13.212-28.982 29-29h108c15.788.018 28.982 13.212 29 29v204c-.018 15.788-13.212 28.982-29 29zM71 30v204c.004 3.811 3.19 6.996 7 7h108c3.811-.004 6.996-3.189 7-7V30c-.004-3.81-3.189-6.996-7-7H78c-3.811.004-6.996 3.189-7 7m44.5 182.5c0-9.259 7.741-17 17-17s17 7.74 17 17-7.74 17-17 17-17-7.741-17-17' })
    );
}