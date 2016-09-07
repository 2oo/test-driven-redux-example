import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import reduxStore from './store';

import Counter from './containers/Counter';

import './styles/main.less';

export default class App extends Component {

    render() {
        return <Counter/>;
    }

}

render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('app')
);
