import * as React from 'react';
import { ReactNode } from 'react';

interface PageTitleProps {

    title: string;
    children: ReactNode;

}

export default function PageTitle(

    { title, children }:PageTitleProps) {
        const setTitle = title ? `${title} | ` : '';
        document.title = setTitle + process.env.PROJECT_NAME;

        return children;
    }