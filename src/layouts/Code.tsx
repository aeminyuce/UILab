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

        // clean up spaces
        const indent = 4; // default indentation

        const reFirstSpace = new RegExp(`^\\s{${(((indSize * indent) + 1))}}`, 'g'); // remove first space
        const reSpaces = new RegExp(`(?!\\n|\\r)\\s{${indSize * indent}}`, 'gm'); // remove spaces by specified tab size except new lines
        const reLastSpace = new RegExp(/\s+$/g); // remove last space

        value = value.replace(reFirstSpace, '').replace(reSpaces, '').replace(reLastSpace, '');

        // split lines
        const codeLines = value.split('\n');

        // colors
        const colorHighlight = 'hsl(328, 100%, 80%)';

        // replacers
        const replacers = {
            start: [
                'import\\s\\*\\s+as',                                   // import * as
                'import\\s\\{',                                         // import {
                'import',                                               // import

                '\\}\\s+from',                                          // } from '
                '\\s*\\}|\\}',                                          // }
                '\\s*\\)\\;|\\)\\;',                                    // );

                'export\\s+default\\s+function\\s\\(\\)\\s\{',          // export default function () {
                '\\s*return\\s\\(|return\\s\\(',                        // return (

                '\\s*\\<[\\w\\d\\_\\-]+',                               // <ComponentName
            ],

            middle: [
                '\\s+from\\s',                                          // ComponentName from '
                '\\s\\}\\s+from\\s',                                    // } from '
            ],

            end: [
                '\\/\\>',                                               // />
            ],
        }

        // tokens
        const middleTokens = (val: string) => {
            const reMiddle = new RegExp(`${replacers.middle.toString().replace(/\,/g, '|')}`, 'g');
            const getMiddle = val.match(reMiddle);

            if (getMiddle) {
                const splitter = '|||';

                val = val.replace(reMiddle, splitter);
                const valArr = val.split(splitter);

                return (
                    <>
                        {valArr[0]}
                        <span style={{ color: colorHighlight }}>{getMiddle}</span>
                        {valArr[1]}
                    </>
                )
            } else return val;
        }

        const endTokens = (val: string) => {
            const reEnd = new RegExp(`(${replacers.end.toString().replace(/\,/g, '|')})$`, 'g');
            const getEnd = val.match(reEnd);

            if (getEnd) return (
                <>
                    {middleTokens(val.replace(reEnd, ''))}
                    <span style={{ color: colorHighlight }}>{getEnd}</span>
                </>
            )
            else return middleTokens(val);
        }

        const startTokens = (val: string) => {
            const reStart = new RegExp(`^(${replacers.start.toString().replace(/\,/g, '|')})`, 'g');
            const getStart = val.match(reStart);

            if (getStart) return (
                <>
                    <span style={{ color: colorHighlight }}>{getStart}</span>
                    {endTokens(val.replace(reStart, ''))}
                </>
            )
            else return endTokens(val);
        }

        // classes
        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-pre ui-ease-pre ui-set-relative${setClassName}`;

        return (
            <pre className={classes} style={style}>
                <div className='ui-p-10 ui-set-absolute ui-set-t ui-set-r'>
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

                {codeLines.map((line: string, i: number) => {
                    if (line === '') { // empty lines
                        return <br key={`line_${i}`} />;

                    } else return ( // tokens
                        <div key={`line_${i}`} className='ui-pre-line'>
                            {startTokens(line)}
                        </div>
                    )
                })}
            </pre>
        )
    }