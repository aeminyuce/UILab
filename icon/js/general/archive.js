'use strict';
var  React = require('react');

module.exports.IconArchive = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M20 263c-5.991 0-11-5.009-11-11V86.585C4.32 85.259 1 80.864 1 76V12C1 6.009 6.009 1 12 1h240c5.991 0 11 5.009 11 11v64c.001 4.864-3.321 9.259-8 10.585V252c0 5.991-5.009 11-11 11zm11-22h202V87H31zm65-98c-5.991 0-11-5.009-11-11s5.009-11 11-11h72c5.991 0 11 5.009 11 11s-5.009 11-11 11z' })
    );
}