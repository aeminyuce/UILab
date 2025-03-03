'use strict';
var  React = require('react');

module.exports.IconGooglePlay = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'm37 255 101-113 36 39-122 72c-4.536 3.102-9.86 3.601-15 2m-10-6a20 20 0 0 1-4-12V28a19.47 19.47 0 0 1 3-11l104 116zm158-74c-11-12-27.744-30.559-39-43 11.854-12.789 25.5-28 38-42l46 26c12.755 7.114 12.542 25.589 0 33zm-47-52L36 10c4.175-1.303 8.846-1.453 13 0l125 73z' })
    );
}