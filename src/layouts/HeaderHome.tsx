import * as React from 'react';
import { useId } from 'react';
import Button from '@components/Button';
import Grid from '@components/Grid';
import HeaderSticky from '@components/HeaderSticky';
import Icon from '@components/Icon';

// assets
const icon_dribbble = require("@icon/dribbble.svg") as string;
const icon_github = require("@icon/github.svg") as string;
const icon_bars_right = require("@icon/bars-right.svg") as string;
const icon_sun = require("@icon/sun.svg") as string;
const icon_moon = require("@icon/moon.svg") as string;

export default function () {

    const id = useId();

    // responsive logo
    const logo = {
        default: 'img/uilab-logo.png',
        responsive: [
            {
                size: '2x',
                url: '/img/uilab-logo@2x.png',
            },
        ]
    }

    let srcSet = '';

    for (let i = 0; i < logo.responsive.length; i++) {
        if (i > 0) {
            srcSet += ', ';
        }

        const current = logo.responsive[i];
        srcSet += current.url + ' ' + current.size;
    }

    // social links
    const socialUrls = [
        {
            title: 'GitHub',
            url: 'https://github.com/aeminyuce/UILab',
            icon: icon_github,
        },
        {
            title: 'Dribbble',
            url: 'https://dribbble.com/aeminyuce',
            icon: icon_dribbble,
        },
    ];

    return (
        <HeaderSticky className='ui-container ui-form-lg ui-invert-bg ui-theme-base ui-fill-dark-100 ui-visible' dataClasses='ui-shadow-lg'>
            <Grid.Row>
                <Grid.Static fluid='no'>
                    <Grid.Col size={'250'} xs={'100'} className='ui-p-15-l ui-p-10-v'>
                        <img className='ui-m-5-t' src={logo.default} alt='UI lab' srcSet={srcSet} />
                    </Grid.Col>
                    <Grid.Row>
                        <Grid.Col size={'12'} className='ui-align-r ui-no-p-l ui-icons-no-opacity ui-ease-1st-btn'>
                            <>
                                {socialUrls.map((item: any, j: number) => {
                                    return (
                                        <Button key={id + j} noease square ghost title={item.title} href={item.url} className='ui-circle' target='_blank' rel='nofollow'>
                                            <Icon src={item.icon} />
                                        </Button>
                                    )
                                })}
                                <Button noease square ghost title='Toggle Dark Mode' data={{ 'tooltip': '', 'only': 'desktop' }} className='ui-darkmode-toggle ui-circle'>
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
    );
}