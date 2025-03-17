import * as React from 'react';
import Button from '@components/Button';
import SvgIcon from '@components/SvgIcon';

// utils
import type { PageHeaderProps } from '@utils/Models';

// assets
import { IconPrint } from '@icon/js/general/print';
import { IconHouseAlt } from '@icon/js/real-estate/house-alt';

export default function PageHeader(props:PageHeaderProps) {

    const { pageTitle } = props;
    const setPageTitle = pageTitle ? pageTitle : '';

    return (
        <div className='ui-border-b ui-border-light ui-p-10'>
            <Button square ghost title='Print' className='ui-circle ui-float-r' onClick={() => window.print()}>
                <SvgIcon as='js' src={IconPrint} />
            </Button>
            <Button square ghost title='Back to Home' to='/' className='ui-circle ui-m-10-r'>
                <SvgIcon as='js' src={IconHouseAlt} />
            </Button>
            <h1 className='ui-h1 ui-font-18 ui-inline-block'>
                {setPageTitle}
            </h1>
        </div>
    )

}