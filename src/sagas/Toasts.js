import { put, takeEvery, delay } from 'redux-saga/effects'
import _ from 'lodash'
import { NEW_TOAST, CREATE_TOAST_MESSAGE, REMOVE_TOAST_MESSAGE, DELETE_TOAST } from './ActionTypes'

function* createToast(props) {
    const {
        message = 'Please Email Us at help@massmutual.com for help',
        color = 'info',
        delayedTime = 3000
    } = props

    const id = _.uniqueId()

    yield put({ type: CREATE_TOAST_MESSAGE, toast: { id, message, color } })
    yield delay(delayedTime)
    yield put({ type: REMOVE_TOAST_MESSAGE, id })
}

function* removeToast(props) {
    const { id } = props

    yield put({ type: REMOVE_TOAST_MESSAGE, id })
}

function* watchCreateToast() {
    yield takeEvery(NEW_TOAST, createToast)
}

function* watchRemoveToast() {
    yield takeEvery(DELETE_TOAST, removeToast)
}

export {
    watchCreateToast,
    watchRemoveToast
}