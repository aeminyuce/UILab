'use strict';
var  React = require('react');

module.exports.IconPlusCircle = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M1 132C1 59.766 59.767 1 132 1s131 58.767 131 131-58.765 131-131 131S1 204.234 1 132m22 0c.067 59.342 49.658 108.933 109 109 59.342-.067 108.933-49.658 109-109-.066-59.342-49.658-108.934-109-109-59.342.067-108.933 49.658-109 109m98 48v-37H83.5c-5.991 0-11-5.009-11-11s5.009-11 11-11H121V84c0-5.991 5.009-11 11-11s11 5.009 11 11v37h36.5c5.991 0 11 5.009 11 11s-5.009 11-11 11H143v37c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
    );
}