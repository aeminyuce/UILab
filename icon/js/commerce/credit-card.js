'use strict';
var  React = require('react');

module.exports.IconCreditCard = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M32 235c-17.094 0-31-15.252-31-34V63c0-18.748 13.906-34 31-34h200c17.094 0 31 15.252 31 34v138c0 18.748-13.907 34-31 34zm-9-34c0 6.5 4.122 12 9 12h200c4.879 0 9-5.5 9-12v-80H23zM241 70v-7c0-6.505-4.121-12-9-12H32c-4.878 0-9 5.5-9 12v7z' })
    );
}