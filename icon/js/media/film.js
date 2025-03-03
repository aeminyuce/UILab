'use strict';
var  React = require('react');

module.exports.IconFilm = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 255c-5.991 0-11-5.009-11-11V20C1 14.009 6.009 9 12 9h240c5.991 0 11 5.009 11 11v224c0 5.991-5.009 11-11 11zm229-22v-34h-26v34zm-218 0h26v-34H23zm218-56v-34h-26v34zm-192 0v-34H23v34zm192-56V87h-26v34zm-192 0V87H23v34zm192-56V31h-26v34zM49 65V31H23v34z' })
    );
}