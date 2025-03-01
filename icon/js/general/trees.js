
    'use strict';
    var  React = require('react');

    var trees = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264}' }),
            React.createElement('path', { d: 'M36.263 46.602c5.635-26.183 29.44-45.6 57.738-45.6 20.688-.104 40.384 10.95 51.072 28.665 39.086-23.018 90.195 3.718 94.628 48.166 50.388 36.779 8.414 120.233-49.2 100.125v74.546c0 5.991-5.009 11-11 11s-11-5.009-11-11v-65.315c-16.676 10.35-38.362 10.316-55-.097v65.412c0 5.991-5.009 11-11 11s-11-5.009-11-11v-59.65C50.814 219.44-2 173.566 18.817 129.596c-29.98-23.989-18.67-73.273 17.446-82.994m187.332 46.983c-3.424-1.932-5.595-5.651-5.594-9.583-.04-34.923-44.258-54.459-69.771-29.21-5.926 5.841-16.278 2.833-18.354-5.027-4.157-15.763-18.91-26.763-35.875-26.763-19.722 0-35.953 14.785-36.952 33.66-.291 5.493-4.773 10.033-10.261 10.395-25.193 1.738-32.602 38.426-8.387 48.871 6.642 2.867 8.721 11.594 4.085 17.148-29.388 35.305 40.995 65.796 49.015 23.238v-11.752l-19.683-25.308c-3.678-4.729-2.8-11.758 1.93-15.436s11.758-2.799 15.436 1.93l2.317 2.98V69.502c0-5.991 5.009-11 11-11s11 5.009 11 11v19.227l2.318-2.98c3.678-4.73 10.707-5.608 15.436-1.93s5.608 10.707 1.93 15.436l-19.684 25.308v30.449c10.041 22.806 44.712 23.689 55 .008v-3.379l-20.527-25.191c-3.784-4.645-3.065-11.691 1.579-15.475 4.645-3.785 11.692-3.066 15.477 1.579l3.471 4.26V76.502c0-5.991 5.009-11 11-11s11 5.009 11 11v11.152l3.6-4.258c3.87-4.572 10.927-5.16 15.5-1.291 4.572 3.87 5.161 10.926 1.293 15.5l-20.4 24.105v31.855c36.187 24.108 72.687-37.646 33.101-59.982z' })
        );
    }

    module.exports = trees;
