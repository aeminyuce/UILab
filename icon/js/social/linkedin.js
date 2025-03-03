'use strict';
var  React = require('react');

module.exports.IconLinkedin = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M205 256c0-99.186 5.512-121.817-27-124-35.869 3.755-30 21.058-30 124H96V91h49v22c7.53-12.948 25.1-26 50-26 51.823 0 61 33.648 61 78v91zm-192 0V91h51v165zM9 39C9.111 22.705 22.705 9.111 39 9c16.372 0 29 13.619 29 30 .251 15.72-13.118 29.254-29 29C22.563 68 9 55.387 9 39' })
    );
}