import React, { useState, useEffect } from "react";

// read svg files
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

        // get d='...' from svg file
        const from = iconName.val.indexOf("d='") + 3;

        const cut = iconName.val.indexOf("'/%");
        const to = iconName.val.length - (iconName.val.length - cut);

        const path = iconName.val.substring(from, to); // get inside of '...'
        updateSrc(path);

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

// create sprites
import { ui } from 'ui';
import sprites from '../../dist/icons.svg';

ui.globals.iconSrc = sprites;
ui.icons.iconSrc = sprites;