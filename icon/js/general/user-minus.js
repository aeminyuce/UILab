'use strict';
var  React = require('react');

module.exports.IconUserMinus = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M82.501 235.001c-13.555 0-25.2-12.702-25-26 0-38.799 18.595-75.778 53.737-94.347a56.65 56.65 0 0 1-7.738-28.653c.035-31.032 25.968-56.965 57-57 31.032.035 56.965 25.968 57 57a56.64 56.64 0 0 1-7.738 28.652c35.247 18.624 52.739 55.545 52.739 94.347.201 13.298-11.446 26-25 26zm-3-26c-.217 1.887 1.499 4.017 3.186 4.017l154.684-.017c2.129 0 3.348-2.125 3.13-4 0-32.681-14.951-63.61-45.963-77.304-17.06 15.44-51.016 15.44-68.076 0-30.547 13.487-46.961 44.737-46.961 77.304m80.999-87.999c19.194 0 35-15.771 35-35.001-.022-19.055-15.945-34.978-35-35-19.055.021-34.979 15.945-35 35 0 19.191 15.678 35.001 35 35.001M12 110.502c-5.991 0-11-5.009-11-11s5.009-11 11-11h64c5.991 0 11 5.009 11 11s-5.009 11-11 11z' })
    );
}