import * as React from 'react';
import Icon from '@components/Icon';

// assets
const icon_angle_down = require("@icon/angle-down.svg") as string;

import "@less/modules/forms";

import "@js/modules/required-forms";
import "@js/modules/forms";

let Form = function () {}

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
            <>
                <label className={classes} style={style}>
                    {children}
                </label>
            </>
        );
    }

interface FormInputProps {

    children?: React.ReactNode,

    onChange?: React.ReactEventHandler,
    onKeyPress?: React.ReactEventHandler,

    type?: 'text' | 'password' | 'date' | 'datetime-local' | 'month' | 'week' | 'email' | 'tel' | 'time',
    name?: string,
    value?: any,
    placeholder?: string,
    disabled?: boolean,
    light?: boolean,
    inline?: boolean,
    autoComplete?: 'on' | 'off' | 'username' | 'new-password',

    icons?: 'r' | 'l' | 'all',

    number?: boolean,
    required?: boolean,

    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number,

    myRef?: any,

    noease?: boolean,

    className?: string,
    style?: any,

}

const FormInput = function (

    { children, onChange, onKeyPress, type, name, value, placeholder, disabled, light, inline, autoComplete, icons, number, required, minLength, maxLength, min, max, myRef, noease, className, style }:FormInputProps) {

        // types
        const setType = type ? type : 'text';

        // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setlight = light ? ' ui-form-light' : '';
        const setEase = noease ? '' : ' ui-ease-form';
        const setInline = inline ? ' ui-form-inline' : '';

        let setIcons: string = '';

        if (icons === 'r') {
            setIcons = ' ui-form-icon';

        } else if (icons === 'l') {
            setIcons = ' ui-form-icon-l';

        } else if (icons === 'all') {
            setIcons = ' ui-form-icon-all';
        }

        const classes = 'ui-input' + setIcons + setDisabled + setlight + setClassName + setInline + setEase;

        // children classes
        const setNumber = number ? 'ui-number' : '';

        let setRequired: string = '';

        if (required) {
            setRequired = number ? ' ui-required' : 'ui-required';
        }

        const childrenClasses = setNumber + setRequired;

        return (
            <>
                <div className={classes} style={style}>
                    {children}
                    <input ref={myRef} type={setType} name={name} value={value} placeholder={placeholder}
                        autoComplete={autoComplete} className={childrenClasses} disabled={disabled}
                        minLength={minLength} maxLength={maxLength} min={min} max={max}
                        onChange={onChange} onKeyPress={onKeyPress}/>
                </div>
            </>
        );
    }

interface FormSelectProps {

    children?: React.ReactNode,

    onChange?: React.ReactEventHandler,

    name?: string,
    value?: any,

    disabled?: boolean,
    inline?: boolean,
    required?: boolean,
    light?: boolean,

    myRef?: any,

    noease?: boolean,

    className?: string,
    style?: any,

}

const FormSelect = function (

    { children, onChange, name, value, disabled, light, inline, required, myRef, noease, className, style }:FormSelectProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setLight = light ? ' ui-form-light' : '';
        const setEase = noease ? '' : ' ui-ease-form';
        const setInline = inline ? ' ui-form-inline' : '';

        const classes = 'ui-select' + setDisabled + setLight + setClassName + setInline + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        const childrenClasses = setRequired;

        return (
            <>
                <div className={classes} style={style}>
                    <Icon src={icon_angle_down} />
                    <select ref={myRef} name={name} value={value} onChange={onChange} className={childrenClasses} disabled={disabled}>
                        {children}
                    </select>
                </div>
            </>
        );
    }

interface FormCheckProps {

    type?: 'radio' | 'switch',
    label?: any,

    onChange?: React.ReactEventHandler,

    id?: any,
    name?: string,
    value?: string,
    checked?: boolean,
    disabled?: boolean,
    indeterminate?: boolean,
    light?: boolean,

    required?: boolean,

    noease?: boolean,

    className?: string,
    style?: any,

}

const FormCheck = function (

    { type, label, onChange, id, name, value, checked, disabled, indeterminate, light, required, noease, className, style }:FormCheckProps) {

        // types
        const setType = type === 'radio' ? 'radio' : 'checkbox';

        // classes
        const setClassName = className ? ' ' + className : '';
        const setLabelSpace = label ? ' ui-m-5-r' : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setIndeterminate = indeterminate ? ' ui-indeterminate' : '';
        const setLight = light ? ' ui-form-light' : '';
        const setEase = noease ? '' : ' ui-ease-form';

        let classes = 'ui-check';

        if (type === 'radio') {
            classes = 'ui-radio';

        } else if (type === 'switch') {
            classes = 'ui-switch';
        }

        classes += setDisabled + setIndeterminate + setLight + setClassName + setLabelSpace + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';
        const childrenClasses = setRequired;

        // state classes
        const setStateTheme = type === 'switch' ? ' ui-fill-dark-100' : '';
        const stateClasses = 'ui-form-state' + setStateTheme;

        return (
            <>
                <label className="ui-label">
                    <span className={classes} style={style}>
                        <input id={id} name={name} value={value} type={setType} onChange={onChange} checked={checked} className={childrenClasses} disabled={disabled} />
                        <i className={stateClasses}></i>
                    </span>
                    {label}
                </label>
            </>
        );
    }

interface FormRequiredMessageProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const FormRequiredMessage = function (

    { children, className, style }:FormRequiredMessageProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-required-msg' + setClassName;

        return (
            <>
                <p className={classes} style={style}>
                    {children}
                </p>
            </>
        );
    }
export default Object.assign(Form, {
    Label: FormLabel,
    Input: FormInput,
    Select: FormSelect,
    Check: FormCheck,
    RequiredMessage: FormRequiredMessage,
});