import React, {useCallback} from 'react';
import {useMemo, useState} from 'react';


export default {
    title: 'useState demo'
}

function generateNumber() {
    return 0;
}

export const HelpToReactMemoExample = () => {

    //const initialValue = useMemo(generateNumber, [])

    const changer = (state: number) => {
        console.log(state === counter)
        return state + 1;}

    const [counter, setCounter] = useState(generateNumber);

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}