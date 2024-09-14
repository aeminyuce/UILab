import * as React from 'react';
import { useEffect } from 'react';

interface PageTitleProps {

    title: string;
    children: React.ReactNode;

}

export default function PageTitle(

    { title, children }:PageTitleProps) {
        const setTitle = title ? title : '';

        useEffect(() => {
            document.title = setTitle + ' | ' + process.env.PROJECT_NAME;
        });

        return children;
    }