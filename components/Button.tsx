import * as React from 'react';
import { Link } from 'react-router-dom';

// imports
import { ButtonProps, ButtonWrapperProps } from './_Models';

// assets
import '../less/modules/buttons';

const Button = function (

    { children, as, onClick, onMouseDown, onMouseUp, value, disabled, title, to, state, href, target, active, passive, multi, square, ghost, block, myRef, noease, nostyle, type, size, rel, fluid, id, form, className, style, data }:ButtonProps) {

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

        // attributes
        const setType = type ? type : 'button';

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
                    <a ref={myRef} href={href} id={id} target={target} title={title} className={classes} {...setData} style={style} rel={rel}
                        onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                            {children}
                    </a>
                }
                {to &&
                    <Link ref={myRef} to={to} id={id} state={state} title={title} className={classes} {...setData} style={style} rel={rel}
                        onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                            {children}
                    </Link>
                }
                {!href && !to &&
                    <button ref={myRef} id={id} form={form} type={setType} value={value} disabled={disabled} title={title} className={classes} {...setData} style={style}
                        onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                            {children}
                    </button>
                }
            </>
        );
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