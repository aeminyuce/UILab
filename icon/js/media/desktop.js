'use strict';
        var  React = require('react');

        var icon_desktop = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M263 170c-.018 15.788-13.212 28.982-29 29h-72.393l7.286 34H192c5.991 0 11 5.009 11 11s-5.009 11-11 11H72c-5.991 0-11-5.009-11-11s5.009-11 11-11h23.107l7.286-34H30c-15.788-.018-28.982-13.212-29-29V38C1.018 22.212 14.212 9.018 30 9h204c15.788.018 28.982 13.212 29 29zm-29 7c3.811-.004 6.996-3.189 7-7V38c-.004-3.811-3.189-6.996-7-7H30c-3.81.004-6.996 3.19-7 7v132c.004 3.811 3.19 6.996 7 7zm-87.606 56-7.286-34h-14.214l-7.286 34z' })
            );
        }

        module.exports = icon_desktop;