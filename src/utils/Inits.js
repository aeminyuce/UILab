// Inits
import { ui } from 'ui';

export default function Inits() {

    if (ui.calendar !== undefined) ui.calendar.Init();
    if (ui.carousel !== undefined) ui.carousel.Init();
    if (ui.donutChart !== undefined) ui.donutChart.Init();
    if (ui.dualMultiSelect !== undefined) ui.dualMultiSelect.Init();
    if (ui.formSpinner !== undefined) ui.formSpinner.Init();
    if (ui.forms !== undefined) ui.forms.Init();
    if (ui.lineChart !== undefined) ui.lineChart.Init();
    if (ui.photoslide !== undefined) ui.photoslide.Init();
    if (ui.pieChart !== undefined) ui.pieChart.Init();
    if (ui.textareaCounter !== undefined) ui.textareaCounter.Init();
    if (ui.weather !== undefined) ui.weather.Init();

}