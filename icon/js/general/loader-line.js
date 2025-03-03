'use strict';
var  React = require('react');

module.exports.IconLoaderLine = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M251 144c-5.991 0-11-5.009-11-11-.067-59.342-49.658-108.933-109-109-5.991 0-11-5.009-11-11s5.009-11 11-11c72.234 0 131 58.766 131 131 0 5.991-5.009 11-11 11' })
    );
}