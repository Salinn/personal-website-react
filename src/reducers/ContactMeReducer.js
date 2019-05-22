import initialState from '../store/initialState'
import {
    CONTACT_ME_FIELD_UPDATE,
    CONTACT_ME_RESET_FIELDS,
} from '../actions/ActionTypes'

export default (state = initialState.contactMe, action) => {
    switch (action.type) {
        case CONTACT_ME_FIELD_UPDATE:
            return { ...state, [action.fieldName]: action.value };
        case CONTACT_ME_RESET_FIELDS:
            return {
                name: '',
                email: '',
                message: '',
            }
        default:
            return state;
    }
}