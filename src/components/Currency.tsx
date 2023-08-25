import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import '@js/modules/currency-spinner';

const Currency = function () {}

interface CurrencySpinnerProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const CurrencySpinner = function (

    { children, className, style }:CurrencySpinnerProps) {

        useEffect(() => {

            // init
            ui.currencySpinner.Init();

        }); // Runs every render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-currency-spinner ui-form-holder' + setClassName;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

interface CurrencyFormProps {

    children?: React.ReactNode,

    onChange?: React.ReactEventHandler,
    onInput?: React.ReactEventHandler,
    onBlur?: React.ReactEventHandler,

    name?: string,
    tabIndex?: number,
    value?: any,
    defaultValue?: any,
    placeholder?: string,
    disabled?: boolean,
    light?: boolean,
    inline?: 'always' | 'xs',
    autoComplete?: 'on' | 'off' | string,

    icons?: 'r' | 'l' | 'all',

    readOnly?: boolean,
    required?: boolean,
    hasClear?: boolean,

    maxlength: number,
    min: number,
    step?: number,
    decimal?: boolean,

    myRef?: any,

    noease?: boolean,

    id?: any,
    className?: string,
    style?: any,

}

const CurrencyForm = function (

    { children, onChange, onInput, onBlur, name, tabIndex, value, defaultValue, placeholder, disabled, light, inline, autoComplete, icons, readOnly, required, hasClear, maxlength, min, step, decimal, myRef, noease, id, className, style }:CurrencyFormProps) {

         // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setHasClear = hasClear ? ' ui-form-has-clear' : '';
        const setlight = light ? ' ui-form-light' : '';
        const setEase = noease ? '' : ' ui-ease-form';

        let setInline = '';

        if (inline) {

            if (inline === 'always') setInline = ' ui-form-inline';
            if (inline === 'xs') setInline = ' ui-form-inline-xs';

        }

        let setIcons = '';

        if (icons === 'r') {
            setIcons = ' ui-form-icon';

        } else if (icons === 'l') {
            setIcons = ' ui-form-icon-l';

        } else if (icons === 'all') {
            setIcons = ' ui-form-icon-all';
        }

        const classes = 'ui-input' + setIcons + setDisabled + setHasClear + setlight + setClassName + setInline + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        let childrenClasses = setRequired;
        childrenClasses = childrenClasses.replace(/^\s+/g, ''); // remove first spaces

        if (childrenClasses === '') childrenClasses = null;

        return (
            <div className={classes} style={style}>
                {children}
                <input id={id} ref={myRef} type="text" name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} placeholder={placeholder}
                    className={childrenClasses} disabled={disabled} readOnly={readOnly} autoComplete={autoComplete}
                    maxLength={maxlength} min={min} step={step} data-ui-decimal={decimal}
                    onChange={onChange} onInput={onInput} onBlur={onBlur} />
            </div>
        );
    }

export default Object.assign(Currency, {
    Spinner: CurrencySpinner,
    Form: CurrencyForm,
});