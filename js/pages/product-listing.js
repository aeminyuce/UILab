ui.lineChart.rows = 4;
ui.lineChart.rowsHeight = 36;

ui.lineChart.top = 16;
ui.lineChart.right = 20;
ui.lineChart.bottom = 10;

ui.lineChart.showGrid = false;
ui.lineChart.showInfo = false;

ui.onload(function () {
    ui.on('.product-list-load-more',
        'click',

        function () {

            var that, target, scrollPos;

            that = this;
            ui.loadingMask.toggle(this);

            scrollPos = that.getBoundingClientRect().top + window.pageYOffset - 15;

            ui.ajax({
                url : 'xhr/ajax-products.php',
                callback: function (status, response) {

                    target = ui.find('.product-list');
                    if (target.length > 0) {

                        if (status === 'success') {

                            target[0].insertAdjacentHTML('beforeend', response);

                            ui.alerts.message({
                                msg: 'Products loaded!',
                                theme: 'ui-theme-sub ui-fill-dark-100'
                            });

                            ui.loadingMask.toggle(that);

                            setTimeout(function () {
                                window.scrollTo(0, scrollPos);
                            }, ui.globals.ease);

                        } else {

                            ui.alerts.message({
                                msg: 'Products not loaded!',
                                theme: ui.alerts.themeDanger,
                                pos: ui.alerts.posTopRight
                            });

                            ui.loadingMask.toggle(that);

                        }

                    }

                }
            });

        });

});
