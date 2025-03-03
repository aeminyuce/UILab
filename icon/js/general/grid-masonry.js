'use strict';
var  React = require('react');

module.exports.IconGridMasonry = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M156 263c-5.991 0-11-5.009-11-11V116c0-5.991 5.009-11 11-11h96c5.991 0 11 5.009 11 11v136c0 5.991-5.009 11-11 11zm-144 0c-5.991 0-11-5.009-11-11v-56c0-5.991 5.009-11 11-11h96c5.991 0 11 5.009 11 11v56c0 5.991-5.009 11-11 11zm0-112c-5.991 0-11-5.009-11-11V12C1 6.009 6.009 1 12 1h96c5.991 0 11 5.009 11 11v128c0 5.991-5.009 11-11 11zm11-22h74V23H23zm133-50c-5.991 0-11-5.009-11-11V12c0-5.991 5.009-11 11-11h96c5.991 0 11 5.009 11 11v56c0 5.991-5.009 11-11 11zm11-22h74V23h-74z' })
    );
}