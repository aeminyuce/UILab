import * as React from 'react';
import { Suspense } from 'react';
import TopButton from '@ui-components/TopButton';

// layouts
import RoutePaths from '@ui-layouts/RoutePaths';

export default function () {
    return (
        <>
            <Suspense>
                <RoutePaths />
            </Suspense>

            <TopButton />
        </>
    );
}