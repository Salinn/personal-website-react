import initialState from '../store/initialState'
import {
    CONTACT_ME_FIELD_UPDATE,
    CONTACT_ME_FIELD_SUBMITTED
} from '../sagas/ActionTypes'

export default (state = initialState.contactMe, action) => {
    switch (action.type) {
        case CONTACT_ME_FIELD_UPDATE:
            return { ...state, [action.fieldName]: action.value };
        case CONTACT_ME_FIELD_SUBMITTED:
            return { ...state };
        default:
            return state;
    }
}