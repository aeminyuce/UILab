'use strict';
        var  React = require('react');

        var icon_music_album = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M40 263.002c-15.788-.018-28.982-13.212-29-29v-204c.017-15.788 13.212-28.983 29-29h184c15.788.017 28.983 13.212 29 29v204c-.018 15.788-13.212 28.982-29 29zm-7-233v204c.004 3.811 3.189 6.996 7 7h184c3.811-.004 6.996-3.189 7-7v-204c-.004-3.811-3.189-6.996-7-7H40c-3.81.004-6.996 3.189-7 7m58.5 147.167c0-17.2 17.4-30.667 39.606-30.667a53 53 0 0 1 19.394 3.579V67.502c0-5.991 5.009-11 11-11s11 5.009 11 11v109.667c0 16.733-17.409 28.878-41.395 28.878-23.319-.002-39.605-11.877-39.605-28.88z' })
            );
        }

        module.exports = icon_music_album;