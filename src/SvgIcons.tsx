import * as React from 'react';
import Button from '@components/Button';
import Grid from '@components/Grid';

export default function () {

    return (
        <Grid.Container as='main' noGutter='lg'>
            <Grid.Container fixed='xl' as='div' className='ui-p-15 ui-m-30-v ui-sm-no-p'>

                <Grid.Row>
                    <Grid.Col size={12}>
                        <div className='ui-sm-no-p ui-align-c ui-p-30-v'>

                            <h2 className='ui-h2'>
                                SVG Icons
                                <span className='ui-font-18 ui-m-5-v ui-block ui-opacity-half'>(Total Icons: 542)</span>
                            </h2>

                            <Grid.Row>
                                <Grid.Col size={8} offset={2}>
                                    <h4 className='ui-h4 ui-m-10-b'>Change Size</h4>
                                    <Button.Wrapper largeButtons as='holder' ease='1st' className='ui-m-20-b ui-theme-ice'>
                                        <Button noease size-ui-size='xxl' className='ui-round'>XXL</Button>
                                        <Button noease size-ui-size='xl' className='ui-round ui-fill-dark-100'>XL</Button>
                                        <Button noease size-ui-size='lg' className='ui-round'>L</Button>
                                        <Button noease size-ui-size='' className='ui-round'>-</Button>
                                        <Button noease size-ui-size='sm' className='ui-round'>SM</Button>
                                        <Button noease size-ui-size='xs' className='ui-round'>XS</Button>
                                    </Button.Wrapper>
                                </Grid.Col>
                            </Grid.Row>

                        </div>
                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>
    );
}