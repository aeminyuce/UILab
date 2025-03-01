
    'use strict';
    var  React = require('react');

    var copyright = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M1 132C1 59.767 59.766 1 132 1s131 58.767 131 131-58.768 131-131 131S1 204.234 1 132m22 0c.067 59.342 49.658 108.933 109 109 59.342-.067 108.933-49.658 109-109-.067-59.342-49.658-108.933-109-109-59.342.067-108.933 49.658-109 109m41.02 20.132c-8.119-27.01 1.252-57.277 23.341-74.976 30.388-24.607 75.05-20 99.563 10.268 2.77 3.421 3.219 8.304 1.118 12.172-3.656 6.732-13.357 7.672-18.215 1.673-16.793-20.57-48.012-23.762-68.621-7.017-15.232 12.179-21.71 33.001-16.09 51.608 11.804 39.081 63.822 47.64 87.376 13.106 3.376-4.95 10.336-6.265 15.286-2.889 4.897 3.34 6.262 10.341 2.889 15.286-13.176 19.296-35.49 31.468-58.954 31.54-30.775-.089-58.816-21.233-67.693-50.771' })
        );
    }

    module.exports = copyright;
