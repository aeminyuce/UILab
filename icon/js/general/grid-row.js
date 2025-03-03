'use strict';
var  React = require('react');

module.exports.IconGridRow = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12.001 263c-5.991 0-11-5.009-11-11v-96c0-5.991 5.009-11 11-11h240c5.991 0 11 5.009 11 11v96c0 5.991-5.009 11-11 11zm0-144c-5.991 0-11-5.009-11-11V12c0-5.991 5.009-11 11-11h240c5.991 0 11 5.009 11 11v96c0 5.991-5.009 11-11 11zm11-22h218V23h-218z' })
    );
}