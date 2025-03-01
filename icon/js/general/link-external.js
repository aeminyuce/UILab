
    'use strict';
    var  React = require('react');

    var link-external = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M11.999 263.542c-5.991 0-11-5.009-11-11v-200c0-5.991 5.009-11 11-11h128c5.991 0 11 5.009 11 11s-5.009 11-11 11h-117v178h178v-117c0-5.991 5.009-11 11-11s11 5.009 11 11v128c0 5.991-5.009 11-11 11zm62.18-74.06c-4.237-4.237-4.237-11.32 0-15.557l150.92-150.919-52.364.01c-5.991 0-11-5.009-11-11s5.009-11 11-11l78.931-.014c5.972 0 11.001 4.978 11.002 11.002l-.017 78.932c0 5.991-5.009 11-11 11-5.988.008-11.008-5.011-10.998-11l.01-52.371L89.738 189.488c-4.231 4.242-11.331 4.24-15.559-.006' })
        );
    }

    module.exports = link-external;
