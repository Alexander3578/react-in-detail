import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';

export type ClockPropsType = {
    mode?: 'analog' | 'digital'
}

export const Clock: React.FC<ClockPropsType> = ({mode}: ClockPropsType) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    let view;

    switch (mode) {
        case 'analog': {
            view = <AnalogClockView date={date}/>
            break;
        }
        default: {
            view = <DigitalClockView date={date}/>
        }
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

