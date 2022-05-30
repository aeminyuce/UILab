import React, { useState, useEffect } from "react";

// SVG icons
import envelope from 'icon/general/envelope.svg';
import camera from 'icon/media/camera.svg';

export default function Icon(props) {

    const names = [
        { name: "envelope", val: envelope },
        { name: "camera", val: camera },
    ];

    const sizes = [
        { size: "xs", name: "ui-icon-xs" },
        { size: "sm", name: "ui-icon-sm" },
        { size: "lg", name: "ui-icon-lg" },
        { size: "xl", name: "ui-icon-xl" },
        { size: "xxl", name: "ui-icon-xxl" },
    ];

    const [currentSrc, updateSrc] = useState(""); // type: string

    // icon names
    const iconName = names.find(item => {
        return item.name === props.src;
    });

    useEffect(() => {
        updateSrc(getPath(iconName.val, true));

    }, []); // Runs only first render

    // icon sizes
    const iconSizes = sizes.find(item => {
        return item.size === props.size;
    });

    let setSize = "";

    if (iconSizes !== undefined) {
        setSize = " " + iconSizes.name;
    }

    return (
        <svg className={"ui-icon" + setSize} viewBox="0 0 264 264">
            <path d={currentSrc} />
        </svg>
    );

}

// get svg path
const getPath = function(src, curves) {

    const from = src.indexOf("d='") + 3;

    const cut = src.indexOf("'/%");
    const to = src.length - (src.length - cut);

    const path = src.substring(from, to);

    let newPath;

    if (curves) {
        newPath = path;

    } else {
        newPath = '<path d="' + path + '" />';
    }

    return newPath;
}

// JS icons
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

import { ui } from 'ui';
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