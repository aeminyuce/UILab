import * as React from 'react';
import Button from '@components/Button';
import Icon from '@components/Icon';

// assets
import { icon_print } from '@icon/js/general/print';
import { icon_house_alt } from '@icon/js/real-estate/house_alt';

interface PageHeaderProps {
    pageTitle: string;
}

export default function PageHeader(

    { pageTitle }:PageHeaderProps) {
        const setPageTitle = pageTitle ? pageTitle : '';

        return (
            <div className='ui-border-b ui-border-light ui-p-10'>
                <Button square ghost title='Print' className='ui-circle ui-float-r' onClick={() => window.print()}>
                    <Icon src={icon_print} />
                </Button>
                <Button square ghost title='Back to Home' to='/' className='ui-circle ui-m-10-r'>
                    <Icon src={icon_house_alt} />
                </Button>
                <h1 className='ui-h1 ui-font-18 ui-inline-block'>
                    {setPageTitle}
                </h1>
            </div>
        )
    }