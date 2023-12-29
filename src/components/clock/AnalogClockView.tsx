import React from 'react';
import {ClockViewPropsType} from './Clock';
import S from './AnalogClockView.module.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}: ClockViewPropsType) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${(date.getMinutes() * 6) + (date.getSeconds() / 10)}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${(date.getHours() * 30) + (date.getMinutes() / 2)}deg)`
    };

    return (
        <div className={S.clock}>
            <div className={S["analog-clock"]}>
                <div className={`${S.dial} ${S.seconds}`} style={secondsStyle} />
                <div className={`${S.dial} ${S.minutes}`} style={minutesStyle} />
                <div className={`${S.dial} ${S.hours}`} style={hoursStyle} />
            </div>
        </div>
    )
}