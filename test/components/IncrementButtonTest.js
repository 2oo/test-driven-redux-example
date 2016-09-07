import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import IncrementButton from '../../src/components/IncrementButton';

describe('IncrementButton component', () => {

    it('renders a div', () => {
        const wrapper = shallow(<IncrementButton/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('has button class', () => {
        const wrapper = shallow(<IncrementButton/>);
        expect(wrapper.find('.button').length).toEqual(1);
    });

    it('has decrement-button class', () => {
        const wrapper = shallow(<IncrementButton/>);
        expect(wrapper.find('.increment-button').length).toEqual(1);
    });

    it('renders a plus character', () => {
        const wrapper = shallow(<IncrementButton/>);
        expect(wrapper.text()).toEqual('+');
    });

    it('invokes a callback when clicked', () => {
        const onClick = createSpy();
        const wrapper = shallow(<IncrementButton onClick={onClick}/>);
        wrapper.find('div').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

});
