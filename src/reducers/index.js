// Redux
import { combineReducers } from 'redux';
// Reducers
import contactMe from './ContactMeReducer';

const rootReducer = combineReducers({
    contactMe,
});

export default rootReducer;