import { post } from './HttpsRequests'

/* eslint-disable import/prefer-default-export */
export const newContactMeMessage = props => {
    const URL = '/contactme'
    return post(URL, props)
}