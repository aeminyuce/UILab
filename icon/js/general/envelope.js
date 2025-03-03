'use strict';
var  React = require('react');

module.exports.IconEnvelope = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 223c-5.991 0-11-5.009-11-11V52c0-5.991 5.009-11 11-11h240c5.991 0 11 5.009 11 11v160c0 5.991-5.009 11-11 11zm11-22h218V76.51c-11.871 10.518-84.1 74.551-87.739 77.753-12.133 10.993-31.168 12.208-43.551.977-6.52-5.774-58.755-53.041-86.707-78.344z' })
    );
}