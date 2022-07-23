import * as React from 'react';

interface ButtonProps {
    label: string,
    type?: 'submit' | 'button',
}

export default function Button({label, type}:ButtonProps) {

    if (!label)
        return null;

    const defaultClassNames = "ui-btn ui-ease-btn";

    return (
        <>
            <button type={type} className={defaultClassNames}>
                {label}
            </button>
        </>
    );
}