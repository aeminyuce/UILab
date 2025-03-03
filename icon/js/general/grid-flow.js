'use strict';
var  React = require('react');

module.exports.IconGridFlow = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 263c-5.991 0-11-5.009-11-11v-50c0-5.991 5.009-11 11-11h240c5.991 0 11 5.009 11 11v50c0 5.991-5.009 11-11 11zm0-98c-5.991 0-11-5.009-11-11V12C1 6.009 6.009 1 12 1h240c5.991 0 11 5.009 11 11v142c0 5.991-5.009 11-11 11zm11-22h218V23H23z' })
    );
}