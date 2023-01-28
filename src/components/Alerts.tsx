import { ui } from '@ui';

// utils
import SVGLoader from '@utils/SVGLoader';

// assets
const icon_remove = require("@icon/remove.svg") as string;

import '@less/modules/alerts';
import '@js/modules/alerts';

const Alerts = function () {}

interface AlertsDialogProps {

    msg: string,

    success?: string,
    error?: string,
    custom?: {
        first?: string,
        second?: string,
        third?: string,
    },

    callback?(value: any): any,

}

const AlertsDialog = function (

    { msg, success, error, custom, callback }:AlertsDialogProps) {

        // icons
        ui.globals.inlineSvg = true;
        ui.alerts.closeIcon = SVGLoader({src: icon_remove});

        // messages
        ui.alerts.msgDialogSuccess = 'Tamam';

        // custom buttons
        let setCustom = null;

        if (custom instanceof Object) {

            const first = custom.first ? custom.first : null;
            const second = custom.second ? custom.second : null;
            const third = custom.third ? custom.third : null;

            if (first || second || third) {

                setCustom = [];

                if (first) { setCustom.push(first); }
                if (second) { setCustom.push(second); }
                if (third) { setCustom.push(third); }

            }

        }

        ui.alerts.dialog({
            msg: msg,
            success: success,
            error: error,
            custom: setCustom,
            callback: callback,
        });

    }

interface AlertsMessageProps {

    msg: string,

    pos?: 'tl' | 'tr' | 'bl' | 'br',
    theme?: 'success' | 'warning' | 'danger',

}

const AlertsMessage = function (

    { msg, pos, theme }:AlertsMessageProps) {

        ui.alerts.message({
            msg: msg,
            pos: pos,
            theme: theme,
        });

    }

export default Object.assign(Alerts, {
    Dialog: AlertsDialog,
    Message: AlertsMessage,
});