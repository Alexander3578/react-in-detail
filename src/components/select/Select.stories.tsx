import {Select} from './Select';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';

export default {
    title: 'Select',
    component: Select,
}

export const SelectDemo = () => {

    const [value, setValue] = useState('1');

    return <Select value={value}
                   onChange={(value) => {setValue(value)}}
                   items={[{value: '1', title: 'Kiev'},
                       {value: '2', title: 'Moscow'},
                       {value: '3', title: 'Minsk'}
                   ]}/>
}

export const SelectDemoWithoutValue = () => {
    const [value, setValue] = useState('');

    return <Select value={value}
                   onChange={setValue}
                   items={[{value: '1', title: 'Kiev'},
                       {value: '2', title: 'Moscow'},
                       {value: '3', title: 'Minsk'}
                   ]}/>
}
