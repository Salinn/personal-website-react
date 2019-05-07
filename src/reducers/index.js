// Redux
import { combineReducers } from 'redux';
// Reducers
import contactMe from './ContactMeReducer';
import meta from './MetaReducer'
import toasts from './ToastReducer'

const rootReducer = combineReducers({
    contactMe,
    meta,
    toasts,
});

export default rootReducer;