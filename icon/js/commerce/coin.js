'use strict';
var  React = require('react');

module.exports.IconCoin = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M2.507 190.558C1.52 188.872.999 185 .999 185v-85c0-43.738 57.542-78 131-78s131 34.262 131 78v85s-.52 3.873-1.508 5.558c-1.206 2.059-30.67 52.441-129.493 52.441S3.713 192.617 2.507 190.558m20.492-9c42.303 54.374 175.679 54.306 218-.018v-37.71c-54.889 48.892-163.11 48.892-218 0z' })
    );
}