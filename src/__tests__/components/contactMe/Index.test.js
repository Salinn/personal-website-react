import React from 'react'
import { shallow, mount } from 'enzyme'
import ContactMe from '../../../components/contactMe'

describe('ContactMe Component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            contactMe: {
                name: '',
                email: '',
                message: '',
            },
            fieldChanged: jest.fn(),
            formSubmission: jest.fn(),
        };

        wrapper = shallow(<ContactMe {...props} />);
    });

    it('should find two input fields, one text area and a button', () => {
        const expectedInputs = 3
        const expected = 1

        const inputs = wrapper.find('Input')
        const buttons = wrapper.find('button')

        expect(inputs.length).toEqual(expectedInputs)
        expect(buttons.length).toEqual(expected)
    })

    it('should submit the form when the submit enter button is pressed', () => {
        const event = { preventDefault: jest.fn() }
        const form = wrapper.find('form').first();
        form.simulate('submit', event);

        expect(props.formSubmission).toHaveBeenCalled()
    })

    it('should submit the form when the submit button is clicked', () => {
        wrapper = mount(<ContactMe {...props} />);

        const event = { preventDefault: jest.fn() }
        const form = wrapper.find('button').first();
        form.simulate('submit', event);

        expect(props.formSubmission).toHaveBeenCalled()
    })
})