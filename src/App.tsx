import * as React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, useId } from 'react';
import Button from '@components/Button';
import Icon from '@components/Icon';
import Grid from '@components/Grid';
import HeaderSticky from '@components/HeaderSticky';
import Sidebar from '@components/Sidebar';
import TopButton from '@components/TopButton';

// utils
import {
    Home,
    Calendar
} from '@utils/PageRoutes';

// layouts
import PageTitle from '@layouts/PageTitle';

// assets
const icon_dribbble = require('@icon/dribbble.svg') as string;
const icon_github = require('@icon/github.svg') as string;
const icon_bars_left = require('@icon/bars-left.svg') as string;
const icon_bars_right = require('@icon/bars-right.svg') as string;
const icon_sun = require('@icon/sun.svg') as string;
const icon_moon = require('@icon/moon.svg') as string;
const icon_angle_left = require('@icon/angle-left.svg') as string;
const icon_angle_right = require('@icon/angle-right.svg') as string;

export default function () {
    const keyId = useId();
    const { pathname } = useLocation();

    // responsive logo
    const logo = 'img/uilab-logo.png';
    const logoSrcSet = '/img/uilab-logo@2x.png 2x';

    // links
    const headerLinks = [
        { name: 'Docs', to: 'calendar' },
        { name: 'Javascript', to: 'javascript' },
        { name: 'Classnames', to: 'classname' },
        { name: 'Icons', to: 'icons' },
    ];

    // social links
    const socialLinks = [
        { title: 'GitHub', url: process.env.GITHUB_URL, icon: icon_github },
        { title: 'Dribbble', url: process.env.DRIBBBLE_URL, icon: icon_dribbble },
    ];

    return (
        <>
        {/* header */}
        <HeaderSticky className='ui-container ui-form-lg ui-theme-base ui-fill-dark-100 ui-visible' dataClasses='ui-shadow-lg'>
            <Grid.Row>
                <Grid.Static fluid='no'>

                    {/* toggle header sidebar */}
                    <Grid.Col size={'50'} className='ui-p-5 ui-visible-md'>
                        <Button square ghost title='Toggle Nav' className='ui-sidebar-show-l ui-circle'>
                            <Icon src={icon_bars_left} opacity='no' />
                        </Button>
                    </Grid.Col>

                    {/* logo */}
                    <Grid.Col size={'100'} className='ui-p-15-l ui-p-5-v'>
                        <Button nostyle to='/' title='UI Lab Home'>
                            <img className='ui-m-5-t' src={logo} alt='UI lab' srcSet={logoSrcSet} />
                        </Button>
                    </Grid.Col>

                    {/* nav */}
                    <Grid.Row vGap='md'>
                        <Grid.Col size={12} className='ui-icons-no-opacity'>
                            <>
                            {/* nav links */}
                            <span className='ui-hidden-md'>
                                <span className='ui-sidebar-add-l'>
                                    {headerLinks.map((item: { name: string, to: string }, i: number) => {
                                        return (
                                            <React.Fragment key={keyId + i}>
                                                <Button ghost={pathname === '/' + item.to ? false : true} to={item.to} className='ui-m-2-r ui-round'>
                                                    {item.name}
                                                </Button>
                                                <br className='ui-visible-md' />
                                            </React.Fragment>
                                        )
                                    })}
                                </span>
                            </span>

                            {/* toggle page sidebar */}
                            {pathname !== '/' &&
                                <Button square ghost title='Toggle Docs' className='ui-sidebar-show-r ui-visible-md ui-circle ui-float-r'>
                                    <Icon src={icon_bars_right} />
                                </Button>
                            }

                            {/* toggle dark mode */}
                            <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-circle ui-float-r'>
                                <Icon className='ui-visible-dark' src={icon_moon} />
                                <Icon className='ui-visible-light' src={icon_sun} />
                            </Button>

                            {/* social links */}
                            <span className='ui-hidden-md'>
                                <span className='ui-sidebar-add-l'>
                                    <div className='ui-m-15-v ui-visible-md' />
                                    {socialLinks.map((item: { title: string, url: string, icon: string }, j: number) => {
                                        return (
                                            <Button key={keyId + j} square ghost title={item.title} href={item.url} className='ui-circle ui-float-r ui-no-float-md' target='_blank' rel='nofollow'>
                                                <Icon src={item.icon} />
                                            </Button>
                                        )
                                    })}
                                </span>
                            </span>

                            </>
                        </Grid.Col>
                    </Grid.Row>

                </Grid.Static>
            </Grid.Row>
        </HeaderSticky>

        {/* routes */}
        <Suspense>
            <Routes>
                <Route path="/*" element={
                    <PageTitle title="Home"><Home /></PageTitle>
                } />
                <Route path="calendar" element={
                    <PageTitle title="Calendar"><Calendar /></PageTitle>
                } />
            </Routes>
        </Suspense>

        {/* top button */}
        <TopButton />

        {/* header sidebar */}
        <Sidebar pos="l" className="ui-round">
            <Sidebar.Title className="ui-sidebar-title ui-p-15-h ui-p-10-v ui-border-b ui-border-light">
                <Button square ghost title="Close" className="ui-sidebar-close ui-circle">
                    <Icon src={icon_angle_left} />
                </Button>
                <img className="ui-m-5-v ui-m-3-l" src={logo} alt='UI lab' srcSet={logoSrcSet} />
            </Sidebar.Title>
            <Sidebar.Content className="ui-scroll-v" />
        </Sidebar>

        {/* page sidebar */}
        {pathname !== '/' &&
            <Sidebar pos="r" className="ui-round">
                <Sidebar.Title className="ui-sidebar-title ui-p-15-h ui-p-10-v ui-border-b ui-border-light">
                    <Button square ghost title="Close" className="ui-sidebar-close ui-circle">
                        <Icon src={icon_angle_right} />
                    </Button>
                    <div className="ui-font-16 ui-m-15-v ui-m-3-l">Docs</div>
                </Sidebar.Title>
                <Sidebar.Content className="ui-no-p ui-scroll-v" />
            </Sidebar>
        }
        </>
    );
}