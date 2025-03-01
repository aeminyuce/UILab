
    'use strict';
    var  React = require('react');

    var location = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M120.999 252v-21.607C75.612 225.248 38.75 188.387 33.604 143H11.999c-5.991 0-11-5.009-11-11s5.009-11 11-11h21.605c5.146-45.387 42.008-82.248 87.395-87.393V12c0-5.991 5.009-11 11-11s11 5.009 11 11v21.607c45.386 5.146 82.247 42.007 87.393 87.393h21.605c5.991 0 11 5.009 11 11s-5.009 11-11 11h-21.605c-5.146 45.386-42.007 82.247-87.393 87.393V252c0 5.991-5.009 11-11 11s-11-5.009-11-11m-66-120c.048 41.92 35.08 76.952 77 77 41.92-.048 76.952-35.08 77-77-.048-41.92-35.08-76.952-77-77-41.92.048-76.952 35.08-77 77m25-1c.03-27.766 23.234-50.97 51-51 27.766.031 50.969 23.234 51 51-.032 27.765-23.235 50.968-51 51-27.766-.031-50.969-23.234-51-51m22 0c.018 15.788 13.212 28.982 29 29 15.788-.018 28.982-13.212 29-29-.017-15.788-13.212-28.983-29-29-15.789.017-28.983 13.211-29 29' })
        );
    }

    module.exports = location;
