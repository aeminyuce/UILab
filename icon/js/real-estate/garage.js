'use strict';
var  React = require('react');

module.exports.IconGarage = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12.5 263c-5.991 0-11-5.008-11-11V101A11.08 11.08 0 0 1 6 92.13l120-88c3.855-2.83 9.259-2.805 13.088.06l119 89A11.08 11.08 0 0 1 262.5 102v150c0 5.992-5.009 11-11 11zm228-22V107.51L132.436 26.69 23.5 106.573V241h26V138c0-5.991 5.009-11 11-11h144c5.991 0 11 5.009 11 11v103z' })
    );
}