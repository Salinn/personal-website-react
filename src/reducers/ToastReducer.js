import initialState from '../store/initialState'
import {
    CREATE_TOAST_MESSAGE,
    REMOVE_TOAST_MESSAGE
} from '../actions/ActionTypes'

export default (state = initialState.toasts, action) => {
    switch (action.type) {
        case CREATE_TOAST_MESSAGE:
            return state.concat(action.toast);
        case REMOVE_TOAST_MESSAGE:
            return state.filter(toast => toast.id !== action.id);
        default:
            return state;
    }
}