'use strict';
var  React = require('react');

module.exports.IconBackward = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'm136.487 67.015-.08 53.986L246.44 57.473c7.205-4.163 16.512 1.217 16.5 9.538l-.193 130.709c-.012 8.136-9.27 13.669-16.485 9.518l-109.888-63.227-.08 53.709c-.012 8.299-9.293 13.657-16.486 9.518L6.517 142.056c-7.211-4.149-7.22-14.901-.014-19.061L119.99 57.473c7.407-3.752 16.509.979 16.497 9.542m-22.029 19.053-80.43 46.437 80.294 46.2z' })
    );
}