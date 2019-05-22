import React from 'react'
import { shallow } from 'enzyme'
import Input from '../../../components/common/Input'

describe('Input Component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            id: '1',
            name: 'email',
            type: 'text',
            value: 'paul.m.darragh@gmail.co',
            onChange: jest.fn(),
        };

        wrapper = shallow(<Input {...props} />);
    });

    it('should find one label and input field', () => {
        const expected = 1

        const labels = wrapper.find('label')
        const inputs = wrapper.find('input')

        expect(inputs.length).toEqual(expected)
        expect(labels.length).toEqual(expected)
    })

    it('should verify the label and input field have the correct id', () => {
        const expected = 1

        const labels = wrapper.find('#label-1')
        const inputs = wrapper.find('#input-1')

        expect(inputs.length).toEqual(expected)
        expect(labels.length).toEqual(expected)
    })

    it('should verify the name and value are passed back on change', () => {
        const given = { target: { value: 'paul.m.darragh@gmail.com', name: 'email' } }
        const expected = { value: 'paul.m.darragh@gmail.com', name: 'email' }

        wrapper.find('#input-1').simulate('change', given)

        expect(props.onChange).toHaveBeenCalledWith(expected);
    })
})