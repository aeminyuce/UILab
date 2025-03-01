
    'use strict';
    var  React = require('react');

    var remove-circle = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M1 132C1 59.766 59.767 1 132 1s131 58.767 131 131-58.765 131-131 131S1 204.234 1 132m22 0c.067 59.342 49.658 108.933 109 109 59.342-.067 108.933-49.658 109-109-.067-59.342-49.658-108.933-109-109-59.342.067-108.933 49.658-109 109m66.781 41.719c-4.236-4.236-4.236-11.32 0-15.556L115.944 132l-26.163-26.164c-4.236-4.236-4.236-11.32 0-15.556s11.32-4.236 15.556 0l26.164 26.163 26.163-26.163c4.236-4.236 11.32-4.236 15.556 0s4.236 11.32 0 15.556L147.056 132l26.163 26.162c4.238 4.237 4.238 11.321 0 15.558-4.236 4.236-11.32 4.236-15.556 0L131.5 147.556l-26.163 26.164c-4.211 4.222-11.345 4.223-15.556 0z' })
        );
    }

    module.exports = remove-circle;
