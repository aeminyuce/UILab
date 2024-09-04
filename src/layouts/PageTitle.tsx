import * as React from 'react';
import { useEffect } from 'react';

interface PageTtitleProps {

    title: string,
    children: React.ReactNode,

}

export default function PageTitle(

    { title, children }:PageTtitleProps) {

        const setTitle = title ? title : '';

        useEffect(() => {
            document.title = setTitle + ' | ' + process.env.PROJECT_NAME;
        });

        return children;

    }