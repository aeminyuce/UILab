import * as React from 'react';
import { useId, useEffect } from 'react';
import { ui } from '@ui';
import Button from '@components/Button';
import Icon from '@components/Icon';

// assets
const icon_angle_down = 'M132 202h-.024a11 11 0 0 1-7.788-3.255l-117-118a11 11 0 0 1 15.623-15.49L132.033 175.41 242.222 65.222a11 11 0 0 1 15.556 15.556l-118 118A11 11 0 0 1 132 202Z';
const icon_plus = 'M121.5 252V142.5H12a11 11 0 0 1-11-11 11 11 0 0 1 11-11h109.5V12a11 11 0 0 1 11-11 11 11 0 0 1 11 11v108.5H252a11 11 0 0 1 11 11 11 11 0 0 1-11 11H143.5V252a11 11 0 0 1-11 11 11 11 0 0 1-11-11Z';

import '@less/modules/autocomplete';
import '@less/modules/textarea-counter';
import '@less/modules/forms';

import '@js/modules/autocomplete';
import '@js/modules/required-forms';
import '@js/modules/textarea-counter';
import '@js/modules/forms';

const Form = function () {}

interface FormLabelProps {

    children?: React.ReactNode,

    noease?: boolean,

    className?: string,
    style?: any,

}

const FormLabel = function (

    { children, noease, className, style }:FormLabelProps) {

        // classes
        const setClassName = className ? ' ' + className : '';

        const setEase = noease ? '' : ' ui-ease-form';
        const classes = 'ui-form-label' + setClassName + setEase;

        return (
            <label className={classes} style={style}>
                {children}
            </label>
        );
    }

interface FormInputProps {

    children?: React.ReactNode,

    onChange?: React.ReactEventHandler,
    onInput?: React.ReactEventHandler,
    onBlur?: React.ReactEventHandler,

    type?: 'text' | 'password' | 'date' | 'datetime-local' | 'month' | 'week' | 'email' | 'tel' | 'time',
    name?: string,
    tabIndex?: number,
    value?: any,
    defaultValue?: any,
    placeholder?: string,
    disabled?: boolean,
    light?: boolean,
    inline?: 'always' | 'xs',
    autoComplete?: 'on' | 'off' | 'username' | 'current-password' | string,
    autoCompleteData?: string[],

    icons?: 'r' | 'l' | 'all',

    multiple?: boolean,
    readOnly?: boolean,
    number?: boolean,
    numberFloat?: boolean,
    word?: boolean,
    required?: boolean,
    hasClear?: boolean,

    minlength?: number,
    maxlength?: number,
    min?: number,
    max?: number,

    myRef?: any,

    noease?: boolean,

    id?: any,
    className?: string,
    style?: any,

}

const FormInput = function (

    { children, onChange, onInput, onBlur, type, name, tabIndex, value, defaultValue, placeholder, disabled, light, inline, autoComplete, autoCompleteData, icons, multiple, readOnly, word, number, numberFloat, required, hasClear, minlength, maxlength, min, max, myRef, noease, id, className, style }:FormInputProps) {

        const keyId = useId();

        useEffect(() => {

            // start
            if (autoCompleteData) ui.autocomplete.Start();

        }, []); // Runs only first render

        // types
        const setType = type ? type : 'text';

        // classes
        const setAutoCompleteData = autoCompleteData ? ' ui-autocomplete' : '';
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

        const classes = 'ui-input' + setAutoCompleteData + setIcons + setDisabled + setHasClear + setlight + setClassName + setInline + setEase;

        // children classes
        const setNumber = number ? ' ui-number' : '';
        const setNumberFloat = numberFloat ? ' ui-number-float' : '';
        const setWord = word ? ' ui-word' : '';
        const setRequired = required ? ' ui-required' : '';

        let childrenClasses = setNumber + setNumberFloat + setWord + setRequired;
        childrenClasses = childrenClasses.replace(/^\s+/g, ''); // remove first spaces

        if (childrenClasses === '') childrenClasses = null;

        return (
            <div className={classes} style={style}>
                {children}
                <input id={id} ref={myRef} type={setType} name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} placeholder={placeholder}
                    autoComplete={autoCompleteData ? 'off' : autoComplete} className={childrenClasses} disabled={disabled} multiple={multiple} readOnly={readOnly}
                    minLength={minlength} maxLength={maxlength} min={min} max={max}
                    onChange={onChange} onInput={onInput} onBlur={onBlur}
                />
                <>
                    {autoCompleteData &&
                        <datalist>
                            {
                                autoCompleteData.map((name: string, i: number) => {
                                    return <option key={keyId + i}>{name}</option>
                                })
                            }
                        </datalist>
                    }
                </>
            </div>
        );
    }

interface FormFileProps {

    onChange?: React.ReactEventHandler,
    onInput?: React.ReactEventHandler,
    onBlur?: React.ReactEventHandler,

    as: 'input' | 'button',

    btnName?: string,
    placeholder?: string,

    name?: string,
    tabIndex?: number,
    value?: any,
    defaultValue?: any,
    disabled?: boolean,
    light?: boolean,
    inline?: 'always' | 'xs',

    multiple?: boolean,
    readOnly?: boolean,
    required?: boolean,

    myRef?: any,

    noease?: boolean,

    id?: any,
    className?: string,
    btnClassName?: string,
    style?: any,

}

const FormFile = function (

    { onChange, onInput, onBlur, as, btnName, placeholder, name, tabIndex, value, defaultValue, disabled, light, inline, multiple, readOnly, required, myRef, noease, id, className, btnClassName, style }:FormFileProps) {

        // names
        const setBtnName = btnName ? btnName : 'Dosya Seç';
        const setPlaceholder = placeholder ? placeholder : 'Seçilen dosya yok';

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

        const classes = 'ui-file' + setDisabled + setlight + setClassName + setInline + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        let childrenClasses = setRequired;
        childrenClasses = childrenClasses.replace(/^\s+/g, ''); // remove first spaces

        if (childrenClasses === '') childrenClasses = null;

        // btn classes
        let btnClasses = btnClassName ? btnClassName : null;

        if (childrenClasses === '') childrenClasses = null;

        return (
            <div className={classes} style={style}>
                <input id={id} ref={myRef} type="file" name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} placeholder={setPlaceholder}
                    className={childrenClasses} disabled={disabled} multiple={multiple} readOnly={readOnly}
                    onChange={onChange} onInput={onInput} onBlur={onBlur}
                />
                {as === 'input' &&
                    <>
                        <i>{setPlaceholder}</i>
                        <Button as="span" className={btnClasses}>
                            {setBtnName}
                        </Button>
                    </>
                }
                {as === 'button' &&
                    <Button square as="span" className={btnClasses}>
                        <Icon path src={icon_plus} />
                    </Button>
                }
            </div>
        );
    }

interface FormTextareaProps {

    onChange?: React.ReactEventHandler,
    onInput?: React.ReactEventHandler,

    rows?: number,
    cols?: number,

    name?: string,
    tabIndex?: number,
    value?: any,
    placeholder?: string,
    disabled?: boolean,
    light?: boolean,
    inline?: 'always' | 'xs',
    readOnly?: boolean,
    required?: boolean,

    minlength?: number,
    maxlength?: number,

    myRef?: any,

    toggle?: boolean,
    noease?: boolean,
    counter?: number,

    id?: any,
    className?: string,
    style?: any,

}

const FormTextarea = function (

    { onChange, onInput, rows, cols, name, tabIndex, value, placeholder, disabled, light, inline, readOnly, required, minlength, maxlength, myRef, toggle, noease, counter, id, className, style }:FormTextareaProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setlight = light ? ' ui-form-light' : '';
        const setToggle = toggle ? ' ui-textarea-toggle' : '';
        const setEase = noease ? '' : ' ui-ease-form';

        let setInline = '';

        if (inline) {

            if (inline === 'always') setInline = ' ui-form-inline';
            if (inline === 'xs') setInline = ' ui-form-inline-xs';

        }

        const classes = 'ui-textarea' + setDisabled + setlight + setClassName + setInline + setToggle + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        let childrenClasses = setRequired;
        childrenClasses = childrenClasses.replace(/^\s+/g, ''); // remove first spaces

        if (childrenClasses === '') childrenClasses = null;

        return (
            <div className={classes} style={style} data-ui-counter={counter}>
                <textarea id={id} ref={myRef} name={name} tabIndex={tabIndex} placeholder={placeholder} className={childrenClasses} disabled={disabled}
                    rows={rows} cols={cols} readOnly={readOnly} value={value}
                    minLength={minlength} maxLength={maxlength}
                    onChange={onChange} onInput={onInput}>
                </textarea>
            </div>
        );
    }

interface FormSelectProps {

    children?: React.ReactNode,

    onChange?: React.ReactEventHandler,
    onInput?: React.ReactEventHandler,

    title?: string,
    name?: string,
    tabIndex?: number,
    value?: any,
    defaultValue?: any,

    disabled?: boolean,
    inline?: 'always' | 'xs',
    required?: boolean,
    light?: boolean,

    myRef?: any,

    noease?: boolean,

    id?: any,
    className?: string,
    style?: any,

}

const FormSelect = function (

    { children, onChange, onInput, title, name, tabIndex, value, defaultValue, disabled, light, inline, required, myRef, noease, id, className, style }:FormSelectProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setLight = light ? ' ui-form-light' : '';
        const setEase = noease ? '' : ' ui-ease-form';

        let setInline = '';

        if (inline) {

            if (inline === 'always') setInline = ' ui-form-inline';
            if (inline === 'xs') setInline = ' ui-form-inline-xs';

        }

        const classes = 'ui-select' + setDisabled + setLight + setClassName + setInline + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        const childrenClasses = setRequired;

        return (
            <div className={classes} style={style}>
                <Icon path src={icon_angle_down} />
                <select id={id} ref={myRef} title={title} name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} className={childrenClasses} disabled={disabled}
                    onChange={onChange} onInput={onInput}>
                        {children}
                </select>
            </div>
        );
    }

interface FormCheckProps {

    type?: 'check' | 'radio' | 'switch',
    label?: any,

    onChange?: React.ReactEventHandler,

    id?: any,
    name?: string,
    tabIndex?: number,
    value?: string,
    checked?: boolean,
    disabled?: boolean,
    indeterminate?: boolean,
    light?: boolean,

    required?: boolean,

    noease?: boolean,

    className?: string,
    style?: any,
    stateStyle?: any,

}

const FormCheck = function (

    { type, label, onChange, id, name, tabIndex, value, checked, disabled, indeterminate, light, required, noease, className, style, stateStyle }:FormCheckProps) {

        // types
        const setType = (type === 'radio') ? 'radio' : 'checkbox';

        // classes
        const setClassName = className ? ' ' + className : '';
        const setLabelSpace = label ? ' ui-m-5-r' : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setIndeterminate = indeterminate ? ' ui-indeterminate' : '';
        const setLight = light ? ' ui-form-light' : '';
        const setEase = noease ? '' : ' ui-ease-form';

        let classes = null;

        if (type === 'check') classes = 'ui-check';
        else if (type === 'radio') classes = 'ui-radio';
        else if (type === 'switch') classes = 'ui-switch';

        classes += setDisabled + setIndeterminate + setLight + setClassName + setLabelSpace + setEase;
        if (classes === '') classes = null;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        let childrenClasses = setRequired;
        childrenClasses = childrenClasses.replace(/^\s+/g, ''); // remove first spaces

        if (childrenClasses === '') childrenClasses = null;

        // state classes
        const setStateTheme = (type === 'switch') ? ' ui-fill-dark-100' : '';
        const stateClasses = 'ui-form-state' + setStateTheme;

        return (
            <label className="ui-label">
                <span className={classes} style={style}>
                    <input id={id} name={name} tabIndex={tabIndex} value={value} type={setType} checked={checked} className={childrenClasses} disabled={disabled} onChange={onChange} />
                    <i className={stateClasses} style={stateStyle}></i>
                </span>
                {label}
            </label>
        );
    }

interface FormRequiredMessageProps {

    children?: React.ReactNode,

    myRef?: any,

    className?: string,
    style?: any,

}

const FormRequiredMessage = function (

    { children, myRef, className, style }:FormRequiredMessageProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-required-msg' + setClassName;

        // styles
        let styles = {};

        styles = {['maxHeight']: '42px', ...style};
        styles = {['overflow']: 'hidden', ...styles};

        return (
            <p ref={myRef} className={classes} style={styles}>
                {children}
            </p>
        );
    }

interface FormHintProps {

    children?: React.ReactNode,

    myRef?: any,
    theme?: 'warning' | 'error',

    className?: string,
    style?: any,

}

const FormHint = function (

    { children, myRef, theme, className, style }:FormHintProps) {

        // classes
        const setType = theme ? ' ui-form-' + theme : '';
        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-form-hint' + setType + setClassName;

        return (
            <p ref={myRef} className={classes} style={style}>
                {children}
            </p>
        );
    }

export default Object.assign(Form, {
    Label: FormLabel,
    Input: FormInput,
    File: FormFile,
    Textarea: FormTextarea,
    Select: FormSelect,
    Check: FormCheck,
    RequiredMessage: FormRequiredMessage,
    Hint: FormHint,
});