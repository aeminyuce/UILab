import * as React from 'react';
import Grid from '@components/Grid';

// layouts
import HeaderHome from '@layouts/HeaderHome';

export default function () {
    return (
        <>
            <HeaderHome />
            <Grid.Container as='main' noGutter='all'>

            </Grid.Container>
        </>
    );
}