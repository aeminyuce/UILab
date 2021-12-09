/*
 UI Icons JS
 Requires UI Core JS
*/

ui.icons = {

    // targets
    target: 'use',

    // values
    iconSrc: '../docs/img/icons.svg'

};

(function () {

    ui.icons.Start = function () {

        // svg icon reference replacement for IE
        if (!ui.userAgents.ie) { return; }

        var iconsList, href, newHref;

        iconsList = ui.find(ui.icons.target);
        ui.each(iconsList,

            function (i) {

                href = this.getAttribute('href');
                newHref = href.split('#')[1];

                this.removeAttribute('href');
                this.setAttribute('href');

                this.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + newHref);

                if ((i + 1) === iconsList.length) { // get all svg icons and parse html

                    ui.ajax({

                        url : ui.icons.iconSrc,
                        callback: function (status, response) {

                            var target = ui.find('body');
                            if (target.length > 0) {

                                if (status === 'success') {

                                    target[0].insertAdjacentHTML('afterbegin', response);

                                    // empty variables
                                    iconsList = '';

                                }

                            }

                        }

                    });

                }

             });

    };

    // Loaders
    ui.onload(ui.icons.Start);

}());
