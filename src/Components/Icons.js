import React, { useState, useEffect } from "react";

export default function Icon(props) {

    // reading svg files
    const [currentSrc, updateSrc] = useState(""); // string
    const type = props.type ? props.type : "general";

    useEffect(() => {

        const svg = require("svg-url-loader!../../icon/" + type + "/" + props.src + ".svg");

        // get d='...' from svg file
        const from = svg.indexOf("d='") + 3; // start of d

        const cut = svg.indexOf("'/%");
        const to = svg.length - (svg.length - cut); // end of d

        const path = svg.substring(from, to); // inside of ''
        updateSrc(path); // set state

    }, []); // Runs only first render

    // icon sizes
    const sizes = [
        { size: "xs", name: "ui-icon-xs" },
        { size: "sm", name: "ui-icon-sm" },
        { size: "lg", name: "ui-icon-lg" },
        { size: "xl", name: "ui-icon-xl" },
        { size: "xxl", name: "ui-icon-xxl" }
    ];

    const iconSizes = sizes.filter(item => {
        return item.size === props.size;
    });

    if (iconSizes.length === 0) { // no size

        return (
            <svg className={"ui-icon"} viewBox="0 0 264 264">
                <path d={currentSrc} />
            </svg>
        );

    } else { // other sizes

        return (
            <>
                {iconSizes.map(item => {
                    return (
                        <svg key={item} className={"ui-icon " + item.name} viewBox="0 0 264 264">
                            <path d={currentSrc} />
                        </svg>
                    );
                })}
            </>
        );

    }

}