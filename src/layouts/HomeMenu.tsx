import * as React from 'react';
import { useId } from 'react';
import Button from '@components/Button';

export default function () {

    const keyId = useId();

    const menuList = [
        { name: 'Alerts', to: 'alerts', sep: false },
        { name: 'Avatars', to: 'avatars', sep: false },
        { name: 'Breadcrumbs', to: 'breadcrumbs', sep: false },
        { name: 'Buttons', to: 'buttons', sep: false },
        { name: 'Calendar', to: 'calendar', sep: false },
        { name: 'Card', to: 'card', sep: false },
        { name: 'Carousel', to: 'carousel', sep: false },
        { name: 'Charts', to: 'charts', sep: false },
        { name: 'Countdown', to: 'countdown', sep: false },
        { name: 'Datatable', to: 'datatable', sep: false },
        { name: 'Dropdown', to: 'dropdown', sep: false },
        { name: 'Error Pages', to: 'error-pages', sep: false },
        { name: 'Forms', to: 'forms', sep: false },
        { name: 'Gallery', to: 'gallery', sep: false },
        { name: 'Grid', to: 'grid', sep: false },
        { name: 'Image Upload', to: 'image-upload', sep: false },
        { name: 'List Group', to: 'list-group', sep: false },
        { name: 'Listings', to: 'listings', sep: false },
        { name: 'Loading Mask', to: 'loading-mask', sep: false },
        { name: 'Map', to: 'map', sep: false },
        { name: 'Modal', to: 'modal', sep: false },
        { name: 'Notifier', to: 'notifier', sep: false },
        { name: 'Photoslide', to: 'photoslide', sep: false },
        { name: 'Pricing Tables', to: 'pricing-tables', sep: false },
        { name: 'Progress Bar', to: 'progress-bar', sep: false },
        { name: 'Steps', to: 'steps', sep: false },
        { name: 'Stripes', to: 'stripes', sep: false },
        { name: 'Tables', to: 'tables', sep: false },
        { name: 'Tab', to: 'tab', sep: false },
        { name: 'Themes', to: 'themes', sep: false },
        { name: 'Timeline', to: 'timeline', sep: false },
        { name: 'Tooltip', to: 'tooltip', sep: false },
        { name: 'Typography', to: 'typography', sep: false },
        { name: 'Weather', to: 'weather', sep: true },
        { name: 'Javascript', to: 'javascript', sep: false },
    ]

    return (
        <div className="ui-sidebar-add-r">
            <ul className="ui-list-unstyled ui-align-l ui-block-2nd ui-ease-2nd-btn">
                {menuList.map((item: any, i: number) => {
                    return (
                        <React.Fragment key={keyId + i}>
                            <li>
                                <Button noease ghost to={item.to}>{item.name}</Button>
                            </li>
                            {item.sep &&
                                <li>
                                    <hr className="ui-hr ui-no-m-v" />
                                </li>
                            }
                        </React.Fragment>
                    )
                })}
            </ul>
        </div>
    );
}