import { put, call, select, takeEvery } from 'redux-saga/effects'
import { fetchApiRequest } from './Fetch'
import { getContactMeInfo } from '../select'
import {
    CONTACT_ME_FIELD_CHANGED,
    CONTACT_ME_FIELD_SUBMITTED,
    CONTACT_ME_FIELD_UPDATE,
    CONTACT_ME_RESET_FIELDS,
    NEW_TOAST
} from './ActionTypes'

function* sendContactInfo() {
    const { name, email, message } = yield select(getContactMeInfo)
    const apiRequest = "newContactMeMessage"
    const apiParams = { name, email, message }

    return yield call(fetchApiRequest, { apiRequest, apiParams })
}

function* fieldChanged(props) {
    const { name, value } = props

    yield put({ type: CONTACT_ME_FIELD_UPDATE, fieldName: name, value })
}


function* formSubmission() {

    console.log('here 1')
    const { response, error } = yield call(sendContactInfo)

    console.log('here 2', response, error)
    if (response) {
        yield put({ type: CONTACT_ME_RESET_FIELDS })
        yield put({ type: NEW_TOAST, message: 'Thanks for reaching out! I will get back to you soon.' })
    } else {
        yield put({ type: NEW_TOAST, error, message: 'Sorry something went wrong, I will look into it!' })
    }
}

function* watchFieldChanged() {
    yield takeEvery(CONTACT_ME_FIELD_CHANGED, fieldChanged)
}

function* watchFormSubmission() {
    yield takeEvery(CONTACT_ME_FIELD_SUBMITTED, formSubmission)
}

export {
    watchFieldChanged,
    watchFormSubmission
}