'use strict';
var  React = require('react');

module.exports.IconMicrosoft = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M139 253V139h117v114zM9 253V139h117v114zm130-127V12h117v114zM9 126V12h117v114z' })
    );
}