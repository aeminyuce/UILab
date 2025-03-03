'use strict';
var  React = require('react');

module.exports.IconUsbDrive = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M121 252v-21H96c-25.588-.029-46.97-21.412-47-47V68c0-5.991 5.009-11 11-11h13V12c0-5.991 5.009-11 11-11h96c5.991 0 11 5.009 11 11v45h13c5.991 0 11 5.009 11 11v116c-.029 25.588-21.412 46.971-47 47h-25v21c0 5.991-5.009 11-11 11s-11-5.009-11-11m48-195V23h-26v34zm-48 0V23H95v34z' })
    );
}