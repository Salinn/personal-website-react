import React from 'react'
import { shallow } from 'enzyme'
import TextBox from '../../../components/common/TextBox'

describe('TextBox Component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            id: '1',
            name: 'email',
            type: 'text',
            value: 'hello',
            onChange: jest.fn(),
        };

        wrapper = shallow(<TextBox {...props} />);
    });

    it('should find one label and textarea', () => {
        const expected = 1

        const labels = wrapper.find('label')
        const TextBoxs = wrapper.find('textarea')

        expect(TextBoxs.length).toEqual(expected)
        expect(labels.length).toEqual(expected)
    })

    it('should verify the label and textarea have the correct id', () => {
        const expected = 1

        const labels = wrapper.find('#label-1')
        const TextBoxs = wrapper.find('#textarea-1')

        expect(TextBoxs.length).toEqual(expected)
        expect(labels.length).toEqual(expected)
    })

    it('should verify the name and value are passed back on change', () => {
        const given = { target: { value: 'hello', name: 'message' } }
        const expected = { value: 'hello', name: 'message' }

        wrapper.find('#textarea-1').simulate('change', given)

        expect(props.onChange).toHaveBeenCalledWith(expected);
    })
})