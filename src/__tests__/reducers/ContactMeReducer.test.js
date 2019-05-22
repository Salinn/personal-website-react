// Reducer
import articleReducer from '../../reducers/ContactMeReducer';
// Action Types
import * as types from '../../actions/ActionTypes';
// State
import initialState from '../../store/initialState';

const reducerInitialState = initialState.contactMe;

describe('ContactMe Reducer', () => {
    it('should return the initial state', () => {
        expect(articleReducer(undefined, {})).toEqual(reducerInitialState)
    });

    it('should not affect state', () => {
        expect(articleReducer(reducerInitialState, { type: 'NOT_EXISTING' })).toEqual(reducerInitialState)
    });

    it('should update the correct field based on the name and value passed', () => {
        const action = {
            type: types.CONTACT_ME_FIELD_UPDATE,
            fieldName: 'email',
            value: 'paul.m.darragh@gmail.com'
        };
        const nextState = articleReducer(reducerInitialState, action);

        const expectedState = {
            ...reducerInitialState,
            email: 'paul.m.darragh@gmail.com',
        };

        expect(nextState).toEqual(expectedState);
    });

    it('should reset the state after filling out the form', () => {
        const action = { type: types.CONTACT_ME_RESET_FIELDS, };
        const existingState = {
            ...reducerInitialState,
            name: 'Paul',
            email: 'paul.m.darragh@gmail.com',
            message: 'Hello World'
        }
        const nextState = articleReducer(existingState, action);

        const expectedState = { ...reducerInitialState, };

        expect(nextState).toEqual(expectedState);
    });
});