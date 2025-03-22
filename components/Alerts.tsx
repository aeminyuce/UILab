import { ui } from '../js/core/globals';

// utils
import { AlertsDialogProps, AlertsMessageProps } from './utils/Models';

// assets
import '../less/modules/alerts';
import '../js/modules/alerts';

const Alerts = function () {}

const AlertsDialog = function (props:AlertsDialogProps) {

    const { msg, success, error, custom, callback } = props;

    // messages
    ui.alerts.msgDialogSuccess = 'OK';

    // custom buttons
    let setCustom: string[] = [];

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

const AlertsMessage = function (props:AlertsMessageProps) {

    const { msg, pos, theme } = props;

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