import * as React from 'react';
import Button from '@components/Button';
import Grid from '@components/Grid';
import HeaderSticky from '@components/HeaderSticky';
import Icon from '@components/Icon';

// assets
const icon_sun = require('@icon/sun.svg') as string;
const icon_moon = require('@icon/moon.svg') as string;
const icon_print = require('@icon/print.svg') as string;
const icon_long_arrow_left = require('@icon/long-arrow-left.svg') as string;

interface PageHeaderProps {
    pageTitle: string,
}

export default function PageHeader(

    { pageTitle }:PageHeaderProps) {

        const setPageTitle = pageTitle ? pageTitle : '';

        return (
            <HeaderSticky className='ui-container ui-form-lg ui-theme-base ui-fill-dark-100 ui-visible' dataClasses='ui-shadow-lg'>
                <Grid.Row>
                    <Grid.Col size={12} className='ui-p-5-v ui-icons-no-opacity'>
                        <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-circle ui-float-r'>
                            <Icon className='ui-visible-dark' src={icon_moon} />
                            <Icon className='ui-visible-light' src={icon_sun} />
                        </Button>
                        <Button square ghost title='Print' className='ui-circle ui-float-r' onClick={() => window.print()}>
                            <Icon src={icon_print} />
                        </Button>
                        <Button square ghost title='Back to Home' to='/' className='ui-circle ui-m-10-r'>
                            <Icon src={icon_long_arrow_left} />
                        </Button>
                        <h1 className="ui-h1 ui-font-18 ui-inline-block">
                            {setPageTitle}
                        </h1>
                    </Grid.Col>
                </Grid.Row>
            </HeaderSticky>
        )

    }