import * as React from 'react';
import { Link } from 'react-router-dom';

// assets
import '@less/modules/buttons';

interface ButtonProps {

    children?: React.ReactNode,

    as?: 'div' | 'span',

    onClick?: React.ReactEventHandler,
    onMouseDown?: React.ReactEventHandler,
    onMouseUp?: React.ReactEventHandler,

    value?: any,
    disabled?: boolean,

    title?: string,
    to?: string,
    state?: any,

    href?: string,
    target?: '_blank' | '_self' | '_parent' | '_top',

    active?: boolean,
    passive?: boolean,
    multi?: boolean,
    square?: boolean,
    ghost?: boolean,
    block?: boolean,

    myRef?: any,

    noease?: boolean,
    nostyle?: boolean,

    type?: 'submit' | 'button' | 'reset',
    size?: 'lg' | 'sm' | 'xs',
    fluid?: 'md' | 'sm' | 'xs',

    id?: any,
    form?: any,
    className?: string,
    data?: any,
    style?: any,

}

const Button = function (

    { children, as, onClick, onMouseDown, onMouseUp, value, disabled, title, to, state, href, target, active, passive, multi, square, ghost, block, myRef, noease, nostyle, type, size, fluid, id, form, className, style, data }:ButtonProps) {

        // classes
        const setActive = active ? ' ui-btn-active' : '';
        const setPassive = (disabled || passive) ? ' ui-btn-passive' : '';

        const setMulti = multi ? ' ui-btn-multi' : '';
        const setSquare = square ? ' ui-btn-square' : '';
        const setGhost = ghost ? ' ui-btn-ghost' : '';
        const setBlock = block ? ' ui-block' : '';

        const setEase = noease ? '' : ' ui-ease-btn';

        const setSize = size ? ' ui-btn-' + size : '';
        const setFluid = fluid ? ' ui-btn-' + fluid + '-fluid' : '';

        const setClassName = className ? ' ' + className : '';

        let classes = null;

        if (nostyle) {
            classes = 'ui-btn-no-style' + setClassName;

        } else {
            classes = 'ui-btn' + setSize + setFluid + setActive + setPassive + setMulti + setSquare + setGhost + setBlock + setClassName + setEase;
        }

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        if (as) return (
            <>
                {as === 'div' &&
                    <div ref={myRef} className={classes} {...setData} style={style} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                        {children}
                    </div>
                }
                {as === 'span' &&
                    <span ref={myRef} className={classes} {...setData} style={style} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                        {children}
                    </span>
                }
            </>
        );

        else return (
            <>
                {href &&
                    <a ref={myRef} href={href} id={id} target={target} title={title} className={classes} {...setData} style={style}
                        onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                            {children}
                    </a>
                }
                {to &&
                    <Link ref={myRef} to={to} id={id} state={state} title={title} className={classes} {...setData} style={style}
                        onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                            {children}
                    </Link>
                }
                {!href && !to &&
                    <button ref={myRef} id={id} form={form} type={type} value={value} disabled={disabled} title={title} className={classes} {...setData} style={style}
                        onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                            {children}
                    </button>
                }
            </>
        );
    }

interface ButtonWrapperProps {

    children?: React.ReactNode,
    as?: 'holder' | 'list',

    ease: '1st' | '2nd',
    largeButtons?: boolean,

    className?: string,
    data?: any,
    style?: any,

}

const ButtonWrapper = function (

    { children, as, ease, largeButtons, className, data, style }:ButtonWrapperProps) {

        // classes
        const setEase = ease ? 'ui-ease-' + ease + '-btn' : '';
        const setAs = as ? ' ui-btn-' + as : '';
        const setLargeButtons = largeButtons ? ' ui-form-lg' : '';

        const setClassName = className ? ' ' + className : '';

        let classes = setEase + setAs + setLargeButtons + setClassName;
        if (classes === '') { classes = null; }

        // data attributes
        let setData = [];

        for (const name in data) {

            const attr = 'data-ui-' + name;
            setData[attr] = data[name];

        }

        return (
            <div className={classes} {...setData} style={style}>
                {children}
            </div>
        );

    }

export default Object.assign(Button, {
    Wrapper: ButtonWrapper,
});