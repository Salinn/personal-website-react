// Redux
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas'
import rootReducer from '../reducers';
import initialState from './initialState';

const saga = createSagaMiddleware();
const middleware = [saga]

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );

    saga.run(rootSaga)

    return store
}