'use strict';
        var  React = require('react');

        var icon_share = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M161 212a51 51 0 0 1 1.326-11.579l-71.039-35.937C81.689 176.118 67.082 183.003 52 183c-27.766-.03-50.97-23.234-51-51 .031-27.766 23.234-50.969 51-51 14.62-.004 28.822 6.462 38.418 17.493l71.7-35.85A51 51 0 0 1 161 52c.032-27.765 23.235-50.968 51-51 27.765.032 50.968 23.235 51 51-.031 27.766-23.234 50.969-51 51-15.884 0-31.184-7.64-40.728-20.336l-70.282 35.142a51.25 51.25 0 0 1 .353 27.111l70.507 35.667c9.575-12.26 24.594-19.586 40.15-19.584 27.765.032 50.968 23.235 51 51-.031 27.766-23.234 50.969-51 51-27.766-.03-50.97-23.234-51-51m22 0c.018 15.788 13.212 28.982 29 29 15.788-.017 28.983-13.212 29-29-.017-15.788-13.212-28.983-29-29-15.788.018-28.982 13.212-29 29m0-160c.018 15.788 13.212 28.982 29 29 15.788-.017 28.983-13.212 29-29-.017-15.789-13.211-28.983-29-29-15.788.017-28.983 13.212-29 29' })
            );
        }

        module.exports = icon_share;