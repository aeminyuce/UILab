
    'use strict';
    var  React = require('react');

    var pen-write = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M6.06 251.447 2.004 99.156c-.103-3.855 1.888-7.567 5.155-9.614l57.987-36.328L82.122 8.123c2.36-6.269 10.025-9 15.818-5.635l94.978 55.158c5.775 3.358 7.214 11.338 2.969 16.498l-30.408 36.995-2.4 68.248c-.136 3.881-2.383 7.484-5.807 9.315L22.24 260.856c-7.14 3.82-15.965-1.319-16.18-9.409M45.5 224l95.821-51.718 2.074-59.032-69.027-39.851-50.2 31.452 2.9 108.811 27.948-45.833c-9.284-10.517-10.865-26.214-3.865-38.371 9-15.55 29.51-21.045 45.079-12.078 15.55 8.999 21.046 29.509 12.08 45.078-6.822 11.786-20.604 18.284-34.037 16.048zm24.699-83.542c-2.988 5.189-1.156 12.025 4.026 15.025 5.19 2.99 12.027 1.158 15.027-4.026 2.987-5.189 1.156-12.025-4.026-15.025-5.183-3.002-12.034-1.156-15.027 4.026m27.26 114.238c-5.21-2.956-7.096-9.783-4.14-14.994 2.945-5.194 9.74-7.088 14.948-4.168 20.065 10.817 35.165-1.488 40.677-21.051 1.507-5.349 6.971-8.798 12.449-7.858 8.716 1.5 15.938 7.17 23.583 13.177 12.271 9.642 21.19 15.751 32.905 12.918 7.131-1.726 16.428-8.479 24.872-18.063 3.96-4.495 11.029-4.942 15.525-.982 4.469 3.94 4.898 11.089.982 15.525-6.75 7.662-20.426 21.085-36.206 24.9-22.964 5.556-39.557-7.48-51.671-17-1.913-1.5-3.848-3.023-5.691-4.372-12.641 27.837-41.91 35.875-68.233 21.968' })
        );
    }

    module.exports = pen-write;
