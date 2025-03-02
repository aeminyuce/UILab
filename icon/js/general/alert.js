'use strict';
        var  React = require('react');

        var icon_alert = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M121 252v-8c0-5.991 5.009-11 11-11s11 5.009 11 11v8c0 5.991-5.009 11-11 11s-11-5.009-11-11m0-60V12c0-5.991 5.009-11 11-11s11 5.009 11 11v180c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
            );
        }

        module.exports = icon_alert;