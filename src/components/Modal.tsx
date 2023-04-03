import * as React from 'react';
import { ui } from '@ui';

// assets
const icon_remove = '<path d="M244.222 259.778 132 147.557 19.778 259.778A10.966 10.966 0 0 1 12 263a10.961 10.961 0 0 1-7.777-3.223 11 11 0 0 1 0-15.556L116.444 132 4.223 19.779a11 11 0 0 1 0-15.557 11 11 0 0 1 15.556 0L132 116.443 244.221 4.221a11 11 0 0 1 15.557 0 11 11 0 0 1 0 15.557L147.557 132l112.222 112.222a11 11 0 0 1 0 15.556A10.966 10.966 0 0 1 252 263a10.966 10.966 0 0 1-7.778-3.222Z" />';

import '@less/modules/modal';
import '@js/modules/modal';

interface modalProps {

    children?: React.ReactNode,

    as: 'div' | 'span',

    id?: any,
    className?: string,
    style?: any,

}

let Modal = function (

    { children, as, id, className, style }:modalProps) {

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

interface ModalOpenProps {

    source: string,

    bg?: 'true' | 'false',
    closable?: boolean,

    type?: 'ajax' | 'iframe',
    size?: 'lg' |'md' | 'sm' | 'fullscreen' | 'inline' | {
        width: number, height: number
    },

    callback?(): any,

}

const ModalOpen = function (

    { source, bg, closable, type, size, callback }:ModalOpenProps) {

        // styling classnames
        ui.modal.stylesContent = 'ui-round ui-shadow-lg ui-ease-layout';

         // icons
         ui.globals.inlineSvg = true;
         ui.modal.closeIcon = icon_remove;

        // sizes
        let setSize = null;

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

const ModalClose = function () {
    ui.modal.close();
}

interface modalHeaderProps {

    children?: React.ReactNode,

    id?: any,
    className?: string,
    style?: any,

}

const modalHeader = function (

    { children, id, className, style }:modalHeaderProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-header' + setClassName;

        return (
            <div id={id} className={classes} style={style}>
                {children}
            </div>
        );

    }

interface modalTitleProps {

    children?: React.ReactNode,

    id?: any,
    className?: string,
    style?: any,

}

const modalTitle = function (

    { children, id, className, style }:modalTitleProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-h4' + setClassName;

        return (
            <h4 id={id} className={classes} style={style}>
                {children}
            </h4>
        );

    }

interface modalButtonsProps {

    children?: React.ReactNode,

    id?: any,
    className?: string,
    style?: any,

}

const modalButtons = function (

    { children, id, className, style }:modalButtonsProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-buttons ui-ease-1st-btn' + setClassName;

        return (
            <div id={id} className={classes} style={style}>
                {children}
            </div>
        );

    }

interface modalContainerProps {

    children?: React.ReactNode,

    id?: any,
    className?: string,
    style?: any,

}

const modalContainer = function (

    { children, id, className, style }:modalContainerProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-container' + setClassName;

        return (
            <div id={id} className={classes} style={style}>
                {children}
            </div>
        );

    }

interface modalFooterProps {

    children?: React.ReactNode,

    id?: any,
    className?: string,
    style?: any,

}

const modalFooter = function (

    { children, id, className, style }:modalFooterProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-footer' + setClassName;

        return (
            <div id={id} className={classes} style={style}>
                {children}
            </div>
        );

    }

export default Object.assign(Modal, {
    Open: ModalOpen,
    Close: ModalClose,

    Header: modalHeader,
    Title: modalTitle,

    Buttons: modalButtons,

    Container: modalContainer,
    Footer: modalFooter,
});