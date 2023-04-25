import * as React from 'react';
import { useEffect } from 'react';

interface PageTtitleProps {

    title: any,
    children: React.ReactNode,

}

export default function PageTitle(

    { title, children }:PageTtitleProps) {

        const setTitle = title ? title : '';

        useEffect(() => {
            document.title = setTitle + ' | UI Lab';

        }); // Runs only first render

        return (
            <>{children}</>
        )

    }