import { put, call } from 'redux-saga/effects'
import {
    FETCH_REQUEST_STARTED,
    FETCH_REQUEST_FINISHED,
    INFINITE_REQUEST_STARTED,
    INFINITE_REQUEST_FINISHED
} from './ActionTypes'
import * as apiRoutes from '../api'

function* makeApiRequest(props) {
    const {
        apiRequest,
        apiParams,
        START_REQUEST,
        END_REQUEST
    } = props

    try {
        yield put({ type: START_REQUEST })

        const payload = yield call([apiRoutes, apiRequest], apiParams)

        return { response: payload }
    } catch (error) {
        return { error }
    } finally {
        yield put({ type: END_REQUEST })
    }
}

function* fetchApiRequest(props) {
    const apiRequestInfo = {
        ...props,
        START_REQUEST: FETCH_REQUEST_STARTED,
        END_REQUEST: FETCH_REQUEST_FINISHED
    }

    return yield call(makeApiRequest, apiRequestInfo)
}

function* infiniteScrollRequest(props) {
    const apiRequestInfo = {
        ...props,
        START_REQUEST: INFINITE_REQUEST_STARTED,
        END_REQUEST: INFINITE_REQUEST_FINISHED
    }

    return yield call(makeApiRequest, apiRequestInfo)
}

export {
    fetchApiRequest,
    infiniteScrollRequest,
}