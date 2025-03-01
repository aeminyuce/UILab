
    'use strict';
    var  React = require('react');

    var puzzle = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M180 264H12c-5.991 0-11-5.009-11-11v-61c0-11.111 15.318-15.027 20.65-5.279 3.328 6.084 12.854 10.333 23.165 10.333 4.874 0 29.185-1.4 29.185-29.053 0-26.379-22.12-28.429-28.9-28.429-10.441 0-20.235 4.374-23.288 10.4C16.71 160.042.998 156.289.999 145V85c0-5.991 5.009-11 11-11h38.254a57.03 57.03 0 0 1-2.893-35.031c5.4-23.417 24.419-37.965 49.641-37.965 25.187 0 43.545 13.907 49.108 37.2a58.25 58.25 0 0 1-2.878 35.8h36.77c5.991 0 11 5.009 11 11v37.552a56.35 56.35 0 0 1 21.989-4.344c24.087 0 50.011 15.894 50.011 50.791 0 34.791-25.005 50.366-49.787 50.369a58.1 58.1 0 0 1-22.213-4.319v37.95C190.999 258.993 185.991 264 180 264M23 242h146v-50c.001-11.206 15.532-15.036 20.743-5.115 3.191 6.076 13.031 10.489 23.473 10.483 6.519 0 27.789-2.048 27.789-28.369 0-26.715-21.44-28.791-28.011-28.791-10.45 0-19.977 4.418-23.167 10.744-5.087 10.088-20.82 6.347-20.822-4.951v-50h-49c-11.289 0-15.042-15.712-4.971-20.813 8.217-4.162 12.74-19.057 9.679-31.876C122.501 34.046 115.897 23 97.004 23c-20.346 0-26.4 13.1-28.2 20.907-2.957 12.83 1.63 27.119 10.019 31.2 10.208 4.974 6.536 20.89-4.819 20.89h-51v25.836a57.7 57.7 0 0 1 22.1-4.265c24.515 0 50.9 15.781 50.9 50.429 0 35.077-26.533 51.053-51.185 51.053a57.1 57.1 0 0 1-21.815-4.232z' })
        );
    }

    module.exports = puzzle;
