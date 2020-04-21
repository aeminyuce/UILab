/*globals window, selector, events, setTimeout, ajax, lineCharts, alerts, loadingButton */

lineCharts.rows = 4; // set number of rows
    lineCharts.rowsHeight = 36; // set height of single row (px)

    lineCharts.top = 16; // set top space (px)
    lineCharts.right = 20; // set right space (px)
    lineCharts.bottom = 10; // set bottom space (px)

    lineCharts.showBgGrid = false; // set showing bg grid
    lineCharts.showInfo = false; // set showing info

    alerts.messageTheme = 'theme-default2 ui-dark';

    events.onload(function () {
        events.on('.load-more', 'click', function () {

            var that, target, scrollPos;

            that = this;
            loadingButton.toggle(this);

            scrollPos = that.getBoundingClientRect().top + window.pageYOffset - 15;

            ajax({
                url : 'ajax/ajax-products.php',
                callback: function (status, response) {

                    target = selector('.products-list');
                    if (target.length > 0) {

                        if (status === 'success') {

                            target[0].insertAdjacentHTML('beforeend', response);

                            alerts.message({
                                msg: 'Products loaded!',
                                theme: 'theme-default2 ui-dark'
                            });

                            loadingButton.toggle(that);
                            setTimeout(function () {
                                window.scrollTo(0, scrollPos);
                            }, 150);

                        } else {

                            alerts.message({
                                msg: 'Products not loaded!',
                                theme: 'danger',
                                pos: 'tr'
                            });

                            loadingButton.toggle(that);

                        }

                    }

                }
            });

        });

    });
