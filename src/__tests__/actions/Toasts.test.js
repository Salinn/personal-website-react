// External Libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// Internal Files
import * as actions from '../../actions/Toasts';
import * as types from '../../actions/ActionTypes';
import initialState from '../../store/initialState';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.useFakeTimers();

describe('Toast Actions', () => {
    // Actions
    it('should send the message that toast 12 needs to be removed', () => {
        const given = { id: '12' }
        const expectedAction = { type: types.REMOVE_TOAST_MESSAGE, id: '12' };

        expect(actions.removeToast(given)).toEqual(expectedAction)
    });

    // //Thunks
    it('should create a toast with zero info', async () => {
        const given = { delayedTime: 0 }
        const expectedToast = {
            message: 'Please Email Us at help@massmutual.com for help',
            color: 'info',
            id: '1'
        }
        const store = mockStore(initialState);

        const expectedDispatchedActions = [
            { type: types.CREATE_TOAST_MESSAGE, toast: expectedToast },
            { type: types.REMOVE_TOAST_MESSAGE, id: '1' }
        ];

        await store.dispatch(actions.createToast(given));
        jest.runAllTimers();

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });
});