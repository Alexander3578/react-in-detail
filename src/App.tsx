import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {UncontrolledOnOff} from './components/onOff/UncontrolledOnOff';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/rating/UncontrolledRating';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState(false)

    return (
        <div className="App">
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <UncontrolledAccordion titleValue={'Menu'}/>

            <UncontrolledOnOff/>
            <OnOff on={on} setOn={setOn}/>

            <UncontrolledRating/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
        </div>
    );
}

export default App;
