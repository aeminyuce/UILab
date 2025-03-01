
    'use strict';
    var  React = require('react');

    var music = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M9 229.002c0-19.065 20.645-34 47-34a61.5 61.5 0 0 1 25 5.054V52.002c0-4.938 3.424-9.38 8.2-10.638l152-40c6.864-1.806 13.8 3.54 13.8 10.638 0 49.934-.054 177.255-.156 177.859-1.944 17.676-21.82 31.141-46.844 31.141-26.355 0-47-14.935-47-34s20.645-34 47-34a61.5 61.5 0 0 1 25 5.054V76.271l-130 34.211v121.52c-.478 18.371-24.608 31-47 31-26.355 0-47-14.937-47-34m94-168.52v27.25l130-34.21v-27.25z' })
        );
    }

    module.exports = music;
