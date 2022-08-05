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

    number?: true,
    required?: true,

    noease?: true,

    className?: string,
    style?: any,

}

const FormInput = function (

    { children, onChange, type, placeholder, disabled, inline, number, required, noease, className, style }:FormInputProps) {

        // types
        const setType = type ? type : 'text';

        // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setEase = noease ? '' : ' ui-ease-form';
        const setInline = inline ? ' ui-form-inline' : '';

        const classes = 'ui-input' + setDisabled + setClassName + setInline + setEase;

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
                    <input type={setType} placeholder={placeholder} className={childrenClasses} disabled={disabled} onChange={onChange} />
                </div>
            </>
        );
    }

interface FormSelectProps {

    children?: React.ReactNode,

    onChange?: React.ReactEventHandler,

    disabled?: true,
    inline?: true,

    className?: string,
    style?: any,

}

const FormSelect = function (

    { children, onChange, disabled, inline, className, style }:FormSelectProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';
        const setInline = inline ? ' ui-form-inline' : '';

        const classes = 'ui-select' + setDisabled + setClassName + setInline + ' ui-ease-form';

        return (
            <>
                <div className={classes} style={style}>
                    <Icon src={icon_angle_down}></Icon>
                    <select onChange={onChange} disabled={disabled}>
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

    className?: string,
    style?: any,

}

const FormCheck = function (

    { label, onChange, id, checked, disabled, className, style }:FormCheckProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setLabelSpace = label ? ' ui-m-5-r' : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';

        const classes = 'ui-check' + setDisabled + setClassName + setLabelSpace + ' ui-ease-form';

        return (
            <>
                <label className="ui-label">
                    <span className={classes} style={style}>
                        <input id={id} type="checkbox" onChange={onChange} checked={checked} disabled={disabled} />
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

    className?: string,
    style?: any,

}

const FormSwitch = function (

    { label, onChange, id, checked, disabled, className, style }:FormSwitchProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const setLabelSpace = label ? ' ui-m-5-r' : '';
        const setDisabled = disabled ? ' ui-form-disabled' : '';

        const classes = 'ui-switch' + setDisabled + setClassName + setLabelSpace + ' ui-ease-form';

        return (
            <>
                <label className="ui-label">
                    <span className={classes} style={style}>
                        <input id={id} type="checkbox" onChange={onChange} checked={checked} disabled={disabled} />
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