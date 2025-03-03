'use strict';
var  React = require('react');

module.exports.IconBrackets = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M169.999 262.999c-5.991 0-11-5.009-11-11s5.009-11 11-11h35v-218h-35c-5.991 0-11-5.009-11-11s5.009-11 11-11h46c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11zm-122 0c-5.991 0-11-5.009-11-11v-240c0-5.991 5.009-11 11-11h46c5.991 0 11 5.009 11 11 0 5.992-5.008 11-11 11h-35v218h35c5.991 0 11 5.009 11 11s-5.009 11-11 11z' })
    );
}