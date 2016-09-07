import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import Result from '../../src/components/Result';

describe('DecrementButton component', () => {

    it('renders a div', () => {
        const wrapper = shallow(<Result value={1}/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders correct value', () => {
        const expectedValue = 20;
        const wrapper = shallow(<Result value={expectedValue}/>);
        expect(wrapper.text()).toEqual(expectedValue);
    });

});
