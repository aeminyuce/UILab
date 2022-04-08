/* product listing */

// settings
ui.lineChart.rows = 4;
ui.lineChart.rowsHeight = 36;

ui.lineChart.top = 16;
ui.lineChart.right = 20;
ui.lineChart.bottom = 10;

ui.lineChart.showGrid = false;
ui.lineChart.showInfo = false;

// loader
ui.onload(() => {

    ui.on('.product-list-load-more',
        'click',

        function () {

            ui.loadingMask.toggle(this);

            const scrollPos = this.getBoundingClientRect().top + window.pageYOffset - 15;

            ui.ajax({
                url : 'xhr/ajax-products.php',
                callback: (status, response) => {

                    const target = ui.find('.product-list');
                    if (target.length > 0) {

                        if (status === 'success') {

                            target[0].insertAdjacentHTML('beforeend', response);

                            ui.alerts.message({
                                msg: 'Products loaded!',
                                theme: 'ui-theme-sub ui-fill-dark-100'
                            });

                            ui.loadingMask.toggle(this);

                            setTimeout(() => {
                                window.scrollTo(0, scrollPos);
                            }, ui.globals.ease);

                        } else {

                            ui.alerts.message({
                                msg: 'Products not loaded!',
                                theme: ui.alerts.themeDanger,
                                pos: ui.alerts.posTopRight
                            });

                            ui.loadingMask.toggle(this);

                        }

                    }

                }
            });

        });

});
