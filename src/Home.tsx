import * as React from 'react';
import Grid from '@components/Grid';

// layouts
import HomeHeader from '@layouts/HomeHeader';
import HomeMenu from '@layouts/HomeMenu';

export default function () {
    return (
        <>
            <HomeHeader />
            <Grid.Container as='main' noGutter='all'>
                <Grid.Static fluid='no'>
                    <Grid.Col size={'250'} className='ui-theme-gray ui-fill-light-200 ui-hidden-md'>
                        <HomeMenu />
                    </Grid.Col>
                    <Grid.Row>
                        <Grid.Col size={12} className='ui-p-15'>
                            <Grid.Container fixed='xl' as='div' className='ui-p-15 ui-m-30-v ui-sm-no-p'>
                            
                            </Grid.Container>
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Grid.Container>
        </>
    );
}