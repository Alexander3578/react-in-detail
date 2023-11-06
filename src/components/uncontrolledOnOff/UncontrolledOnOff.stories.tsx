import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff
};

const onChangeHandler = action('on or off was clicked')

export const DemoUncontrolledOnOff = () => {
    return <UncontrolledOnOff onChange={onChangeHandler}/>
}

export const OnUncontrolledOnOff = () => {
    return <UncontrolledOnOff onChange={onChangeHandler} defaultOn={true}/>
}

export const OffUncontrolledOnOff = () => {
    return <UncontrolledOnOff onChange={onChangeHandler} defaultOn={false}/>
}

export const DefaultInputValue = () => <input defaultValue={'yo'} onChange={onChangeHandler}/>

