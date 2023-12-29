import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}



const AccordionSecret:React.FC<AccordionPropsType> = ({titleValue, collapsed, onChange, items, onClick}) => {
    return (
        <div>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    );
};

export const Accordion = React.memo(AccordionSecret);

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = React.memo(AccordionTitleSecret);

function AccordionTitleSecret(props: AccordionTitlePropsType){
    return <h3 onClick={props.onChange}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = React.memo(AccordionBodySecret);

function AccordionBodySecret(props: AccordionBodyPropsType) {

    const {items, onClick} = props

    return <ul>
        {items.map((i, index) => <li key={index} onClick={() => {onClick(i.value)}}>{i.title}</li>)}
    </ul>
}