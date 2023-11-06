import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {UncontrolledRating} from './UncontrolledRating';

export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating
};

const onChangeHandler = action('Rating was changed inside component')

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={onChangeHandler}/>
export const RatingOne = () => <UncontrolledRating defaultValue={1} onChange={onChangeHandler}/>
export const RatingTwo = () => <UncontrolledRating defaultValue={2} onChange={onChangeHandler}/>
export const RatingThree = () => <UncontrolledRating defaultValue={3} onChange={onChangeHandler}/>
export const RatingFour = () => <UncontrolledRating defaultValue={4} onChange={onChangeHandler}/>
export const RatingFive = () => <UncontrolledRating defaultValue={5} onChange={onChangeHandler}/>
export const RatingDemo = () => <UncontrolledRating onChange={onChangeHandler}/>
