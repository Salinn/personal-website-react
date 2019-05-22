// External Libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// Internal Files
import * as actions from '../../actions/ContactMe';
import * as types from '../../actions/ActionTypes';
import initialState from '../../store/initialState';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);

afterEach(() => {
    mock.reset();
});

describe('ContactMe Actions', () => {
    // Actions
    it('should send the message to update the email field value', () => {
        const given = { name: 'email', value: 'pdarragh45@massmutual.com' }
        const expectedAction = { type: types.CONTACT_ME_FIELD_UPDATE, fieldName: 'email', value: 'pdarragh45@massmutual.com' };

        expect(actions.fieldChanged(given)).toEqual(expectedAction)
    });

    // //Thunks
    it('should create a toast with zero info', async () => {
        const expectedToast = {
            message: 'Thanks for reaching out! I will get back to you soon.',
            color: 'info',
            id: '1'
        }
        const store = mockStore(initialState);
        const watchUrl = `${process.env.REACT_APP_API_URL_BASE}/contactme`
        mock.onPost(watchUrl).reply(200, {
            response: {
                messageRecievedNumber: '1234'
            }
        });

        const expectedDispatchedActions = [
            { type: types.CONTACT_ME_RESET_FIELDS },
            { type: types.CREATE_TOAST_MESSAGE, toast: expectedToast },
        ];

        await store.dispatch(actions.formSubmission());

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });

    it('should create a toast with zero info', async () => {
        const expectedToast = {
            message: 'Sorry something went wrong, I will look into it!',
            color: 'info',
            id: '2'
        }
        const store = mockStore(initialState);
        const watchUrl = `${process.env.REACT_APP_API_URL_BASE}/contactme`
        mock.onPost(watchUrl).reply(500);

        const expectedDispatchedActions = [
            { type: types.CREATE_TOAST_MESSAGE, toast: expectedToast },
        ];

        await store.dispatch(actions.formSubmission());

        const actualDispatchedActions = store.getActions();
        expect(actualDispatchedActions).toEqual(expectedDispatchedActions);
    });
});