'use strict';
var  React = require('react');

module.exports.IconTrash = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M83.999 258c-23.41-.026-42.974-19.59-43-43V48h-13c-5.991 0-11-5.009-11-11s5.009-11 11-11h52.317l8.356-12.788c1.571-4.285 5.763-7.213 10.327-7.213h66c4.565 0 8.758 2.927 10.329 7.213L183.683 26h52.316c5.991 0 11 5.009 11 11s-5.009 11-11 11h-13v167c-.026 23.41-19.59 42.974-43 43zm-21-43c.013 11.433 9.567 20.987 21 21h96c11.433-.013 20.987-9.567 21-21V48h-138z' })
    );
}