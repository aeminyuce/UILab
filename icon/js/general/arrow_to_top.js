'use strict';
        var  React = require('react');

        var icon_arrow_to_top = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'M12 1.001h240c5.991 0 11 5.009 11 11s-5.009 11-11 11H12c-5.991 0-11-5.009-11-11s5.009-11 11-11m8.219 140.284 104-104.038a11.07 11.07 0 0 1 7.78-3.224c2.897 0 5.73 1.174 7.778 3.224l104 104.038c4.237 4.237 4.237 11.32 0 15.557-4.236 4.236-11.319 4.236-15.555 0l-85.26-85.29v180.687c0 5.991-5.009 11-11 11s-11-5.009-11-11V71.631l-85.181 85.211c-4.236 4.236-11.319 4.236-15.555 0-4.243-4.227-4.243-11.325-.008-15.558z' })
            );
        }

        module.exports = icon_arrow_to_top;