import * as axios from "axios";
import * as HttpsRequests from '../../api/HttpsRequests'

jest.mock("axios");

describe('HTTP Requests', () => {
    it('should succeed while calling axios get', async () => {
        const given = ['www.somewebsite.com', { name: 'Paul' }]
        const expected = { data: { message: 'success' } }
        axios.get.mockImplementationOnce(() => Promise.resolve({ data: { message: 'success' } }));

        const result = await HttpsRequests.get(...given)
        expect(result).toEqual(expected)
    })

    it('should succeed while calling axios post', async () => {
        const given = ['www.somewebsite.com', { name: 'Paul' }]
        const expected = { data: { message: 'success' } }
        axios.post.mockImplementationOnce(() => Promise.resolve({ data: { message: 'success' } }));

        const result = await HttpsRequests.post(...given)
        expect(result).toEqual(expected)
    })

    it('should succeed while calling axios put', async () => {
        const given = ['www.somewebsite.com', { name: 'Paul' }]
        const expected = { data: { message: 'success' } }
        axios.put.mockImplementationOnce(() => Promise.resolve({ data: { message: 'success' } }));

        const result = await HttpsRequests.put(...given)
        expect(result).toEqual(expected)
    })

    it('should succeed while calling axios post', async () => {
        const given = ['www.somewebsite.com', { name: 'Paul' }]
        const expected = { data: { message: 'success' } }
        axios.delete.mockImplementationOnce(() => Promise.resolve({ data: { message: 'success' } }));

        const result = await HttpsRequests.deleteIt(...given)
        expect(result).toEqual(expected)
    })

    it('should succeed while calling axios post', async () => {
        const given = ['www.somewebsite.com', { name: 'Paul' }]
        const expected = { data: { message: 'success' } }
        axios.mockImplementationOnce(() => Promise.resolve({ data: { message: 'success' } }));

        const result = await HttpsRequests.custom(...given)
        expect(result).toEqual(expected)
    })
})