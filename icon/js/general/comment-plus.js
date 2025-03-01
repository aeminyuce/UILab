
    'use strict';
    var  React = require('react');

    var comment-plus = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M5.133 227.404c.2-.161 18.135-14.7 26.062-33.164-19.53-18.913-30.2-43.235-30.2-69.245 0-59.55 58.766-108 131-108s131 48.45 131 108c0 59-58.766 107-131 107a167.4 167.4 0 0 1-46.843-6.754c-29.588 21.219-71.232 21.742-73.086 21.754H12c-10.147-.007-14.78-13.246-6.867-19.591M23 124.999c0 21.851 9.978 42.3 28.095 57.595 3.262 2.751 4.653 7.271 3.5 11.38-2.823 10.047-8.02 19.245-13.6 26.962 11.735-2.9 24.848-7.857 34.915-16.346 2.935-2.474 7.054-3.24 10.682-1.987a142.7 142.7 0 0 0 45.408 7.4c60.1 0 109-38.132 109-85 0-47.42-48.9-86-109-86S23 77.58 23 125m98 47v-37H83.5c-5.991 0-11-5.009-11-11s5.009-11 11-11H121V76c0-5.991 5.009-11 11-11s11 5.009 11 11v37h36.5c5.991 0 11 5.009 11 11s-5.009 11-11 11H143v37c0 5.991-5.009 11-11 11s-11-5.009-11-11' })
        );
    }

    module.exports = comment-plus;
