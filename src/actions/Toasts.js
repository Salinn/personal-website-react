import _ from 'lodash'
import { CREATE_TOAST_MESSAGE, REMOVE_TOAST_MESSAGE, } from './ActionTypes'

const createToast = props => dispatch => {
    const {
        message = 'Please Email Us at help@massmutual.com for help',
        color = 'info',
        delayedTime = 3000
    } = props

    const id = _.uniqueId()

    dispatch({ type: CREATE_TOAST_MESSAGE, toast: { id, message, color } })
    setTimeout(
        () => dispatch({ type: REMOVE_TOAST_MESSAGE, id }),
        delayedTime
    )
}

const removeToast = (props) => {
    const { id } = props

    return { type: REMOVE_TOAST_MESSAGE, id }
}

export {
    createToast,
    removeToast
}