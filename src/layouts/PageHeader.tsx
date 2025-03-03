import * as React from 'react';
import Button from '@components/Button';
import Icon from '@components/Icon';

// assets
import { IconPrint } from '@icon/js/general/print';
import { IconHouseAlt } from '@icon/js/real-estate/house-alt';

interface PageHeaderProps {
    pageTitle: string;
}

export default function PageHeader(

    { pageTitle }:PageHeaderProps) {
        const setPageTitle = pageTitle ? pageTitle : '';

        return (
            <div className='ui-border-b ui-border-light ui-p-10'>
                <Button square ghost title='Print' className='ui-circle ui-float-r' onClick={() => window.print()}>
                    <Icon src={IconPrint} />
                </Button>
                <Button square ghost title='Back to Home' to='/' className='ui-circle ui-m-10-r'>
                    <Icon src={IconHouseAlt} />
                </Button>
                <h1 className='ui-h1 ui-font-18 ui-inline-block'>
                    {setPageTitle}
                </h1>
            </div>
        )
    }