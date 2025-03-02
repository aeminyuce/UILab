'use strict';
        var  React = require('react');

        var icon_abacus = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M1 12C1 6.009 6.009 1 12 1s11 5.009 11 11v40.5h138.922C166.626 39.046 179.748 29.842 194 30c14.437-.097 27.778 9.017 32.939 22.5H240V12c0-5.991 5.009-11 11-11s11 5.009 11 11v240c0 5.991-5.009 11-11 11s-11-5.009-11-11v-41.5h-12.676c-4.581 14.031-17.99 24.5-33.323 24.5-13.041-.099-25.163-7.93-30.613-19.778-5.85 11.853-18.171 19.616-31.388 19.778-15.2 0-28.095-10.314-32.437-24.5H23V252c0 5.991-5.009 11-11 11s-11-5.009-11-11zm22 176.5h76.921c4.704-13.455 17.827-22.659 32.079-22.5 13.06-.07 25.371 7.367 31.387 18.959C169.005 173.367 181.119 165.865 194 166c14.438-.098 27.78 9.016 32.94 22.5H240v-45H101.98C97.102 157.026 83.968 167 69.001 167c-14.836 0-27.483-9.832-32.115-23.5H23zm0-67h13.591C40.983 107.541 54.367 97.835 69 98c14.819-.106 28.43 9.501 33.292 23.5H240v-47h-12.676c-4.581 14.03-17.99 24.5-33.323 24.5-15.2 0-28.095-10.313-32.437-24.5H23z' })
            );
        }

        module.exports = icon_abacus;