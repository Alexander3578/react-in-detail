import {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'Input stories'
}

export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithTrackValue = () => {

    let [value, setValue] = useState('');

    return <><input value={value} onChange={(e) => {setValue(e.currentTarget.value)}}/> --- {value}</>
}

export const GetValueUncontrolledInputByButtonPress = () => {

    let [value, setValue] = useState<string | undefined>('');
    const inputRef = useRef<HTMLInputElement>(null);
    return <>
        <input ref = {inputRef}/>
        <button onClick={(e) => {setValue(inputRef.current?.value)}}>save</button>
        actual value: {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} onChange={onChangeHandler} checked={parentValue}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <><select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>New York</option>
    </select> {parentValue}</>
}

export const ControlledInputWithFixedValue = () => <input value={'Incubator'}/>