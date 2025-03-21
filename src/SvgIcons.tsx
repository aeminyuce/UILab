import * as React from 'react';
import { Fragment } from 'react';
import Alerts from '@components/Alerts';
import Button from '@components/Button';
import Grid from '@components/Grid';
import SvgIcon from '@components/SvgIcon';

// utils
import type { SizeListProps, IconsListProps } from '@utils/Models';
import { StoreActions } from '@utils/StoreActions';

// assets
import iconsList from './../icons-list.json';

import SpriteGeneral from '@icon/sprite/general.svg';
import SpriteTouch from '@icon/sprite/touch.svg';
import SpriteMedia from '@icon/sprite/media.svg';
import SpriteKitchen from '@icon/sprite/kitchen.svg';
import SpriteRealEstate from '@icon/sprite/real-estate.svg';
import SpriteWeather from '@icon/sprite/weather.svg';
import SpriteCommerce from '@icon/sprite/commerce.svg';
import SpriteFiles from '@icon/sprite/files.svg';
import SpriteSocial from '@icon/sprite/social.svg';
import SpriteBrands from '@icon/sprite/brands.svg';

import "../less/helpers/iconlist";

export default function () {

    const { iconSize, setIconSize, setIconCopy } = StoreActions();

    // icon sizes
    const sizeList = [
        { name: 'XXL', size: 'xxl' },
        { name: 'XL', size: 'xl', selected: true },
        { name: 'L', size: 'lg' },
        { name: '-', size: '-' },
        { name: 'SM', size: 'sm' },
        { name: 'XS', size: 'xs' },
    ]

    // sprites
    const spritesList = {
        'General': SpriteGeneral,
        'Touch': SpriteTouch,
        'Media': SpriteMedia,
        'Kitchen': SpriteKitchen,
        'Real Estate': SpriteRealEstate,
        'Weather': SpriteWeather,
        'Commerce': SpriteCommerce,
        'Files': SpriteFiles,
        'Social': SpriteSocial,
        'Brands': SpriteBrands,
    }

    // get total icons length
    let totalLength = 0;

    iconsList.map((item: IconsListProps) => {
        totalLength += item.length;
    });

    // helpers
    const copyText = (text: string) => {
        if (document.hasFocus()) {
            navigator.clipboard.writeText(text).then(() => {
                Alerts.Message({
                    msg: `<b>Copied!</b><br>${text}`
                });
            }).catch((err) => {
                Alerts.Message({
                    msg: `<b>Failed to copy ${text}!</b><br>${err}`,
                    theme: 'danger'
                });
            });
        }
    };

    return (
        <Grid.Container as='main' noGutter='lg'>
            <Grid.Container fixed='xl' as='div' className='ui-p-15 ui-m-30-v ui-sm-no-p'>

                <div className='ui-sm-no-p ui-align-c ui-p-30-v'>

                    <Grid.Row>
                        <Grid.Col size={12}>
                            <h2 className='ui-h2'>
                                SVG Icons
                                <span className='ui-font-18 ui-m-5-v ui-block ui-opacity-half'>(Total Icons: {totalLength})</span>
                            </h2>
                        </Grid.Col>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Col size={8} offset={2}>
                            <h4 className='ui-h4 ui-m-10-b'>Change Size</h4>
                            <Button.Wrapper largeButtons as='holder' ease='1st' className='ui-m-20-b ui-theme-ice'>
                                {sizeList.map((item: SizeListProps) => {
                                    let classes = 'ui-round';
                                    if ((iconSize === null && item.selected) || (iconSize !== null && item.size === iconSize)) classes += ' ui-fill-dark-100';

                                    return (
                                        <Button noease key={item.name} size-ui-size={item.size} className={classes} onClick={() => setIconSize(item.size)}>
                                            {item.name}
                                        </Button>
                                    )
                                })}
                            </Button.Wrapper>
                        </Grid.Col>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Col size={12}>
                            {iconsList.map((item: IconsListProps) => {
                                let listClasses = 'iconlist ui-list-custom ui-theme-base ui-ease-1st-bg';

                                if (iconSize !== '') {
                                    listClasses += ` ui-icons-${iconSize}`;
                                }

                                return (
                                    <Fragment key={item.category}>
                                        <h2 className="ui-h2">
                                            {item.category} Icons
                                            <span className="ui-font-16 ui-m-5-v ui-block ui-opacity-half">
                                                ({item.length} icons)
                                            </span>
                                        </h2>
                                        <ul className={listClasses}>
                                            {item.icons.map((name: string) => {
                                                const classes = name.includes('loader-') ? 'ui-animate-spin' : null;

                                                return (
                                                    <li key={name} onClick={() => copyText(setIconCopy(name))}>
                                                        <SvgIcon as='sprite' src={spritesList[item.category]} symbolId={name} className={classes} />
                                                        <span>{name}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </Fragment>
                                )
                            })}
                        </Grid.Col>
                    </Grid.Row>

                </div>

            </Grid.Container>
        </Grid.Container>
    );
}