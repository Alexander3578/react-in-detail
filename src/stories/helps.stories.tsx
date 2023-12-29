import React, {useMemo} from 'react';
import {useState} from 'react';
import {Select} from '../components/select/Select';

export default {
    title: 'helps'
}

type selectArrType = {
    value: string
    title: any
    count: number
}

const selectArr: selectArrType[] = [
    {value: '1', title: 'Minsk', count: 12000},
    {value: '2', title: 'Kiev', count: 0},
    {value: '3', title: 'Moscow', count: 12000000},
    {value: '4', title: 'Madrid', count: 5000000},
    {value: '5', title: 'New-York', count: 3000000}
]

type SelectNumberPropsType = {
    array: selectArrType[]
}

const SelectOneSecret: React.FC<SelectNumberPropsType> = ({array}) => {
    console.log('ONE');

    const [value, setValue] = useState('1');

    return <Select value={value}
                   onChange={(value) => {
                       setValue(value)
                   }}
                   items={array}/>
}

const SelectOne = React.memo(SelectOneSecret);

const SelectTwoSecret: React.FC<SelectNumberPropsType> = ({array}) => {
    console.log('TWO');
    const [value, setValue] = useState('1');

    return <Select value={value}
                   onChange={(value) => {
                       setValue(value)
                   }}
                   items={array}/>
}

const SelectTwo = React.memo(SelectTwoSecret);

const SelectThreeSecret: React.FC<SelectNumberPropsType> = ({array}) => {
    console.log('THREE');

    const [value, setValue] = useState('1');

    return <Select value={value}
                   onChange={(value) => {
                       setValue(value)
                   }}
                   items={array}/>
}

const SelectThree = React.memo(SelectThreeSecret);

export const HelpToReactMemoExample = () => {
    const styles = {
        display: 'flex',
        padding: '10px'
    }

    return (
        <div style = {styles}>
            <SelectOne array={useMemo(()=>{
                for (let i = 1; i <= selectArr.length; i++) {
                    let fake = 0;
                    while (fake < 1000000) {
                        fake++;
                        const fakeValue = Math.random();
                    }
                }
                return selectArr.filter(u => u.title.toLowerCase().indexOf('m') > -1)
            }, [selectArr])}/>
            <SelectTwo array={useMemo(()=>{
                return selectArr.filter(u => u.count > 1000000)
            }, [selectArr])}/>
            <SelectThree array={useMemo(()=>{
                return selectArr.filter(u => u.value != '2')
            }, [selectArr])}/>
        </div>
    )
}