import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({titleValue}) => {

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    return (
        <div>
            <AccordionTitle title={titleValue} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            {!accordionCollapsed && <AccordionBody/>}
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

