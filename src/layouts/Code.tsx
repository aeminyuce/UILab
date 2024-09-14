import * as React from 'react';
import Alerts from '@components/Alerts';
import Button from '@components/Button';
import Icon from '@components/Icon';

// assets
const icon_clone = require('@icon/clone.svg') as string;

interface CodeProps {

    indSize: number;
    value: string;

    className?: string;
    style?: any;

}

export default function Code(

    { indSize, value, className, style }:CodeProps) {

        const space = 4; // default indentation

        // replacers
        const reFirstSpace = new RegExp(`^\\s{${(((indSize * space) + 1))}}`, 'g'); // remove first space
        const reSpaces = new RegExp(`(?!\\n|\\r)\\s{${indSize * space}}`, 'g'); // remove spaces by specified tab size except new lines
        const reLastSpace = new RegExp(/\s+$/g); // remove last space

        value = value.replace(reFirstSpace, '').replace(reSpaces, '').replace(reLastSpace, '');

        // classes
        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-pre ui-ease-pre ui-set-relative${setClassName}`;

        return (
            <pre className={classes} style={style}>
                <div className='ui-p-4 ui-set-absolute ui-set-t ui-set-r'>
                    <Button square ghost size='xs' title='Copy' className='ui-round ui-m-5 ui-theme-gray ui-fill-light-100' onClick={() => {
                        // copy to clipboard
                        navigator.clipboard.writeText(value);

                        Alerts.Message({
                            msg: 'Copied!',
                            pos: 'br',
                        });
                    }}>
                        <Icon src={icon_clone} className='ui-color-white' />
                    </Button>
                </div>
                <code>{value}</code>
            </pre>
        )
    }