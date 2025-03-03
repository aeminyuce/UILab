'use strict';
var  React = require('react');

module.exports.IconYoutube = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M251 72c-2.896-10.608-11.391-19.103-22-22-19.262-5.161-97-5-97-5s-76.738-.161-96 5c-10.609 2.897-19.104 11.392-22 22-5.16 19.263-5 59.001-5 59.001s-.16 40.738 5 60c2.895 10.609 11.39 19.104 22 22 19.262 5.162 96 5 96 5s77.738.162 97-5c10.61-2.896 19.105-11.391 22-22 5.16-19.262 5-60 5-60s.16-39.735-5-59m-143 97.001v-75l64 37z' })
    );
}