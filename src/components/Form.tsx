import * as React from 'react';
import Icon from '@components/Icon';

// assets
const icon_angle_down = require("@icon/general/angle-down.svg") as string;

import "@less/modules/forms";

import "@js/modules/required-forms";
import "@js/modules/forms";

let Form = function () {}

interface FormLabelProps {

    children?: React.ReactNode,

    noease?: true,

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

    type?: 'text' | 'password' | 'date' | 'datetime-local' | 'month' | 'week' | 'email' | 'tel' | 'time',
    placeholder?: string,
    disabled?: true,
    inline?: true,

    icons?: 'r' | 'l' | 'all',

    number?: true,
    required?: true,

    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number,

    noease?: true,

    className?: string,
    style?: any,

}

const FormInput = function (

    { children, onChange, type, placeholder, disabled, inline, icons, number, required, minLength, maxLength, min, max, noease, className, style }:FormInputProps) {

        // types
        const setType = type ? type : 'text';

        // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
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

        const classes = 'ui-input' + setIcons + setDisabled + setClassName + setInline + setEase;

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
                    <input type={setType} placeholder={placeholder} className={childrenClasses} disabled={disabled}
                        minLength={minLength} maxLength={maxLength} min={min} max={max}
                        onChange={onChange}
                    />
                </div>
            </>
        );
    }

interface FormSelectProps {

    children?: React.ReactNode,

    onChange?: React.ReactEventHandler,
    disabled?: true,
    inline?: true,
    required?: true,

    myRef?: any,
    defaultValue?: any,

    noease?: true,

    className?: string,
    style?: any,

}

const FormSelect = function (

    { children, onChange, disabled, inline, required, myRef, defaultValue, noease, className, style }:FormSelectProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setEase = noease ? '' : ' ui-ease-form';
        const setInline = inline ? ' ui-form-inline' : '';

        const classes = 'ui-select' + setDisabled + setClassName + setInline + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        const childrenClasses = setRequired;

        return (
            <>
                <div className={classes} style={style}>
                    <Icon src={icon_angle_down}></Icon>
                    <select ref={myRef} defaultValue={defaultValue} onChange={onChange} className={childrenClasses} disabled={disabled}>
                        {children}
                    </select>
                </div>
            </>
        );
    }

interface FormCheckProps {

    label?: string,

    onChange?: React.ReactEventHandler,

    id?: any,
    checked?: boolean,
    disabled?: true,

    required?: true,

    noease?: true,

    className?: string,
    style?: any,

}

const FormCheck = function (

    { label, onChange, id, checked, disabled, required, noease, className, style }:FormCheckProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setLabelSpace = label ? ' ui-m-5-r' : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setEase = noease ? '' : ' ui-ease-form';

        const classes = 'ui-check' + setDisabled + setClassName + setLabelSpace + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        const childrenClasses = setRequired;

        return (
            <>
                <label className="ui-label">
                    <span className={classes} style={style}>
                        <input id={id} type="checkbox" onChange={onChange} checked={checked} className={childrenClasses} disabled={disabled} />
                        <i className="ui-form-state"></i>
                    </span>
                    {label}
                </label>
            </>
        );
    }

interface FormSwitchProps {

    label?: string,

    onChange?: React.ReactEventHandler,

    id?: any,
    checked?: boolean,
    disabled?: true,

    required?: true,

    noease?: true,

    className?: string,
    style?: any,

}

const FormSwitch = function (

    { label, onChange, id, checked, disabled, required, noease, className, style }:FormSwitchProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setLabelSpace = label ? ' ui-m-5-r' : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setEase = noease ? '' : ' ui-ease-form';

        const classes = 'ui-switch' + setDisabled + setClassName + setLabelSpace + setEase;

        // children classes
        const setRequired = required ? ' ui-required' : '';

        const childrenClasses = setRequired;

        return (
            <>
                <label className="ui-label">
                    <span className={classes} style={style}>
                        <input id={id} type="checkbox" onChange={onChange} checked={checked} className={childrenClasses} disabled={disabled} />
                        <i className="ui-form-state ui-fill-dark-100"></i>
                    </span>
                    {label}
                </label>
            </>
        );
    }

export default Object.assign(Form, {
    Label: FormLabel,
    Input: FormInput,
    Select: FormSelect,
    Check: FormCheck,
    Switch: FormSwitch,
});