import { post } from './HttpsRequests'

/* eslint-disable import/prefer-default-export */
const newContactMeMessage = props => {
    const URL = '/contactme'
    return post(URL, props)
}

export {
    newContactMeMessage
}