import * as React from 'react';
import Alerts from '@components/Alerts';
import Button from '@components/Button';
import Icon from '@components/Icon';

// assets
const icon_clone = require('@icon/clone.svg') as string;
const icon_code = require('@icon/code.svg') as string;
const icon_brackets = require('@icon/brackets.svg') as string;
const icon_brackets_curly = require('@icon/brackets-curly.svg') as string;

interface CodeProps {

    type: 'react' | 'js' | 'css';
    indSize: number;
    value: string;

    className?: string;
    style?: any;

}

export default function Code(

    { type, indSize, value, className, style }:CodeProps) {

        // clean up spaces
        const indent = 4; // default indentation

        const reFirstSpace = new RegExp(`^\\s{${(((indSize * indent) + 1))}}`, 'g'); // remove first space
        const reSpaces = new RegExp(`(?!\\n|\\r)\\s{${indSize * indent}}`, 'gm'); // remove spaces by specified tab size except new lines
        const reLastSpace = new RegExp(/\s+$/g); // remove last space

        value = value.replace(reFirstSpace, '').replace(reSpaces, '').replace(reLastSpace, '');

        // split lines
        const codeLines = value.split('\n');

        // replacers
        const replacers = {
            react: {
                start: [
                    "import\\s\\*\\s+as",                                   // import * as
                    "import\\s\\{",                                         // import {
                    'import',                                               // import

                    "\\}\\s+from",                                          // } from '
                    "\\s*\\}|\\}",                                          // }
                    "\\s*\\)\\;|\\)\\;",                                    // );

                    "export\\s+default\\s+function\\s\\(\\)\\s\{",          // export default function () {
                    "\\s*return\\s\\(|return\\s\\(",                        // return (

                    "\\s*\\<[\\w\\d\\_\\-]+",                               // <ComponentName
                ],

                middle: [
                    "\\'[\\@\\w\\d\\_\\-\\/]+\\'",                          // '@alias/ComponentName'
                    "\\s+from\\s",                                          // ComponentName from '
                    "\\s\\}\\s+from\\s",                                    // } from '
                ],

                end: [
                    "\\/\\>",                                               // />
                ],
            }
        }

        // colors
        const colorHighlight = 'hsl(328, 100%, 80%)';
        const colorWhite = 'hsl(0, 0%, 100%)';

        // token helpers
        const regexFromArr = (arr: string[] | string) => new RegExp(`${arr.toString().replace(/\,/g, '|')}`, 'g');

        const createSpans = (token: string[]) => {
            let setColor = colorHighlight;

            const spans = token.map((item: any, i: number) => {
                if (regexFromArr(replacers[type].middle[0]).test(item)) setColor = colorWhite;

                return (
                    <span key={`token_${i}`} style={{ color: setColor }}>
                        {item}
                    </span>
                )
            });

            return spans;
        }

        // tokens
        const middleTokens = (val: string) => {
            const reMiddle = regexFromArr(replacers[type].middle);
            const getMiddle = val.match(reMiddle);

            if (getMiddle) {
                const splitter = '|||';

                val = val.replace(reMiddle, splitter);
                const valArr = val.split(splitter);

                return (
                    <>
                        {valArr[0]}
                        {createSpans(getMiddle)}
                        {valArr[valArr.length - 1]}
                    </>
                )
            } else return val;
        }

        const endTokens = (val: string) => {
            const reEnd = regexFromArr(replacers[type].end);
            const getEnd = val.match(reEnd);

            if (getEnd) return (
                <>
                    {middleTokens(val.replace(reEnd, ''))}
                    {createSpans(getEnd)}
                </>
            )
            else return middleTokens(val);
        }

        const startTokens = (val: string) => {
            const reStart = regexFromArr(replacers[type].start);
            const getStart = val.match(reStart);

            if (getStart) return (
                <>
                    {createSpans(getStart)}
                    {endTokens(val.replace(reStart, ''))}
                </>
            )
            else return endTokens(val);
        }

        // classes
        const setClassName = className ? ` ${className}` : '';
        const classes = `ui-pre ui-ease-pre ui-set-relative${setClassName}`;

        // title icons
        const titleIcons = {
            react: icon_code,
            js: icon_brackets,
            css: icon_brackets_curly,
        }

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

                <div className='ui-color-white-25 ui-p-15-b'>
                    <Icon src={titleIcons[type]} size='sm' className='ui-color-white' />
                    <span className='ui-m-5-l ui-inline-block'>{type}</span>
                </div>

                {codeLines.map((line: string, j: number) => {
                    if (line === '') { // empty lines
                        return <br key={`line_${j}`} />;

                    } else return ( // tokens
                        <div key={`line_${j}`} className='ui-pre-line'>
                            {replacers[type] ? startTokens(line) : line}
                        </div>
                    )
                })}
            </pre>
        )
    }