import * as React from 'react';
import { ui } from '../js/core/globals';

// imports
import { icon_remove } from './_Icons';
import { ModalProps, ModalHeaderProps, ModalTitleProps, ModalButtonsProps, ModalContainerProps, ModalFooterProps, ModalOpenProps } from './_Models';

// assets
import '../less/modules/modal';
import '../js/modules/modal';

let Modal = function (

    { children, as, id, className, style }:ModalProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal' + setClassName;

        return (
            <>
            {as === 'div' &&
                <div id={id} className={classes} style={style}>
                    {children}
                </div>
            }
            {as === 'span' &&
                <span id={id} className={classes} style={style}>
                    {children}
                </span>
            }
            </>
        );

    }

const modalHeader = function (

    { children, id, className, style }:ModalHeaderProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-header' + setClassName;

        return (
            <div id={id} className={classes} style={style}>
                {children}
            </div>
        );

    }

const modalTitle = function (

    { children, id, className, style }:ModalTitleProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-h4' + setClassName;

        return (
            <h4 id={id} className={classes} style={style}>
                {children}
            </h4>
        );

    }

const modalButtons = function (

    { children, id, className, style }:ModalButtonsProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-buttons ui-ease-1st-btn' + setClassName;

        return (
            <div id={id} className={classes} style={style}>
                {children}
            </div>
        );

    }

const modalContainer = function (

    { children, id, className, style }:ModalContainerProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-container' + setClassName;

        return (
            <div id={id} className={classes} style={style}>
                {children}
            </div>
        );

    }

const modalFooter = function (

    { children, id, className, style }:ModalFooterProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-footer' + setClassName;

        return (
            <div id={id} className={classes} style={style}>
                {children}
            </div>
        );

    }

export const modalOpen = function (

    { source, bg, closable, type, size, callback }:ModalOpenProps) {

        // targets
        ui.modal.targetHolder = '#app';

        // styling classnames
        ui.modal.stylesContent = 'ui-round ui-shadow-lg ui-ease-layout';

        // icons
        ui.globals.inlineSvg = true;
        ui.modal.closeIcon = icon_remove;

        // sizes
        let setSize: any = null;

        if (size instanceof Object) {

            const width = size.width ? size.width : null;
            const height = size.height ? size.height : null;

            if (width && height) {
                setSize = width + 'x' + height;
            }

        } else { setSize = size ? size : null; }

        ui.modal.open({
            source: source,
            size: setSize,
            type: type,
            bg: bg,
            closable: closable,
            callback: callback,
        });

    }

export const modalClose = function () {
    ui.modal.close();
}

export const modalRemove = (name: string) => {

    const modal = ui.closest(name + '.' + ui.modal.target, '.' + ui.modal.targetWin)[0];
    if (modal) modal.parentElement.removeChild(modal);

}

export const modalRemoveAll = () => {

    const modals = ui.find('.' + ui.modal.targetWin + ':not(.' + ui.modal.nameShow + ')');

    Array.prototype.forEach.call(modals,
        (el: any) => el.parentElement.removeChild(el));

}

export default Object.assign(Modal, {
    Header: modalHeader,
    Title: modalTitle,

    Buttons: modalButtons,

    Container: modalContainer,
    Footer: modalFooter,
});