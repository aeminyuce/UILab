import React, { useState, useEffect } from "react";

export default function Icon(props) {

    const [currentSrc, updateSrc] = useState(""); // type: string

    const getPath = function(src) { // get svg path

        const from = src.indexOf("d='") + 3;

        const cut = src.indexOf("'/%");
        const to = src.length - (src.length - cut);

        const path = src.substring(from, to);
        return path;

    }

    useEffect(() => {
        updateSrc(getPath(props.src));

    }, []); // Runs only first render

    const setSize = props.size ? " ui-icon-" + props.size : '';
    const setAnimate = props.animate ? " ui-animate-" + props.animate : '';

    return (
        <svg className={"ui-icon" + setSize + setAnimate} viewBox="0 0 264 264">
            <path d={currentSrc} />
        </svg>
    );

}