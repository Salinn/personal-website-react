import React from 'react'
import { shallow } from 'enzyme'
import Toast from '../../../components/toasts/Toast'

describe('Toast Component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            id: '12',
            message: 'This is a test',
            deleteToast: jest.fn(),
        };

        wrapper = shallow(<Toast {...props} />);
    });

    it('should show the message and button', () => {
        const expected = 1
        const buttons = wrapper.find('button')
        const paragraphs = wrapper.find('p')

        expect(buttons.length).toEqual(expected)
        expect(paragraphs.length).toEqual(expected)
    })

    it('should find the exact text', () => {
        const expected = 'This is a test'
        const paragraphs = wrapper.find('p')

        expect(paragraphs.text()).toEqual(expected)
    })

    it('should call the delete toast on click and pass back the toast id', () => {
        const expected = { id: '12' }

        const event = { preventDefault: jest.fn() }
        wrapper.find('button').first().simulate('click', event)

        expect(props.deleteToast).toHaveBeenCalledWith(expected)
    })
})