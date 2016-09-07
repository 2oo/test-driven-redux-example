import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import DecrementButton from '../../src/components/DecrementButton';

describe('DecrementButton component', () => {

    it('renders a div', () => {
        const wrapper = shallow(<DecrementButton/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('has button class', () => {
        const wrapper = shallow(<DecrementButton/>);
        expect(wrapper.find('.button').length).toEqual(1);
    });

    it('has decrement-button class', () => {
        const wrapper = shallow(<DecrementButton/>);
        expect(wrapper.find('.decrement-button').length).toEqual(1);
    });

    it('renders a minus character', () => {
        const wrapper = shallow(<DecrementButton/>);
        expect(wrapper.text()).toEqual('-');
    });

    it('invokes a callback when clicked', () => {
        const onClick = createSpy();
        const wrapper = shallow(<DecrementButton onClick={onClick}/>);
        wrapper.find('div').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

});
