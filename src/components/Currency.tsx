import * as React from 'react';

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

    readOnly?: boolean,
    required?: boolean,

    maxlength: number,
    min: number,
    step?: number,

    myRef?: any,

    noease?: boolean,

    id?: any,
    className?: string,
    style?: any,

}

const CurrencyForm = function (

    { onChange, onInput, onBlur, name, tabIndex, value, defaultValue, placeholder, disabled, light, inline, readOnly, required, maxlength, min, step, myRef, noease, id, className, style }:CurrencyFormProps) {

         // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setlight = light ? ' ui-form-light' : '';
        const setEase = noease ? '' : ' ui-ease-form';

        let setInline = '';

        if (inline) {

            if (inline === 'always') setInline = ' ui-form-inline';
            if (inline === 'xs') setInline = ' ui-form-inline-xs';

        }

        const classes = 'ui-input' + setDisabled + setlight + setClassName + setInline + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        let childrenClasses = setRequired;
        childrenClasses = childrenClasses.replace(/^\s+/g, ''); // remove first spaces

        return (
            <div className={classes} style={style}>
                <input id={id} ref={myRef} type="text" name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} placeholder={placeholder}
                    className={childrenClasses} disabled={disabled} readOnly={readOnly} autoComplete="off"
                    maxLength={maxlength} min={min} step={step}
                    onChange={onChange} onInput={onInput} onBlur={onBlur} />
            </div>
        );
    }

export default Object.assign(Currency, {
    Spinner: CurrencySpinner,
    Form: CurrencyForm,
});