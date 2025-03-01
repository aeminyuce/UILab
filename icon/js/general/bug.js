
    'use strict';
    var  React = require('react');

    var bug = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'm60.66 225.488-29.064 23.381c-4.417 3.554-12.261 2.711-15.708-1.574s-2.814-11.759 1.918-15.567l32.448-26.1a85.7 85.7 0 0 1-5.253-29.625v-21h-33c-5.991 0-11-5.009-11-11s5.009-11 11-11h33v-25a37.9 37.9 0 0 1 4.971-18.77L17.924 64.167c-4.719-3.691-5.578-10.722-1.887-15.44 3.69-4.721 10.722-5.581 15.442-1.89l34.386 26.9c5.98-3.268 12.608-4.762 19.373-5.03a41.2 41.2 0 0 1-3.237-16.7c.031-27.766 23.234-50.969 51-51 27.766.031 50.969 23.234 51 51a41.2 41.2 0 0 1-3.261 16.757c6.496.39 12.494 1.775 18.401 4.976l34.388-26.9c4.467-3.653 11.237-3.054 14.995 1.325 4.104 4.706 3.437 12.109-1.442 16.005l-32.046 25.064a37.9 37.9 0 0 1 4.971 18.771v25h32c5.991 0 11 5.009 11 11s-5.009 11-11 11h-32v21a86.6 86.6 0 0 1-5.207 29.662l32.4 26.066c4.669 3.755 5.433 10.797 1.678 15.466-3.758 4.674-10.808 5.434-15.477 1.67l-28.95-23.289c-16.102 23.227-43.191 37.413-71.454 37.418-28.537.042-55.93-14.163-72.337-37.511M82.84 90.844C74.227 90.844 67 99.115 67 108v68c0 35.841 29.608 65 66 65 35.388-.04 64.96-29.612 65-65v-68c0-9.084-7.5-17.209-16.13-17.209-3.236-.205-98.932.037-99.029.055z' })
        );
    }

    module.exports = bug;
