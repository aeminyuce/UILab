
    'use strict';
    var  React = require('react');

    var cap = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: 'M12.504 239.501c-6.308-.001-11.44-5.537-10.969-11.827l5.933-78.8a18.1 18.1 0 0 1-5.962-13.372c.01-7.939 5.419-15.114 13.048-17.308 1.858-5.339 3.547-9.673 5.1-13.192l-11.875-4.93C3.767 98.406 1.06 94.408 1 90.064s2.536-8.413 6.5-10.19l120.432-53.911a11.08 11.08 0 0 1 9.026.015l119.48 54.01c3.948 1.784 6.532 5.849 6.468 10.182-.062 4.332-2.759 8.32-6.757 9.991l-43.216 18.062 3.544 57.6a11 11 0 0 1-2.3 7.435c-.994 1.276-24.985 31.241-81.678 31.241-56.524 0-82.422-30.708-83.5-32.014a11 11 0 0 1-2.484-7.662l3.521-57.209-10.037-4.167c-1.465 3.4-3.228 8.06-4.955 12.993a17.9 17.9 0 0 1 2.45 9.058 18.08 18.08 0 0 1-5.68 13.112l7.63 78.828c.616 6.37-4.55 12.061-10.95 12.061zm120.013-111.878 91.815-38.009-91.921-41.552-90.87 40.677c16.945-2.141 60.75-8.146 89.448-12.135 5.929-.824 11.594 3.511 12.409 9.383.825 5.934-3.447 11.584-9.381 12.409-7.891 1.1-32.2 4.468-54.659 7.515z' })
        );
    }

    module.exports = cap;
