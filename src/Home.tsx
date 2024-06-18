import * as React from 'react';
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
    return (
        <>
            {/* header */}
            <HeaderSticky className='ui-container ui-form-lg ui-invert-bg ui-theme-base ui-fill-dark-100 ui-visible' dataClasses='ui-shadow-lg'>
                <Grid.Row>
                    <Grid.Static fluid='no'>
                        <Grid.Col size={'250'} xs={'100'} className='ui-p-15 ui-no-p-r'>
                            <img className='ui-m-5-t' src='img/uilab-logo.png' alt='UI lab' srcSet='/img/uilab-logo@2x.png 2x' />
                        </Grid.Col>
                        <Grid.Row>
                            <Grid.Col size={'12'} className='ui-align-r ui-p-15 ui-no-p-l ui-icons-no-opacity'>
                                <Button square ghost title='Toggle Dark Mode' data={{ 'tooltip': '', 'only': 'desktop' }} className='ui-darkmode-toggle ui-circle'>
                                    <Icon className='ui-visible-dark' src={icon_moon} />
                                    <Icon className='ui-visible-light' src={icon_sun} />
                                </Button>
                                <Button square ghost title='GitHub' href='https://github.com/aeminyuce/UILab' className='ui-circle' target='_blank'>
                                    <Icon src={icon_github} />
                                </Button>
                                <Button square ghost title='Dribbble' href='https://dribbble.com/aeminyuce' className='ui-circle' target='_blank'>
                                    <Icon src={icon_dribbble} />
                                </Button>
                                <Button square ghost className='ui-sidebar-show-r ui-visible-md ui-circle'>
                                    <Icon src={icon_bars_right} />
                                </Button>
                            </Grid.Col>
                        </Grid.Row>
                    </Grid.Static>
                </Grid.Row>
            </HeaderSticky>
        </>
    );
}