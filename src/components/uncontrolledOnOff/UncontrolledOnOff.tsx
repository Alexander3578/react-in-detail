import React, {useState} from 'react';

type UncontrolledOnOff = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff:React.FC<UncontrolledOnOff> = ({onChange, defaultOn}) => {

    let [on, setOn] = useState(defaultOn ? defaultOn : false)

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

    const offClicked = () => {
        setOn(false)
        onChange(false)
    }

    const onClicked = () => {
        setOn(true)
        onChange(true)
    }

    return(
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

