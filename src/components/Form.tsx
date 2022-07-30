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

    noease?: true;

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

    type?: 'text' | 'password' | 'date' | 'datetime-local' | 'month' | 'week' | 'email' | 'tel' | 'time',
    placeholder?: string,

    number?: true,
    required?: true,

    noease?: true;

    className?: string,
    style?: any,

}

const FormInput = function (

    { children, type, placeholder, number, required, noease, className, style }:FormInputProps) {

        // types
        const setType = type ? type : 'text';

        // classes
        const setClassName = className ? ' ' + className : '';
        const setEase = noease ? '' : ' ui-ease-form';

        const classes = 'ui-input' + setClassName + setEase;

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
                    <input type={setType} placeholder={placeholder} className={childrenClasses} />
                </div>
            </>
        );
    }

interface FormSelectProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const FormSelect = function (

    { children, className, style }:FormSelectProps) {

        // classes
        const setClassName = className ? ' ' + className : '';

        const classes = 'ui-select' + setClassName + ' ui-ease-form';

        return (
            <>
                <div className={classes} style={style}>
                    <Icon src={icon_angle_down}></Icon>
                    <select>
                        {children}
                    </select>
                </div>
            </>
        );
    }

export default Object.assign(Form, {
    Label: FormLabel,
    Input: FormInput,
    Select: FormSelect,
});