'use strict';
        var  React = require('react');

        var icon_chart_bar = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M12 263c-5.991 0-11-5.009-11-11V12C1 6.009 6.009 1 12 1s11 5.009 11 11v229h229c5.991 0 11 5.009 11 11s-5.009 11-11 11zm193-67V44c0-5.991 5.009-11 11-11s11 5.009 11 11v152c0 5.991-5.009 11-11 11s-11-5.009-11-11m-48 0v-96c0-5.991 5.009-11 11-11s11 5.009 11 11v96c0 5.991-5.009 11-11 11s-11-5.009-11-11m-48 0V68c0-5.991 5.009-11 11-11s11 5.009 11 11v128c0 5.991-5.009 11-11 11s-11-5.009-11-11m-48 0v-48c0-5.991 5.009-11 11-11s11 5.009 11 11v48c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
            );
        }

        module.exports = icon_chart_bar;