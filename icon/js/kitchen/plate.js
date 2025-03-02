'use strict';
        var  React = require('react');

        var icon_plate = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M1 132C1 59.767 59.766 1 132 1s131 58.766 131 131-58.766 131-131 131S1 204.233 1 132m22 0c.067 59.342 49.658 108.933 109 109 59.342-.067 108.933-49.658 109-109-.067-59.342-49.658-108.933-109-109-59.342.067-108.933 49.658-109 109m32 0c.047-41.92 35.08-76.953 77-77 43.009 0 78 34.542 78 77-.048 42.465-35.535 77.952-78 78-42.458 0-77-34.991-77-78' })
            );
        }

        module.exports = icon_plate;