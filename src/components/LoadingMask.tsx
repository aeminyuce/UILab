import { ui } from '@ui';

// assets
import '@less/modules/loading-mask';
import '@js/modules/loading-mask';

export default function LoadingMask( { toggle }:any ) {
    ui.loadingMask.toggle(toggle);
}