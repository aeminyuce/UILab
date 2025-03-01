
    'use strict';
    var  React = require('react');

    var whatsapp = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'm10.378 242 15-54c-9.4-17.552-14.006-38.073-14-58 .026-66.718 54.307-120 121-120 32.239.006 62.094 12.078 85 35a121.9 121.9 0 0 1 36 86c-.027 66.72-54.306 121-121 121-19.134 0-38.578-5.115-56-14l-55 15c-6.524 1.775-13.263-3.617-11-11m72-21a102.65 102.65 0 0 0 50 13c56.772 0 102.978-47.2 103-104 .005-27.383-11.507-52.492-31-72-19.219-19.204-45.831-30.14-73-30-56.77 0-101.978 46.2-102 103-.005 18.045 3.97 35.356 13 51a9.3 9.3 0 0 1 1 7l-12 43 44-12c3.106-1.382 4.178-.54 7 1m52-37c-32.792-14.157-54.368-47.817-56-50-.9-1.2-13.919-18.256-13-35s9.648-24.523 11-26c6.187-5.913 17.205-4.285 18-4a6.5 6.5 0 0 1 3 3c4.264 8.044 11.366 25.736 12 27a6.69 6.69 0 0 1 0 6c-2.156 4.641-4.279 6.627-8 11-1.635 1.627-2.907 3.728-1 7a97 97 0 0 0 18 22 100.7 100.7 0 0 0 26 17c3.268 1.633 5.092 1.181 7-1s7.824-9.725 10-13 5-3.088 8-2c2.4.874 19.412 9.346 26 13 1.987 1.1 2.914 1.969 3 4 .193 3.13-1.015 7.432-3 13-1.681 4.711-11.079 14.49-26 16-11.915 1.206-24.304-3.383-35-8' })
        );
    }

    module.exports = whatsapp;
