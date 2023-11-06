import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import {useState} from 'react';

export default {
    title: 'Accordion stories',
    component: Accordion
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed'}
                      collapsed={true}
                      onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened'}
                      collapsed={false}
                      onChange={()=>{}}/>
}

export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      onChange={()=>{setCollapsed(!collapsed)}}/>
}