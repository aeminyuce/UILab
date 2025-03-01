
    'use strict';
    var  React = require('react');

    var calendar-star = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M12 263c-5.991 0-11-5.009-11-11V28c0-5.991 5.009-11 11-11h37v-5c0-5.991 5.009-11 11-11s11 5.009 11 11v5h122v-5c0-5.991 5.009-11 11-11s11 5.009 11 11v5h37c5.991 0 11 5.009 11 11v224c0 5.991-5.009 11-11 11zm11-22h218V95H23zM241 73V39h-26v5c0 5.991-5.009 11-11 11s-11-5.009-11-11v-5H71v5c0 5.991-5.009 11-11 11s-11-5.009-11-11v-5H23v34zM119.43 212.405c-3.934-1.35-6.829-4.914-7.345-9.041l-2.253-18.022-15.562-7.411c-3.725-1.773-6.19-5.596-6.27-9.721s2.24-8.04 5.894-9.954l15.9-8.33 2.287-18.291c.523-4.182 3.489-7.78 7.495-9.09 4.005-1.308 8.528-.163 11.424 2.902l12.735 13.484 16.932-3.68c4.096-.89 8.45.69 11.022 4 2.571 3.309 3.027 7.919 1.153 11.668l-8.483 16.963 8.388 16.013c1.924 3.673 1.586 8.237-.858 11.587s-6.686 5.065-10.771 4.355l-17.374-3.022-12.962 12.962c-2.941 2.942-7.42 3.978-11.352 2.628' })
        );
    }

    module.exports = calendar-star;
