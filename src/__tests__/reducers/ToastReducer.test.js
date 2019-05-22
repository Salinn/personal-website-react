// Reducer
import articleReducer from '../../reducers/ToastReducer';
// Action Types
import * as types from '../../actions/ActionTypes';
// State
import initialState from '../../store/initialState';

const reducerInitialState = initialState.toasts;

describe('Toast Reducer', () => {
    it('should return the initial state', () => {
        expect(articleReducer(undefined, {})).toEqual(reducerInitialState)
    });

    it('should not affect state', () => {
        expect(articleReducer(reducerInitialState, { type: 'NOT_EXISTING' })).toEqual(reducerInitialState)
    });

    it('should add one toast to the end of the list', () => {
        const action = {
            type: types.CREATE_TOAST_MESSAGE,
            toast: {
                id: '42',
                message: 'The answer to life'
            }
        };
        const existingState = [
            { id: '1', message: 'Tom Brady is never going to retire' },
            { id: '2', message: 'Tom Brady may play in the NFL with his kids' }
        ]
        const nextState = articleReducer(existingState, action);

        const expectedState = [
            { id: '1', message: 'Tom Brady is never going to retire' },
            { id: '2', message: 'Tom Brady may play in the NFL with his kids' },
            { id: '42', message: 'The answer to life' }
        ]

        expect(nextState).toEqual(expectedState);
    });

    it('should add one toast to the end of the list', () => {
        const action = { type: types.REMOVE_TOAST_MESSAGE, id: '42' };
        const existingState = [
            { id: '1', message: 'Tom Brady is never going to retire' },
            { id: '2', message: 'Tom Brady may play in the NFL with his kids' },
            { id: '42', message: 'The answer to life' }
        ]
        const nextState = articleReducer(existingState, action);

        const expectedState = [
            { id: '1', message: 'Tom Brady is never going to retire' },
            { id: '2', message: 'Tom Brady may play in the NFL with his kids' },
        ]

        expect(nextState).toEqual(expectedState);
    });
});