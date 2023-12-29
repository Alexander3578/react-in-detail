import React from 'react';
import {ClockViewPropsType} from './Clock';



export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}: ClockViewPropsType) => {

    const timesString = (time: number) => {
        return time < 10 ? `0${time}` : time
    }

    return <div>
        <span>{timesString(date.getHours())}</span>
        :
        <span>{timesString(date.getMinutes())}</span>
        :
        <span>{timesString(date.getSeconds())}</span>
    </div>
}