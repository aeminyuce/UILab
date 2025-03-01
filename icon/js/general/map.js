
    'use strict';
    var  React = require('react');

    var map.js = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M169.069 245.651 92.98 225.426l-77.187 20.263c-6.863 1.801-13.794-3.543-13.794-10.64v-186c0-4.941 3.429-9.386 8.208-10.64l79.894-20.972c1.896-.519 3.835-.566 5.73-.02l76.189 20.255c78.113-20.5 79.051-20.624 79.984-20.624 6.008 0 10.999 5.017 11 10.999v186c0 4.94-3.428 9.384-8.206 10.639l-80 21c-1.899.499-3.834.463-5.729-.035M183 57.533v163.254l58-15.226V42.307zm-159 0v163.254l58-15.226V42.307z' })
        );
    }

    module.exports = map.js;
