'use strict';
        var  React = require('react');

        var icon_tag = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'm70.21 250.238-56.461-56.461c-15.526-15.526-15.689-39.711-.371-55.059L147.45 4.395a11 11 0 0 1 7.767-3.229l96-.166c5.957-.019 11.002 4.94 11.022 10.948l.449 96.048a11.07 11.07 0 0 1-3.214 7.822l-134.555 134.81c-15.042 15.412-39.789 14.949-54.709-.39m89.6-227.076-130.857 131.1c-6.832 6.846-6.683 16.924.355 23.963l56.461 56.461c6.334 6.691 17.128 7.233 23.573.411l131.321-131.569-.377-80.5zm3.311 46.915c.02-17.15 14.351-31.48 31.5-31.5 17.149.02 31.48 14.35 31.5 31.5-.02 17.15-14.351 31.48-31.5 31.5-17.152-.017-31.487-14.352-31.504-31.504z' })
            );
        }

        module.exports = icon_tag;