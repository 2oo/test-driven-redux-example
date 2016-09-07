import {combineReducers} from 'redux';
import counter from './counter';

export default function createReducer() {
    return combineReducers({
        counter
    });
}
