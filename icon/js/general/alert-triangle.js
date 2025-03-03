'use strict';
var  React = require('react');

module.exports.IconAlertTriangle = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 247c-8.301-.001-13.676-9.311-9.525-16.5l120-208c4.151-7.19 14.905-7.19 19.056 0l120 208c4.151 7.189-1.224 16.499-9.525 16.5zm19.046-22h201.908L132 50.012zm89.955-33v-8c0-5.991 5.009-11 11-11s11 5.009 11 11v8c0 5.991-5.009 11-11 11s-11-5.009-11-11m0-48v-28c0-5.991 5.009-11 11-11s11 5.009 11 11v28c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
    );
}