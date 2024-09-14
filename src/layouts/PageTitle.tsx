import * as React from 'react';

interface PageTitleProps {

    title: string;
    children: React.ReactNode;

}

export default function PageTitle(

    { title, children }:PageTitleProps) {
        const setTitle = title ? `${title} | ` : '';
        document.title = setTitle + process.env.PROJECT_NAME;

        return children;
    }