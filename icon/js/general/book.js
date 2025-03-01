
    'use strict';
    var  React = require('react');

    var book.js = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M61 263c-23.955-.027-43.973-20.045-44-44V45c.027-23.955 20.045-43.973 44-44h153c17.966.02 32.979 15.034 33 33v196c-.02 17.966-15.034 32.98-33 33zM39 45v174c.014 11.977 10.023 21.986 22 22h153c5.989-.007 10.993-5.011 11-11V34c-.007-5.988-5.011-10.993-11-11H61c-11.977.014-21.986 10.023-22 22m37 74c-5.991 0-11-5.009-11-11s5.009-11 11-11h64c5.991 0 11 5.009 11 11s-5.009 11-11 11zm0-40c-5.991 0-11-5.009-11-11s5.009-11 11-11h112c5.991 0 11 5.009 11 11s-5.009 11-11 11z' })
        );
    }

    module.exports = book.js;
