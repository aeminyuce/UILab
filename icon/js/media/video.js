'use strict';
        var  React = require('react');

        var icon_video = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M36 231c-19.055-.022-34.978-15.945-35-35V68c.022-19.055 15.945-34.978 35-35h120c19.055.022 34.978 15.945 35 35v27.92l57.012-22.172C255.078 70.563 263.001 76.756 263 84v96c0 7.607-7.899 13.01-14.989 10.252L191 168.08V196c-.022 19.055-15.945 34.978-35 35zM23 68v128c.008 7.077 5.923 12.992 13 13h120c7.077-.008 12.992-5.923 13-13V68c-.008-7.077-5.923-12.992-13-13H36c-7.077.008-12.992 5.923-13 13' })
            );
        }

        module.exports = icon_video;