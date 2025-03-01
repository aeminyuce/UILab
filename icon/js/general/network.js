
    'use strict';
    var  React = require('react');

    var network = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M162 212c-.141-14.231 5.808-28.151 16.192-37.883l-20.12-34.688A70.6 70.6 0 0 1 133 144a70.7 70.7 0 0 1-25.661-4.8l-20.96 35.158C96.893 183.933 103.007 197.779 103 212c-.032 27.765-23.234 50.968-51 51-28.037 0-50-22.4-50-51s21.963-51 50-51c5.2-.004 10.37.789 15.328 2.353l20.992-35.212C71.804 114.787 61.996 94.24 62 73c.044-38.654 32.346-70.956 71-71 38.654.044 70.956 32.346 71 71 .002 21.457-10.01 42.193-26.813 55.537l20.085 34.628A50.6 50.6 0 0 1 212 161.001c27.766.031 50.969 23.234 51 51-.032 27.765-23.235 50.968-51 51-28.037-.001-50-22.403-50-51.001M84 73c.03 26.677 22.323 48.97 49 49 26.677-.03 48.97-22.323 49-49-.03-26.677-22.323-48.97-49-49-26.677.03-48.97 22.323-49 49' })
        );
    }

    module.exports = network;
