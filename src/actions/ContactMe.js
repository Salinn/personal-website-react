import * as API from '../api'
import {
    CONTACT_ME_FIELD_UPDATE,
    CONTACT_ME_RESET_FIELDS,
    NEW_TOAST
} from './ActionTypes'
import { createToast } from './Toasts'

const fieldChanged = (props) => {
    const { name, value } = props

    return { type: CONTACT_ME_FIELD_UPDATE, fieldName: name, value }
}

const formSubmission = () => async (dispatch, getState) => {
    const {
        contactMe: { name, email, message }
    } = getState()

    try {
        await API.newContactMeMessage({ name, email, message })

        dispatch({ type: CONTACT_ME_RESET_FIELDS })
        dispatch(createToast({ type: NEW_TOAST, message: 'Thanks for reaching out! I will get back to you soon.' }))
    } catch (error) {
        dispatch(createToast({ type: NEW_TOAST, error, message: 'Sorry something went wrong, I will look into it!' }))
    }
}

export {
    formSubmission,
    fieldChanged
}