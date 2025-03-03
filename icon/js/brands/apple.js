'use strict';
var  React = require('react');

module.exports.IconApple = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M35 145.003c0-47.726 30.01-72 58-72 18.2 0 31.54 11 41 11 8.121 0 22.382-12 42-12 33.769 0 48 24 48 24s-26 13.8-26 46c0 36.325 32 49 32 49s-22.44 64-53 64c-14.037 0-25.21-10-40-10-15.071 0-30.26 10-40 10-27.907 0-62-61.49-62-110m96-82s-3.037-16.518 11-35c15.785-20.784 37-20 37-20s3.681 19.176-12 38c-16.622 19.953-36 17-36 17' })
    );
}