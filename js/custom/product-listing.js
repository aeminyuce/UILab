/*globals window, ui, setTimeout */

ui.lineCharts.rows = 4;
ui.lineCharts.rowsHeight = 36;

ui.lineCharts.top = 16;
ui.lineCharts.right = 20;
ui.lineCharts.bottom = 10;

ui.lineCharts.showGrid = false;
ui.lineCharts.showInfo = false;

ui.alerts.messageTheme = 'theme-default2 ui-fill-dark-100';

ui.onload(function () {
    ui.on('.load-more',

        'click',

        function () {

            var that, target, scrollPos;

            that = this;
            ui.loadingMask.toggle(this);

            scrollPos = that.getBoundingClientRect().top + window.pageYOffset - 15;

            ui.ajax({
                url : 'xhr/ajax-products.php',
                callback: function (status, response) {

                    target = ui.find('.products-list');
                    if (target.length > 0) {

                        if (status === 'success') {

                            target[0].insertAdjacentHTML('beforeend', response);

                            ui.alerts.message({
                                msg: 'Products loaded!',
                                theme: 'theme-default2 ui-fill-dark-100'
                            });

                            ui.loadingMask.toggle(that);
                            setTimeout(function () {
                                window.scrollTo(0, scrollPos);
                            }, ui.globals.ease);

                        } else {

                            ui.alerts.message({
                                msg: 'Products not loaded!',
                                theme: 'danger',
                                pos: 'tr'
                            });

                            ui.loadingMask.toggle(that);

                        }

                    }

                }
            });

        });

});
