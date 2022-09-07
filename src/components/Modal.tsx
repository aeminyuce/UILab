import * as React from 'react';
import { ui } from '@ui';

// utils
import SVGLoader from '@utils/SVGLoader';

// assets
const icon_remove = require("@icon/general/remove.svg") as string;

import "@less/modules/modal";
import "@js/modules/modal";

interface modalProps {

    children?: React.ReactNode,

    as?: 'div' | 'span',

    id?: string,
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
                    <>
                        <div id={id} className={classes} style={style}>
                            {children}
                        </div>
                    </>
                }
                {as === 'span' &&
                    <>
                        <span id={id} className={classes} style={style}>
                            {children}
                        </span>
                    </>
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
         ui.modal.closeIcon = SVGLoader({src: icon_remove});

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

interface ModalCloseProps {
    callback?(): any,
}

const ModalClose = function (

    { callback }:ModalCloseProps) {

        ui.modal.close({
            callback: callback,
        });

    }

interface modalHeaderProps {

    children?: React.ReactNode,

    id?: string,
    className?: string,
    style?: any,

}

const modalHeader = function (

    { children, id, className, style }:modalHeaderProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-header' + setClassName;

        return (
            <>
                <div id={id} className={classes} style={style}>
                    {children}
                </div>
            </>
        );

    }

interface modalTitleProps {

    children?: React.ReactNode,

    id?: string,
    className?: string,
    style?: any,

}

const modalTitle = function (

    { children, id, className, style }:modalTitleProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-h4' + setClassName;

        return (
            <>
                <h4 id={id} className={classes} style={style}>
                    {children}
                </h4>
            </>
        );

    }

interface modalButtonsProps {

    children?: React.ReactNode,

    id?: string,
    className?: string,
    style?: any,

}

const modalButtons = function (

    { children, id, className, style }:modalButtonsProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-butons' + setClassName;

        return (
            <>
                <div id={id} className={classes} style={style}>
                    {children}
                </div>
            </>
        );

    }

interface modalContainerProps {

    children?: React.ReactNode,

    id?: string,
    className?: string,
    style?: any,

}

const modalContainer = function (

    { children, id, className, style }:modalContainerProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-container' + setClassName;

        return (
            <>
                <div id={id} className={classes} style={style}>
                    {children}
                </div>
            </>
        );

    }

interface modalFooterProps {

    children?: React.ReactNode,

    id?: string,
    className?: string,
    style?: any,

}

const modalFooter = function (

    { children, id, className, style }:modalFooterProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-modal-footer' + setClassName;

        return (
            <>
                <div id={id} className={classes} style={style}>
                    {children}
                </div>
            </>
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