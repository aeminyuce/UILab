
    'use strict';
    var  React = require('react');

    var move = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'm123.624 259.679-39-40c-4.182-4.291-4.09-11.373.2-15.555s11.373-4.091 15.555.2L121 225.475V142.5H38.563l21.228 21.221c4.236 4.236 4.236 11.319 0 15.556-4.237 4.238-11.321 4.238-15.558 0l-40.015-40A11 11 0 0 1 1 131.5c0-2.898 1.174-5.731 3.223-7.78l40.015-40c4.237-4.238 11.321-4.238 15.558 0 4.236 4.237 4.236 11.32 0 15.556l-21.228 21.221H121V39.053l-20.723 20.722c-4.237 4.236-11.32 4.236-15.556 0s-4.236-11.32 0-15.556l40-40A11.07 11.07 0 0 1 132.5.996c2.897 0 5.73 1.174 7.779 3.223l40 40c4.236 4.236 4.236 11.32 0 15.556-4.228 4.243-11.327 4.245-15.557.004L143 38.057v82.444h82.451L204.223 99.28c-4.236-4.237-4.236-11.32 0-15.556s11.32-4.236 15.556 0l40.015 40a11.07 11.07 0 0 1 3.223 7.78c0 2.897-1.174 5.731-3.223 7.779l-40.015 40c-4.236 4.236-11.32 4.236-15.556 0-4.243-4.23-4.242-11.333.001-15.562l21.228-21.221H143v82.443l20.721-20.721c4.236-4.236 11.32-4.236 15.556 0 4.237 4.237 4.237 11.32 0 15.557l-40 40A11 11 0 0 1 131.5 263a11.1 11.1 0 0 1-7.876-3.321' })
        );
    }

    module.exports = move;
