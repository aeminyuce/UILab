
    'use strict';
    var  React = require('react');

    var cloud = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M56 218.999c-29.812-2.268-54-27.2-54-58 0-22.249 12.035-42.144 32-52 10.283-38.065 45.058-65 84-65 28.033 0 53.459 13.621 70 37 39.694-3.584 75 29.691 75 70 0 38.131-30.308 68-69 68-.843.006-137.723.022-138 0m62-153c-30.426 0-57.8 22.19-64 53-.788 3.663-3.474 6.733-7 8-14.507 5.471-23 18.995-23 34 .006 18.494 14.576 34.389 33 36 8.944-.065 136.9 0 137 0 26.355 0 47-20.206 47-46 0-28.467-27.539-54.133-56-48-4.598.957-9.442-1.061-12-5-12.168-20.43-32.388-32-55-32' })
        );
    }

    module.exports = cloud;
