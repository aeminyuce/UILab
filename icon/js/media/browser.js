'use strict';
var  React = require('react');

module.exports.IconBrowser = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M30 247c-15.788-.018-28.982-13.212-29-29V46c.017-15.788 13.212-28.983 29-29h204c15.788.018 28.982 13.212 29 29v172c-.018 15.788-13.212 28.982-29 29zm-7-29c.004 3.811 3.189 6.996 7 7h204c3.811-.004 6.996-3.189 7-7V90H23zm0-172v22h218V46c-.004-3.81-3.189-6.996-7-7H30c-3.811.004-6.996 3.189-7 7m190.5 7.5c0-6.536 5.464-12 12-12s12 5.464 12 12-5.464 12-12 12-12-5.464-12-12' })
    );
}