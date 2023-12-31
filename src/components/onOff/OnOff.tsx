import React from 'react';

type OnOffPropsType = {
    on: boolean,
    setOn: (on: boolean) => void
}

const OnOffSecret:React.FC<OnOffPropsType> = ({on, setOn}) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        display: 'inline-block',
        marginLeft: '10px',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export const OnOff = React.memo(OnOffSecret)
