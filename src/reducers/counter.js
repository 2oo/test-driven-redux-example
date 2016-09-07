import {createReducer} from 'redux-create-reducer';
import {
    INCREMENT,
    DECREMENT,
    RESET
} from '../constants/actionTypes';

const initialState = 0;

export default createReducer(initialState, {

    [INCREMENT]: state => state + 1,

    [DECREMENT]: state => state - 1,

    [RESET]: state =>
        state >= 0
            ? 0
            : state

});
