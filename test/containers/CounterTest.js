import React from 'react';
import expect from 'expect';
import {render} from 'enzyme';
import configureStore from 'redux-mock-store';

import Counter from '../../src/containers/Counter';

const mockStore = configureStore([]);

let store;

const initialState = {
    counter: 0
};

describe('Counter container', () => {

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should render as div with `counter` class', () => {
        const wrapper = render(<Counter store={store}/>);
        expect(wrapper.find('div.counter').length).toEqual(1);
    });

    it('should render Result component', () => {
        const wrapper = render(<Counter store={store}/>);
        expect(wrapper.find('div.result').length).toEqual(1);
    });

    it('should render DecrementButton component', () => {
        const wrapper = render(<Counter store={store}/>);
        expect(wrapper.find('div.decrement-button').length).toEqual(1);
    });

    it('should render IncrementButton component', () => {
        const wrapper = render(<Counter store={store}/>);
        expect(wrapper.find('div.increment-button').length).toEqual(1);
    });

    it('should render ResetButton component', () => {
        const wrapper = render(<Counter store={store}/>);
        expect(wrapper.find('div.reset-button').length).toEqual(1);
    });

});
