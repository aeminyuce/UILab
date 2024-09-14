import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@components/Grid';
import Spacer from '@components/Spacer';

interface ExamplesProps {

    name: string;
    to: string;
    img: string;

}

export default function () {
    // slogans
    const title = 'UI Lab is a modular design system.';
    const titleSlogan = 'For developing web interfaces fastly with React.';

    // examples
    const examplesList = [
        { name: 'Login Page', to: '/pages/login-page', img: 'layout-login-page' },
        { name: 'Sign Up Page', to: '/pages/sign-up-page', img: 'layout-sign-up-page' },
        { name: 'Business', to: '/pages/business', img: 'layout-business' },
        { name: 'Dashboard', to: '/pages/dashboard', img: 'layout-dashboard' },
        { name: 'Landing Page', to: '/pages/landing-page', img: 'layout-landing-page' },
        { name: 'Movie App', to: '/pages/movie-app', img: 'layout-movie-app' },
        { name: 'Product Listing', to: '/pages/product-listing', img: 'layout-product-listing' },
        { name: 'Real Estate Details', to: '/pages/real-estate-details', img: 'layout-real-estate-details' },
        { name: 'Photo Albums', to: '/pages/photo-albums', img: 'layout-photo-albums' },
    ]

    return (
        <Grid.Container as='main' noGutter='lg'>
            <Grid.Container fixed='xl' as='div' className='ui-p-15 ui-m-30-v ui-sm-no-p'>

                {/* slogans */}
                <div className='ui-align-c ui-p-30 ui-xs-no-p ui-round ui-theme-sub'>
                    <h1 className='ui-h1 ui-font-light'>{title}</h1>
                    <h4 className='ui-h4 ui-font-bold ui-text'>{titleSlogan}</h4>
                </div>

                <Spacer size={30} />

                {/* examples */}
                <Grid.Row gap='lg' fluid='sm' className='ui-align-c ui-hover-shadow-2nd ui-hover-t-2nd ui-block-2nd'>
                    {examplesList.map((item: ExamplesProps) => {
                        return (
                            <Grid.Col key={item.name} lg={4} size={6}>
                                <Link to={item.to} className='ui-link ui-p-2 ui-round ui-shadow-lg ui-ease-layout ui-bg-white ui-invert-bg'>
                                    <img className='ui-img-fluid ui-round-t ui-visible-light' src={`img/${item.img}.jpg`} alt={item.name} />
                                    <img className='ui-img-fluid ui-round-t ui-visible-dark' src={`img/${item.img}-dark.jpg`} alt={`${item.name} Dark`} />
                                    <div className='ui-font-15 ui-inline-block ui-p-10-v'>{item.name}</div>
                                </Link>
                            </Grid.Col>
                        )
                    })}
                </Grid.Row>

            </Grid.Container>
        </Grid.Container>
    );
}