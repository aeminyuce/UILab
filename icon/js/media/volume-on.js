'use strict';
var  React = require('react');

module.exports.IconVolumeOn = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M132.435 259.986 59.617 191H36c-18.972 0-35-16.486-35-36v-47c0-19.513 16.028-36 35-36h23.617l72.818-68.986c3.157-2.99 7.917-3.837 11.912-2.119 3.995 1.719 6.654 5.756 6.654 10.105v241c0 4.349-2.659 8.387-6.654 10.105-3.985 1.715-8.753.873-11.912-2.119m-60.87-87.971L129 226.427V36.573L71.566 90.985zM209.246 224.8c-4.25-4.223-4.272-11.306-.049-15.556 19.823-19.948 30.763-47.742 30.8-78.261.04-30.024-11.238-57.79-31.755-78.184-4.249-4.224-4.271-11.306-.047-15.556 4.224-4.249 11.307-4.27 15.556-.047 24.71 24.561 38.293 57.88 38.245 93.816-.048 36.359-13.258 69.649-37.2 93.74-4.2 4.238-11.286 4.297-15.55.051zm-35.052-34.05c-4.22-4.251-4.195-11.334.056-15.555 11.424-11.343 17.728-27.043 17.751-44.209.201-16.099-6.296-31.895-17.765-43.194-4.244-4.229-4.256-11.312-.027-15.556s11.312-4.256 15.556-.027c15.528 15.449 24.37 36.905 24.235 58.808-.031 23.062-8.643 44.3-24.25 59.792-4.266 4.247-11.358 4.184-15.556-.059' })
    );
}