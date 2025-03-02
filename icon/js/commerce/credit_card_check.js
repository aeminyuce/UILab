'use strict';
        var  React = require('react');

        var icon_credit_card_check = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M32.5 235c-17.094 0-31-15.252-31-34V63c0-18.748 13.907-34 31-34h200c17.094 0 31 15.252 31 34v138c0 18.748-13.906 34-31 34zm-9-34c0 6.5 4.121 12 9 12h200c4.879 0 9-5.5 9-12v-80h-218zm218-131v-7c0-6.505-4.121-12-9-12h-200c-4.879 0-9 5.5-9 12v7zm-74.949 126.6-22-23c-4.141-4.33-3.983-11.411.346-15.552 4.33-4.141 11.411-3.983 15.552.346l13.925 14.557 30.059-32.431c4.073-4.394 11.151-4.663 15.545-.59s4.663 11.151.59 15.545l-38 41c-4.264 4.601-11.683 4.659-16.017.125' })
            );
        }

        module.exports = icon_credit_card_check;