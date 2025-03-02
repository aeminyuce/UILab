'use strict';
        var  React = require('react');

        var icon_box = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'm125.788 261.088-107-58c-3.513-1.905-5.757-5.675-5.757-9.671v-123c-.366-4.667 2.071-9 6.414-10.866L125.472 2.32a11.08 11.08 0 0 1 10.352-.053L244.516 59.53c3.559 1.875 5.852 5.653 5.873 9.675 0 .976-.361 124.213-.361 124.213 0 3.659-2.07 7.107-5.3 8.827-105.793 56.947-108.071 58.625-108.071 58.625-3.329 1.98-7.544 2.463-10.869.218m-90.757-74.22 85 46.075v-98.922l-85-45.28zM47.864 69.213l84.413 45.39 83.741-45.221-85.253-44.912z' })
            );
        }

        module.exports = icon_box;