import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import ResetButton from '../../src/components/ResetButton';

describe('ResetButton component', () => {

    it('renders a div', () => {
        const wrapper = shallow(<ResetButton/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('has button class', () => {
        const wrapper = shallow(<ResetButton/>);
        expect(wrapper.find('.button').length).toEqual(1);
    });

    it('has reset-button class', () => {
        const wrapper = shallow(<ResetButton/>);
        expect(wrapper.find('.reset-button').length).toEqual(1);
    });

    it('renders `Reset`', () => {
        const wrapper = shallow(<ResetButton/>);
        expect(wrapper.text()).toEqual('Reset');
    });

    it('invokes a callback when clicked', () => {
        const onClick = createSpy();
        const wrapper = shallow(<ResetButton onClick={onClick}/>);
        wrapper.find('div').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

});
