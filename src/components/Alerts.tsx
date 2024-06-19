import { ui } from '@ui';

// assets
const icon_remove = '<path d="M244.222 259.778 132 147.557 19.778 259.778A10.966 10.966 0 0 1 12 263a10.961 10.961 0 0 1-7.777-3.223 11 11 0 0 1 0-15.556L116.444 132 4.223 19.779a11 11 0 0 1 0-15.557 11 11 0 0 1 15.556 0L132 116.443 244.221 4.221a11 11 0 0 1 15.557 0 11 11 0 0 1 0 15.557L147.557 132l112.222 112.222a11 11 0 0 1 0 15.556A10.966 10.966 0 0 1 252 263a10.966 10.966 0 0 1-7.778-3.222Z" />'

import '@ui-less/modules/alerts';
import '@ui-js/modules/alerts';

const Alerts = function () {}

interface AlertsDialogProps {

    msg: any,

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
        ui.alerts.closeIcon = icon_remove;

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

    msg: any,

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