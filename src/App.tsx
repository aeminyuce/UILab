import * as React from 'react';
import { Suspense } from 'react';
import TopButton from '@components/TopButton';

// layouts
import RoutePaths from '@layouts/RoutePaths';

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