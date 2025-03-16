import { ui } from '../js/core/globals';

// assets
import '../less/modules/loading-mask';
import '../js/modules/loading-mask';

export default function LoadingMask(toggle: any) {
    ui.loadingMask.toggle(toggle);
}