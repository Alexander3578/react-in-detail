import {reducer, StateType} from './Reducer';

let state: StateType

beforeEach(() => {
    state = {
        collapsed: true
    }
})

test('Reducer should toggle value test', () => {

    const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

    let result = reducer(state, {type: TOGGLE_CONSTANT});

    expect(result.collapsed).toBe(false);

})

test('Action error type', () => {

    const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

    expect(() => reducer(state, {type: 'FAKETYPE'})).toThrowError();

})