'use strict';
var  React = require('react');

module.exports.IconExchangeV = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M36.318 203.126c4.289-4.185 11.372-4.097 15.556.192L73 224.974V12c0-5.991 5.01-11 11-11s11 5.009 11 11v212.974l21.127-21.655c4.184-4.288 11.266-4.375 15.554-.192 4.288 4.184 4.376 11.267.192 15.555l-40 41A11.07 11.07 0 0 1 84 263a11.07 11.07 0 0 1-7.873-3.318l-40-41c-4.209-4.302-4.087-11.393.19-15.556m95.9-158.9 40-40a11.07 11.07 0 0 1 7.778-3.222 11.07 11.07 0 0 1 7.779 3.222l40 40c4.237 4.237 4.237 11.32 0 15.557-4.23 4.236-11.326 4.234-15.553-.005L191 38.556V252c0 5.991-5.009 11-11 11s-11-5.009-11-11V38.557l-21.222 21.222c-4.237 4.236-11.32 4.236-15.556 0-4.241-4.23-4.241-11.327 0-15.557z' })
    );
}