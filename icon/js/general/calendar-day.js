'use strict';
var  React = require('react');

module.exports.IconCalendarDay = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M11.999 263a11 11 0 0 1-11-11V28c0-5.991 5.009-11 11-11h37v-5c0-5.991 5.009-11 11-11s11 5.009 11 11v5h122v-5c0-5.991 5.009-11 11-11s11 5.009 11 11v5h37c5.991 0 11 5.009 11 11v224c0 5.991-5.009 11-11 11zm11-22h218V95h-218zm218-168V39h-26v5c0 5.991-5.009 11-11 11s-11-5.009-11-11v-5h-122v5c0 5.991-5.009 11-11 11s-11-5.009-11-11v-5h-26v34zm-133 130c-5.991 0-11-5.009-11-11v-48c0-5.991 5.009-11 11-11h48c5.991 0 11 5.009 11 11v48c0 5.991-5.009 11-11 11z' })
    );
}