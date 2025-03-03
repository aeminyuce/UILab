'use strict';
var  React = require('react');

module.exports.IconShip = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M11.999 184h100.456c-11.013-18.328-30.778-37.687-54.134-35.079-6.91.762-13.137-5.306-12.233-12.312 6.096-48.315 37.805-103.273 76.14-133.28 7.081-5.532 17.774-.315 17.771 8.67v171.974c56.071-.724 108.274-16.34 108.809-16.5 8.383-2.534 16.435 5.76 13.604 14.069-9.959 29.205-24.906 56.43-46.777 78.377a11 11 0 0 1-7.636 3.081h-152c-2.602.001-5.12-.92-7.106-2.6-19.257-16.87-33.837-37.904-46.479-60.007C-1.639 193.195 3.739 184 11.999 184m124 22h-104.4c8.258 12.727 17.454 24.65 28.615 35h143.133c12.898-13.787 22.972-29.64 30.469-46.928C211.623 199.194 174.83 206 135.999 206' })
    );
}