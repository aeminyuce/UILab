
    'use strict';
    var  React = require('react');

    var key = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M2 252.001v-41c0-2.897 1.173-5.73 3.222-7.779l84.939-84.939A93.5 93.5 0 0 1 86 90.001c.054-48.454 40.546-88.946 89-89 48.524 0 88 39.925 88 89 0 49.346-38.654 88-88 88a128 128 0 0 1-29.764-3.679l-21.457 21.458a11 11 0 0 1-7.779 3.221H95.35l.646 20.656C96.184 225.775 91.122 231 85 231.001H64v20c.002 5.889-4.84 10.853-10.726 11l-40 1H13c-6.02 0-11.002-5.028-11-11m106-162c0 16.088 4.774 25.949 4.821 26.046 2.077 4.199 1.244 9.393-2.042 12.732L24 215.557v25.167l18-.451v-20.272c0-5.991 5.009-11 11-11h20.651l-.646-20.656C72.813 182.224 77.876 177 84 177.001h27.444l22.777-22.778c2.932-2.931 7.387-3.97 11.313-2.638A104.4 104.4 0 0 0 175 156.001c37.01 0 66-28.991 66-66 0-37.571-28.991-67-66-67-36.476.042-66.958 30.524-67 67m55-16c.018-16.333 13.667-29.982 30-30 16.333.019 29.982 13.667 30 30-.018 16.333-13.667 29.981-30 30-16.333-.019-29.982-13.667-30-30m22 0c.005 4.355 3.645 7.995 8 8 4.355-.005 7.995-3.645 8-8-.005-4.355-3.645-7.995-8-8-4.355.005-7.995 3.645-8 8' })
        );
    }

    module.exports = key;
