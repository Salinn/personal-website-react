
import { newContactMeMessage } from '../../api/index'

jest.mock('../../api/index');

describe('Api Endpoints', () => {
    it('should send off the info needed to axios and return the results', async () => {
        newContactMeMessage.mockImplementationOnce(() => Promise.resolve({ data: { message: 'success' } }))
        const given = {
            name: 'Paul',
            email: 'pdarragh45@massmutual.com',
            message: 'Hello World'
        }
        const expected = { data: { message: 'success' } }

        const result = await newContactMeMessage(given)
        expect(result).toEqual(expected)
    })
})