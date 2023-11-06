import React, {useState} from 'react';
import {RatingValueType} from '../rating/Rating';

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating: React.FC<UncontrolledRatingPropsType> = ({defaultValue, onChange}) => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0);

    return (
        <div>
            <Star selected={ratingValue > 0} setValue={() => {setRatingValue(1); onChange(1)}}/>
            <Star selected={ratingValue > 1} setValue={() => {setRatingValue(2); onChange(2)}}/>
            <Star selected={ratingValue > 2} setValue={() => {setRatingValue(3); onChange(3)}}/>
            <Star selected={ratingValue > 3} setValue={() => {setRatingValue(4); onChange(4)}}/>
            <Star selected={ratingValue > 4} setValue={() => {setRatingValue(5); onChange(5)}}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={
        props.setValue
    }>
        {props.selected ? <b>star </b> : 'star '}
    </span>

}

