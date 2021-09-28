/*globals ui */

ui.lineCharts.colors = [
    'hsl(214, 100%, 50%)',
    'hsl(349, 100%, 53%)',
    'hsl(347, 100%, 69%)',
    'hsl(260, 100%, 70%)',
    'hsl(180, 48%, 52%)',
    'hsl(42, 100%, 67%)',
    'hsl(13, 26%, 41%)',
    'hsl(65, 49%, 54%)',
    'hsl(0, 0%, 42%)',
    'hsl(225, 43%, 57%)'
];

ui.lineCharts.bottom = 0;
ui.lineCharts.left = 6;

ui.lineCharts.showBgGrid = false;
ui.lineCharts.showGridText = false;

ui.lineCharts.gridStroke = 0;

(function () {

    'use strict';
    ui.onload(function () {

        function scroller() {

            var opened = ui.find('.open .messages')[0];
            opened.scrollTo(0, opened.offsetHeight);

        }

        scroller();
        ui.on('.contacts li', 'click', scroller);

    });

}());