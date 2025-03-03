'use strict';
var  React = require('react');

module.exports.IconCup = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M68.001 247c-36.476-.041-66.959-30.524-67-67V52c.022-19.055 15.945-34.978 35-35h120c17.921.022 33.314 14.147 34.872 32H200c34.299.039 62.961 28.701 63 63v8c-.039 34.299-28.701 62.961-63 63h-9.066c-1.625 35.302-31.594 63.958-66.933 64zm132-86c22.321-.025 40.975-18.679 41-41v-8c-.025-22.321-18.679-40.975-41-41h-9v90z' })
    );
}