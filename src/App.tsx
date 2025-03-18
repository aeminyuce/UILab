import * as React from 'react';
import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@components/Button';
import Grid from '@components/Grid';
import HeaderSticky from '@components/HeaderSticky';
import Sidebar from '@components/Sidebar';
import Spacer from '@components/Spacer';
import SvgIcon from '@components/SvgIcon';
import TopButton from '@components/TopButton';

// utils
import type { HeaderLinksProps, SocialLinksProps } from '@utils/Models';

// layouts
import RoutePaths from '@layouts/RoutePaths';

import { IconDribbble } from '@icon/js/social/dribbble';
import { IconGithub } from '@icon/js/social/github';
import { IconBarsLeft } from '@icon/js/general/bars-left';
import { IconBarsRight } from '@icon/js/general/bars-right';
import { IconSun } from '@icon/js/weather/sun';
import { IconMoon } from '@icon/js/weather/moon';
import { IconAngleLeft } from '@icon/js/general/angle-left';
import { IconAngleRight } from '@icon/js/general/angle-right';

export default function () {
    const { pathname } = useLocation();

    // responsive logo
    const logo = 'img/uilab-logo.png';
    const logoSrcSet = '/img/uilab-logo@2x.png 2x';

    // links
    const headerLinks = [
        { name: 'Home', to: '/' },
        { name: 'Docs', to: '/calendar' },
        { name: 'Javascript', to: '/javascript' },
        { name: 'Classnames', to: '/classname' },
        { name: 'Icons', to: '/icons' },
    ];

    // social links
    const socialLinks = [
        { title: 'GitHub', url: process.env.GITHUB_URL, icon: IconGithub },
        { title: 'Dribbble', url: process.env.DRIBBBLE_URL, icon: IconDribbble },
    ];

    return (
        <>
            {/* header */}
            <HeaderSticky className='ui-container ui-theme-blue ui-fill-dark-100 ui-visible' dataClasses='ui-shadow-lg'>
                <Grid.Row>
                    <Grid.Static fluid='no'>

                        {/* toggle header sidebar */}
                        <Grid.Col size={'50'} className='ui-p-10-v ui-p-10-l ui-visible-md'>
                            <Button square ghost title='Toggle Nav' className='ui-sidebar-show-l ui-circle'>
                                <SvgIcon as='js' src={IconBarsLeft} opacity='no' />
                            </Button>
                        </Grid.Col>

                        {/* logo */}
                        <Grid.Col size={'250'} sm={'150'} xs={'150'} className='ui-p-15-l ui-p-5-v'>
                            <Button nostyle to='/' title='UI Lab Home' className='ui-m-3-l'>
                                <img className='ui-m-10-t' src={logo} alt='UI lab' srcSet={logoSrcSet} />
                            </Button>
                        </Grid.Col>

                        {/* nav */}
                        <Grid.Row>
                            <Grid.Col size={12} className='ui-no-p-l'>
                                <>
                                {/* header links */}
                                <span className='ui-hidden-md'>
                                    <span className='ui-sidebar-add-l'>
                                        {headerLinks.map((item: HeaderLinksProps) => {
                                            const path = item.to.replace(/\//g, '');

                                            return (
                                                <Fragment key={item.name}>
                                                    <Button ghost={pathname === `/${path}` ? false : true} to={item.to} className='ui-m-2-r ui-round'>
                                                        {item.name}
                                                    </Button>
                                                    <Spacer size={2} className='ui-visible-md' />
                                                </Fragment>
                                            )
                                        })}
                                    </span>
                                </span>

                                {/* toggle page sidebar */}
                                {pathname !== '/' &&
                                    <Button square ghost title='Toggle Docs' className='ui-sidebar-show-r ui-visible-md ui-circle ui-float-r'>
                                        <SvgIcon as='js' src={IconBarsRight} opacity='no' />
                                    </Button>
                                }

                                {/* toggle dark mode */}
                                <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-circle ui-float-r'>
                                    <SvgIcon as='js' src={IconMoon} className='ui-visible-dark' />
                                    <SvgIcon as='js' src={IconSun} className='ui-visible-light' />
                                </Button>

                                {/* social links */}
                                <span className='ui-hidden-md'>
                                    <span className='ui-sidebar-add-l'>
                                        <div className='ui-m-15-v ui-visible-md' />
                                        {socialLinks.map((item: SocialLinksProps) => {
                                            return (
                                                <Button key={item.title} square ghost title={item.title} href={item.url} className='ui-circle ui-float-r ui-no-float-md' target='_blank' rel='nofollow'>
                                                    <SvgIcon as='js' src={item.icon} />
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
            <RoutePaths />

            {/* top button */}
            <TopButton />

            {/* header sidebar */}
            <Sidebar pos='l' className='ui-round'>
                <Sidebar.Title className='ui-sidebar-title ui-p-15-h ui-p-10-v ui-border-b ui-border-light'>
                    <Button square ghost title='Close' className='ui-sidebar-close ui-circle'>
                        <SvgIcon as='js' src={IconAngleLeft} />
                    </Button>
                    <img className='ui-m-5-v ui-m-3-l' src={logo} alt='UI lab' srcSet={logoSrcSet} />
                </Sidebar.Title>
                <Sidebar.Content className='ui-scroll-v' />
            </Sidebar>

            {/* page sidebar */}
            {pathname !== '/' &&
                <Sidebar pos='r' className='ui-round'>
                    <Sidebar.Title className='ui-sidebar-title ui-p-15-h ui-p-10-v ui-border-b ui-border-light'>
                        <Button square ghost title='Close' className='ui-sidebar-close ui-circle'>
                            <SvgIcon as='js' src={IconAngleRight} />
                        </Button>
                        <div className='ui-font-16 ui-m-15-v ui-m-4-l'>Docs</div>
                    </Sidebar.Title>
                    <Sidebar.Content className='ui-no-p ui-scroll-v' />
                </Sidebar>
            }
        </>
    );

}