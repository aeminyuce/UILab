import * as React from 'react';
import { useId } from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Grid from '@components/Grid';
import HeaderSticky from '@components/HeaderSticky';
import Icon from '@components/Icon';
import Sidebar from '@components/Sidebar';
import Spacer from '@components/Spacer';

// assets
const icon_dribbble = require('@icon/dribbble.svg') as string;
const icon_github = require('@icon/github.svg') as string;
const icon_bars_right = require('@icon/bars-right.svg') as string;
const icon_sun = require('@icon/sun.svg') as string;
const icon_moon = require('@icon/moon.svg') as string;
const icon_brackets_curly = require('@icon/brackets-curly.svg') as string;
const icon_draw = require('@icon/draw.svg') as string;
const icon_angle_right = require('@icon/angle-right.svg') as string;

export default function () {

    const keyId = useId();

    // responsive logo
    const logo = 'img/uilab-logo.png';
    const logoSrcSet = '/img/uilab-logo@2x.png 2x';

    // social links
    const socialUrls = [
        { title: 'GitHub', url: process.env.GITHUB_URL, icon: icon_github },
        { title: 'Dribbble', url: process.env.DRIBBBLE_URL, icon: icon_dribbble },
    ]

    // menu list
    const menuList = [
        { name: 'Alerts', to: 'alerts' },
        { name: 'Avatars', to: 'avatars' },
        { name: 'Breadcrumbs', to: 'breadcrumbs' },
        { name: 'Buttons', to: 'buttons' },
        { name: 'Calendar', to: 'calendar' },
        { name: 'Card', to: 'card' },
        { name: 'Carousel', to: 'carousel' },
        { name: 'Charts', to: 'charts' },
        { name: 'Countdown', to: 'countdown' },
        { name: 'Datatable', to: 'datatable' },
        { name: 'Dropdown', to: 'dropdown' },
        { name: 'Error Pages', to: 'error-pages' },
        { name: 'Forms', to: 'forms' },
        { name: 'Gallery', to: 'gallery' },
        { name: 'Grid', to: 'grid' },
        { name: 'Image Upload', to: 'image-upload' },
        { name: 'List Group', to: 'list-group' },
        { name: 'Listings', to: 'listings' },
        { name: 'Loading Mask', to: 'loading-mask' },
        { name: 'Map', to: 'map' },
        { name: 'Modal', to: 'modal' },
        { name: 'Notifier', to: 'notifier' },
        { name: 'Photoslide', to: 'photoslide' },
        { name: 'Pricing Tables', to: 'pricing-tables' },
        { name: 'Progress Bar', to: 'progress-bar' },
        { name: 'Steps', to: 'steps' },
        { name: 'Stripes', to: 'stripes' },
        { name: 'Tables', to: 'tables' },
        { name: 'Tab', to: 'tab' },
        { name: 'Themes', to: 'themes' },
        { name: 'Timeline', to: 'timeline' },
        { name: 'Tooltip', to: 'tooltip' },
        { name: 'Typography', to: 'typography' },
        { name: 'Weather', to: 'weather', sep: true },
        { name: 'Javascript', to: 'javascript' },
    ]

    // slogans
    const title = 'UI Lab is a modular design system.';
    const titleSlogan = 'For developing web interfaces fastly with React.';

    // slogans button list
    const sloganBtnList = [
        { name: 'Classnames', to: 'classnames', icon: icon_brackets_curly },
        { name: 'Icon List', to: 'iconlist', icon: icon_draw },
    ]

    // examples
    const examplesList = [
        { name: 'Login Page', to: 'pages/login-page', img: 'layout-login-page' },
        { name: 'Sign Up Page', to: 'pages/sign-up-page', img: 'layout-sign-up-page' },
        { name: 'Business', to: 'pages/business', img: 'layout-business' },
        { name: 'Dashboard', to: 'pages/dashboard', img: 'layout-dashboard' },
        { name: 'Landing Page', to: 'pages/landing-page', img: 'layout-landing-page' },
        { name: 'Movie App', to: 'pages/movie-app', img: 'layout-movie-app' },
        { name: 'Product Listing', to: 'pages/product-listing', img: 'layout-product-listing' },
        { name: 'Real Estate Details', to: 'pages/real-estate-details', img: 'layout-real-estate-details' },
        { name: 'Photo Albums', to: 'pages/photo-albums', img: 'layout-photo-albums' },
    ]

    return (
        <>
        {/* home page header */}
        <HeaderSticky className='ui-container ui-form-lg ui-theme-base ui-fill-dark-100 ui-visible' dataClasses='ui-shadow-lg'>
            <Grid.Row>
                <Grid.Static fluid='no'>
                    <Grid.Col size={'100'} className='ui-p-15-l ui-p-5-v'>
                        <img className='ui-m-5-t' src={logo} alt='UI lab' srcSet={logoSrcSet} />
                    </Grid.Col>
                    <Grid.Row vGap='md'>
                        <Grid.Col size={12} className='ui-align-r ui-icons-no-opacity ui-ease-1st-btn'>
                            <>
                            {socialUrls.map((item: { title: string, url: string, icon: string }, i: number) => {
                                return (
                                    <Button key={keyId + i} noease square ghost title={item.title} href={item.url} className='ui-circle' target='_blank' rel='nofollow'>
                                        <Icon src={item.icon} />
                                    </Button>
                                )
                            })}
                            <Button noease square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-circle'>
                                <Icon className='ui-visible-dark' src={icon_moon} />
                                <Icon className='ui-visible-light' src={icon_sun} />
                            </Button>
                            <Button noease square ghost title='Toggle Sidebar' className='ui-sidebar-show-r ui-visible-md ui-circle'>
                                <Icon src={icon_bars_right} />
                            </Button>
                            </>
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Grid.Row>
        </HeaderSticky>

        {/* home page */}
        <Grid.Container as='main' noGutter='all'>
            <Grid.Static fluid='no'>
                <Grid.Col size={'250'} className='ui-theme-gray ui-fill-light-200 ui-hidden-md'>

                    {/* menu */}
                    <div className="ui-sidebar-add-r">
                        <ul className="ui-list-unstyled ui-align-l ui-block-2nd ui-ease-2nd-btn">
                            {menuList.map((item: { name: string, to: string, sep: boolean }, j: number) => {
                                return (
                                    <React.Fragment key={keyId + j}>
                                        <li>
                                            <Button noease ghost to={item.to}>{item.name}</Button>
                                        </li>
                                        {item.sep &&
                                            <li>
                                                <hr className="ui-hr ui-no-m-v" />
                                            </li>
                                        }
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </div>

                </Grid.Col>
                <Grid.Row>
                    <Grid.Col size={12} className='ui-p-15'>
                        <Grid.Container fixed='xl' as='div' className='ui-p-15 ui-m-30-v ui-sm-no-p'>

                            {/* slogans */}
                            <div className="ui-highlight ui-align-c ui-p-30 ui-xs-no-p ui-round ui-theme-sub">

                                <div className="ui-cursor-default ui-no-selection ui-highlight">
                                    <h1 className="ui-h1 ui-font-light">{title}</h1>
                                    <h4 className="ui-h4 ui-font-bold ui-text">{titleSlogan}</h4>
                                </div>

                                <Spacer size={15} />

                                <div className="ui-sm-align-l ui-form-lg ui-ease-1st-btn">
                                    {sloganBtnList.map((item: { name: string, to: string, icon: string }, k: number) => {
                                        return (
                                            <Button key={keyId + k} ghost fluid='sm' to={item.to} className='ui-m-5-h ui-xs-no-m-h ui-border-dual ui-circle'>
                                                <Icon className='ui-m-5-r' src={item.icon} />
                                                {item.name}
                                            </Button>
                                        )
                                    })}
                                </div>
                            </div>

                            <Spacer size={30} />

                            {/* examples */}
                            <Grid.Row gap='lg' fluid='sm' className='ui-align-c ui-hover-shadow-2nd ui-hover-t-2nd ui-block-2nd'>
                                {examplesList.map((item: { name: string, to: string, img: string }, l: number) => {
                                    return (
                                        <Grid.Col key={keyId + l} lg={4} size={6}>
                                            <Link to={item.to} className='ui-link ui-p-2 ui-round ui-shadow-lg ui-ease-layout ui-bg-white ui-invert-bg'>
                                                <img className="ui-img-fluid ui-round-t ui-visible-light" src={'img/' + item.img + '.jpg'} alt={item.name} />
                                                <img className="ui-img-fluid ui-round-t ui-visible-dark" src={'img/' + item.img + '-dark.jpg'} alt={item.name + ' Dark'} />
                                                <h4 className="ui-h4 ui-inline-block ui-p-10-v">{item.name}</h4>
                                            </Link>
                                        </Grid.Col>
                                    )
                                })}
                            </Grid.Row>

                        </Grid.Container>
                    </Grid.Col>
                </Grid.Row>
            </Grid.Static>
        </Grid.Container>

        {/* sidebar */}
        <Sidebar pos="r" className="ui-round ui-theme-base">
            <Sidebar.Title className="ui-sidebar-title ui-p-15-h ui-p-10-v ui-fill-dark-100">
                <Button square ghost title="Close" className="ui-sidebar-close ui-circle">
                    <Icon src={icon_angle_right} />
                </Button>
                <img className="ui-m-5-v ui-m-3-l" src={logo} alt='UI lab' srcSet={logoSrcSet} />
            </Sidebar.Title>
            <Sidebar.Content className="ui-no-p ui-scroll-v" />
        </Sidebar>
        </>
    );
}