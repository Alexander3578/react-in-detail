import React, {useState} from 'react';
import {RatingValueType} from './Rating';

export const UncontrolledRating:React.FC = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div>
            <Star selected={ratingValue > 0} value={1} setValue={setRatingValue}/>
            <Star selected={ratingValue > 1} value={2} setValue={setRatingValue}/>
            <Star selected={ratingValue > 2} value={3} setValue={setRatingValue}/>
            <Star selected={ratingValue > 3} value={4} setValue={setRatingValue}/>
            <Star selected={ratingValue > 4} value={5} setValue={setRatingValue}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.setValue(props.value)}}>
        {props.selected ? <b>star </b> : 'star '}
    </span>

}

