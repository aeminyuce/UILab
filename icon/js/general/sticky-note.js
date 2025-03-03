'use strict';
var  React = require('react');

module.exports.IconStickyNote = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 263c-5.983-.001-10.999-5.075-11-11V12C1 6.009 6.009 1 12 1h240c5.991 0 11 5.009 11 11v168c0 2.923-1.195 5.78-3.276 7.833l-72 71a11 11 0 0 1-7.659 3.168l-168 1zm11-22.065 147-.875V179c0-5.447 4.553-10 10-10h61V23H23z' })
    );
}