import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// utils
import Button from './Button';
import SvgIcon from './SvgIcon';
import { FormLabelProps, FormInputProps, FormFileProps, FormTextareaProps, FormSelectProps, FormCheckProps, FormRequiredMessageProps, FormHintProps } from './utils/Models';

// utils
import { IconAngleDown, IconPlus } from './utils/Assets';

// assets
import '../less/modules/autocomplete';
import '../less/modules/textarea-counter';
import '../less/modules/forms';

import '../js/modules/autocomplete';
import '../js/modules/required-forms';
import '../js/modules/textarea-counter';
import '../js/modules/forms';

const Form = function () {}

const FormLabel = function (props:FormLabelProps) {

    const { children, noease, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';

    const setEase = noease ? '' : ' ui-ease-form';
    const classes = `ui-form-label${setClassName}${setEase}`;

    return (
        <label className={classes} style={style}>
            {children}
        </label>
    );

}

const FormInput = function (props:FormInputProps) {

    const { children, onChange, onInput, onBlur, type, name, tabIndex, value, defaultValue, placeholder, disabled, light, inline, autoComplete, autoCompleteData, icons, multiple, readOnly, word, number, numberFloat, required, hasClear, minlength, maxlength, min, max, myRef, noease, id, className, style } = props;

    useEffect(() => {

        // start
        if (autoCompleteData) ui.autocomplete.Start();

    }, []);

    // types
    const setType = type ? type : 'text';

    // classes
    const setAutoCompleteData = autoCompleteData ? ' ui-autocomplete' : '';
    const setClassName = className ? ` ${className}` : '';
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

    const classes = `ui-input${setAutoCompleteData}${setIcons}${setDisabled}${setHasClear}${setlight}${setClassName}${setInline}${setEase}`;

    // children classes
    const setNumber = number ? ' ui-number' : '';
    const setNumberFloat = numberFloat ? ' ui-number-float' : '';
    const setWord = word ? ' ui-word' : '';
    const setRequired = required ? ' ui-required' : '';

    let childrenClasses: any = setNumber + setNumberFloat + setWord + setRequired;
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
                    {autoCompleteData.map((name: string) => {
                        return <option key={name}>{name}</option>
                    })}
                </datalist>
            }
            </>
        </div>
    );

}

const FormFile = function (props:FormFileProps) {

    const { onChange, onInput, onBlur, as, btnName, placeholder, name, tabIndex, value, defaultValue, disabled, light, inline, multiple, readOnly, required, myRef, noease, id, className, btnClassName, style } = props;

    // names
    const setBtnName = btnName ? btnName : 'Dosya Seç';
    const setPlaceholder = placeholder ? placeholder : 'Seçilen dosya yok';

    // classes
    const setClassName = className ? ` ${className}` : '';
    const setDisabled = disabled ? ' ui-form-disabled' : '';
    const setlight = light ? ' ui-form-light' : '';
    const setEase = noease ? '' : ' ui-ease-form';

    let setInline = '';

    if (inline) {

        if (inline === 'always') setInline = ' ui-form-inline';
        if (inline === 'xs') setInline = ' ui-form-inline-xs';

    }

    const classes = `ui-file${setDisabled}${setlight}${setClassName}${setInline}${setEase}`;

    // children classes
    const setRequired = required ? ' ui-required' : '';

    let childrenClasses: any = setRequired;
    childrenClasses = childrenClasses.replace(/^\s+/g, ''); // remove first spaces

    if (childrenClasses === '') childrenClasses = null;

    // btn classes
    let btnClasses: any = btnClassName ? btnClassName : null;

    if (btnClasses === '') btnClasses = null;

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
                    <SvgIcon as='path' src={IconPlus} />
                </Button>
            }
        </div>
    );

}

const FormTextarea = function (props:FormTextareaProps) {

    const { onChange, onInput, rows, cols, name, tabIndex, value, placeholder, disabled, light, inline, readOnly, required, minlength, maxlength, myRef, toggle, noease, counter, id, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const setDisabled = disabled ? ' ui-form-disabled' : '';
    const setlight = light ? ' ui-form-light' : '';
    const setToggle = toggle ? ' ui-textarea-toggle' : '';
    const setEase = noease ? '' : ' ui-ease-form';

    let setInline = '';

    if (inline) {

        if (inline === 'always') setInline = ' ui-form-inline';
        if (inline === 'xs') setInline = ' ui-form-inline-xs';

    }

    const classes = `ui-textarea${setDisabled}${setlight}${setClassName}${setInline}${setToggle}${setEase}`;

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

const FormSelect = function (props:FormSelectProps) {

    const { children, onChange, onInput, title, name, tabIndex, value, defaultValue, disabled, light, inline, required, myRef, noease, id, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const setDisabled = disabled ? ' ui-form-disabled' : '';
    const setLight = light ? ' ui-form-light' : '';
    const setEase = noease ? '' : ' ui-ease-form';

    let setInline = '';

    if (inline) {

        if (inline === 'always') setInline = ' ui-form-inline';
        if (inline === 'xs') setInline = ' ui-form-inline-xs';

    }

    const classes = `ui-select${setDisabled}${setLight}${setClassName}${setInline}${setEase}`;

    // children classes
    const setRequired = required ? ' ui-required' : '';

    const childrenClasses = setRequired;

    return (
        <div className={classes} style={style}>
            <SvgIcon as='path' src={IconAngleDown} />
            <select id={id} ref={myRef} title={title} name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} className={childrenClasses} disabled={disabled}
                onChange={onChange} onInput={onInput}>
                    {children}
            </select>
        </div>
    );

}

const FormCheck = function (props:FormCheckProps) {

    const { type, label, onChange, id, name, tabIndex, value, checked, disabled, indeterminate, light, required, noease, className, style, stateStyle } = props;

    // types
    const setType = (type === 'radio') ? 'radio' : 'checkbox';

    // classes
    const setClassName = className ? ` ${className}` : '';
    const setLabelSpace = label ? ' ui-m-5-r' : '';
    const setDisabled = disabled ? ' ui-form-disabled' : '';
    const setIndeterminate = indeterminate ? ' ui-indeterminate' : '';
    const setLight = light ? ' ui-form-light' : '';
    const setEase = noease ? '' : ' ui-ease-form';

    let classes: any = null;

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
    const stateClasses = `ui-form-state${setStateTheme}`;

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

const FormRequiredMessage = function (props:FormRequiredMessageProps) {

    const { children, myRef, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-required-msg${setClassName}`;

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

const FormHint = function (props:FormHintProps) {

    const { children, myRef, theme, className, style } = props;

    // classes
    const setType = theme ? ` ui-form-${theme}` : '';
    const setClassName = className ? ` ${className}` : '';

    const classes = `ui-form-hint${setType}${setClassName}`;

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