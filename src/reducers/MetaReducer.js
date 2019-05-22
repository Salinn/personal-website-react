import initialState from '../store/initialState'
import {
    FETCH_REQUEST_STARTED,
    FETCH_REQUEST_FINISHED
} from '../actions/ActionTypes'

export default (state = initialState.meta, action) => {
    switch (action.type) {
        case FETCH_REQUEST_STARTED:
            return { ...state, loading: true };
        case FETCH_REQUEST_FINISHED:
            return { ...state, loading: false };
        default:
            return state;
    }
}