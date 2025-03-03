'use strict';
var  React = require('react');

module.exports.IconFloorPlan = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 263c-5.991 0-11-5.009-11-11V12C1 6.009 6.009 1 12 1h120c5.991 0 11 5.009 11 11s-5.009 11-11 11H23v218h90v-90H76c-5.991 0-11-5.009-11-11s5.009-11 11-11h64c5.991 0 11 5.009 11 11s-5.009 11-11 11h-5v90h106v-90h-37c-5.991 0-11-5.009-11-11s5.009-11 11-11h37V23h-29c-5.991 0-11-5.009-11-11s5.009-11 11-11h40c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11z' })
    );
}