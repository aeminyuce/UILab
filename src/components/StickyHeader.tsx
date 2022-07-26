import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import "@less/modules/header-sticky";
import "@js/modules/header-sticky";

export default function StickyHeader() {

    useEffect(() => {

        // start
        ui.headerSticky.Start();

    }, []); // Runs only first render

    return (
        <></>
    );

}