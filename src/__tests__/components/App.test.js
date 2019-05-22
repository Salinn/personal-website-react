import React from 'react'
import { shallow } from 'enzyme'
import App from '../../components/App'

describe('App Component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {};

        wrapper = shallow(<App {...props} />);
    });

    it('should have the toast container and routes', () => {
        const expected = 1
        const routes = wrapper.find('_default')
        const toastContainers = wrapper.find('ConnectFunction')

        expect(routes.length).toEqual(expected)
        expect(toastContainers.length).toEqual(expected)
    })
})