'use strict';
var  React = require('react');

module.exports.IconStop = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 1h240c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11H12c-5.991 0-11-5.009-11-11V12C1 6.009 6.009 1 12 1m229 22H23v218h218z' })
    );
}