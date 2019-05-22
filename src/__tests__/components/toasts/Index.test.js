import React from 'react'
import { shallow } from 'enzyme'
import ToastContainer from '../../../components/toasts'

describe('ToastContainer Component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            toasts: [
                { messae: 'Hello World', id: 1 },
                { messae: 'Sorry we had an issue', id: 2 }
            ],
            removeToast: jest.fn(),
        };

        wrapper = shallow(<ToastContainer {...props} />);
    });

    it('should have 2 toast messages', () => {
        const expected = 2
        const toasts = wrapper.find('Toast')

        expect(toasts.length).toEqual(expected)
    })
})