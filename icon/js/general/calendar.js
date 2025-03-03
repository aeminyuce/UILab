'use strict';
var  React = require('react');

module.exports.IconCalendar = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 263c-5.991 0-11-5.009-11-11V28c0-5.991 5.009-11 11-11h37v-5c0-5.991 5.009-11 11-11s11 5.009 11 11v5h122v-5c0-5.991 5.009-11 11-11s11 5.009 11 11v5h37c5.991 0 11 5.009 11 11v224c0 5.991-5.009 11-11 11zm11-22h218V95H23zM241 73V39h-26v5c0 5.991-5.009 11-11 11s-11-5.009-11-11v-5H71v5c0 5.991-5.009 11-11 11s-11-5.009-11-11v-5H23v34z' })
    );
}