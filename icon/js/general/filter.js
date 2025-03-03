'use strict';
var  React = require('react');

module.exports.IconFilter = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 1h240c4.402 0 8.478 2.724 10.162 6.79 1.685 4.067.729 8.875-2.384 11.988L171 108.556V216c0 3.709-1.932 7.247-5.052 9.253l-56 36C102.775 265.864 93 260.528 93 252V108.556L4.222 19.778C1.11 16.665.153 11.858 1.838 7.791 3.522 3.724 7.598 1 12 1m213.444 22H38.556l73.222 73.222A11 11 0 0 1 115 104v127.852l34-21.857V104a11 11 0 0 1 3.222-7.778z' })
    );
}