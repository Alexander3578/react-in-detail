import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {OnOff} from './OnOff';
import {useState} from 'react';

export default {
    title: 'OnOff stories',
    component: OnOff
};

const onChangeHandler = action('on or off was clicked')

export const On = () => <OnOff on={true} setOn={()=>{}}/>
export const Off = () => <OnOff on={false} setOn={()=>{}}/>
export const OnOffDemo = () => {
    const [value, setValue] = useState<boolean>(false);
    return <OnOff on={value} setOn={setValue}/>
}
