import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import Result from '../components/Result';
import DecrementButton from '../components/DecrementButton';
import IncrementButton from '../components/IncrementButton';
import ResetButton from '../components/ResetButton';

import * as actions from '../actions';

@connect(store => ({
    counterValue: store.counter
}))
export default class Counter extends Component {

    render() {

        const {dispatch, counterValue} = this.props;

        return (
            <div className="counter">
                <Result value={counterValue}/>
                <DecrementButton onClick={() => dispatch(actions.decrement())}/>
                <IncrementButton onClick={() => dispatch(actions.increment())}/>
                <ResetButton onClick={() => dispatch(actions.reset())}/>
            </div>
        );

    }

}
