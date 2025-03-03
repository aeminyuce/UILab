'use strict';
var  React = require('react');

module.exports.IconTable = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12.5 242c-5.991 0-11-5.009-11-11V32c0-5.991 5.009-11 11-11h240c5.991 0 11 5.009 11 11v199c0 5.991-5.009 11-11 11zm229-22v-57.5h-98V220zm-218 0h98v-57.5h-98zm218-79.5V83h-98v57.5zm-120 0V83h-98v57.5z' })
    );
}