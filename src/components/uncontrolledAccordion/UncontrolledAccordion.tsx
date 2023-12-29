import React, {useReducer, useState} from 'react';
import {reducer} from './Reducer';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({titleValue}) => {

    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            {/*<AccordionTitle title={titleValue} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            <AccordionTitle title={titleValue} onChange={() => {dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>-- {props.title} --</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

