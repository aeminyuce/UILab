import * as React from 'react';
import { Suspense } from 'react';
import TopButton from '@components/TopButton';

// layouts
import PageLoader from '@layouts/PageLoader';

// utils
import RoutePaths from '@utils/RoutePaths';

export default function () {
    return (
        <>
            <Suspense fallback={<PageLoader />}>
                <RoutePaths />
            </Suspense>

            <TopButton />
        </>
    );
}