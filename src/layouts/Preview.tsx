import * as React from 'react';
import Button from '@components/Button';
import Dropdown from '@components/Dropdown';
import Grid from '@components/Grid';
import SvgIcon from '@components/SvgIcon';

// layouts
import Code from '@layouts/Code';

// utils
import type { PreviewProps, ThemeListProps, ShowColorProps } from '@utils/Models';

// assets
import { IconAngleDown } from '@icon/js/general/angle-down';

export default function Preview(props:PreviewProps) {

    const { children, type, value, indSize, theme, style, themeList } = props;

    const switcherItemClasses = 'ui-cursor-default';
    let selectedColor = '';

    themeList.forEach((item: ThemeListProps) => { // update selected color when theme switches
        const name = `${item.theme} ${item.color}`;
        if (name === theme.get) selectedColor = item.name;
    });

    return (
        <>
        <div className='ui-align-r ui-md-align-c ui-p-5 ui-border-h ui-border-t ui-round-t'>
            {theme.set &&
                <Dropdown align='l'>
                    <Button ghost className='ui-round'>
                        <ShowColor name={selectedColor} theme={theme.get} />
                        <SvgIcon as='js' toggle src={IconAngleDown} className='ui-m-15-l' />
                    </Button>
                    <Dropdown.Menu hasIcon className='ui-round ui-shadow-lg'>

                        <Dropdown.Item selected className={switcherItemClasses} onClick={() => theme.set(null)}>
                            <ShowColor name='No' />
                        </Dropdown.Item>

                        {themeList.map((item: ThemeListProps) => {
                            const name = `${item.theme} ${item.color}`;

                            return (
                                <Dropdown.Item key={item.name} className={switcherItemClasses} onClick={() => theme.set(name)}>
                                    <ShowColor name={item.name} theme={name} />
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
        <Code indSize={indSize} className='ui-round-b' type={type} value={value} />
        </>
    )

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