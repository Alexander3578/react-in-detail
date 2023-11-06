import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion
};

const onChangeHandler = action('onChange')

export const DemoUncontrolledAccordion = () => {
    return <UncontrolledAccordion titleValue={'UncontrolledAccordion'}/>
}
