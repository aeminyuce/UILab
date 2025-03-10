import { ui } from '../js/core/globals';

// utils
import { IconRemove } from './utils/assets';
import { AlertsDialogProps, AlertsMessageProps } from './utils/models';

// assets
import '../less/modules/alerts';
import '../js/modules/alerts';

const Alerts = function () {}

const AlertsDialog = function (

    { msg, success, error, custom, callback }:AlertsDialogProps) {

        // icons
        ui.alerts.closeIcon = IconRemove;

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