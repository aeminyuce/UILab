'use strict';
        var  React = require('react');

        var icon_address_card = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M36 223c-19.055-.021-34.979-15.945-35-35V76c.021-19.055 15.945-34.979 35-35h192c19.055.022 34.978 15.945 35 35v112c-.022 19.055-15.945 34.978-35 35zM23 76v112c.007 7.078 5.922 12.993 13 13h192c7.078-.008 12.992-5.922 13-13V76c-.008-7.078-5.922-12.992-13-13H36c-7.078.007-12.993 5.922-13 13m35.7 107.5c-8.922-.084-16.706-6.5-16.706-16.275-.109-16.192 5.362-32.024 19.249-41.96a31.8 31.8 0 0 1-2.24-11.764c.02-17.422 14.579-31.98 32-32 17.422.02 31.98 14.578 32 32a31.8 31.8 0 0 1-2.24 11.764c12.702 9.104 19.605 26.319 19.241 41.536-.208 8.699-7.845 16.6-16.7 16.699zm5.273-21.996h53.783c-1.017-6.86-4.735-16.718-11.883-19.432-9.084 4.763-20.668 4.762-29.752 0-6.554 2.503-12.553 12.716-12.148 19.432M164 163.001c-5.991 0-11-5.009-11-11s5.009-11 11-11h24c5.991 0 11 5.009 11 11s-5.009 11-11 11zm0-40c-5.991 0-11-5.009-11-11s5.009-11 11-11h40c5.991 0 11 5.009 11 11s-5.009 11-11 11z' })
            );
        }

        module.exports = icon_address_card;