
    'use strict';
    var  React = require('react');

    var leaf.js = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M240.307 262.635c-5.985-.104-10.91-5.263-10.807-11.19.405-23.188-10.971-44.4-26.067-62.248-33.537 33.697-91.939 43.254-127.697 7.494-15.948-15.949-67.5-76.443-61.323-185.314.488-8.595 10.683-13.342 17.575-8.184 34.2 25.593 63.968 28.844 92.756 31.99 29.71 3.244 59.688 8.56 81.148 31.45 32.56 32.56 30.7 73.922 11.434 104.953 19.356 21.905 34.713 49.163 34.171 80.244-.103 5.916-5.077 10.806-10.994 10.808zm-149.014-81.5c27.266 27.266 72.123 17.743 96.929-7.848a279.8 279.8 0 0 0-55.727-39.854c-5.334-2.726-7.515-9.465-4.789-14.8 2.723-5.333 9.455-7.518 14.79-4.8a292.4 292.4 0 0 1 58.752 41.424c11.677-22.548 11.428-50.733-10.961-73.124-18.615-18.7-42.819-22.343-67.932-25.086-25.747-2.814-54.419-5.945-86.438-24.815.911 87.311 42.026 135.557 55.376 148.903' })
        );
    }

    module.exports = leaf.js;
