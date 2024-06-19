import { ui } from '@ui';

// assets
import '@ui-less/modules/loading-mask';
import '@ui-js/modules/loading-mask';

export default function LoadingMask( { toggle }:any ) {
    ui.loadingMask.toggle(toggle);
}