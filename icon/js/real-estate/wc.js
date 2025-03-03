'use strict';
var  React = require('react');

module.exports.IconWc = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M83 263c-7.06 0-11-5-11-12l.111-52c-23.255.175-43.228-19.513-43.111-43v-29c-7.075 0-12-4.925-12-11V12c0-5.991 5.009-11 11-11h47.933c5.991 0 11 5.009 11 11v93H221c14.093 0 26 11.449 26 25-.043 37.565-31.435 68.957-69 69h-22.111l.111 52c0 7-3.94 12-11 12zM51 156c0 11.579 8.972 21 20 21h107c25.588-.029 46.971-21.412 47-47 0-1.283-1.977-3-4-3H51z' })
    );
}