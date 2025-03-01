
    'use strict';
    var  React = require('react');

    var target = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M1 132C1 59.768 59.766 1 132 1s131 58.767 131 131-58.766 131-131 131S1 204.234 1 132m22 0c.067 59.342 49.658 108.933 109 109 59.342-.067 108.933-49.658 109-109-.067-59.342-49.658-108.933-109-109-59.342.067-108.933 49.658-109 109m26 0c.051-45.187 37.813-82.949 83-83 45.187.051 82.949 37.813 83 83-.051 45.187-37.813 82.949-83 83-45.187-.051-82.949-37.813-83-83m22 0c.038 33.21 27.79 60.962 61 61 33.21-.038 60.962-27.79 61-61-.036-33.21-27.79-60.964-61-61-33.21.037-60.963 27.79-61 61m32.5.608c.04-15.838 13.269-29.067 29.107-29.106 16.018 0 27.895 13.086 27.895 29.106s-11.876 27.893-27.895 27.893-29.107-11.876-29.107-27.894z' })
        );
    }

    module.exports = target;
