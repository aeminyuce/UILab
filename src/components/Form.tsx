import * as React from 'react';
import { ui } from '@ui';
import Alerts from '@components/Alerts';
import Icon from '@components/Icon';

// assets
const icon_angle_down = require("@icon/angle-down.svg") as string;

import '@less/modules/forms';

import '@js/modules/required-forms';
import '@js/modules/forms';

// alerts
let alertsTimer = null;

ui.on(document, ui.requiredForms.eventShowErr, function () {

    clearTimeout(alertsTimer);
    alertsTimer = setTimeout(() => {

        Alerts.Message({
            msg: 'Zorunlu alanları giriniz.',
            theme: 'danger',
        });

    }, ui.globals.easeSlow);

});

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
    onKeyPress?: React.ReactEventHandler,

    type?: 'text' | 'password' | 'date' | 'datetime-local' | 'month' | 'week' | 'email' | 'tel' | 'time',
    name?: string,
    value?: any,
    defaultValue?: any,
    placeholder?: string,
    disabled?: boolean,
    light?: boolean,
    inline?: 'always' | 'xs',
    autoComplete?: 'on' | 'off' | 'username' | 'current-password' | string,

    icons?: 'r' | 'l' | 'all',

    multiple?: boolean,
    readOnly?: boolean,
    number?: boolean,
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

    { children, onChange, onKeyPress, type, name, value, defaultValue, placeholder, disabled, light, inline, autoComplete, icons, multiple, readOnly, number, required, hasClear, minlength, maxlength, min, max, myRef, noease, id, className, style }:FormInputProps) {

        // types
        const setType = type ? type : 'text';

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
        const setNumber = number ? ' ui-number' : '';
        const setRequired = required ? ' ui-required' : '';

        let childrenClasses = setNumber + setRequired;
        childrenClasses = childrenClasses.replace(/^\s+/g, ''); // remove first spaces

        return (
            <div className={classes} style={style}>
                {children}
                <input id={id} ref={myRef} type={setType} name={name} value={value} defaultValue={defaultValue} placeholder={placeholder}
                    autoComplete={autoComplete} className={childrenClasses} disabled={disabled} multiple={multiple} readOnly={readOnly}
                    minLength={minlength} maxLength={maxlength} min={min} max={max}
                    onChange={onChange} onKeyPress={onKeyPress}/>
            </div>
        );
    }

interface FormTextareaProps {

    onChange?: React.ReactEventHandler,
    rows?: number,
    cols?: number,

    name?: string,
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

    { onChange, rows, cols, name, value, placeholder, disabled, light, inline, readOnly, required, minlength, maxlength, myRef, toggle, noease, counter, id, className, style }:FormTextareaProps) {

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

        return (
            <div className={classes} style={style} data-ui-counter={counter}>
                <textarea id={id} ref={myRef} name={name} placeholder={placeholder} className={childrenClasses} disabled={disabled}
                    rows={rows} cols={cols} readOnly={readOnly} value={value}
                    minLength={minlength} maxLength={maxlength}
                    onChange={onChange}>
                </textarea>
            </div>
        );
    }

interface FormSelectProps {

    children?: React.ReactNode,

    onChange?: React.ReactEventHandler,

    name?: string,
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

    { children, onChange, name, value, defaultValue, disabled, light, inline, required, myRef, noease, id, className, style }:FormSelectProps) {

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
                <Icon src={icon_angle_down} />
                <select id={id} ref={myRef} name={name} value={value} defaultValue={defaultValue} onChange={onChange} className={childrenClasses} disabled={disabled}>
                    {children}
                </select>
            </div>
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
            <label className="ui-label">
                <span className={classes} style={style}>
                    <input id={id} name={name} value={value} type={setType} onChange={onChange} checked={checked} className={childrenClasses} disabled={disabled} />
                    <i className={stateClasses}></i>
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
    Textarea: FormTextarea,
    Select: FormSelect,
    Check: FormCheck,
    RequiredMessage: FormRequiredMessage,
    Hint: FormHint,
});