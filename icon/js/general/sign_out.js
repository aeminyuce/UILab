'use strict';
        var  React = require('react');

        var icon_sign_out = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M48 263c-25.588-.029-46.971-21.412-47-47V48C1.028 22.412 22.412 1.028 48 1h104c5.991 0 11 5.009 11 11s-5.009 11-11 11H48c-13.61.015-24.985 11.39-25 25v168c.016 13.61 11.39 24.984 25 25h104c5.991 0 11 5.009 11 11s-5.009 11-11 11zm100-55v-41H79c-5.991 0-11-5.009-11-11v-49c0-5.992 5.008-11 11-11h69V56c0-9.105 10.987-14.279 18.006-8.479l92 76c5.242 4.333 5.244 12.626 0 16.958l-92 76C158.953 222.308 148 217.124 148 208' })
            );
        }

        module.exports = icon_sign_out;