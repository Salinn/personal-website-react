import { all } from 'redux-saga/effects'
import {
    watchFieldChanged,
    watchFormSubmission
} from './ContactMe'

export default function* rootSaga() {
    yield all([
        watchFieldChanged(),
        watchFormSubmission()
    ])
}