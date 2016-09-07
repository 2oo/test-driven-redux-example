import expect from 'expect';

import reducer from '../../src/reducers/counter';

import {
    INCREMENT,
    DECREMENT,
    RESET
} from '../../src/constants/actionTypes';

describe('Counter reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual(0);
    });

    it('should handle INCREMENT', () => {
        expect(
            reducer(0, {
                type: INCREMENT
            })
        ).toEqual(1)
    });

    it('should handle DECREMENT', () => {
        expect(
            reducer(0, {
                type: DECREMENT
            })
        ).toEqual(-1)
    });

    it('should handle RESET if value is positive', () => {
        expect(
            reducer(5, {
                type: RESET
            })
        ).toEqual(0)
    });

    it('should not handle RESET if value is negative', () => {
        expect(
            reducer(-15, {
                type: RESET
            })
        ).toEqual(-15)
    });

});
