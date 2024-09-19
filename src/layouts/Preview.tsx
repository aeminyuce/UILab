import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Button from '@components/Button';
import Dropdown from '@components/Dropdown';
import Grid from '@components/Grid';
import Icon from '@components/Icon';

// layouts
import Code from '@layouts/Code';

// utils
import { StoreContext } from '@utils/StoreReducer';

// assets
const icon_angle_down = require('@icon/angle-down.svg') as string;

interface PreviewProps {

    children?: React.ReactNode,

    value: string;
    indSize: number;
    actions: {
        theme?: string;
        style?: string;
    };
    themeColors: ColorsProps[];

}

interface ColorsProps {

    name: string;
    theme: string;
    color: string;

}

export default function Preview(

    { children, value, indSize, actions, themeColors }:PreviewProps) {
        const { store, setStore } = useContext(StoreContext);

        const storedTheme = store?.calendar?.theme;
        const storedStyle = store?.calendar?.style;

        const [selectedColor, setSelectedColor] = useState('No');

        useEffect(() => {

            // update selected color when theme switches
            if (themeColors) { themeColors.forEach((item: ColorsProps) => {
                const theme = `${item.theme} ${item.color}`;
                if (theme === storedTheme) setSelectedColor(item.name);
            }); }

        }, [storedTheme]);

        const switcherItemClasses = 'ui-cursor-default';

        return (
            <>
            <div className='ui-align-r ui-md-align-c ui-p-5 ui-border-h ui-border-t ui-round-t'>
                {actions.theme &&
                    <Dropdown align='l'>
                        <Button ghost className='ui-round'>
                            <ShowColor name={selectedColor} theme={storedTheme} />
                            <Icon toggle src={icon_angle_down} className='ui-m-15-l' />
                        </Button>
                        <Dropdown.Menu hasIcon className='ui-round ui-shadow-lg'>

                            <Dropdown.Item selected className={switcherItemClasses} onClick={() => setStore({ type: actions.theme, theme: null })}>
                                <ShowColor name='No' />
                            </Dropdown.Item>

                            {themeColors && themeColors.map((item: ColorsProps) => {
                                const theme = `${item.theme} ${item.color}`

                                return (
                                    <Dropdown.Item key={item.name} className={switcherItemClasses} onClick={() => setStore({ type: actions.theme, theme: theme })}>
                                        <ShowColor name={item.name} theme={theme} />
                                    </Dropdown.Item>
                                )
                            })}

                        </Dropdown.Menu>
                    </Dropdown>
                }
            </div>
            <Grid.Row gap='no' className='ui-border-h ui-border-t'>
                <Grid.Col lg={{ size: 6, push: 3 }} size={8} push={2} fluid='sm' className='ui-p-10-h ui-p-30-v ui-m-30-v'>
                    {children}
                </Grid.Col>
            </Grid.Row>
            <div className='ui-p-10 ui-border-h ui-border-t'>Usage</div>
            <Code indSize={indSize} className='ui-round-b' value={value} />
            </>
        )
    }

interface ShowColorProps {

    name: string;
    theme?: string;

}

const ShowColor = ({ name, theme }:ShowColorProps) => {
    const size = '14px';
    const classes =`ui-m-10-r ui-inline-block ui-circle ui-round ${theme ? theme : 'ui-border'}`;

    return (
        <>
        <span className={classes} style={{ width: size, height: size }}/>
        {`${name} Theme`}
        </>
    )
}