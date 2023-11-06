import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Rating, RatingValueType} from './Rating';
import {useState} from 'react';

export default {
    title: 'Rating stories',
    component: Rating
};

const onChangeHandler = action('onChange')

export const EmptyRating = () => <Rating ratingValue={0} setRatingValue={()=>{}}/>
export const RatingOne = () => <Rating ratingValue={1} setRatingValue={()=>{}}/>
export const RatingTwo = () => <Rating ratingValue={2} setRatingValue={()=>{}}/>
export const RatingThree = () => <Rating ratingValue={3} setRatingValue={()=>{}}/>
export const RatingFour = () => <Rating ratingValue={4} setRatingValue={()=>{}}/>
export const RatingFive = () => <Rating ratingValue={5} setRatingValue={()=>{}}/>
export const RatingDemo = () => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating ratingValue={rating} setRatingValue={setRating}/>
}