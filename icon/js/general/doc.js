'use strict';
var  React = require('react');

module.exports.IconDoc = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M36 263c-5.991 0-11-5.009-11-11V12c0-5.991 5.009-11 11-11h192c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11zm11-22h170V23H47zm29-83c-5.991 0-11-5.009-11-11s5.009-11 11-11h64c5.991 0 11 5.009 11 11s-5.009 11-11 11zm0-40c-5.991 0-11-5.009-11-11 0-5.992 5.008-11 11-11h112c5.992 0 11 5.008 11 11 0 5.991-5.009 11-11 11z' })
    );
}