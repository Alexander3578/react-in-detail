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
                      items={[]}
                      onChange={onChangeHandler}
                      onClick={action('some item was clicked')}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened'}
                      collapsed={false}
                      items={[{title: 'D', value: 1},
                          {title: 'V', value: 2},
                          {title: 'S', value: 3}]}
                      onChange={() => {
                      }}
                      onClick={action('some item was clicked')}/>
}

export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      items={[{title: 'D', value: 1},
                          {title: 'V', value: 2},
                          {title: 'S', value: 3}]}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      onClick={action('some item was clicked')}/>
}