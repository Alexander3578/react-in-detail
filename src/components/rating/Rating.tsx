import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    ratingValue: RatingValueType
    setRatingValue: (rating: RatingValueType) => void
}

export const RatingSecret: React.FC<RatingPropsType> = ({ratingValue, setRatingValue}) => {
    return (
        <div>
            <Star selected={ratingValue > 0} setValue={() => setRatingValue(1)}/>
            <Star selected={ratingValue > 1} setValue={() => setRatingValue(2)}/>
            <Star selected={ratingValue > 2} setValue={() => setRatingValue(3)}/>
            <Star selected={ratingValue > 3} setValue={() => setRatingValue(4)}/>
            <Star selected={ratingValue > 4} setValue={() => setRatingValue(5)}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.setValue}>
        {props.selected ? <b>star </b> : 'star '}
    </span>

}

export const Rating = React.memo(RatingSecret);

