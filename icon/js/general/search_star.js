'use strict';
        var  React = require('react');

        var icon_search_star = function (props) {
            return React.createElement(
                'svg',
                Object.assign({}, props, { viewBox: '0 0 264 264' }),
                React.createElement('path', { d: 'm244.222 259.779-68.772-68.772A106.5 106.5 0 0 1 108 215C49.747 214.934 1.066 166.253 1 108 1.066 49.747 49.747 1.066 108 1c58.253.066 106.934 48.747 107 107a106.5 106.5 0 0 1-23.994 67.449l68.772 68.772c4.237 4.237 4.237 11.32 0 15.557-4.229 4.24-11.326 4.241-15.556.001M23 108c.054 46.275 38.725 84.946 85 85 46.275-.054 84.946-38.725 85-85-.054-46.275-38.725-84.946-85-85-46.275.054-84.946 38.725-85 85m62.12 41.612-3.195-21.559-19.163-10.381c-7.676-4.157-7.489-15.608.319-19.512l18.846-9.422 3.185-22.294c1.259-8.807 12.342-12.547 18.669-6.221l16.085 16.085 21.524-3.188c8.78-1.301 15.512 8.317 11.283 16.121l-10.218 18.866 10.305 19.819c4.144 7.968-2.929 17.525-11.76 15.889l-21.311-3.946-15.907 15.909c-6.274 6.274-17.349 2.703-18.662-6.166' })
            );
        }

        module.exports = icon_search_star;