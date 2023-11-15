import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {UncontrolledOnOff} from './components/uncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/uncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/uncontrolledRating/UncontrolledRating';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState(false)

    return (
        <div className="App">
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       items={}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <UncontrolledAccordion titleValue={'Menu'}/>

            <UncontrolledOnOff onChange={()=>{}}/>
            <OnOff on={on} setOn={setOn}/>

            <UncontrolledRating onChange={() => {}}/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
        </div>
    );
}

export default App;
