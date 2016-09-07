import expect from 'expect';

import * as actions from '../../src/actions';

import {
    INCREMENT,
    DECREMENT,
    RESET
} from '../../src/constants/actionTypes';

describe('Counter action creators', () => {

    describe('increment', () => {

        it('should create an action to increment counter value', () => {
            expect(actions.increment())
                .toEqual({
                    type: INCREMENT
                });
        });

    });

    describe('decrement', () => {

        it('should create an action to decrement counter value', () => {
            expect(actions.decrement())
                .toEqual({
                    type: DECREMENT
                });
        });

    });

    describe('reset', () => {

        it('should create an action to reset counter value', () => {
            expect(actions.reset())
                .toEqual({
                    type: RESET
                });
        });

    });

});
