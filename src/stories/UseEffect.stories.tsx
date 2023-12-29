import React, {useCallback, useEffect} from 'react';
import {useMemo, useState} from 'react';


export default {
    title: 'useEffect demo'
}

export const useEffectSimpleExample = () => {

    //const initialValue = useMemo(generateNumber, [])

    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);

    useEffect(() => {
        document.title = counter.toString();
    })

    useEffect(() => {
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        document.title = counter.toString();
    }, [counter])


    return <>
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setFake(fake + 1)}>counter</button>
        counter: {counter}
        fake: {fake}
    </>
}

export const useEffectSetIntervalExample = () => {

    //const initialValue = useMemo(generateNumber, [])

    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);

    useEffect(() => {
        console.log('TATATA')
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

        return () => {
            console.log('STOP TATATA')
            clearInterval(setInterval(() => {
                setCounter((state) => state + 1)
            }, 1000))
        }
    }, [])

    // setTimeout(() => {}, 1000) wrong

    return <>
        {/*<button onClick={() => setFake(fake + 1)}>fake</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>counter</button>*/}
        counter: {counter}
        fake: {fake}
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Effect occurred')
        return () => {
            console.log('RESET')
        }
    }, [counter])

    return <>
        counter: {counter}
        <button onClick={()=> setCounter(counter + 1)}>+</button>
    </>
}

export const KeysTrackerEffectExample = () => {

    const [text, setText] = useState('');

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(state => state + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        <textarea value={text}/>
    </>
}