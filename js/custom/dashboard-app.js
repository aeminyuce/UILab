/*globals selector, events, lineCharts */

lineCharts.colors = ['#0070ff', '#ff103b', '#ff6384', '#9966ff', '#4bc0c0', '#ffcd56', '#84594d', '#bbc451', '#6a6a6a', '#647bc1'];

lineCharts.bottom = 0; // set bottom space (px)
lineCharts.left = 6; // set left space (px)

lineCharts.showBgGrid = false; // set showing bg grid
lineCharts.showGridText = false; // set showing grid numbers

lineCharts.gridStroke = 0; // set grid stroke width

(function () {

    'use strict';
    events.onload(function () {

        function scroller() {

            var opened = selector('.open .messages')[0];
            opened.scrollTo(0, opened.offsetHeight);

        }

        scroller();
        events.on('.contacts li', 'click', scroller);

    });

}());