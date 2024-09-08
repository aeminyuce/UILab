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

    value: string,
    indSize: number,

}

export default function Preview(

    { children, value, indSize }:PreviewProps) {

        const storeContext = useContext(StoreContext);

        // settings
        const space = 4; // default indentation

        // replacers
        const reFirstSpace = new RegExp('^\\s{' + ((indSize * space) + 1) + '}', 'g'); // remove first space
        const reSpaces = new RegExp('(?!\\n|\\r)\\s{' + indSize * space + '}', 'g'); // remove spaces by specified tab size except new lines
        const reLastSpace = new RegExp(/\s+$/g); // remove last space

        value = value.replace(reFirstSpace, '').replace(reSpaces, '').replace(reLastSpace, '');

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
                <span className='ui-opacity-half'>Themes</span>
                <Button title='Base Theme' square noease size='xs' className='ui-m-10-l ui-m-1-r ui-circle ui-theme-base ui-fill-dark-100' onClick={() => setSwitchTheme('ui-theme-base ui-fill-dark-100')} />
                <Button title='Sub Theme' square noease size='xs' className='ui-m-1-h ui-circle ui-theme-sub ui-fill-dark-100' onClick={() => setSwitchTheme('ui-theme-sub ui-fill-dark-100')} />
                <Button title='Green Theme' square noease size='xs' className='ui-m-1-h ui-circle ui-theme-green ui-fill-dark-100' onClick={() => setSwitchTheme('ui-theme-green ui-fill-dark-100')} />
                <Button title='Yellow Theme' square noease size='xs' className='ui-m-1-h ui-circle ui-theme-yellow ui-fill-dark-100' onClick={() => setSwitchTheme('ui-theme-yellow ui-fill-dark-100')} />
                <Button title='Orange Theme' square noease size='xs' className='ui-m-1-h ui-circle ui-theme-orange ui-fill-dark-100' onClick={() => setSwitchTheme('ui-theme-orange ui-fill-dark-100')} />
                <Button title='Red Theme' square noease size='xs' className='ui-m-1-h ui-circle ui-theme-red ui-fill-dark-100' onClick={() => setSwitchTheme('ui-theme-red ui-fill-dark-100')} />
            </Button.Wrapper>
            <Grid.Row gap='no' className='ui-border-h ui-border-t'>
                <Grid.Col lg={{ size: 6, push: 3 }} size={8} push={2} fluid='sm' className='ui-p-10-h ui-p-30-v ui-m-30-v'>
                    {children}
                </Grid.Col>
            </Grid.Row>
            <div className='ui-p-10 ui-border-h ui-border-t'>
                Usage
            </div>
            <Code indSize={8} className='ui-round-b' value={value} />
            </>
        )
    }

    export const previewTheme = 'ui-theme-base ui-fill-dark-100';