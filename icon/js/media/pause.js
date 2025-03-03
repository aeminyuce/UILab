'use strict';
var  React = require('react');

module.exports.IconPause = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M156 263c-5.991 0-11-5.009-11-11V12c0-5.991 5.009-11 11-11h56c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11zm11-22h34V23h-34zM52 263c-5.991 0-11-5.009-11-11V12c0-5.991 5.009-11 11-11h56c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11zm11-22h34V23H63z' })
    );
}