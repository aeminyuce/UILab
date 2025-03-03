'use strict';
var  React = require('react');

module.exports.IconForward = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'm127.454 197.692.08-53.986L17.5 207.234c-7.204 4.163-16.512-1.217-16.5-9.538l.194-130.708c.012-8.3 9.293-13.657 16.486-9.518l109.888 63.227.08-53.71c.012-8.298 9.292-13.656 16.485-9.517l113.291 65.183c7.211 4.149 7.219 14.9.014 19.06l-113.487 65.521c-7.127 4.734-16.508-1.657-16.497-9.542m22.028-19.053 80.43-46.437-80.293-46.2z' })
    );
}