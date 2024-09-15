import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@components/Button';
import Grid from '@components/Grid';

interface MenuListProps {

    name: string;
    to: string;
    sep: boolean;

}

export default function PageNav() {
    const { pathname } = useLocation();

    const menuList = [
        { name: 'Alerts', to: '/alerts' },
        { name: 'Avatars', to: '/avatars' },
        { name: 'Breadcrumbs', to: '/breadcrumbs' },
        { name: 'Buttons', to: '/buttons' },
        { name: 'Calendar', to: '/calendar' },
        { name: 'Card', to: '/card' },
        { name: 'Carousel', to: '/carousel' },
        { name: 'Charts', to: '/charts' },
        { name: 'Countdown', to: '/countdown' },
        { name: 'Datatable', to: '/datatable' },
        { name: 'Dropdown', to: '/dropdown' },
        { name: 'Error Pages', to: '/error-pages' },
        { name: 'Forms', to: '/forms' },
        { name: 'Gallery', to: '/gallery' },
        { name: 'Grid', to: '/grid' },
        { name: 'Image Upload', to: '/image-upload' },
        { name: 'List Group', to: '/list-group' },
        { name: 'Listings', to: '/listings' },
        { name: 'Loading Mask', to: '/loading-mask' },
        { name: 'Map', to: '/map' },
        { name: 'Modal', to: '/modal' },
        { name: 'Notifier', to: '/notifier' },
        { name: 'Photoslide', to: '/photoslide' },
        { name: 'Pricing Tables', to: '/pricing-tables' },
        { name: 'Progress Bar', to: '/progress-bar' },
        { name: 'Steps', to: '/steps' },
        { name: 'Stripes', to: '/stripes' },
        { name: 'Tables', to: '/tables' },
        { name: 'Tab', to: '/tab' },
        { name: 'Themes', to: '/themes' },
        { name: 'Timeline', to: '/timeline' },
        { name: 'Tooltip', to: '/tooltip' },
        { name: 'Typography', to: '/typography' },
        { name: 'Weather', to: '/weather' },
    ]

    const pageNavWidth = 250; // px
    const headerHeight = 62; // px

    return (
        <Grid.Col size={pageNavWidth} className='ui-border-r ui-border-light ui-hidden-md'>
            <div className='ui-scroll ui-scrollbar-round ui-scrollbar-faded ui-set-fixed ui-set-v' style={{ width: `${pageNavWidth - 1}px`, top: `${headerHeight}px` }}>
                <div className='ui-font-18 ui-m-15 ui-p-2-l'>Docs</div>
                <div className='ui-sidebar-add-r'>
                    <ul className='ui-list-unstyled ui-align-l ui-block-2nd ui-ease-2nd-btn'>
                        {menuList.map((item: MenuListProps) => {
                            return (
                                <li key={item.name}>
                                    <Button noease ghost={pathname === item.to ? false : true} to={item.to}>{item.name}</Button>
                                </li>
                            )
                        })}
                    </ul>
            </div>
            </div>
        </Grid.Col>
    );
}