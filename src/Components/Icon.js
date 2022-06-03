import React, { useState, useEffect } from "react";

import envelope from 'icon/general/envelope.svg';
import camera from 'icon/media/camera.svg';
import loader_line from 'icon/general/loader-line.svg';

export default function Icon(props) {

    const names = [
        { val: loader_line, name: "loader-line" },
        { val: envelope, name: "envelope" },
        { val: camera, name: "camera" },
    ];

    const iconName = names.find(item => {
        return item.name === props.src;
    });

    const [currentSrc, updateSrc] = useState(""); // type: string

    const getPath = function(src) { // get svg path

        const from = src.indexOf("d='") + 3;

        const cut = src.indexOf("'/%");
        const to = src.length - (src.length - cut);

        const path = src.substring(from, to);
        return path;

    }

    useEffect(() => {
        updateSrc(getPath(iconName.val));

    }, []); // Runs only first render

    const setSize = props.size ? " ui-icon-" + props.size : '';
    const setAnimate = props.animate ? " ui-animate-" + props.animate : '';

    return (
        <svg className={"ui-icon" + setSize + setAnimate} viewBox="0 0 264 264">
            <path d={currentSrc} />
        </svg>
    );

}