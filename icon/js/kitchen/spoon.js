'use strict';
var  React = require('react');

module.exports.IconSpoon = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M106.001 236V117C87.873 107.494 77 89.672 77 69c0-32.965 19.276-68 55-68s55 35.035 55 68c0 21.632-10.86 38.915-29 48l.986 118.445c.013 17.9-9.64 27.554-26.986 27.554-17.093.001-25.999-9.354-25.999-26.999m38.041-136.594c7.5-2.52 20.959-10.057 20.959-30.406 0-22.3-11.566-46-33-46s-33 23.7-33 46c0 20.774 15.671 28.282 22.451 30.555 7.538 1.777 15.08 1.795 22.59-.149' })
    );
}