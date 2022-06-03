import { ui } from 'ui';

import angle_left from 'icon/general/angle-left.svg';

import arrow_to_top from 'icon/general/arrow-to-top.svg';
import arrow_left from 'icon/general/arrow-left.svg';
import arrow_right from 'icon/general/arrow-right.svg';

import sort from 'icon/general/sort.svg';
import sort_up from 'icon/general/sort-up.svg';
import sort_down from 'icon/general/sort-down.svg';
import sort_number_up from 'icon/general/sort-number-up.svg';
import sort_number_down from 'icon/general/sort-number-down.svg';

import remove from 'icon/general/remove.svg';
import ban from 'icon/general/ban.svg';
import loader_line from 'icon/general/loader-line.svg';

export default function JsIcons() {

    const getPath = function(src) { // get svg path

        const from = src.indexOf("d='") + 3;

        const cut = src.indexOf("'/%");
        const to = src.length - (src.length - cut);

        const path = src.substring(from, to);

        const newPath = '<path d="' + path + '" />';
        return newPath;

    }

    ui.globals.inlineSvg = true;

    if (ui.alerts !== undefined) ui.alerts.closeIcon = getPath(remove);

    if (ui.calendar !== undefined) {

        ui.calendar.prevIcon = getPath(arrow_left);
        ui.calendar.nextIcon = getPath(arrow_right);
        ui.calendar.backIcon = getPath(angle_left);

    }

    if (ui.datatable !== undefined) {

        ui.datatable.sortIcon = getPath(sort);
        ui.datatable.ascIcon = getPath(sort_up);
        ui.datatable.descIcon = getPath(sort_down);
        ui.datatable.ascNumberIcon = getPath(sort_number_up);
        ui.datatable.descNumberIcon = getPath(sort_number_down);

    }

    if (ui.photoGallery !== undefined) {

        ui.photoGallery.closeIcon = getPath(remove);
        ui.photoGallery.prevIcon = getPath(angle_left);
        ui.photoGallery.nextIcon = getPath(angle_right);
        ui.photoGallery.loaderIcon = getPath(loader_line);
        ui.photoGallery.errorIcon = getPath(ban);

    }

    if (ui.modal !== undefined) ui.modal.closeIcon = getPath(remove);

    if (ui.topButton !== undefined) ui.topButton.icon = getPath(arrow_to_top);

}