import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Button from '@components/Button';
import Grid from '@components/Grid';

// layouts
import Code from '@layouts/Code';

// contexes
import { StoreContext } from './../App';

interface PreviewProps {

    children?: React.ReactNode,

    value: string;
    indSize: number;
    themeColors: ColorsProps[];

}

interface ColorsProps {

    name: string;
    theme: string;
    color: string;

}

export default function Preview(

    { children, value, indSize, themeColors }:PreviewProps) {

        const storeContext = useContext(StoreContext);

        // theme switcher
        const [switchTheme, setSwitchTheme] = useState(null);

        useEffect(() => {
            if (switchTheme) {
                storeContext.setStore((values: any) => ({...values, ['previewTheme']: switchTheme}));
            }
        }, [switchTheme]);

        return (
            <>
            <h3 className='ui-h3'>Preview</h3>
            <Button.Wrapper ease='1st' className='ui-align-r ui-md-align-c ui-p-10 ui-border-h ui-border-t ui-round-t'>
                <span className='ui-m-10-r ui-opacity-half'>Themes</span>

                {themeColors && themeColors.map((item: ColorsProps) => {
                    const theme = `${item.theme} ${item.color}`
                    const classes = `ui-m-1-h ui-m-1-r ui-round ${theme}`;

                    return (
                        <Button key={item.name} title={`${item.name} Theme`} square noease size='xs' className={classes} onClick={() => setSwitchTheme(theme)} />
                    )
                })}
            </Button.Wrapper>
            <Grid.Row gap='no' className='ui-border-h ui-border-t'>
                <Grid.Col lg={{ size: 6, push: 3 }} size={8} push={2} fluid='sm' className='ui-p-10-h ui-p-30-v ui-m-30-v'>
                    {children}
                </Grid.Col>
            </Grid.Row>
            <div className='ui-p-10 ui-border-h ui-border-t'>
                Usage
            </div>
            <Code indSize={indSize} className='ui-round-b' value={value} />
            </>
        )
    }

    export const previewTheme = 'ui-theme-base ui-fill-dark-100';