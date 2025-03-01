
    'use strict';
    var  React = require('react');

    var flash-on = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M108.573 262.071c-4.261-1.873-6.93-6.395-6.533-11.013l7.281-84.637L60.2 148.323c-6.66-2.452-9.282-10.804-5.218-16.622l88-126c2.818-4.036 8.146-5.722 12.772-4.042 4.627 1.68 7.632 6.391 7.205 11.295l-7.272 83.63 49.116 18.1a11 11 0 0 1 4.156 2.728c3.56 3.732 4.02 9.62 1.083 13.859l-88 127c-2.965 4.274-8.711 5.891-13.469 3.8m-27.39-129.462 43.62 16.07c4.597 1.693 7.577 6.384 7.157 11.265l-4.46 51.814 56.366-81.346-43.666-16.089c-4.601-1.695-7.581-6.391-7.156-11.275l4.436-51.047z' })
        );
    }

    module.exports = flash-on;
