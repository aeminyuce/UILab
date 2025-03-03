'use strict';
var  React = require('react');

module.exports.IconBalcony = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M12 263c-5.991 0-11-5.009-11-11 0-6.075 4.925-11 12-11v-78c-7.076 0-12-4.925-12-11 0-5.991 5.009-11 11-11h73V48c.029-25.588 21.412-46.971 47-47 25.588.029 46.971 21.412 47 47v93h73c5.991 0 11 5.009 11 11 0 6.075-4.925 11-12 11v78c7.075 0 12 4.925 12 11 0 5.991-5.009 11-11 11zm217-22v-78h-50v78zm-72 0v-78h-50v78zm-72 0v-78H35v78z' })
    );
}