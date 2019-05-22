// Reducer
import articleReducer from '../../reducers/MetaReducer';
// Action Types
import * as types from '../../actions/ActionTypes';
// State
import initialState from '../../store/initialState';

const reducerInitialState = initialState.meta;

describe('Meta Reducer', () => {
    it('should return the initial state', () => {
        expect(articleReducer(undefined, {})).toEqual(reducerInitialState)
    });

    it('should not affect state', () => {
        expect(articleReducer(reducerInitialState, { type: 'NOT_EXISTING' })).toEqual(reducerInitialState)
    });

    it('should indicate that we are currently making a request', () => {
        const action = { type: types.FETCH_REQUEST_STARTED };
        const nextState = articleReducer(reducerInitialState, action);

        const expectedState = {
            ...reducerInitialState,
            loading: true,
        };

        expect(nextState).toEqual(expectedState);
    });

    it('should indicate that we finished making a request', () => {
        const action = { type: types.FETCH_REQUEST_FINISHED, };
        const existingState = {
            ...reducerInitialState,
            loading: true
        }
        const nextState = articleReducer(existingState, action);

        const expectedState = { ...reducerInitialState, };

        expect(nextState).toEqual(expectedState);
    });
});