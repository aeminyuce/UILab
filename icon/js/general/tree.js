
    'use strict';
    var  React = require('react');

    var tree = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M62.263 46.599C67.9 20.418 91.703.999 120 .999c24.718 0 46.252 14.787 54.939 36.45 51.63-6.635 83.65 60.942 43.192 96.032 8.058 43.636-42.134 76.451-78.63 53.608V252.5c0 5.991-5.009 11-11 11s-11-5.009-11-11v-59.652c-39.688 25.94-93.953-18.328-72.683-63.256-29.077-23.265-19.491-73.05 17.446-82.993M170.97 60.886c-6.298 2.23-13.325-1.86-14.5-8.436-3.047-17.065-18.385-29.449-36.469-29.449-19.721 0-35.95 14.785-36.95 33.661-.289 5.493-4.771 10.037-10.26 10.4-26.31 1.81-31.425 38.932-8.386 48.864 6.635 2.864 8.716 11.602 4.084 17.149-29.345 35.237 40.62 67.768 49.011 23.235v-11.654L96 118.483c-3.804-4.629-3.114-11.679 1.516-15.483 4.581-3.763 11.684-3.107 15.483 1.519l4.5 5.478v-40.5c0-5.991 5.009-11 11-11s11 5.009 11 11v20.502l4.5-5.478c3.803-4.628 10.851-5.318 15.48-1.516 4.629 3.803 5.321 10.851 1.519 15.481l-21.5 26.175v30.358c14.821 33.632 68.433 13.218 55.748-22.16-1.718-4.781.159-10.272 4.445-13 32.469-20.533 6.617-71.489-28.721-58.973' })
        );
    }

    module.exports = tree;
