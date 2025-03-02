'use strict';
        var  React = require('react');

        var icon_speaker = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M52 263c-5.991 0-11-5.009-11-11V12c0-5.991 5.009-11 11-11h160c5.991 0 11 5.009 11 11v240c0 5.991-5.009 11-11 11zm11-22h138V23H63zm16-78c.033-28.854 24.146-52.967 53-53 28.854.033 52.967 24.146 53 53-.033 28.854-24.146 52.967-53 53-28.855-.032-52.968-24.145-53-53m30.5-92.5c0-12.255 10.245-22.5 22.5-22.5s22.5 10.245 22.5 22.5c0 12.237-10.382 22.5-22.5 22.5-12.255 0-22.5-10.245-22.5-22.5' })
            );
        }

        module.exports = icon_speaker;