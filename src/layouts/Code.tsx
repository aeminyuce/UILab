import * as React from 'react';
import { Fragment } from 'react';
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
        const reSpaces = new RegExp(`^(?!\\n|\\r)\\s{${indSize * indent}}`, 'gm'); // remove spaces by specified tab size except new lines
        const reLastSpace = new RegExp(/\s+$/g); // remove last space

        value = value.replace(reFirstSpace, '').replace(reSpaces, '').replace(reLastSpace, '');

        // split lines
        const codeLines = value.split('\n');

        // replacers
        const replacers = {
            react: {
                start: {
                    importAs: "import\\s\\*\\s+as",                                             // import * as
                    importCurly: "import\\s\\{",                                                // import {
                    import: "import",                                                           // import

                    curlyFromQuot: "\\}\\s+from\\s",                                            // } from '
                    curly: "\\s*\\}|\\}",                                                       // }
                    bracketSemicol: "\\s*\\)\\;|\\)\\;",                                        // );

                    expDefFunc: "export\\s+default\\s+function\\s\\(\\)\\s\{",                  // export default function () {
                    returnBracket: "\\s*return\\s\\(|return\\s\\(",                             // return (

                    compName: "\\s*\\<[^\\s]*|\\<[^\\s]*",                                      // <ComponentName

                    jsxComment: "\\s*\\{\\/\\*[^\\*]*\\*\\/}|\\{\\/\\*[^\\*]*\\*\\/}",          // {* comment *}
                    jsComment: "\\//[^\\//\\n]*",                                               // // comment
                },
                middle: {
                    aliasCompName: "\\'[^\\']*\\'",                                             // '@alias/ComponentName'
                    compNameFromQuot: "\\s+from\\s",                                            // ComponentName from '
                    curlyFromQuot: "\\s\\}\\s+from\\s",                                         // } from '
                    classNameStr: "\\'[^\\']*\\'",                                              // className='string'
                },

                end: {
                    closeTag: "\\/\\>",                                                         // />
                    semicol: ";",                                                               // ;
                },
            },
            js: {
                start: {},
                middle: {
                    quotStrQuot: "\\'[^\\']*\\'",                                               // 'string'
                    jsComment: "\\//[^\\//\\n]*",                                               // // comment
                },
                end: {},
            },
            css: {
                start: {},
                middle: {},
                end: {},
            }
        }

        // token helpers
        const reFromArr = (name: string, obj: {}) => {
            let re = '';
            Object.values(obj).forEach((item: string, i: number) => re += i === 0 ? item : `|${item}`);

            let rex = null;
            if (name === 'start') rex = new RegExp(`^(${re})`, 'g');
            if (name === 'middle') rex = new RegExp(re, 'g');
            if (name === 'end') rex = new RegExp(`(${re})$`, 'g');

            return rex;
        }

        // colors
        const colorHighlight = 'hsl(328, 100%, 80%)';
        const colorWhite = 'hsl(0, 0%, 100%)';
        const colorComment = 'hsla(0, 0%, 100%, 0.45)';

        const reFromStr = (str: string) => new RegExp(str, 'g');

        const createSpans = (token: string[], noTokenArr?: string[]) => {
            let setColor = colorHighlight;

            const spans = token.map((item: any, i: number) => {
                let s = null;
                let m = null;
                let e = null;

                if (type === 'react') { // react colors
                    s = replacers.react.start;
                    m = replacers.react.middle;

                    if (reFromStr(s.jsxComment).test(item)) setColor = colorComment;
                    if (reFromStr(s.jsComment).test(item)) setColor = colorComment;

                    if (reFromStr(m.aliasCompName).test(item)) setColor = colorWhite;
                    if (reFromStr(m.classNameStr).test(item)) setColor = colorWhite;
                }

                if (type === 'js') { // js colors
                    m = replacers.js.middle;

                    if (reFromStr(m.quotStrQuot).test(item)) setColor = colorWhite;
                    if (reFromStr(m.jsComment).test(item)) setColor = colorComment;
                }

                if (type === 'css') { // css colors
                }

                return (
                    <Fragment key={`token_${i}`}>
                        {noTokenArr && i === 0 && noTokenArr[i]}
                        <span style={{ color: setColor }}>
                            {item}
                        </span>
                        {noTokenArr && noTokenArr[i + 1]}
                    </Fragment>
                )
            });

            return spans;
        }

        // tokens
        const middleTokens = (val: string) => {
            const reMiddle = reFromArr('middle', replacers[type].middle);
            const getMiddle = val.match(reMiddle);

            if (getMiddle) {
                const splitter = '|||';

                val = val.replace(reMiddle, splitter);
                const valArr = val.split(splitter);

                return createSpans(getMiddle, valArr);
            } else return val;
        }

        const endTokens = (val: string) => {
            const reEnd = reFromArr('end', replacers[type].end);
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
            const reStart = reFromArr('start', replacers[type].start);
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
        const titles = {
            react: { name: 'React TSX', icon: icon_code },
            js: { name: 'Javascript', icon: icon_brackets },
            css: { name: 'CSS', icon: icon_brackets_curly },
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
                    <Icon src={titles[type].icon} size='sm' className='ui-color-white' />
                    <span className='ui-m-5-l ui-inline-block'>{titles[type].name}</span>
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